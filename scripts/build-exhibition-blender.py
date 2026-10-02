"""Editable Blender master; exports local glTF assets and a comparison render.
Coordinates in helpers match the website (Y up, negative Z into the sea).
Run: blender -b --python scripts/build-exhibition-blender.py
"""
import bpy, bmesh, math, os, sys
from mathutils import Vector
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/models/exhibition'
ART = ROOT / 'art/exhibition'
OUT.mkdir(parents=True, exist_ok=True)
ART.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

def v(p): return Vector((p[0], -p[2], p[1]))
def mat(name, color, rough=.35, metal=0, coat=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*color,1); m.use_nodes=True
    bs=m.node_tree.nodes.get('Principled BSDF')
    bs.inputs['Base Color'].default_value=(*color,1)
    bs.inputs['Roughness'].default_value=rough
    bs.inputs['Metallic'].default_value=metal
    bs.inputs['Coat Weight'].default_value=coat
    return m
stone=mat('Warm porcelain limestone',(.89,.85,.78),.3,0,.22)
ivory=mat('Ivory polished lacquer',(.94,.90,.83),.19,0,.8)
gold=mat('Brushed champagne brass',(.56,.40,.19),.28,.72)
wood=mat('Honey spruce soundboard',(.51,.32,.13),.48)
felt=mat('Warm ivory leather',(.78,.70,.59),.78)
leather=mat('Cream upholstered bench',(.92,.85,.73),.56)
lid_inlay=mat('Warm satin lid interior',(.79,.65,.43),.3,.18)
black=mat('Ebony',(.009,.008,.007),.23)
floor=mat('Polished pale marble',(.90,.87,.82),.2,0,.45)
water=mat('Cool silver blue sea',(.40,.57,.65),.18,.32,.7)

def finish(o,name,material,bevel=0):
    o.name=name; o.data.materials.append(material)
    if bevel:
        mod=o.modifiers.new('Soft architectural edges','BEVEL');mod.width=bevel;mod.segments=4
        mod=o.modifiers.new('Weighted corner normals','WEIGHTED_NORMAL')
    return o
def box(name,p,size,material,bevel=.025):
    bpy.ops.mesh.primitive_cube_add(size=1,location=v(p));o=bpy.context.object
    o.scale=(size[0],size[2],size[1]);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    return finish(o,name,material,bevel)
def mesh(name,points,faces,material,bevel=0):
    g=bpy.data.meshes.new(name);g.from_pydata([v(p) for p in points],[],faces);g.update()
    bm=bmesh.new();bm.from_mesh(g);bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(g);bm.free()
    o=bpy.data.objects.new(name,g);bpy.context.collection.objects.link(o)
    return finish(o,name,material,bevel)
def rod(name,a,b,r,material,vertices=16,r2=None):
    a,b=v(a),v(b);d=b-a
    bpy.ops.mesh.primitive_cone_add(vertices=vertices,radius1=r,radius2=r if r2 is None else r2,depth=d.length,location=(a+b)/2)
    o=bpy.context.object;o.rotation_euler=d.to_track_quat('Z','Y').to_euler()
    finish(o,name,material,.007)
    for p in o.data.polygons:p.use_smooth=True
    return o
def tube(name,points,r,material):
    c=bpy.data.curves.new(name,'CURVE');c.dimensions='3D';c.resolution_u=2;c.bevel_depth=r;c.bevel_resolution=3
    s=c.splines.new('POLY');s.points.add(len(points)-1)
    for p,q in zip(s.points,points):p.co=(*v(q),1)
    o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);o.data.materials.append(material);return o
def collection(name):
    c=bpy.data.collections.new(name);bpy.context.scene.collection.children.link(c)
    bpy.context.view_layer.active_layer_collection=bpy.context.view_layer.layer_collection.children[name]
    return c
def disk(name,p,r,h,material):return rod(name,(p[0],p[1]-h/2,p[2]),(p[0],p[1]+h/2,p[2]),r,material,128)

# A deep elliptical arch with a genuinely rounded cross-section.
arch=collection('Architecture_Arch')
rx,ry,outerx,outery=17.4,11.85,20.52,14.514
n=192;points=[]
for z in [-8.7,-10.8]:
    for a in [i*math.pi/n for i in range(n+1)]:
        points.extend([(outerx*math.cos(a),-1.2+outery*math.sin(a),z),(rx*math.cos(a),-1.2+ry*math.sin(a),z)])
stride=2*(n+1);faces=[]
for i in range(n):
    j=i*2;k=j+2
    faces += [(j,k,k+1,j+1),(j+stride,j+1+stride,k+1+stride,k+stride),
              (j,j+stride,k+stride,k),(j+1,k+1,k+1+stride,j+1+stride)]
faces += [(0,1,1+stride,stride),(2*n,2*n+stride,2*n+1+stride,2*n+1)]
o=mesh('Grand continuous arch',points,faces,stone,.24)
for p in o.data.polygons:p.use_smooth=True
for side in [-1,1]:
    box('Arch foot', (side*18.95,-1.55,-9.75),(3.15,.4,2.6),stone,.1)

# Connected, gently curved stair, with wedge treads and continuous stringers.
stair=collection('Architecture_Stair')
def curve(t):
    p=[(12.0,-1.337,-4.8),(12.8,0,-8.3),(7.0,0,-10.8),(4.8,6.2,-12.05)]
    u=1-t
    return Vector((u**3*p[0][0]+3*u*u*t*p[1][0]+3*u*t*t*p[2][0]+t**3*p[3][0],-1.337+7.537*t,
                   u**3*p[0][2]+3*u*u*t*p[1][2]+3*u*t*t*p[2][2]+t**3*p[3][2]))
def edge(t,side):
    p=curve(t);d=curve(min(1,t+.0005))-curve(max(0,t-.0005));d=Vector((-d.z,0,d.x)).normalized()
    return p+d*side*(1.48-.28*t)
count=38
for i in range(count):
    a,b=i/count,(i+1)/count;corners=[edge(a,-1),edge(b,-1),edge(b,1),edge(a,1)]
    top=-1.337+7.537*b
    q=[(p.x,top-.21,p.z) for p in corners]+[(p.x,top,p.z) for p in corners]
    mesh('Tread %02d'%i,q,[(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)],stone,.025)
q=[];faces=[]
for i in range(161):
    t=i/160
    for side,drop in [(-1,0),(1,0),(-1,.28),(1,.28)]:
        p=edge(t,side);q.append((p.x,p.y-drop,p.z))
    if i<160:
        a=i*4;b=a+4;faces += [(a,b,b+1,a+1),(a+2,a+3,b+3,b+2),(a,a+2,b+2,b),(a+1,b+1,b+3,a+3)]
mesh('Continuous curved stair soffit',q,faces,stone,.02)
for side in [-1,1]:
    rail=[]
    for i in range(177):
        p=edge(i/176,side);rail.append((p.x,p.y+1.05,p.z))
    tube('Sweeping brass handrail',rail,.03,gold)
    for i in range(count+1):
        t=i/count;p=edge(t,side);rod('Slender baluster',p,(p.x,p.y+1.05,p.z),.014,gold,10)
# One landing, with an open stair mouth and a beam bearing into the arch.
# A rounded balcony cap continues into a short gallery, not a long crossbar.
left,right=edge(1,-1),edge(1,1)
# The landing mouth is built from the actual final tread, so both corners and
# both handrails meet exactly even when the flight direction changes.
cap=[]
for i in range(49):
    t=i/48;u=1-t
    x=u**3*left.x+3*u*u*t*2.35+3*u*t*t*1.8+t**3*3.6
    z=u**3*left.z+3*u*u*t*(-10.9)+3*u*t*t*(-14.2)+t**3*(-14.85)
    cap.append((x,7.25,z))
balcony=[(right.x,right.z)]+[(x,z) for x,y,z in cap]+[(9.8,-14.85),(9.8,-12.75)]
bn=len(balcony);bp=[(x,y,z) for y in [5.84,6.2] for x,z in balcony]
bf=[tuple(reversed(range(bn))),tuple(range(bn,2*bn))]+[(i,(i+1)%bn,(i+1)%bn+bn,i+bn) for i in range(bn)]
mesh('Single rounded balcony',bp,bf,stone,.045)
join=9.4
# Keep the landing open: the terrace beyond provides the visual support,
# while an extra pier and overhead bearing crowded every approach angle.
for z in [-14.85]:
    tube('Landing back handrail',[(3.6,7.25,z),(join+.4,7.25,z)],.03,gold)
    for i in range(16):
        x=3.6+(join+.4-3.6)*i/15;rod('Landing baluster',(x,6.2,z),(x,7.25,z),.014,gold,10)
for i,(x,y,z) in enumerate(cap):
    if i%3==0:rod('Rounded balcony baluster',(x,6.2,z),(x,7.25,z),.014,gold,10)
tube('Rounded balcony handrail',cap,.03,gold)
front=[(right.x,7.25,right.z),(9.8,7.25,-12.75)]
tube('Continuous landing return',front,.03,gold)
for a,b in zip(front,front[1:]):
    length=(Vector(b)-Vector(a)).length
    for i in range(1,math.ceil(length/.48)+1):
        p=Vector(a).lerp(Vector(b),i/math.ceil(length/.48));rod('Landing return baluster',(p.x,6.2,p.z),p,.014,gold,10)

# Piano: hollow curved rim, separate soundboard, cast frame, open lid, lyre and bench.
piano=collection('Piano_Shell')
def bez(a,b,c,d,n=24):return [tuple((1-t)**3*a[j]+3*(1-t)**2*t*b[j]+3*(1-t)*t*t*c[j]+t**3*d[j] for j in range(2)) for t in [i/n for i in range(n)]]
outline=[(-1.77,.59),(1.77,.59),(1.62,1.3)]
outline+=bez((1.62,1.3),(1.60,2.3),(.43,2.25),(.64,3.35))
outline+=bez((.64,3.35),(.82,4.24),(-.32,4.7),(-1.23,4.3))
outline+=bez((-1.23,4.3),(-1.78,4.08),(-1.77,3.62),(-1.77,3.1))
def plate(name,xy,y0,h,material):
    n=len(xy);ps=[(x,y0,-z) for x,z in xy]+[(x,y0+h,-z) for x,z in xy]
    fs=[tuple(reversed(range(n))),tuple(range(n,2*n))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
    return mesh(name,ps,fs,material,.018)
plate('Underside',outline,-.34,.12,ivory)
inside=[(x*.947,z*.947+.06) for x,z in outline]
plate('Spruce soundboard',inside,-.07,.035,wood)
rim=[];n=len(outline)
for xy,height in [(outline,-.28),(outline,.22),(inside,-.28),(inside,.22)]:rim += [(x,height,-z) for x,z in xy]
fs=[]
for i in range(n):
    j=(i+1)%n;fs += [(i,j,n+j,n+i),(n+i,n+j,3*n+j,3*n+i),(2*n+i,3*n+i,3*n+j,2*n+j)]
o=mesh('Sculpted hollow piano rim',rim,fs,ivory,.025)
for p in o.data.polygons:p.use_smooth=True
for i in range(62):
    x=-1.5+i*.048;length=2.65-max(0,x+.8)*.74
    rod('Piano wire',(x,.012,-.98),(x+.09,.012,-.98-length),.0025,gold,6)
for i,x in enumerate([-1.28,-.62,.04]):rod('Cast frame strut',(x,.045,-.95),(x+.05,.045,-3.45+i*.38),.025,gold)
tube('Fine rim moulding',[(x,.205,-z) for x,z in outline]+[(outline[0][0],.205,-outline[0][1])],.012,gold)
lid=plate('Open ivory lid',outline,0,.075,ivory)
inlay=plate('Recessed lid lining',[(x*.94,z*.96+.06) for x,z in outline],-.012,.01,lid_inlay)
angle=.45
for part in [lid,inlay]:
    for vert in part.data.vertices:
        p=vert.co;x=p.x+1.77;y=p.z
        p.x=-1.77+x*math.cos(angle)-y*math.sin(angle);p.z=.25+x*math.sin(angle)+y*math.cos(angle)
prop_end=(-1.77+3.05*math.cos(angle),.25+3.05*math.sin(angle),-1.9)
rod('Lid prop',(.99,.22,-1.9),prop_end,.032,lid_inlay)
box('Lid prop socket',(.99,.22,-1.9),(.14,.05,.14),gold,.016)
for x,z in [(-1.48,.18),(1.48,.18),(-1.05,-3.55)]:
    box('Leg shoulder',(x,-.31,z),(.27,.16,.27),ivory,.04)
    rod('Tapered piano leg',(x,-1.32,z),(x,-.36,z),.078,ivory,12,.125)
    rod('Leg carved collar',(x,-.52,z),(x,-.38,z),.13,ivory,16,.145)
    rod('Brass leg shoe',(x,-1.39,z),(x,-1.28,z),.075,gold)
    rod('Caster',(x-.047,-1.40,z),(x+.047,-1.40,z),.09,gold)
box('Pedal mount',(0,-.35,-.34),(.58,.12,.26),ivory,.035)
for side in [-1,1]:
    tube('Curved lyre support',[(side*.16,-.4,-.34),(side*.14,-.65,-.29),(side*.22,-1.12,-.23)],.035,gold)
    rod('Lyre rear brace',(side*.20,-1.12,-.23),(side*.36,-.38,-.8),.018,gold)
box('Pedal lyre foot',(0,-1.15,-.21),(.60,.14,.28),ivory,.04)
for x in [-.17,0,.17]:
    rod('Pedal linkage',(x,-1.13,-.22),(x,-.43,-.31),.013,gold,8)
    box('Rounded brass pedal',(x,-1.25,.00),(.10,.045,.30),gold,.022)
# The interactive keys sit on this single apron, shared with the sculpted rim.
# Its rear edge overlaps the case and its shorter front edge avoids a stepped
# overhang at the right cheek.
box('Integrated keyboard apron',(0,-.005,-.03),(3.54,.27,1.36),ivory,.075)
box('Keyboard fallboard',(0,.17,-.66),(3.38,.11,.08),ivory,.025)
box('Bench cushion',(-.7,-.84,1.25),(1.32,.23,.70),leather,.095)
for x in [-1.08,-.7,-.32]:
    box('Upholstery seam',(x,-.722,1.25),(.008,.004,.50),felt,.001)
box('Bench frame',(-.7,-.99,1.25),(1.22,.09,.59),ivory,.035)
for x in [-1.20,-.20]:
    for z in [1.01,1.39]:
        rod('Bench leg',(x,-1.43,z),(x,-1.01,z),.034,ivory,12,.049)
        rod('Bench shoe',(x,-1.49,z),(x,-1.40,z),.038,gold)

# Export the authored meshes in website coordinates, before preview transforms.
export_only='--export-only' in sys.argv
for coll,filename in [(arch,'arch'),(stair,'stair'),(piano,'piano-shell')]:
    if export_only and filename=='arch':continue
    bpy.ops.object.select_all(action='DESELECT')
    for o in coll.objects:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(OUT/(filename+'.glb')),use_selection=True,export_format='GLB',export_apply=True)
if export_only:raise SystemExit(0)

# Preview keyboard is not exported: the website retains its interactive 88 keys.
preview=collection('Preview_Keyboard')
box('Keyboard case',(0,0,0),(3.52,.2,1.05),ivory,.035)
for i in range(52):box('Ivory key',((i-25.5)*.0646,.14,0),(.063,.08,.86),ivory,.006)
for i in range(51):
    if i%7 in [0,2,3,5,6]:box('Ebony key',((i-25)*.0646,.20,-.24),(.038,.1,.48),black,.004)
for coll in [piano,preview]:
    parent=bpy.data.objects.new(coll.name+'_Placement',None);bpy.context.scene.collection.objects.link(parent)
    for o in list(coll.objects):o.parent=parent
    parent.location=v((3.5,.272,.0));parent.rotation_euler.z=-.48;parent.scale=(1.08,)*3

terrace=collection('Preview_Terrace')
disk('Piano raised marble dais',(2.7,-1.577,-.7),5.7,.48,floor)
disk('Dais lower foot',(2.7,-1.94,-.7),5.6,.25,stone)
disk('Stair lower landing',(12.0,-1.462,-4.8),1.8,.25,floor)
box('Rear supporting terrace',(9.1,-1.49,-12.2),(9,.3,5),floor,.07)
# Smooth crescent paving encloses a water channel.
ps=[];fs=[]
for i in range(161):
    a=.38*math.pi+i/160*1.06*math.pi
    for r,h in [(8.1,-1.88),(9.65,-1.88),(8.1,-2.05),(9.65,-2.05)]:ps.append((2+r*math.cos(a),h,-1-r*math.sin(a)))
    if i<160:
        j=4*i;fs += [(j,j+4,j+5,j+1),(j+2,j+3,j+7,j+6),(j,j+2,j+6,j+4),(j+1,j+5,j+7,j+3)]
mesh('Curved waterside paving',ps,fs,floor,.04)
box('Ocean',(0,-2.2,-50),(500,.1,500),water,0)
# Fine-scale surface ripples, not large displacement.
nt=water.node_tree;bs=nt.nodes.get('Principled BSDF');noise=nt.nodes.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=2.2;noise.inputs['Detail'].default_value=3
bump=nt.nodes.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.18;bump.inputs['Distance'].default_value=.045
nt.links.new(noise.outputs['Fac'],bump.inputs['Height']);nt.links.new(bump.outputs['Normal'],bs.inputs['Normal'])

scene=bpy.context.scene
world=bpy.data.worlds.new('Blue sky and warm horizon');scene.world=world;world.use_nodes=True
nt=world.node_tree;nt.nodes.clear();out=nt.nodes.new('ShaderNodeOutputWorld');bg=nt.nodes.new('ShaderNodeBackground');bg.inputs['Strength'].default_value=.55
tex=nt.nodes.new('ShaderNodeTexCoord');sep=nt.nodes.new('ShaderNodeSeparateXYZ');nt.links.new(tex.outputs['Normal'],sep.inputs[0])
ramp=nt.nodes.new('ShaderNodeValToRGB');ramp.color_ramp.elements[0].position=0;ramp.color_ramp.elements[0].color=(.86,.74,.64,1)
ramp.color_ramp.elements[1].position=.55;ramp.color_ramp.elements[1].color=(.32,.53,.72,1);nt.links.new(sep.outputs['Z'],ramp.inputs[0])
invert=nt.nodes.new('ShaderNodeMath');invert.operation='MULTIPLY';invert.inputs[1].default_value=-1
nt.links.new(sep.outputs['Z'],invert.inputs[0]);nt.links.new(invert.outputs[0],ramp.inputs[0])
noise=nt.nodes.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=6;noise.inputs['Detail'].default_value=5;noise.inputs['Roughness'].default_value=.65
nt.links.new(tex.outputs['Normal'],noise.inputs['Vector'])
cloud=nt.nodes.new('ShaderNodeValToRGB');cloud.color_ramp.elements[0].position=.51;cloud.color_ramp.elements[1].position=.72
nt.links.new(noise.outputs['Fac'],cloud.inputs[0])
mix=nt.nodes.new('ShaderNodeMixRGB');mix.inputs[2].default_value=(.91,.87,.8,1)
nt.links.new(cloud.outputs['Color'],mix.inputs[0]);nt.links.new(ramp.outputs['Color'],mix.inputs[1])
nt.links.new(mix.outputs[0],bg.inputs['Color']);nt.links.new(bg.outputs[0],out.inputs[0])
# A sky dome makes the visible horizon independent of world-normal conventions.
bpy.ops.mesh.primitive_uv_sphere_add(segments=64,ring_count=32,radius=350)
dome=bpy.context.object;dome.name='Cloud sky dome'
sky=bpy.data.materials.new('Visible blue sky');sky.use_nodes=True;sn=sky.node_tree;sn.nodes.clear()
output=sn.nodes.new('ShaderNodeOutputMaterial');emit=sn.nodes.new('ShaderNodeEmission');emit.inputs['Strength'].default_value=.8
geo=sn.nodes.new('ShaderNodeNewGeometry');separate=sn.nodes.new('ShaderNodeSeparateXYZ');sn.links.new(geo.outputs['Position'],separate.inputs[0])
mapping=sn.nodes.new('ShaderNodeMapRange');mapping.inputs['From Min'].default_value=0;mapping.inputs['From Max'].default_value=70;sn.links.new(separate.outputs['Z'],mapping.inputs[0])
gradient=sn.nodes.new('ShaderNodeValToRGB');gradient.color_ramp.elements[0].color=(.86,.75,.66,1);gradient.color_ramp.elements[1].color=(.32,.58,.83,1);sn.links.new(mapping.outputs[0],gradient.inputs[0])
sn.links.new(gradient.outputs[0],emit.inputs[0]);sn.links.new(emit.outputs[0],output.inputs['Surface']);dome.data.materials.append(sky)
dome.visible_shadow=False;dome.visible_diffuse=False;dome.visible_glossy=False
def area(name,pos,energy,color,size,target):
    bpy.ops.object.light_add(type='AREA',location=v(pos));o=bpy.context.object;o.name=name;o.data.energy=energy;o.data.color=color;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(v(target)-o.location).to_track_quat('-Z','Y').to_euler()
area('Warm broad sunlight',(-16,18,5),4200,(1,.83,.65),9,(0,0,-5))
area('Cool sky fill',(7,14,-9),1800,(.72,.85,1),12,(0,0,-3))
bpy.ops.object.light_add(type='SUN',location=(0,0,20));sun=bpy.context.object;sun.data.energy=2;sun.data.angle=.12;sun.data.color=(1,.87,.72);sun.rotation_euler=(.45,-.5,-.6)
bpy.ops.object.camera_add(location=v((0,1.3,20.5)));cam=bpy.context.object
cam.rotation_euler=(v((0,3.5,-3))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.sensor_fit='VERTICAL';cam.data.sensor_height=24;cam.data.lens=24/(2*math.tan(math.radians(31)/2));cam.data.clip_end=1000;scene.camera=cam
scene.render.engine='CYCLES';scene.cycles.samples=24;scene.cycles.use_denoising=True
scene.render.resolution_x=1456;scene.render.resolution_y=691;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX';scene.view_settings.exposure=.3
scene.render.image_settings.file_format='PNG';scene.render.filepath=str(ART/'homepage-blender.png')
bpy.ops.wm.save_as_mainfile(filepath=str(ART/'homepage-master.blend'))
bpy.ops.render.render(write_still=True)
print('EXHIBITION_EXPORT_COMPLETE',OUT)
