(()=>{var rd=document.querySelector("#hero > .reveal");rd&&(rd.className="reveal sac-hero",rd.innerHTML=`
    <div class="sac-hero__left">
      <header class="sac-hero__heading">
        <div class="sac-hero__eyebrow"><i></i><span>PERSONAL PORTFOLIO \xB7 2026</span></div>
        <h1>ZhengYifan</h1>
      </header>

      <div class="sac-hero__profile">
        <figure class="sac-portrait">
          <div class="sac-portrait__frame">
            <img src="image/\u5934\u50CF.jpg" alt="ZhengYifan" class="no-lightbox" />
            <div class="sac-portrait__tone" aria-hidden="true"></div>
          </div>
          <figcaption><span>PROFILE</span><small>ZHENGYIFAN</small></figcaption>
        </figure>

        <div class="sac-hero__story">
          <p>\u59CB\u7EC8\u4FDD\u6301\u5BF9\u65B0\u6280\u672F\u7684\u597D\u5947\uFF0C\u517C\u5177\u6267\u884C\u529B\u3001\u521B\u9020\u529B\u4E0E\u5546\u4E1A\u843D\u5730\u601D\u7EF4\uFF0C\u671F\u5F85\u4E0E\u5FD7\u540C\u9053\u5408\u7684\u4F19\u4F34\u4EA4\u6D41\u5408\u4F5C\u3001\u5171\u540C\u6210\u957F\u3002</p>
          <dl>
            <div><dt>\u5E74\u9F84</dt><dd>20 \u5C81</dd></div>
            <div><dt>\u57CE\u5E02</dt><dd>\u6DF1\u5733</dd></div>
            <div><dt>\u4E13\u4E1A</dt><dd>\u79FB\u52A8\u4E92\u8054\u7F51\u5E94\u7528\u6280\u672F</dd></div>
          </dl>
        </div>
      </div>
    </div>

    <div class="sac-hero__orbit-side" aria-hidden="true">
      <span>INTERACTIVE ORBIT / 360\xB0</span>
    </div>
  `);var nf=[["hero","01","\u9996\u9875"],["projects","02","\u4F5C\u54C1"],["experience","03","\u5B9E\u8DF5"],["content","04","\u5185\u5BB9"],["contact","05","\u8054\u7CFB"]],Zt=document.createElement("nav");Zt.className="planet-nav planet-nav--home";Zt.dataset.active="hero";Zt.setAttribute("aria-label","\u661F\u7403\u8F68\u9053\u5BFC\u822A");Zt.innerHTML=`
  <div class="planet-nav__halo" aria-hidden="true"></div>
  <div class="planet-nav__orbit planet-nav__orbit--a" aria-hidden="true"></div>
  <div class="planet-nav__orbit planet-nav__orbit--b" aria-hidden="true"></div>
  <button class="planet-nav__trigger" type="button" aria-label="\u5C55\u5F00\u661F\u7403\u5BFC\u822A" aria-expanded="true"><span>EXPLORE</span></button>
  ${nf.map(([r,e,t])=>`<a class="planet-nav__link" href="#${r}" data-section="${r}"><i></i><span>${e}</span><strong>${t}</strong></a>`).join("")}
`;document.body.appendChild(Zt);var ad=[...Zt.querySelectorAll(".planet-nav__link")],sd=Zt.querySelector(".planet-nav__trigger"),Tn="hero",Qn=!1,ka=r=>{Zt.classList.toggle("is-expanded",r),document.body.classList.toggle("planet-nav-hover",r&&Tn!=="hero"),sd.setAttribute("aria-expanded",String(r||Tn==="hero"))},od=r=>{let e=r||"hero",t=Tn!==e;Tn=e,Zt.dataset.active=Tn,document.body.dataset.planetSection=Tn,ad.forEach(n=>n.classList.toggle("active",n.dataset.section===Tn));let i=Tn==="hero";Zt.classList.toggle("planet-nav--home",i),Zt.classList.toggle("planet-nav--collapsed",!i),document.body.classList.toggle("planet-view-home",i),t&&window.dispatchEvent(new CustomEvent("planet:section",{detail:{section:Tn}})),i?(Qn=!1,ka(!1)):!Zt.matches(":hover")&&!Qn&&ka(!1)};ad.forEach(r=>r.addEventListener("click",e=>{e.preventDefault();let t=document.getElementById(r.dataset.section);if(!t)return;Zt.classList.remove("is-jumping"),Zt.offsetWidth,Zt.classList.add("is-jumping");let i=ad.indexOf(r);window.dispatchEvent(new CustomEvent("planet:navigate",{detail:{section:r.dataset.section,direction:i%2===0?1:-1}})),setTimeout(()=>t.scrollIntoView({behavior:"smooth",block:"start"}),110),Qn=!1,setTimeout(()=>Zt.classList.remove("is-jumping"),1250)}));var V_=new IntersectionObserver(r=>{let e=r.filter(t=>t.isIntersecting).sort((t,i)=>i.intersectionRatio-t.intersectionRatio)[0];e&&od(e.target.id)},{rootMargin:"-18% 0px -56% 0px",threshold:[.08,.25,.5]});nf.forEach(([r])=>{let e=document.getElementById(r);e&&V_.observe(e)});var G_=()=>{let r=document.getElementById("hero");if(!r)return;let e=r.getBoundingClientRect();e.top<innerHeight*.28&&e.bottom>innerHeight*.42&&od("hero")},cd=()=>{Tn!=="hero"&&ka(!0)};Zt.addEventListener("mouseenter",cd);sd.addEventListener("pointerenter",cd);Zt.addEventListener("focusin",cd);Zt.addEventListener("mouseleave",()=>{Qn||ka(!1)});sd.addEventListener("click",()=>{Tn!=="hero"&&(Qn=!Qn,ka(Qn))});document.addEventListener("click",r=>{Qn&&!Zt.contains(r.target)&&(Qn=!1,ka(!1))});document.addEventListener("scroll",G_,{passive:!0});od("hero");var Pf=0,Xd=1,If=2;var vo=1,Lf=2,ds=3,sr=0,Fi=1,_n=2,Hn=0,oa=1,da=2,qd=3,Yd=4,Df=5;var Dr=100,Nf=101,Ff=102,Uf=103,Of=104,kf=200,Bf=201,zf=202,Vf=203,Dc=204,Nc=205,Gf=206,Hf=207,Wf=208,Xf=209,qf=210,Yf=211,jf=212,Zf=213,Jf=214,Fc=0,Uc=1,Oc=2,ca=3,kc=4,Bc=5,zc=6,Vc=7,jd=0,$f=1,Kf=2,Pn=0,Zd=1,Jd=2,$d=3,yo=4,Kd=5,Qd=6,eu=7;var tu=300,kr=301,ua=302,Ml=303,Sl=304,bo=306,Gc=1e3,Bn=1001,Hc=1002,ci=1003,Qf=1004;var Mo=1005;var pi=1006,wl=1007;var Br=1008;var Xi=1009,iu=1010,nu=1011,us=1012,Tl=1013,In=1014,Ln=1015,Wn=1016,El=1017,Al=1018,ps=1020,ru=35902,au=35899,su=1021,ou=1022,xn=1023,zn=1026,zr=1027,cu=1028,Cl=1029,Vr=1030,Rl=1031;var Pl=1033,So=33776,wo=33777,To=33778,Eo=33779,Il=35840,Ll=35841,Dl=35842,Nl=35843,Fl=36196,Ul=37492,Ol=37496,kl=37488,Bl=37489,Ao=37490,zl=37491,Vl=37808,Gl=37809,Hl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,jl=37815,Zl=37816,Jl=37817,$l=37818,Kl=37819,Ql=37820,eh=37821,th=36492,ih=36494,nh=36495,rh=36283,ah=36284,Co=36285,sh=36286;var Ys=2300,Wc=2301,Lc=2302,Nd=2303,Fd=2400,Ud=2401,Od=2402;var em=3200;var oh=0,tm=1,dr="",Ni="srgb",js="srgb-linear",Zs="linear",ft="srgb";var aa=7680;var kd=519,im=512,nm=513,rm=514,ch=515,am=516,sm=517,lh=518,om=519,Bd=35044;var lu="300 es",Rn=2e3,Qa=2001;function H_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function W_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cm(){let r=Js("canvas");return r.style.display="block",r}var rf={},es=null;function hu(...r){let e="THREE."+r.shift();es?es("log",e,...r):console.log(e,...r)}function lm(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function We(...r){r=lm(r);let e="THREE."+r.shift();if(es)es("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ye(...r){r=lm(r);let e="THREE."+r.shift();if(es)es("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function sa(...r){let e=r.join(" ");e in rf||(rf[e]=!0,We(...r))}function hm(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var dm={[Fc]:Uc,[Oc]:zc,[kc]:Vc,[ca]:Bc,[Uc]:Fc,[zc]:Oc,[Vc]:kc,[Bc]:ca},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let a=0,s=n.length;a<s;a++)n[a].call(this,e);e.target=null}}},yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=1234567,Hs=Math.PI/180,ts=180/Math.PI;function fs(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yi[r&255]+yi[r>>8&255]+yi[r>>16&255]+yi[r>>24&255]+"-"+yi[e&255]+yi[e>>8&255]+"-"+yi[e>>16&15|64]+yi[e>>24&255]+"-"+yi[t&63|128]+yi[t>>8&255]+"-"+yi[t>>16&255]+yi[t>>24&255]+yi[i&255]+yi[i>>8&255]+yi[i>>16&255]+yi[i>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function du(r,e){return(r%e+e)%e}function X_(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function q_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ws(r,e,t){return(1-t)*r+t*e}function Y_(r,e,t,i){return Ws(r,e,1-Math.exp(-t*i))}function j_(r,e=1){return e-Math.abs(du(r,e*2)-e)}function Z_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function J_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function $_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function K_(r,e){return r+Math.random()*(e-r)}function Q_(r){return r*(.5-Math.random())}function e0(r){r!==void 0&&(af=r);let e=af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t0(r){return r*Hs}function i0(r){return r*ts}function n0(r){return(r&r-1)===0&&r!==0}function r0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function a0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function s0(r,e,t,i,n){let a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+i)/2),h=s((e+i)/2),p=a((e-i)/2),d=s((e-i)/2),u=a((i-e)/2),m=s((i-e)/2);switch(n){case"XYX":r.set(o*h,c*p,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*p,o*l);break;case"ZXZ":r.set(c*p,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*u,o*l);break;case"YXY":r.set(c*u,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*u,o*h,o*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function $a(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var uu={DEG2RAD:Hs,RAD2DEG:ts,generateUUID:fs,clamp:it,euclideanModulo:du,mapLinear:X_,inverseLerp:q_,lerp:Ws,damp:Y_,pingpong:j_,smoothstep:Z_,smootherstep:J_,randInt:$_,randFloat:K_,randFloatSpread:Q_,seededRandom:e0,degToRad:t0,radToDeg:i0,isPowerOfTwo:n0,ceilPowerOfTwo:r0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:s0,normalize:Di,denormalize:$a},xu=class xu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xu.prototype.isVector2=!0;var Ie=xu,Gn=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let c=i[n+0],l=i[n+1],h=i[n+2],p=i[n+3],d=a[s+0],u=a[s+1],m=a[s+2],_=a[s+3];if(p!==_||c!==d||l!==u||h!==m){let f=c*d+l*u+h*m+p*_;f<0&&(d=-d,u=-u,m=-m,_=-_,f=-f);let g=1-o;if(f<.9995){let b=Math.acos(f),M=Math.sin(b);g=Math.sin(g*b)/M,o=Math.sin(o*b)/M,c=c*g+d*o,l=l*g+u*o,h=h*g+m*o,p=p*g+_*o}else{c=c*g+d*o,l=l*g+u*o,h=h*g+m*o,p=p*g+_*o;let b=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=b,l*=b,h*=b,p*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,n,a,s){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],p=a[s],d=a[s+1],u=a[s+2],m=a[s+3];return e[t]=o*m+h*p+c*u-l*d,e[t+1]=c*m+h*d+l*p-o*u,e[t+2]=l*m+h*u+o*d-c*p,e[t+3]=h*m-o*p-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),p=o(a/2),d=c(i/2),u=c(n/2),m=c(a/2);switch(s){case"XYZ":this._x=d*h*p+l*u*m,this._y=l*u*p-d*h*m,this._z=l*h*m+d*u*p,this._w=l*h*p-d*u*m;break;case"YXZ":this._x=d*h*p+l*u*m,this._y=l*u*p-d*h*m,this._z=l*h*m-d*u*p,this._w=l*h*p+d*u*m;break;case"ZXY":this._x=d*h*p-l*u*m,this._y=l*u*p+d*h*m,this._z=l*h*m+d*u*p,this._w=l*h*p-d*u*m;break;case"ZYX":this._x=d*h*p-l*u*m,this._y=l*u*p+d*h*m,this._z=l*h*m-d*u*p,this._w=l*h*p+d*u*m;break;case"YZX":this._x=d*h*p+l*u*m,this._y=l*u*p+d*h*m,this._z=l*h*m-d*u*p,this._w=l*h*p-d*u*m;break;case"XZY":this._x=d*h*p-l*u*m,this._y=l*u*p-d*h*m,this._z=l*h*m+d*u*p,this._w=l*h*p+d*u*m;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=i+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(a-l)*u,this._z=(s-n)*u}else if(i>o&&i>p){let u=2*Math.sqrt(1+i-o-p);this._w=(h-c)/u,this._x=.25*u,this._y=(n+s)/u,this._z=(a+l)/u}else if(o>p){let u=2*Math.sqrt(1+o-i-p);this._w=(a-l)/u,this._x=(n+s)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-i-o);this._w=(s-n)/u,this._x=(a+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+s*o+n*l-a*c,this._y=n*h+s*c+a*o-i*l,this._z=a*h+s*l+i*c-n*o,this._w=s*h-i*o-n*c-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vu=class vu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*n-o*i),h=2*(o*t-a*n),p=2*(a*i-s*t);return this.x=t+c*l+s*p-o*h,this.y=i+c*h+o*l-a*p,this.z=n+c*p+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-a*o,this.y=a*s-i*c,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vu.prototype.isVector3=!0;var F=vu,ld=new F,sf=new Gn,yu=class yu{constructor(e,t,i,n,a,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,c,l)}set(e,t,i,n,a,s,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],h=i[4],p=i[7],d=i[2],u=i[5],m=i[8],_=n[0],f=n[3],g=n[6],b=n[1],M=n[4],v=n[7],S=n[2],w=n[5],E=n[8];return a[0]=s*_+o*b+c*S,a[3]=s*f+o*M+c*w,a[6]=s*g+o*v+c*E,a[1]=l*_+h*b+p*S,a[4]=l*f+h*M+p*w,a[7]=l*g+h*v+p*E,a[2]=d*_+u*b+m*S,a[5]=d*f+u*M+m*w,a[8]=d*g+u*v+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-i*a*h+i*o*c+n*a*l-n*s*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*s-o*l,d=o*c-h*a,u=l*a-s*c,m=t*p+i*d+n*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=p*_,e[1]=(n*l-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=d*_,e[4]=(h*t-n*c)*_,e[5]=(n*a-o*t)*_,e[6]=u*_,e[7]=(i*c-l*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){let c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-n*l,n*c,-n*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return sa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,t)),this}rotate(e){return sa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return sa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yu.prototype.isMatrix3=!0;var Je=yu,hd=new Je,of=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o0(){let r={enabled:!0,workingColorSpace:js,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===ft&&(n.r=ar(n.r),n.g=ar(n.g),n.b=ar(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(n.r=Ka(n.r),n.g=Ka(n.g),n.b=Ka(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===dr?Zs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[js]:{primaries:e,whitePoint:i,transfer:Zs,toXYZ:of,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:of,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),r}var ot=o0();function ar(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ka(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ba,Xc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ba===void 0&&(Ba=Js("canvas")),Ba.width=e.width,Ba.height=e.height;let n=Ba.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ba}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Js("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=ar(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c0=0,is=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(dd(n[s].image)):a.push(dd(n[s]))}else a=dd(n);i.url=a}return t||(e.images[this.uuid]=i),i}};function dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var l0=0,ud=new F,Wi=class r extends Vn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Bn,n=Bn,a=pi,s=Br,o=xn,c=Xi,l=r.DEFAULT_ANISOTROPY,h=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=fs(),this.name="",this.source=new is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wi.DEFAULT_IMAGE=null;Wi.DEFAULT_MAPPING=tu;Wi.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a,c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],u=c[5],m=c[9],_=c[2],f=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+_)<.1&&Math.abs(m+f)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(u+1)/2,S=(g+1)/2,w=(h+d)/4,E=(p+_)/4,x=(m+f)/4;return M>v&&M>S?M<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(M),n=w/i,a=E/i):v>S?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=w/n,a=x/n):S<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(S),i=E/a,n=x/a),this.set(i,n,a,t),this}let b=Math.sqrt((f-m)*(f-m)+(p-_)*(p-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(f-m)/b,this.y=(p-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var Lt=bu,qc=class extends Vn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},a=new Wi(n),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new is(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends qc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$s=class extends Wi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ci,this.minFilter=ci,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yc=class extends Wi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ci,this.minFilter=ci,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bl=class bl{constructor(e,t,i,n,a,s,o,c,l,h,p,d,u,m,_,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,c,l,h,p,d,u,m,_,f)}set(e,t,i,n,a,s,o,c,l,h,p,d,u,m,_,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=a,g[5]=s,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=p,g[14]=d,g[3]=u,g[7]=m,g[11]=_,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/za.setFromMatrixColumn(e,0).length(),a=1/za.setFromMatrixColumn(e,1).length(),s=1/za.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){let d=s*h,u=s*p,m=o*h,_=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=u+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+u*l,t[10]=s*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,m=l*h,_=l*p;t[0]=d+_*o,t[4]=m*o-u,t[8]=s*l,t[1]=s*p,t[5]=s*h,t[9]=-o,t[2]=u*o-m,t[6]=_+d*o,t[10]=s*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,m=l*h,_=l*p;t[0]=d-_*o,t[4]=-s*p,t[8]=m+u*o,t[1]=u+m*o,t[5]=s*h,t[9]=_-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let d=s*h,u=s*p,m=o*h,_=o*p;t[0]=c*h,t[4]=m*l-u,t[8]=d*l+_,t[1]=c*p,t[5]=_*l+d,t[9]=u*l-m,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let d=s*c,u=s*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-d*p,t[8]=m*p+u,t[1]=p,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*p+m,t[10]=d-_*p}else if(e.order==="XZY"){let d=s*c,u=s*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+_,t[5]=s*h,t[9]=u*p-m,t[2]=m*p-u,t[6]=o*h,t[10]=_*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h0,e,d0)}lookAt(e,t,i){let n=this.elements;return Ki.subVectors(e,t),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),Er.crossVectors(i,Ki),Er.lengthSq()===0&&(Math.abs(i.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),Er.crossVectors(i,Ki)),Er.normalize(),hc.crossVectors(Ki,Er),n[0]=Er.x,n[4]=hc.x,n[8]=Ki.x,n[1]=Er.y,n[5]=hc.y,n[9]=Ki.y,n[2]=Er.z,n[6]=hc.z,n[10]=Ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],h=i[1],p=i[5],d=i[9],u=i[13],m=i[2],_=i[6],f=i[10],g=i[14],b=i[3],M=i[7],v=i[11],S=i[15],w=n[0],E=n[4],x=n[8],T=n[12],C=n[1],I=n[5],L=n[9],q=n[13],G=n[2],U=n[6],H=n[10],O=n[14],Z=n[3],te=n[7],P=n[11],oe=n[15];return a[0]=s*w+o*C+c*G+l*Z,a[4]=s*E+o*I+c*U+l*te,a[8]=s*x+o*L+c*H+l*P,a[12]=s*T+o*q+c*O+l*oe,a[1]=h*w+p*C+d*G+u*Z,a[5]=h*E+p*I+d*U+u*te,a[9]=h*x+p*L+d*H+u*P,a[13]=h*T+p*q+d*O+u*oe,a[2]=m*w+_*C+f*G+g*Z,a[6]=m*E+_*I+f*U+g*te,a[10]=m*x+_*L+f*H+g*P,a[14]=m*T+_*q+f*O+g*oe,a[3]=b*w+M*C+v*G+S*Z,a[7]=b*E+M*I+v*U+S*te,a[11]=b*x+M*L+v*H+S*P,a[15]=b*T+M*q+v*O+S*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],u=e[14],m=e[3],_=e[7],f=e[11],g=e[15],b=c*u-l*d,M=o*u-l*p,v=o*d-c*p,S=s*u-l*h,w=s*d-c*h,E=s*p-o*h;return t*(_*b-f*M+g*v)-i*(m*b-f*S+g*w)+n*(m*M-_*S+g*E)-a*(m*v-_*w+f*E)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],a=e[1],s=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(s*h-o*l)-i*(a*h-o*c)+n*(a*l-s*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],u=e[11],m=e[12],_=e[13],f=e[14],g=e[15],b=t*o-i*s,M=t*c-n*s,v=t*l-a*s,S=i*c-n*o,w=i*l-a*o,E=n*l-a*c,x=h*_-p*m,T=h*f-d*m,C=h*g-u*m,I=p*f-d*_,L=p*g-u*_,q=d*g-u*f,G=b*q-M*L+v*I+S*C-w*T+E*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/G;return e[0]=(o*q-c*L+l*I)*U,e[1]=(n*L-i*q-a*I)*U,e[2]=(_*E-f*w+g*S)*U,e[3]=(d*w-p*E-u*S)*U,e[4]=(c*C-s*q-l*T)*U,e[5]=(t*q-n*C+a*T)*U,e[6]=(f*v-m*E-g*M)*U,e[7]=(h*E-d*v+u*M)*U,e[8]=(s*L-o*C+l*x)*U,e[9]=(i*C-t*L-a*x)*U,e[10]=(m*w-_*v+g*b)*U,e[11]=(p*v-h*w-u*b)*U,e[12]=(o*T-s*I-c*x)*U,e[13]=(t*I-i*T+n*x)*U,e[14]=(_*M-m*S-f*b)*U,e[15]=(h*S-p*M+d*b)*U,this}scale(e){let t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*s,0,l*c-n*o,h*c+n*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,p=o+o,d=a*l,u=a*h,m=a*p,_=s*h,f=s*p,g=o*p,b=c*l,M=c*h,v=c*p,S=i.x,w=i.y,E=i.z;return n[0]=(1-(_+g))*S,n[1]=(u+v)*S,n[2]=(m-M)*S,n[3]=0,n[4]=(u-v)*w,n[5]=(1-(d+g))*w,n[6]=(f+b)*w,n[7]=0,n[8]=(m+M)*E,n[9]=(f-b)*E,n[10]=(1-(d+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let s=za.set(n[0],n[1],n[2]).length(),o=za.set(n[4],n[5],n[6]).length(),c=za.set(n[8],n[9],n[10]).length();a<0&&(s=-s),En.copy(this);let l=1/s,h=1/o,p=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=p,En.elements[9]*=p,En.elements[10]*=p,t.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=c,this}makePerspective(e,t,i,n,a,s,o=Rn,c=!1){let l=this.elements,h=2*a/(t-e),p=2*a/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),m,_;if(c)m=a/(s-a),_=s*a/(s-a);else if(o===Rn)m=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Qa)m=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=Rn,c=!1){let l=this.elements,h=2/(t-e),p=2/(i-n),d=-(t+e)/(t-e),u=-(i+n)/(i-n),m,_;if(c)m=1/(s-a),_=s/(s-a);else if(o===Rn)m=-2/(s-a),_=-(s+a)/(s-a);else if(o===Qa)m=-1/(s-a),_=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};bl.prototype.isMatrix4=!0;var It=bl,za=new F,En=new It,h0=new F(0,0,0),d0=new F(1,1,1),Er=new F,hc=new F,Ki=new F,lf=new It,hf=new Gn,or=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,a=n[0],s=n[4],o=n[8],c=n[1],l=n[5],h=n[9],p=n[2],d=n[6],u=n[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-it(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,u),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hf.setFromEuler(this),this.setFromQuaternion(hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};or.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u0=0,df=new F,Va=new Gn,er=new It,dc=new F,Bs=new F,p0=new F,f0=new Gn,uf=new F(1,0,0),pf=new F(0,1,0),ff=new F(0,0,1),mf={type:"added"},m0={type:"removed"},Ga={type:"childadded",child:null},pd={type:"childremoved",child:null},fi=class r extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new F,t=new or,i=new Gn,n=new F(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new It},normalMatrix:{value:new Je}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Va.setFromAxisAngle(e,t),this.quaternion.multiply(Va),this}rotateOnWorldAxis(e,t){return Va.setFromAxisAngle(e,t),this.quaternion.premultiply(Va),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(ff,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dc.copy(e):dc.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Bs,dc,this.up):er.lookAt(dc,Bs,this.up),this.quaternion.setFromRotationMatrix(er),n&&(er.extractRotation(n.matrixWorld),Va.setFromRotationMatrix(er),this.quaternion.premultiply(Va.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mf),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m0),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mf),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*n,a[13]+=i-a[1]*t-a[5]*i-a[9]*n,a[14]+=n-a[2]*t-a[6]*i-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];a(e.shapes,p)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(a(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),p=s(e.shapes),d=s(e.skeletons),u=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=n,i;function s(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};fi.DEFAULT_UP=new F(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=class extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,i),g=this._getHandJoint(l,_);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,m=.005;l.inputState.pinching&&d>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},uc={h:0,s:0,l:0};function fd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ot.workingColorSpace){if(e=du(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=fd(s,a,e+1/3),this.g=fd(s,a,e),this.b=fd(s,a,e-1/3)}return ot.colorSpaceToWorking(this,n),this}setStyle(e,t=Ni){function i(a){a!==void 0&&parseFloat(a)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){let i=um[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return ot.workingToColorSpace(bi.copy(this),e),Math.round(it(bi.r*255,0,255))*65536+Math.round(it(bi.g*255,0,255))*256+Math.round(it(bi.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(bi.copy(this),t);let i=bi.r,n=bi.g,a=bi.b,s=Math.max(i,n,a),o=Math.min(i,n,a),c,l,h=(o+s)/2;if(o===s)c=0,l=0;else{let p=s-o;switch(l=h<=.5?p/(s+o):p/(2-s-o),s){case i:c=(n-a)/p+(n<a?6:0);break;case n:c=(a-i)/p+2;break;case a:c=(i-n)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(bi.copy(this),t),e.r=bi.r,e.g=bi.g,e.b=bi.b,e}getStyle(e=Ni){ot.workingToColorSpace(bi.copy(this),e);let t=bi.r,i=bi.g,n=bi.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(uc);let i=Ws(Ar.h,uc.h,t),n=Ws(Ar.s,uc.s,t),a=Ws(Ar.l,uc.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bi=new $e;$e.NAMES=um;var Qs=class extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new F,tr=new F,md=new F,ir=new F,Ha=new F,Wa=new F,gf=new F,gd=new F,_d=new F,xd=new F,vd=new Lt,yd=new Lt,bd=new Lt,Lr=class r{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),An.subVectors(e,t),n.cross(An);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){An.subVectors(n,t),tr.subVectors(i,t),md.subVectors(e,t);let s=An.dot(An),o=An.dot(tr),c=An.dot(md),l=tr.dot(tr),h=tr.dot(md),p=s*l-o*o;if(p===0)return a.set(0,0,0),null;let d=1/p,u=(l*c-o*h)*d,m=(s*h-o*c)*d;return a.set(1-u-m,m,u)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,n,a,s,o,c){return this.getBarycoord(e,t,i,n,ir)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ir.x),c.addScaledVector(s,ir.y),c.addScaledVector(o,ir.z),c)}static getInterpolatedAttribute(e,t,i,n,a,s){return vd.setScalar(0),yd.setScalar(0),bd.setScalar(0),vd.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,i),bd.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(vd,a.x),s.addScaledVector(yd,a.y),s.addScaledVector(bd,a.z),s}static isFrontFacing(e,t,i,n){return An.subVectors(i,t),tr.subVectors(e,t),An.cross(tr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),An.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,a=this.c,s,o;Ha.subVectors(n,i),Wa.subVectors(a,i),gd.subVectors(e,i);let c=Ha.dot(gd),l=Wa.dot(gd);if(c<=0&&l<=0)return t.copy(i);_d.subVectors(e,n);let h=Ha.dot(_d),p=Wa.dot(_d);if(h>=0&&p<=h)return t.copy(n);let d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(i).addScaledVector(Ha,s);xd.subVectors(e,a);let u=Ha.dot(xd),m=Wa.dot(xd);if(m>=0&&u<=m)return t.copy(a);let _=u*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(Wa,o);let f=h*m-u*p;if(f<=0&&p-h>=0&&u-m>=0)return gf.subVectors(a,n),o=(p-h)/(p-h+(u-m)),t.copy(n).addScaledVector(gf,o);let g=1/(f+_+d);return s=_*g,o=d*g,t.copy(i).addScaledVector(Ha,s).addScaledVector(Wa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Cn):Cn.fromBufferAttribute(a,s),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}let n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),fc.subVectors(this.max,zs),Xa.subVectors(e.a,zs),qa.subVectors(e.b,zs),Ya.subVectors(e.c,zs),Cr.subVectors(qa,Xa),Rr.subVectors(Ya,qa),ta.subVectors(Xa,Ya);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-ta.z,ta.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,ta.z,0,-ta.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-ta.y,ta.x,0];return!Md(t,Xa,qa,Ya,fc)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,Xa,qa,Ya,fc))?!1:(mc.crossVectors(Cr,Rr),t=[mc.x,mc.y,mc.z],Md(t,Xa,qa,Ya,fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,pc=new Nr,Xa=new F,qa=new F,Ya=new F,Cr=new F,Rr=new F,ta=new F,zs=new F,fc=new F,mc=new F,ia=new F;function Md(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){ia.fromArray(r,a);let o=n.x*Math.abs(ia.x)+n.y*Math.abs(ia.y)+n.z*Math.abs(ia.z),c=e.dot(ia),l=t.dot(ia),h=i.dot(ia);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Jt=new F,gc=new Ie,_0=0,ui=class extends Vn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$a(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Di(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$a(t,this.array)),t}setX(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$a(t,this.array)),t}setY(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$a(t,this.array)),t}setW(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),i=Di(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),i=Di(i,this.array),n=Di(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),i=Di(i,this.array),n=Di(n,this.array),a=Di(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var eo=class extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var to=class extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Mt=class extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}},x0=new Nr,Vs=new F,Sd=new F,la=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):x0.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Vs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Sd)),this.expandByPoint(Vs.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},v0=0,pn=new It,wd=new fi,ja=new F,Qi=new Nr,Gs=new Nr,oi=new F,ei=class r extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?to:eo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Je().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ja).negate(),this.translate(ja.x,ja.y,ja.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,a=e.length;n<a;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Mt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let a=t[i];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(oi.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(oi),oi.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(oi)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Qi.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(oi.addVectors(Qi.min,Gs.min),Qi.expandByPoint(oi),oi.addVectors(Qi.max,Gs.max),Qi.expandByPoint(oi)):(Qi.expandByPoint(Gs.min),Qi.expandByPoint(Gs.max))}Qi.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)oi.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(oi));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)oi.fromBufferAttribute(o,l),c&&(ja.fromBufferAttribute(e,l),oi.add(ja)),n=Math.max(n,i.distanceToSquared(oi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,a=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new F,c[x]=new F;let l=new F,h=new F,p=new F,d=new Ie,u=new Ie,m=new Ie,_=new F,f=new F;function g(x,T,C){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,C),d.fromBufferAttribute(a,x),u.fromBufferAttribute(a,T),m.fromBufferAttribute(a,C),h.sub(l),p.sub(l),u.sub(d),m.sub(d);let I=1/(u.x*m.y-m.x*u.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-u.y).multiplyScalar(I),f.copy(p).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(I),o[x].add(_),o[T].add(_),o[C].add(_),c[x].add(f),c[T].add(f),c[C].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,T=b.length;x<T;++x){let C=b[x],I=C.start,L=C.count;for(let q=I,G=I+L;q<G;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let M=new F,v=new F,S=new F,w=new F;function E(x){S.fromBufferAttribute(n,x),w.copy(S);let T=o[x];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(w,T);let I=v.dot(c[x])<0?-1:1;s.setXYZW(x,M.x,M.y,M.z,I)}for(let x=0,T=b.length;x<T;++x){let C=b[x],I=C.start,L=C.count;for(let q=I,G=I+L;q<G;q+=3)E(e.getX(q+0)),E(e.getX(q+1)),E(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let n=new F,a=new F,s=new F,o=new F,c=new F,l=new F,h=new F,p=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let m=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,f),h.subVectors(s,a),p.subVectors(n,a),h.cross(p),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,f),o.add(h),c.add(h),l.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),p.subVectors(n,a),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)oi.fromBufferAttribute(e,t),oi.normalize(),e.setXYZ(t,oi.x,oi.y,oi.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h),u=0,m=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let g=0;g<h;g++)d[m++]=l[u++]}return new ui(d,h,p)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=e(c,i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let h=0,p=l.length;h<p;h++){let d=l[h],u=e(d,i);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){let u=l[p];h.push(u.toJSON(e.data))}h.length>0&&(n[c]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let a=e.morphAttributes;for(let l in a){let h=[],p=a[l];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,h=s.length;l<h;l++){let p=s[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var y0=0,cr=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=oa,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dc&&(i.blendSrc=this.blendSrc),this.blendDst!==Nc&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==aa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==aa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==aa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){let s=[];for(let o in a){let c=a[o];delete c.metadata,s.push(c)}return s}if(t){let a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var rr=new F,Td=new F,_c=new F,Pr=new F,Ed=new F,xc=new F,Ad=new F,io=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Td.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Td);let a=e.distanceTo(t)*.5,s=-this.direction.dot(_c),o=Pr.dot(this.direction),c=-Pr.dot(_c),l=Pr.lengthSq(),h=Math.abs(1-s*s),p,d,u,m;if(h>0)if(p=s*c-o,d=s*o-c,m=a*h,p>=0)if(d>=-m)if(d<=m){let _=1/h;p*=_,d*=_,u=p*(p+s*d+2*o)+d*(s*p+d+2*c)+l}else d=a,p=Math.max(0,-(s*d+o)),u=-p*p+d*(d+2*c)+l;else d=-a,p=Math.max(0,-(s*d+o)),u=-p*p+d*(d+2*c)+l;else d<=-m?(p=Math.max(0,-(-s*a+o)),d=p>0?-a:Math.min(Math.max(-a,-c),a),u=-p*p+d*(d+2*c)+l):d<=m?(p=0,d=Math.min(Math.max(-a,-c),a),u=d*(d+2*c)+l):(p=Math.max(0,-(s*a+o)),d=p>0?a:Math.min(Math.max(-a,-c),a),u=-p*p+d*(d+2*c)+l);else d=s>0?-a:a,p=Math.max(0,-(s*d+o)),u=-p*p+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(Td).addScaledVector(_c,d),u}intersectSphere(e,t){rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),n=rr.dot(rr)-i*i,a=e.radius*e.radius;if(n>a)return null;let s=Math.sqrt(a-n),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,n,a){Ed.subVectors(t,e),xc.subVectors(i,e),Ad.crossVectors(Ed,xc);let s=this.direction.dot(Ad),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Pr.subVectors(this.origin,e);let c=o*this.direction.dot(xc.crossVectors(Pr,xc));if(c<0)return null;let l=o*this.direction.dot(Ed.cross(Pr));if(l<0||c+l>s)return null;let h=-o*Pr.dot(Ad);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_f=new It,na=new io,vc=new la,xf=new F,yc=new F,bc=new F,Mc=new F,Cd=new F,Sc=new F,vf=new F,wc=new F,Bt=class extends fi{constructor(e=new ei,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=n.length;a<s;a++){let o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(a&&o){Sc.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=o[c],p=a[c];h!==0&&(Cd.fromBufferAttribute(p,e),s?Sc.addScaledVector(Cd,h):Sc.addScaledVector(Cd.sub(t),h))}t.add(Sc)}return t}raycast(e,t){let i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(a),na.copy(e.ray).recast(e.near),!(vc.containsPoint(na.origin)===!1&&(na.intersectSphere(vc,xf)===null||na.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(_f.copy(a).invert(),na.copy(e.ray).applyMatrix4(_f),!(i.boundingBox!==null&&na.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,na)))}_computeIntersections(e,t,i){let n,a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,d=a.groups,u=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){let f=d[m],g=s[f.materialIndex],b=Math.max(f.start,u.start),M=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let v=b,S=M;v<S;v+=3){let w=o.getX(v),E=o.getX(v+1),x=o.getX(v+2);n=Tc(this,g,e,i,l,h,p,w,E,x),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{let m=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let f=m,g=_;f<g;f+=3){let b=o.getX(f),M=o.getX(f+1),v=o.getX(f+2);n=Tc(this,s,e,i,l,h,p,b,M,v),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){let f=d[m],g=s[f.materialIndex],b=Math.max(f.start,u.start),M=Math.min(c.count,Math.min(f.start+f.count,u.start+u.count));for(let v=b,S=M;v<S;v+=3){let w=v,E=v+1,x=v+2;n=Tc(this,g,e,i,l,h,p,w,E,x),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{let m=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let f=m,g=_;f<g;f+=3){let b=f,M=f+1,v=f+2;n=Tc(this,s,e,i,l,h,p,b,M,v),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}};function b0(r,e,t,i,n,a,s,o){let c;if(e.side===Fi?c=i.intersectTriangle(s,a,n,!0,o):c=i.intersectTriangle(n,a,s,e.side===sr,o),c===null)return null;wc.copy(o),wc.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(wc);return l<t.near||l>t.far?null:{distance:l,point:wc.clone(),object:r}}function Tc(r,e,t,i,n,a,s,o,c,l){r.getVertexPosition(o,yc),r.getVertexPosition(c,bc),r.getVertexPosition(l,Mc);let h=b0(r,e,t,i,yc,bc,Mc,vf);if(h){let p=new F;Lr.getBarycoord(vf,yc,bc,Mc,p),n&&(h.uv=Lr.getInterpolatedAttribute(n,o,c,l,p,new Ie)),a&&(h.uv1=Lr.getInterpolatedAttribute(a,o,c,l,p,new Ie)),s&&(h.normal=Lr.getInterpolatedAttribute(s,o,c,l,p,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new F,materialIndex:0};Lr.getNormal(yc,bc,Mc,d.normal),h.face=d,h.barycoord=p}return h}var jc=class extends Wi{constructor(e=null,t=1,i=1,n,a,s,o,c,l=ci,h=ci,p,d){super(null,s,o,c,l,h,n,a,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rd=new F,M0=new F,S0=new Je,kn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Rd.subVectors(i,t).cross(M0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Rd),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||S0.getNormalMatrix(e),n=this.coplanarPoint(Rd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ra=new la,w0=new Ie(.5,.5),Ec=new F,rs=class{constructor(e=new kn,t=new kn,i=new kn,n=new kn,a=new kn,s=new kn){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){let n=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],h=a[4],p=a[5],d=a[6],u=a[7],m=a[8],_=a[9],f=a[10],g=a[11],b=a[12],M=a[13],v=a[14],S=a[15];if(n[0].setComponents(l-s,u-h,g-m,S-b).normalize(),n[1].setComponents(l+s,u+h,g+m,S+b).normalize(),n[2].setComponents(l+o,u+p,g+_,S+M).normalize(),n[3].setComponents(l-o,u-p,g-_,S-M).normalize(),i)n[4].setComponents(c,d,f,v).normalize(),n[5].setComponents(l-c,u-d,g-f,S-v).normalize();else if(n[4].setComponents(l-c,u-d,g-f,S-v).normalize(),t===Rn)n[5].setComponents(l+c,u+d,g+f,S+v).normalize();else if(t===Qa)n[5].setComponents(c,d,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ra.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ra.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ra)}intersectsSprite(e){ra.center.set(0,0,0);let t=w0.distanceTo(e.center);return ra.radius=.7071067811865476+t,ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(ra)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ec.x=n.normal.x>0?e.max.x:e.min.x,Ec.y=n.normal.y>0?e.max.y:e.min.y,Ec.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ha=class extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yf=new It,zd=new io,Ac=new la,Cc=new F,as=class extends fi{constructor(e=new ei,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(n),Ac.radius+=a,e.ray.intersectsSphere(Ac)===!1)return;yf.copy(n).invert(),zd.copy(e.ray).applyMatrix4(yf);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,p=i.attributes.position;if(l!==null){let d=Math.max(0,s.start),u=Math.min(l.count,s.start+s.count);for(let m=d,_=u;m<_;m++){let f=l.getX(m);Cc.fromBufferAttribute(p,f),bf(Cc,f,c,n,e,t,this)}}else{let d=Math.max(0,s.start),u=Math.min(p.count,s.start+s.count);for(let m=d,_=u;m<_;m++)Cc.fromBufferAttribute(p,m),bf(Cc,m,c,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=n.length;a<s;a++){let o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function bf(r,e,t,i,n,a,s){let o=zd.distanceSqToPoint(r);if(o<t){let c=new F;zd.closestPointToPoint(r,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var no=class extends Wi{constructor(e=[],t=kr,i,n,a,s,o,c,l,h){super(e,t,i,n,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var lr=class extends Wi{constructor(e,t,i=In,n,a,s,o=ci,c=ci,l,h=zn,p=1){if(h!==zn&&h!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,n,a,s,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zc=class extends lr{constructor(e,t=In,i=kr,n,a,s=ci,o=ci,c,l=zn){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,n,a,s,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ro=class extends Wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ss=class r extends ei{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let c=[],l=[],h=[],p=[],d=0,u=0;m("z","y","x",-1,-1,i,t,e,s,a,0),m("z","y","x",1,-1,i,t,-e,s,a,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,a,4),m("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(p,2));function m(_,f,g,b,M,v,S,w,E,x,T){let C=v/E,I=S/x,L=v/2,q=S/2,G=w/2,U=E+1,H=x+1,O=0,Z=0,te=new F;for(let P=0;P<H;P++){let oe=P*I-q;for(let ve=0;ve<U;ve++){let ke=ve*C-L;te[_]=ke*b,te[f]=oe*M,te[g]=G,l.push(te.x,te.y,te.z),te[_]=0,te[f]=0,te[g]=w>0?1:-1,h.push(te.x,te.y,te.z),p.push(ve/E),p.push(1-P/x),O+=1}}for(let P=0;P<x;P++)for(let oe=0;oe<E;oe++){let ve=d+oe+U*P,ke=d+oe+U*(P+1),De=d+(oe+1)+U*(P+1),Xe=d+(oe+1)+U*P;c.push(ve,ke,Xe),c.push(ke,De,Xe),Z+=6}o.addGroup(u,Z,T),u+=Z,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Jc=class r extends ei{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let a=[],s=[];o(n),l(i),h(),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(a.slice(),3)),this.setAttribute("uv",new Mt(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let M=new F,v=new F,S=new F;for(let w=0;w<t.length;w+=3)u(t[w+0],M),u(t[w+1],v),u(t[w+2],S),c(M,v,S,b)}function c(b,M,v,S){let w=S+1,E=[];for(let x=0;x<=w;x++){E[x]=[];let T=b.clone().lerp(v,x/w),C=M.clone().lerp(v,x/w),I=w-x;for(let L=0;L<=I;L++)L===0&&x===w?E[x][L]=T:E[x][L]=T.clone().lerp(C,L/I)}for(let x=0;x<w;x++)for(let T=0;T<2*(w-x)-1;T++){let C=Math.floor(T/2);T%2===0?(d(E[x][C+1]),d(E[x+1][C]),d(E[x][C])):(d(E[x][C+1]),d(E[x+1][C+1]),d(E[x+1][C]))}}function l(b){let M=new F;for(let v=0;v<a.length;v+=3)M.x=a[v+0],M.y=a[v+1],M.z=a[v+2],M.normalize().multiplyScalar(b),a[v+0]=M.x,a[v+1]=M.y,a[v+2]=M.z}function h(){let b=new F;for(let M=0;M<a.length;M+=3){b.x=a[M+0],b.y=a[M+1],b.z=a[M+2];let v=f(b)/2/Math.PI+.5,S=g(b)/Math.PI+.5;s.push(v,1-S)}m(),p()}function p(){for(let b=0;b<s.length;b+=6){let M=s[b+0],v=s[b+2],S=s[b+4],w=Math.max(M,v,S),E=Math.min(M,v,S);w>.9&&E<.1&&(M<.2&&(s[b+0]+=1),v<.2&&(s[b+2]+=1),S<.2&&(s[b+4]+=1))}}function d(b){a.push(b.x,b.y,b.z)}function u(b,M){let v=b*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function m(){let b=new F,M=new F,v=new F,S=new F,w=new Ie,E=new Ie,x=new Ie;for(let T=0,C=0;T<a.length;T+=9,C+=6){b.set(a[T+0],a[T+1],a[T+2]),M.set(a[T+3],a[T+4],a[T+5]),v.set(a[T+6],a[T+7],a[T+8]),w.set(s[C+0],s[C+1]),E.set(s[C+2],s[C+3]),x.set(s[C+4],s[C+5]),S.copy(b).add(M).add(v).divideScalar(3);let I=f(S);_(w,C+0,b,I),_(E,C+2,M,I),_(x,C+4,v,I)}}function _(b,M,v,S){S<0&&b.x===1&&(s[M]=b.x-1),v.x===0&&v.z===0&&(s[M]=S/2/Math.PI+.5)}function f(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(n),t.push(a),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,a=i.length,s;t?s=t:s=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===s)return n/(a-1);let h=i[n],d=i[n+1]-h,u=(s-h)/d;return(n+u)/(a-1)}getTangent(e,t){let n=e-1e-4,a=e+1e-4;n<0&&(n=0),a>1&&(a=1);let s=this.getPoint(n),o=this.getPoint(a),c=t||(s.isVector2?new Ie:new F);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new F,n=[],a=[],s=[],o=new F,c=new It;for(let u=0;u<=e;u++){let m=u/e;n[u]=this.getTangentAt(m,new F)}a[0]=new F,s[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),p=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),p<=l&&(l=p,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),s[u]=s[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(it(n[u-1].dot(n[u]),-1,1));a[u].applyMatrix4(c.makeRotationAxis(o,m))}s[u].crossVectors(n[u],a[u])}if(t===!0){let u=Math.acos(it(a[0].dot(a[e]),-1,1));u/=e,n[0].dot(o.crossVectors(a[0],a[e]))>0&&(u=-u);for(let m=1;m<=e;m++)a[m].applyMatrix4(c.makeRotationAxis(n[m],u*m)),s[m].crossVectors(n[m],a[m])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ao=class extends gn{constructor(e=0,t=0,i=1,n=1,a=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ie){let i=t,n=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(s?a=0:a=n),this.aClockwise===!0&&!s&&(a===n?a=-n:a=a-n);let o=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*p+this.aX,l=d*p+u*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$c=class extends ao{constructor(e,t,i,n,a,s){super(e,t,i,i,n,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function pu(){let r=0,e=0,t=0,i=0;function n(a,s,o,c){r=a,e=o,t=-3*a+3*s-2*o-c,i=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,l){n(s,o,l*(o-a),l*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,l,h,p){let d=(s-a)/l-(o-a)/(l+h)+(o-s)/h,u=(o-s)/h-(c-s)/(h+p)+(c-o)/p;d*=h,u*=h,n(s,o,d,u)},calc:function(a){let s=a*a,o=s*a;return r+e*a+t*s+i*o}}}var Mf=new F,Sf=new F,Pd=new pu,Id=new pu,Ld=new pu,os=class extends gn{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new F){let i=t,n=this.points,a=n.length,s=(a-(this.closed?0:1))*e,o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=n[(o-1)%a]:(Sf.subVectors(n[0],n[1]).add(n[0]),l=Sf);let p=n[o%a],d=n[(o+1)%a];if(this.closed||o+2<a?h=n[(o+2)%a]:(Mf.subVectors(n[a-1],n[a-2]).add(n[a-1]),h=Mf),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(p),u),_=Math.pow(p.distanceToSquared(d),u),f=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),Pd.initNonuniformCatmullRom(l.x,p.x,d.x,h.x,m,_,f),Id.initNonuniformCatmullRom(l.y,p.y,d.y,h.y,m,_,f),Ld.initNonuniformCatmullRom(l.z,p.z,d.z,h.z,m,_,f)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(l.x,p.x,d.x,h.x,this.tension),Id.initCatmullRom(l.y,p.y,d.y,h.y,this.tension),Ld.initCatmullRom(l.z,p.z,d.z,h.z,this.tension));return i.set(Pd.calc(c),Id.calc(c),Ld.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new F().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wf(r,e,t,i,n){let a=(i-e)*.5,s=(n-t)*.5,o=r*r,c=r*o;return(2*t-2*i+a+s)*c+(-3*t+3*i-2*a-s)*o+a*r+t}function T0(r,e){let t=1-r;return t*t*e}function E0(r,e){return 2*(1-r)*r*e}function A0(r,e){return r*r*e}function Xs(r,e,t,i){return T0(r,e)+E0(r,t)+A0(r,i)}function C0(r,e){let t=1-r;return t*t*t*e}function R0(r,e){let t=1-r;return 3*t*t*r*e}function P0(r,e){return 3*(1-r)*r*r*e}function I0(r,e){return r*r*r*e}function qs(r,e,t,i,n){return C0(r,e)+R0(r,t)+P0(r,i)+I0(r,n)}var Kc=class extends gn{constructor(e=new Ie,t=new Ie,i=new Ie,n=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Ie){let i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(qs(e,n.x,a.x,s.x,o.x),qs(e,n.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qc=class extends gn{constructor(e=new F,t=new F,i=new F,n=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new F){let i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(qs(e,n.x,a.x,s.x,o.x),qs(e,n.y,a.y,s.y,o.y),qs(e,n.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends gn{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends gn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends gn{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){let i=t,n=this.v0,a=this.v1,s=this.v2;return i.set(Xs(e,n.x,a.x,s.x),Xs(e,n.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends gn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){let i=t,n=this.v0,a=this.v1,s=this.v2;return i.set(Xs(e,n.x,a.x,s.x),Xs(e,n.y,a.y,s.y),Xs(e,n.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let i=t,n=this.points,a=(n.length-1)*e,s=Math.floor(a),o=a-s,c=n[s===0?s:s-1],l=n[s],h=n[s>n.length-2?n.length-1:s+1],p=n[s>n.length-3?n.length-1:s+2];return i.set(wf(o,c.x,l.x,h.x,p.x),wf(o,c.y,l.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Ie().fromArray(n))}return this}},L0=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:os,CubicBezierCurve:Kc,CubicBezierCurve3:Qc,EllipseCurve:ao,LineCurve:el,LineCurve3:tl,QuadraticBezierCurve:il,QuadraticBezierCurve3:so,SplineCurve:nl});var oo=class r extends Jc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var co=class r extends ei{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,p=e/o,d=t/c,u=[],m=[],_=[],f=[];for(let g=0;g<h;g++){let b=g*d-s;for(let M=0;M<l;M++){let v=M*p-a;m.push(v,-b,0),_.push(0,0,1),f.push(M/o),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){let M=b+l*g,v=b+l*(g+1),S=b+1+l*(g+1),w=b+1+l*g;u.push(M,v,w),u.push(v,S,w)}this.setIndex(u),this.setAttribute("position",new Mt(m,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},lo=class r extends ei{constructor(e=.5,t=1,i=32,n=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],c=[],l=[],h=[],p=e,d=(t-e)/n,u=new F,m=new Ie;for(let _=0;_<=n;_++){for(let f=0;f<=i;f++){let g=a+f/i*s;u.x=p*Math.cos(g),u.y=p*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),m.x=(u.x/t+1)/2,m.y=(u.y/t+1)/2,h.push(m.x,m.y)}p+=d}for(let _=0;_<n;_++){let f=_*(i+1);for(let g=0;g<i;g++){let b=g+f,M=b,v=b+i+1,S=b+i+2,w=b+1;o.push(M,v,w),o.push(v,S,w)}}this.setIndex(o),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var hr=class r extends ei{constructor(e=1,t=32,i=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(s+o,Math.PI),l=0,h=[],p=new F,d=new F,u=[],m=[],_=[],f=[];for(let g=0;g<=i;g++){let b=[],M=g/i,v=s+M*o,S=e*Math.cos(v),w=Math.sqrt(e*e-S*S),E=0;g===0&&s===0?E=.5/t:g===i&&c===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){let T=x/t,C=n+T*a;p.x=-w*Math.cos(C),p.y=S,p.z=w*Math.sin(C),m.push(p.x,p.y,p.z),d.copy(p).normalize(),_.push(d.x,d.y,d.z),f.push(T+E,1-M),b.push(l++)}h.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let M=h[g][b+1],v=h[g][b],S=h[g+1][b],w=h[g+1][b+1];(g!==0||s>0)&&u.push(M,v,w),(g!==i-1||c<Math.PI)&&u.push(v,S,w)}this.setIndex(u),this.setAttribute("position",new Mt(m,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ho=class r extends ei{constructor(e=1,t=.4,i=12,n=48,a=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:a,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],p=[],d=new F,u=new F,m=new F;for(let _=0;_<=i;_++){let f=s+_/i*o;for(let g=0;g<=n;g++){let b=g/n*a;u.x=(e+t*Math.cos(f))*Math.cos(b),u.y=(e+t*Math.cos(f))*Math.sin(b),u.z=t*Math.sin(f),l.push(u.x,u.y,u.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(u,d).normalize(),h.push(m.x,m.y,m.z),p.push(g/n),p.push(_/i)}}for(let _=1;_<=i;_++)for(let f=1;f<=n;f++){let g=(n+1)*_+f-1,b=(n+1)*(_-1)+f-1,M=(n+1)*(_-1)+f,v=(n+1)*_+f;c.push(g,b,v),c.push(b,M,v)}this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var uo=class r extends ei{constructor(e=new so(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,i=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new F,c=new F,l=new Ie,h=new F,p=[],d=[],u=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Mt(p,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(u,2));function _(){for(let M=0;M<t;M++)f(M);f(a===!1?t:0),b(),g()}function f(M){h=e.getPointAt(M/t,h);let v=s.normals[M],S=s.binormals[M];for(let w=0;w<=n;w++){let E=w/n*Math.PI*2,x=Math.sin(E),T=-Math.cos(E);c.x=T*v.x+x*S.x,c.y=T*v.y+x*S.y,c.z=T*v.z+x*S.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,p.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let v=1;v<=n;v++){let S=(n+1)*(M-1)+(v-1),w=(n+1)*M+(v-1),E=(n+1)*M+v,x=(n+1)*(M-1)+v;m.push(S,w,x),m.push(w,E,x)}}function b(){for(let M=0;M<=t;M++)for(let v=0;v<=n;v++)l.x=M/t,l.y=v/n,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new L0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function pa(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(Tf(n))n.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Tf(n[0])){let a=[];for(let s=0,o=n.length;s<o;s++)a[s]=n[s].clone();e[t][i]=a}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Si(r){let e={};for(let t=0;t<r.length;t++){let i=pa(r[t]);for(let n in i)e[n]=i[n]}return e}function Tf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function D0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fu(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var pm={clone:pa,merge:Si},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ie().fromArray(n.value);break;case"v3":this.uniforms[i].value=new F().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(n.value);break;case"m4":this.uniforms[i].value=new It().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rl=class extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},al=class extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},po=class extends al{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var sl=class extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var Fr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],a=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<a)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){let o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,n)}return this.interpolate_(i,a,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n;for(let s=0;s!==n;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cl=class extends Fr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fd,endingEnd:Fd}}intervalChanged_(e,t,i){let n=this.parameterPositions,a=e-2,s=e+1,o=n[a],c=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Ud:a=e,o=2*t-i;break;case Od:a=n.length-2,o=t+n[a]-n[a+1];break;default:a=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ud:s=e,c=2*i-t;break;case Od:s=1,c=i+n[1]-n[0];break;default:s=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(i-t)/(n-t),_=m*m,f=_*m,g=-d*f+2*d*_-d*m,b=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-u)*f+(1.5+u)*_+.5*m,v=u*f-u*_;for(let S=0;S!==o;++S)a[S]=g*s[h+S]+b*s[l+S]+M*s[c+S]+v*s[p+S];return a}},ll=class extends Fr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),p=1-h;for(let d=0;d!==o;++d)a[d]=s[l+d]*p+s[c+d]*h;return a}},hl=class extends Fr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},dl=class extends Fr{interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let m=(i-t)/(n-t),_=1-m;for(let f=0;f!==o;++f)a[f]=s[l+f]*_+s[c+f]*m;return a}let d=o*2,u=e-1;for(let m=0;m!==o;++m){let _=s[l+m],f=s[c+m],g=u*d+m*2,b=p[g],M=p[g+1],v=e*d+m*2,S=h[v],w=h[v+1],E=(i-t)/(n-t),x,T,C,I,L;for(let q=0;q<8;q++){x=E*E,T=x*E,C=1-E,I=C*C,L=I*C;let U=L*t+3*I*E*b+3*C*x*S+T*n-i;if(Math.abs(U)<1e-10)break;let H=3*I*(b-t)+6*C*E*(S-b)+3*x*(n-S);if(Math.abs(H)<1e-10)break;E=E-U/H,E=Math.max(0,Math.min(1,E))}a[m]=L*_+3*I*E*M+3*C*x*w+T*f}return a}},tn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rc(t,this.TimeBufferType),this.values=Rc(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Rc(e.times,Array),values:Rc(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case Wc:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break;case Nd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Wc;case this.InterpolantFactoryMethodSmooth:return Lc;case this.InterpolantFactoryMethodBezier:return Nd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,a=0,s=n-1;for(;a!==n&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==n){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,a=i.length;a===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(n!==void 0&&W_(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Lc,a=e.length-1,s=1;for(let o=1;o<a;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(n)c=!0;else{let p=o*i,d=p-i,u=p+i;for(let m=0;m!==i;++m){let _=t[p+m];if(_!==t[d+m]||_!==t[u+m]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let p=o*i,d=s*i;for(let u=0;u!==i;++u)t[d+u]=t[p+u]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Wc;var Ur=class extends tn{constructor(e,t,i){super(e,t,i)}};Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Ys;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}};ul.prototype.ValueTypeName="color";var pl=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}};pl.prototype.ValueTypeName="number";var fl=class extends Fr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Gn.slerpFlat(a,0,s,l-o,s,l,c);return a}},fo=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends tn{constructor(e,t,i){super(e,t,i)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Ys;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}};ml.prototype.ValueTypeName="vector";var gl=class{constructor(e,t,i){let n=this,a=!1,s=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=l.length;p<d;p+=2){let u=l[p],m=l[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fm=new gl,_l=class{constructor(e){this.manager=e!==void 0?e:fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends fi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mo=class extends cs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Dd=new It,Ef=new F,Af=new F,xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),Dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pc=new F,Ic=new Gn,On=new F,go=class extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pc,Ic,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Pc,Ic,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ir=new F,Cf=new Ie,Rf=new Ie,di=class extends go{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,Cf,Rf),t.subVectors(Rf,Cf)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*n/c,t-=s.offsetY*i/l,n*=s.width/c,i*=s.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vd=class extends xl{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}},ls=class extends cs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends go{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,a=i-e,s=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gd=class extends xl{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_o=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fi.DEFAULT_UP),this.updateMatrix(),this.target=new fi,this.shadow=new Gd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Za=-90,Ja=1,vl=class extends fi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new di(Za,Ja,e,t);n.layers=this.layers,this.add(n);let a=new di(Za,Ja,e,t);a.layers=this.layers,this.add(a);let s=new di(Za,Ja,e,t);s.layers=this.layers,this.add(s);let o=new di(Za,Ja,e,t);o.layers=this.layers,this.add(o);let c=new di(Za,Ja,e,t);c.layers=this.layers,this.add(c);let l=new di(Za,Ja,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,c]=t;for(let l of t)this.remove(l);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,n),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,n),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},yl=class extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=U0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function U0(){this._document.hidden===!1&&this.reset()}var mu="\\[\\]\\.:\\/",O0=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",k0="[^"+mu.replace("\\.","")+"]",B0=/((?:WC+[\/:])*)/.source.replace("WC",gu),z0=/(WCOD+)?/.source.replace("WCOD",k0),V0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),G0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),H0=new RegExp("^"+B0+z0+V0+G0+"$"),W0=["material","materials","bones","map"],Hd=class{constructor(e,t,i){let n=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=i.length;n!==a;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O0,"")}static parseTrackName(e){let t=H0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=i.nodeName.substring(n+1);W0.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,a=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Hd;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ZS=new Float32Array(1);var Mu=class Mu{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=n,this}};Mu.prototype.isMatrix2=!0;var Wd=Mu;function _u(r,e,t,i){let n=X0(i);switch(t){case su:return r*e;case cu:return r*e/n.components*n.byteLength;case Cl:return r*e/n.components*n.byteLength;case Vr:return r*e*2/n.components*n.byteLength;case Rl:return r*e*2/n.components*n.byteLength;case ou:return r*e*3/n.components*n.byteLength;case xn:return r*e*4/n.components*n.byteLength;case Pl:return r*e*4/n.components*n.byteLength;case So:case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case To:case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Nl:return Math.max(r,16)*Math.max(e,8)/4;case Il:case Dl:return Math.max(r,8)*Math.max(e,8)/2;case Fl:case Ul:case kl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Ao:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case th:case ih:case nh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rh:case ah:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Co:case sh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(r){switch(r){case Xi:case iu:return{byteLength:1,components:1};case us:case nu:case Wn:return{byteLength:2,components:1};case El:case Al:return{byteLength:2,components:4};case In:case Tl:case Ln:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Om(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Y0(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,p=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=r.SHORT;else if(l instanceof Uint32Array)u=r.UNSIGNED_INT;else if(l instanceof Int32Array)u=r.INT;else if(l instanceof Int8Array)u=r.BYTE;else if(l instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,l){let h=c.array,p=c.updateRanges;if(r.bindBuffer(l,o),p.length===0)r.bufferSubData(l,0,h);else{p.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<p.length;u++){let m=p[d],_=p[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,p[d]=_)}p.length=d+1;for(let u=0,m=p.length;u<m;u++){let _=p[u];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:a,update:s}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_v=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,my=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:j0,alphahash_pars_fragment:Z0,alphamap_fragment:J0,alphamap_pars_fragment:$0,alphatest_fragment:K0,alphatest_pars_fragment:Q0,aomap_fragment:ex,aomap_pars_fragment:tx,batching_pars_vertex:ix,batching_vertex:nx,begin_vertex:rx,beginnormal_vertex:ax,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:cx,clipping_planes_fragment:lx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:ux,color_fragment:px,color_pars_fragment:fx,color_pars_vertex:mx,color_vertex:gx,common:_x,cube_uv_reflection_fragment:xx,defaultnormal_vertex:vx,displacementmap_pars_vertex:yx,displacementmap_vertex:bx,emissivemap_fragment:Mx,emissivemap_pars_fragment:Sx,colorspace_fragment:wx,colorspace_pars_fragment:Tx,envmap_fragment:Ex,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Cx,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:zx,envmap_vertex:Px,fog_vertex:Ix,fog_pars_vertex:Lx,fog_fragment:Dx,fog_pars_fragment:Nx,gradientmap_pars_fragment:Fx,lightmap_pars_fragment:Ux,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:kx,lights_pars_begin:Bx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:jx,lights_fragment_end:Zx,lightprobes_pars_fragment:Jx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:ev,map_fragment:tv,map_pars_fragment:iv,map_particle_fragment:nv,map_particle_pars_fragment:rv,metalnessmap_fragment:av,metalnessmap_pars_fragment:sv,morphinstance_vertex:ov,morphcolor_vertex:cv,morphnormal_vertex:lv,morphtarget_pars_vertex:hv,morphtarget_vertex:dv,normal_fragment_begin:uv,normal_fragment_maps:pv,normal_pars_fragment:fv,normal_pars_vertex:mv,normal_vertex:gv,normalmap_pars_fragment:_v,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:yv,iridescence_pars_fragment:bv,opaque_fragment:Mv,packing:Sv,premultiplied_alpha_fragment:wv,project_vertex:Tv,dithering_fragment:Ev,dithering_pars_fragment:Av,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Rv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Iv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Dv,skinbase_vertex:Nv,skinning_pars_vertex:Fv,skinning_vertex:Uv,skinnormal_vertex:Ov,specularmap_fragment:kv,specularmap_pars_fragment:Bv,tonemapping_fragment:zv,tonemapping_pars_fragment:Vv,transmission_fragment:Gv,transmission_pars_fragment:Hv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:qv,worldpos_vertex:Yv,background_vert:jv,background_frag:Zv,backgroundCube_vert:Jv,backgroundCube_frag:$v,cube_vert:Kv,cube_frag:Qv,depth_vert:ey,depth_frag:ty,distance_vert:iy,distance_frag:ny,equirect_vert:ry,equirect_frag:ay,linedashed_vert:sy,linedashed_frag:oy,meshbasic_vert:cy,meshbasic_frag:ly,meshlambert_vert:hy,meshlambert_frag:dy,meshmatcap_vert:uy,meshmatcap_frag:py,meshnormal_vert:fy,meshnormal_frag:my,meshphong_vert:gy,meshphong_frag:_y,meshphysical_vert:xy,meshphysical_frag:vy,meshtoon_vert:yy,meshtoon_frag:by,points_vert:My,points_frag:Sy,shadow_vert:wy,shadow_frag:Ty,sprite_vert:Ey,sprite_frag:Ay},we={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},qn={basic:{uniforms:Si([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Si([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Si([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Si([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Si([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Si([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Si([we.points,we.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Si([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Si([we.common,we.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Si([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Si([we.sprite,we.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Si([we.common,we.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Si([we.lights,we.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};qn.physical={uniforms:Si([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var hh={r:0,b:0,g:0},Cy=new It,km=new Je;km.set(-1,0,0,0,1,0,0,0,1);function Ry(r,e,t,i,n,a){let s=new $e(0),o=n===!0?0:1,c,l,h=null,p=0,d=null;function u(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let v=b.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(b){let M=!1,v=u(b);v===null?f(s,o):v&&v.isColor&&(f(v,1),M=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,M){let v=u(M);v&&(v.isCubeTexture||v.mapping===bo)?(l===void 0&&(l=new Bt(new ss(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:pa(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(km),l.material.toneMapped=ot.getTransfer(v.colorSpace)!==ft,(h!==v||p!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,d=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Bt(new co(2,2),new Mi({name:"BackgroundMaterial",uniforms:pa(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,M){b.getRGB(hh,fu(r)),t.buffers.color.setClear(hh.r,hh.g,hh.b,M,a)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,M=1){s.set(b),o=M,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,f(s,o)},render:m,addToRenderList:_,dispose:g}}function Py(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),a=n,s=!1;function o(I,L,q,G,U){let H=!1,O=p(I,G,q,L);a!==O&&(a=O,l(a.object)),H=u(I,G,q,U),H&&m(I,G,q,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,v(I,L,q,G),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return r.createVertexArray()}function l(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function p(I,L,q,G){let U=G.wireframe===!0,H=i[L.id];H===void 0&&(H={},i[L.id]=H);let O=I.isInstancedMesh===!0?I.id:0,Z=H[O];Z===void 0&&(Z={},H[O]=Z);let te=Z[q.id];te===void 0&&(te={},Z[q.id]=te);let P=te[U];return P===void 0&&(P=d(c()),te[U]=P),P}function d(I){let L=[],q=[],G=[];for(let U=0;U<t;U++)L[U]=0,q[U]=0,G[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:G,object:I,attributes:{},index:null}}function u(I,L,q,G){let U=a.attributes,H=L.attributes,O=0,Z=q.getAttributes();for(let te in Z)if(Z[te].location>=0){let oe=U[te],ve=H[te];if(ve===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;O++}return a.attributesNum!==O||a.index!==G}function m(I,L,q,G){let U={},H=L.attributes,O=0,Z=q.getAttributes();for(let te in Z)if(Z[te].location>=0){let oe=H[te];oe===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));let ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),U[te]=ve,O++}a.attributes=U,a.attributesNum=O,a.index=G}function _(){let I=a.newAttributes;for(let L=0,q=I.length;L<q;L++)I[L]=0}function f(I){g(I,0)}function g(I,L){let q=a.newAttributes,G=a.enabledAttributes,U=a.attributeDivisors;q[I]=1,G[I]===0&&(r.enableVertexAttribArray(I),G[I]=1),U[I]!==L&&(r.vertexAttribDivisor(I,L),U[I]=L)}function b(){let I=a.newAttributes,L=a.enabledAttributes;for(let q=0,G=L.length;q<G;q++)L[q]!==I[q]&&(r.disableVertexAttribArray(q),L[q]=0)}function M(I,L,q,G,U,H,O){O===!0?r.vertexAttribIPointer(I,L,q,U,H):r.vertexAttribPointer(I,L,q,G,U,H)}function v(I,L,q,G){_();let U=G.attributes,H=q.getAttributes(),O=L.defaultAttributeValues;for(let Z in H){let te=H[Z];if(te.location>=0){let P=U[Z];if(P===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),P!==void 0){let oe=P.normalized,ve=P.itemSize,ke=e.get(P);if(ke===void 0)continue;let De=ke.buffer,Xe=ke.type,$=ke.bytesPerElement,ae=Xe===r.INT||Xe===r.UNSIGNED_INT||P.gpuType===Tl;if(P.isInterleavedBufferAttribute){let z=P.data,re=z.stride,be=P.offset;if(z.isInstancedInterleavedBuffer){for(let he=0;he<te.locationSize;he++)g(te.location+he,z.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let he=0;he<te.locationSize;he++)f(te.location+he);r.bindBuffer(r.ARRAY_BUFFER,De);for(let he=0;he<te.locationSize;he++)M(te.location+he,ve/te.locationSize,Xe,oe,re*$,(be+ve/te.locationSize*he)*$,ae)}else{if(P.isInstancedBufferAttribute){for(let z=0;z<te.locationSize;z++)g(te.location+z,P.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let z=0;z<te.locationSize;z++)f(te.location+z);r.bindBuffer(r.ARRAY_BUFFER,De);for(let z=0;z<te.locationSize;z++)M(te.location+z,ve/te.locationSize,Xe,oe,ve*$,ve/te.locationSize*z*$,ae)}}else if(O!==void 0){let oe=O[Z];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(te.location,oe);break;case 3:r.vertexAttrib3fv(te.location,oe);break;case 4:r.vertexAttrib4fv(te.location,oe);break;default:r.vertexAttrib1fv(te.location,oe)}}}}b()}function S(){T();for(let I in i){let L=i[I];for(let q in L){let G=L[q];for(let U in G){let H=G[U];for(let O in H)h(H[O].object),delete H[O];delete G[U]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let q in L){let G=L[q];for(let U in G){let H=G[U];for(let O in H)h(H[O].object),delete H[O];delete G[U]}}delete i[I.id]}function E(I){for(let L in i){let q=i[L];for(let G in q){let U=q[G];if(U[I.id]===void 0)continue;let H=U[I.id];for(let O in H)h(H[O].object),delete H[O];delete U[I.id]}}}function x(I){for(let L in i){let q=i[L],G=I.isInstancedMesh===!0?I.id:0,U=q[G];if(U!==void 0){for(let H in U){let O=U[H];for(let Z in O)h(O[Z].object),delete O[Z];delete U[H]}delete q[G],Object.keys(q).length===0&&delete i[L]}}}function T(){C(),s=!0,a!==n&&(a=n,l(a.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:f,disableUnusedAttributes:b}}function Iy(r,e,t){let i;function n(c){i=c}function a(c,l){r.drawArrays(i,c,l),t.update(l,i,1)}function s(c,l,h){h!==0&&(r.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,i,1)}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Ly(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){return!(E!==xn&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Xi&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ln&&!x)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Dy(r){let e=this,t=null,i=0,n=!1,a=!1,s=new kn,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||i!==0||n;return n=d,i=p.length,u},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,u){let m=p.clippingPlanes,_=p.clipIntersection,f=p.clipShadows,g=r.get(p);if(!n||m===null||m.length===0||a&&!f)a?h(null):l();else{let b=a?0:i,M=b*4,v=g.clippingState||null;c.value=v,v=h(m,d,M,u);for(let S=0;S!==M;++S)v[S]=t[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,u,m){let _=p!==null?p.length:0,f=null;if(_!==0){if(f=c.value,m!==!0||f===null){let g=u+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<g)&&(f=new Float32Array(g));for(let M=0,v=u;M!==_;++M,v+=4)s.copy(p[M]).applyMatrix4(b,o),s.normal.toArray(f,v),f[v+3]=s.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}var Gr=4,mm=[.125,.215,.35,.446,.526,.582],fa=20,Ny=256,Ro=new hs,gm=new $e,Su=null,wu=0,Tu=0,Eu=!1,Fy=new F,uh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,a={}){let{size:s=256,position:o=Fy}=a;Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,wu,Tu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Wn,format:xn,colorSpace:js,depthBuffer:!1},n=_m(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uy(a)),this._blurMaterial=ky(a,e,t),this._ggxMaterial=Oy(a,e,t)}return n}_compileMaterial(e){let t=new Bt(new ei,e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,n,a){let c=new di(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,u=p.toneMapping;p.getClearColor(gm),p.toneMapping=Pn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(n),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new ss,new mn({name:"PMREM.Background",side:Fi,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,f=_.material,g=!1,b=e.background;b?b.isColor&&(f.color.copy(b),e.background=null,g=!0):(f.color.copy(gm),g=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[M],a.y,a.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[M],a.z)):(c.up.set(0,l[M],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[M]));let S=this._cubeSize;ms(n,v*S,M>2?S:0,S,S),p.setRenderTarget(n),g&&p.render(_,c),p.render(e,c)}p.toneMapping=u,p.autoClear=d,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===kr||e.mapping===ua;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());let a=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;let o=a.uniforms;o.envMap.value=e;let c=this._cubeSize;ms(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Ro)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;let c=s.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h),d=0+l*1.25,u=p*d,{_lodMax:m}=this,_=this._sizeLods[i],f=3*_*(i>m-Gr?i-m+Gr:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=m-t,ms(a,f,g,3*_,2*_),n.setRenderTarget(a),n.render(o,Ro),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=m-i,ms(e,f,g,3*_,2*_),n.setRenderTarget(e),n.render(o,Ro)}_blur(e,t,i,n,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let h=3,p=this._lodMeshes[n];p.material=l;let d=l.uniforms,u=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*fa-1),_=a/m,f=isFinite(a)?1+Math.floor(h*_):fa;f>fa&&We(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${fa}`);let g=[],b=0;for(let E=0;E<fa;++E){let x=E/_,T=Math.exp(-x*x/2);g.push(T),E===0?b+=T:E<f&&(b+=2*T)}for(let E=0;E<g.length;E++)g[E]=g[E]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;let v=this._sizeLods[n],S=3*v*(n>M-Gr?n-M+Gr:0),w=4*(this._cubeSize-v);ms(t,S,w,3*v,2*v),c.setRenderTarget(t),c.render(p,Ro)}};function Uy(r){let e=[],t=[],i=[],n=r,a=r-Gr+1+mm.length;for(let s=0;s<a;s++){let o=Math.pow(2,n);e.push(o);let c=1/o;s>r-Gr?c=mm[s-r+Gr-1]:s===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,p=1+l,d=[h,h,p,h,p,p,h,h,p,p,h,p],u=6,m=6,_=3,f=2,g=1,b=new Float32Array(_*m*u),M=new Float32Array(f*m*u),v=new Float32Array(g*m*u);for(let w=0;w<u;w++){let E=w%3*2/3-1,x=w>2?0:-1,T=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];b.set(T,_*m*w),M.set(d,f*m*w);let C=[w,w,w,w,w,w];v.set(C,g*m*w)}let S=new ei;S.setAttribute("position",new ui(b,_)),S.setAttribute("uv",new ui(M,f)),S.setAttribute("faceIndex",new ui(v,g)),i.push(new Bt(S,null)),n>Gr&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function _m(r,e,t){let i=new en(r,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Oy(r,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ny,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ky(r,e,t){let i=new Float32Array(fa),n=new F(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:fa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xm(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function vm(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ph=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new no(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ss(5,5,5),a=new Mi({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fi,blending:Hn});a.uniforms.tEquirect.value=t;let s=new Bt(n,a),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=pi),new vl(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}};function By(r){let e=new WeakMap,t=new WeakMap,i=null;function n(d,u=!1){return d==null?null:u?s(d):a(d)}function a(d){if(d&&d.isTexture){let u=d.mapping;if(u===Ml||u===Sl)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new ph(m.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let u=d.mapping,m=u===Ml||u===Sl,_=u===kr||u===ua;if(m||_){let f=t.get(d),g=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new uh(r)),f=m?i.fromEquirectangular(d,f):i.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{let b=d.image;return m&&b&&b.height>0||_&&b&&c(b)?(i===null&&(i=new uh(r)),f=m?i.fromEquirectangular(d):i.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function o(d,u){return u===Ml?d.mapping=kr:u===Sl&&(d.mapping=ua),d}function c(d){let u=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&u++;return u===m}function l(d){let u=d.target;u.removeEventListener("dispose",l);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:p}}function zy(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&sa("WebGLRenderer: "+i+" extension not supported."),n}}}function Vy(r,e,t,i){let n={},a=new WeakMap;function s(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete n[d.id];let u=a.get(d);u&&(e.remove(u),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function c(p){let d=p.attributes;for(let u in d)e.update(d[u],r.ARRAY_BUFFER)}function l(p){let d=[],u=p.index,m=p.attributes.position,_=0;if(m===void 0)return;if(u!==null){let b=u.array;_=u.version;for(let M=0,v=b.length;M<v;M+=3){let S=b[M+0],w=b[M+1],E=b[M+2];d.push(S,w,w,E,E,S)}}else{let b=m.array;_=m.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let S=M+0,w=M+1,E=M+2;d.push(S,w,w,E,E,S)}}let f=new(m.count>=65535?to:eo)(d,1);f.version=_;let g=a.get(p);g&&e.remove(g),a.set(p,f)}function h(p){let d=a.get(p);if(d){let u=p.index;u!==null&&d.version<u.version&&l(p)}else l(p);return a.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function Gy(r,e,t){let i;function n(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function c(p,d){r.drawElements(i,d,a,p*s),t.update(d,i,1)}function l(p,d,u){u!==0&&(r.drawElementsInstanced(i,d,a,p*s,u),t.update(d,i,u))}function h(p,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,p,0,u);let _=0;for(let f=0;f<u;f++)_+=d[f];t.update(_,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Hy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:Ye("WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Wy(r,e,t){let i=new WeakMap,n=new Lt;function a(s,o,c){let l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==p){let T=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;u===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*p),E=new $s(w,v,S,p);E.type=Ln,E.needsUpdate=!0;let x=M*4;for(let C=0;C<p;C++){let I=f[C],L=g[C],q=b[C],G=v*S*4*C;for(let U=0;U<I.count;U++){let H=U*x;u===!0&&(n.fromBufferAttribute(I,U),w[G+H+0]=n.x,w[G+H+1]=n.y,w[G+H+2]=n.z,w[G+H+3]=0),m===!0&&(n.fromBufferAttribute(L,U),w[G+H+4]=n.x,w[G+H+5]=n.y,w[G+H+6]=n.z,w[G+H+7]=0),_===!0&&(n.fromBufferAttribute(q,U),w[G+H+8]=n.x,w[G+H+9]=n.y,w[G+H+10]=n.z,w[G+H+11]=q.itemSize===4?n.w:1)}}d={count:p,texture:E,size:new Ie(v,S)},i.set(o,d),o.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let m=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:a}}function Xy(r,e,t,i,n){let a=new WeakMap;function s(l){let h=n.render.frame,p=l.geometry,d=e.get(l,p);if(a.get(d)!==h&&(e.update(d),a.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;a.get(u)!==h&&(u.update(),a.set(u,h))}return d}function o(){a=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}var qy={[Zd]:"LINEAR_TONE_MAPPING",[Jd]:"REINHARD_TONE_MAPPING",[$d]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[Qd]:"AGX_TONE_MAPPING",[eu]:"NEUTRAL_TONE_MAPPING",[Kd]:"CUSTOM_TONE_MAPPING"};function Yy(r,e,t,i,n,a){let s=new en(e,t,{type:r,depthBuffer:n,stencilBuffer:a,samples:i?4:0,depthTexture:n?new lr(e,t):void 0}),o=new en(e,t,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new ei;c.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let l=new rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Bt(c,l),p=new hs(-1,1,1,-1,0,1),d=null,u=null,m=!1,_,f=null,g=[],b=!1;this.setSize=function(M,v){s.setSize(M,v),o.setSize(M,v);for(let S=0;S<g.length;S++){let w=g[S];w.setSize&&w.setSize(M,v)}},this.setEffects=function(M){g=M,b=g.length>0&&g[0].isRenderPass===!0;let v=s.width,S=s.height;for(let w=0;w<g.length;w++){let E=g[w];E.setSize&&E.setSize(v,S)}},this.begin=function(M,v){if(m||M.toneMapping===Pn&&g.length===0)return!1;if(f=v,v!==null){let S=v.width,w=v.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return b===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=Pn,!0},this.hasRenderPass=function(){return b},this.end=function(M,v){M.toneMapping=_,m=!0;let S=s,w=o;for(let E=0;E<g.length;E++){let x=g[E];if(x.enabled!==!1&&(x.render(M,w,S,v),x.needsSwap!==!1)){let T=S;S=w,w=T}}if(d!==M.outputColorSpace||u!==M.toneMapping){d=M.outputColorSpace,u=M.toneMapping,l.defines={},ot.getTransfer(d)===ft&&(l.defines.SRGB_TRANSFER="");let E=qy[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(f),M.render(h,p),f=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Bm=new Wi,Ru=new lr(1,1),zm=new $s,Vm=new Yc,Gm=new no,ym=[],bm=[],Mm=new Float32Array(16),Sm=new Float32Array(9),wm=new Float32Array(4);function _s(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,a=ym[n];if(a===void 0&&(a=new Float32Array(n),ym[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function ti(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ii(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function gh(r,e){let t=bm[e];t===void 0&&(t=new Int32Array(e),bm[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function jy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ti(t,e))return;r.uniform2fv(this.addr,e),ii(t,e)}}function Jy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ti(t,e))return;r.uniform3fv(this.addr,e),ii(t,e)}}function $y(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ti(t,e))return;r.uniform4fv(this.addr,e),ii(t,e)}}function Ky(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ti(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ii(t,e)}else{if(ti(t,i))return;wm.set(i),r.uniformMatrix2fv(this.addr,!1,wm),ii(t,i)}}function Qy(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ti(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ii(t,e)}else{if(ti(t,i))return;Sm.set(i),r.uniformMatrix3fv(this.addr,!1,Sm),ii(t,i)}}function eb(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ti(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ii(t,e)}else{if(ti(t,i))return;Mm.set(i),r.uniformMatrix4fv(this.addr,!1,Mm),ii(t,i)}}function tb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ib(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ti(t,e))return;r.uniform2iv(this.addr,e),ii(t,e)}}function nb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ti(t,e))return;r.uniform3iv(this.addr,e),ii(t,e)}}function rb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ti(t,e))return;r.uniform4iv(this.addr,e),ii(t,e)}}function ab(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ti(t,e))return;r.uniform2uiv(this.addr,e),ii(t,e)}}function ob(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ti(t,e))return;r.uniform3uiv(this.addr,e),ii(t,e)}}function cb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ti(t,e))return;r.uniform4uiv(this.addr,e),ii(t,e)}}function lb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(Ru.compareFunction=t.isReversedDepthBuffer()?lh:ch,a=Ru):a=Bm,t.setTexture2D(e||a,n)}function hb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Vm,n)}function db(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Gm,n)}function ub(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||zm,n)}function pb(r){switch(r){case 5126:return jy;case 35664:return Zy;case 35665:return Jy;case 35666:return $y;case 35674:return Ky;case 35675:return Qy;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return ib;case 35668:case 35672:return nb;case 35669:case 35673:return rb;case 5125:return ab;case 36294:return sb;case 36295:return ob;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return ub}}function fb(r,e){r.uniform1fv(this.addr,e)}function mb(r,e){let t=_s(e,this.size,2);r.uniform2fv(this.addr,t)}function gb(r,e){let t=_s(e,this.size,3);r.uniform3fv(this.addr,t)}function _b(r,e){let t=_s(e,this.size,4);r.uniform4fv(this.addr,t)}function xb(r,e){let t=_s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function vb(r,e){let t=_s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yb(r,e){let t=_s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bb(r,e){r.uniform1iv(this.addr,e)}function Mb(r,e){r.uniform2iv(this.addr,e)}function Sb(r,e){r.uniform3iv(this.addr,e)}function wb(r,e){r.uniform4iv(this.addr,e)}function Tb(r,e){r.uniform1uiv(this.addr,e)}function Eb(r,e){r.uniform2uiv(this.addr,e)}function Ab(r,e){r.uniform3uiv(this.addr,e)}function Cb(r,e){r.uniform4uiv(this.addr,e)}function Rb(r,e,t){let i=this.cache,n=e.length,a=gh(t,n);ti(i,a)||(r.uniform1iv(this.addr,a),ii(i,a));let s;this.type===r.SAMPLER_2D_SHADOW?s=Ru:s=Bm;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||s,a[o])}function Pb(r,e,t){let i=this.cache,n=e.length,a=gh(t,n);ti(i,a)||(r.uniform1iv(this.addr,a),ii(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Vm,a[s])}function Ib(r,e,t){let i=this.cache,n=e.length,a=gh(t,n);ti(i,a)||(r.uniform1iv(this.addr,a),ii(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Gm,a[s])}function Lb(r,e,t){let i=this.cache,n=e.length,a=gh(t,n);ti(i,a)||(r.uniform1iv(this.addr,a),ii(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||zm,a[s])}function Db(r){switch(r){case 5126:return fb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return xb;case 35675:return vb;case 35676:return yb;case 5124:case 35670:return bb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return wb;case 5125:return Tb;case 36294:return Eb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Lb}}var Pu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pb(t.type)}},Iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Db(t.type)}},Lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let a=0,s=n.length;a!==s;++a){let o=n[a];o.setValue(e,t[o.id],i)}}},Au=/(\w+)(\])?(\[|\.)?/g;function Tm(r,e){r.seq.push(e),r.map[e.id]=e}function Nb(r,e,t){let i=r.name,n=i.length;for(Au.lastIndex=0;;){let a=Au.exec(i),s=Au.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===n){Tm(t,l===void 0?new Pu(o,r,e):new Iu(o,r,e));break}else{let p=t.map[o];p===void 0&&(p=new Lu(o),Tm(t,p)),t=p}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);Nb(o,c,this)}let n=[],a=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):a.push(s);n.length>0&&(this.seq=n.concat(a))}setValue(e,t,i,n){let a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){let o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,a=e.length;n!==a;++n){let s=e[n];s.id in t&&i.push(s)}return i}};function Em(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Fb=37297,Ub=0;function Ob(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){let o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}var Am=new Je;function kb(r){ot._getMatrix(Am,ot.workingColorSpace,r);let e=`mat3( ${Am.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case Zs:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cm(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),a=(r.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Ob(r.getShaderSource(e),o)}else return a}function Bb(r,e){let t=kb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var zb={[Zd]:"Linear",[Jd]:"Reinhard",[$d]:"Cineon",[yo]:"ACESFilmic",[Qd]:"AgX",[eu]:"Neutral",[Kd]:"Custom"};function Vb(r,e){let t=zb[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dh=new F;function Gb(){ot.getLuminanceCoefficients(dh);let r=dh.x.toFixed(4),e=dh.y.toFixed(4),t=dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Wb(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xb(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let a=r.getActiveAttrib(e,n),s=a.name,o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Io(r){return r!==""}function Rm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(r){return r.replace(qb,jb)}var Yb=new Map;function jb(r,e){let t=Qe[e];if(t===void 0){let i=Yb.get(e);if(i!==void 0)t=Qe[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Du(t)}var Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(r){return r.replace(Zb,Jb)}function Jb(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Lm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $b={[vo]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function Kb(r){return $b[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qb={[kr]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function e1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Qb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var t1={[ua]:"ENVMAP_MODE_REFRACTION"};function i1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n1={[jd]:"ENVMAP_BLENDING_MULTIPLY",[$f]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function r1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":n1[r.combine]||"ENVMAP_BLENDING_NONE"}function a1(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function s1(r,e,t,i){let n=r.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,c=Kb(t),l=e1(t),h=i1(t),p=r1(t),d=a1(t),u=Hb(t),m=Wb(a),_=n.createProgram(),f,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Io).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Io).join(`
`),g.length>0&&(g+=`
`)):(f=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),g=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Vb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Bb("linearToOutputTexel",t.outputColorSpace),Gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),s=Du(s),s=Rm(s,t),s=Pm(s,t),o=Du(o),o=Rm(o,t),o=Pm(o,t),s=Im(s),o=Im(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=b+f+s,v=b+g+o,S=Em(n,n.VERTEX_SHADER,M),w=Em(n,n.FRAGMENT_SHADER,v);n.attachShader(_,S),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(I){if(r.debug.checkShaderErrors){let L=n.getProgramInfoLog(_)||"",q=n.getShaderInfoLog(S)||"",G=n.getShaderInfoLog(w)||"",U=L.trim(),H=q.trim(),O=G.trim(),Z=!0,te=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,S,w);else{let P=Cm(n,S,"vertex"),oe=Cm(n,w,"fragment");Ye("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+P+`
`+oe)}else U!==""?We("WebGLProgram: Program Info Log:",U):(H===""||O==="")&&(te=!1);te&&(I.diagnostics={runnable:Z,programLog:U,vertexShader:{log:H,prefix:f},fragmentShader:{log:O,prefix:g}})}n.deleteShader(S),n.deleteShader(w),x=new gs(n,_),T=Xb(n,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(_,Fb)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ub++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}var o1=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fu(e),t.set(e,i)),i}},Fu=class{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}};function c1(r){return r===Vr||r===Ao||r===Co}function l1(r,e,t,i,n,a){let s=new Ks,o=new Nu,c=new Set,l=[],h=new Map,p=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,I,L,q){let G=I.fog,U=L.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||H,O),te=Z&&Z.mapping===bo?Z.image.height:null,P=u[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let oe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ve=oe!==void 0?oe.length:0,ke=0;U.morphAttributes.position!==void 0&&(ke=1),U.morphAttributes.normal!==void 0&&(ke=2),U.morphAttributes.color!==void 0&&(ke=3);let De,Xe,$,ae;if(P){let ne=qn[P];De=ne.vertexShader,Xe=ne.fragmentShader}else{De=x.vertexShader,Xe=x.fragmentShader;let ne=o.getVertexShaderStage(x),Ge=o.getFragmentShaderStage(x);o.update(x,ne,Ge),$=ne.id,ae=Ge.id}let z=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),be=L.isInstancedMesh===!0,he=L.isBatchedMesh===!0,Ee=!!x.map,fe=!!x.matcap,Ne=!!Z,Ue=!!x.aoMap,Be=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,ct=!!x.normalMap,pt=!!x.displacementMap,_t=!!x.emissiveMap,je=!!x.metalnessMap,ut=!!x.roughnessMap,D=x.anisotropy>0,At=x.clearcoat>0,qe=x.dispersion>0,R=x.iridescence>0,y=x.sheen>0,B=x.transmission>0,W=D&&!!x.anisotropyMap,J=At&&!!x.clearcoatMap,ue=At&&!!x.clearcoatNormalMap,le=At&&!!x.clearcoatRoughnessMap,K=R&&!!x.iridescenceMap,Q=R&&!!x.iridescenceThicknessMap,ge=y&&!!x.sheenColorMap,Re=y&&!!x.sheenRoughnessMap,_e=!!x.specularMap,me=!!x.specularColorMap,de=!!x.specularIntensityMap,Fe=B&&!!x.transmissionMap,Ve=B&&!!x.thicknessMap,N=!!x.gradientMap,pe=!!x.alphaMap,ee=x.alphaTest>0,xe=!!x.alphaHash,ye=!!x.extensions,ie=Pn;x.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ie=r.toneMapping);let se={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:Xe,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:he,batchingColor:he&&L._colorsTexture!==null,instancing:be,instancingColor:be&&L.instanceColor!==null,instancingMorph:be&&L.morphTexture!==null,outputColorSpace:z===null?r.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:fe,envMap:Ne,envMapMode:Ne&&Z.mapping,envMapCubeUVHeight:te,aoMap:Ue,lightMap:Be,bumpMap:Y,normalMap:ct,displacementMap:pt,emissiveMap:_t,normalMapObjectSpace:ct&&x.normalMapType===tm,normalMapTangentSpace:ct&&x.normalMapType===oh,packedNormalMap:ct&&x.normalMapType===oh&&c1(x.normalMap.format),metalnessMap:je,roughnessMap:ut,anisotropy:D,anisotropyMap:W,clearcoat:At,clearcoatMap:J,clearcoatNormalMap:ue,clearcoatRoughnessMap:le,dispersion:qe,iridescence:R,iridescenceMap:K,iridescenceThicknessMap:Q,sheen:y,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:me,specularIntensityMap:de,transmission:B,transmissionMap:Fe,thicknessMap:Ve,gradientMap:N,opaque:x.transparent===!1&&x.blending===oa&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:xe,combine:x.combine,mapUv:Ee&&m(x.map.channel),aoMapUv:Ue&&m(x.aoMap.channel),lightMapUv:Be&&m(x.lightMap.channel),bumpMapUv:Y&&m(x.bumpMap.channel),normalMapUv:ct&&m(x.normalMap.channel),displacementMapUv:pt&&m(x.displacementMap.channel),emissiveMapUv:_t&&m(x.emissiveMap.channel),metalnessMapUv:je&&m(x.metalnessMap.channel),roughnessMapUv:ut&&m(x.roughnessMap.channel),anisotropyMapUv:W&&m(x.anisotropyMap.channel),clearcoatMapUv:J&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(x.sheenRoughnessMap.channel),specularMapUv:_e&&m(x.specularMap.channel),specularColorMapUv:me&&m(x.specularColorMap.channel),specularIntensityMapUv:de&&m(x.specularIntensityMap.channel),transmissionMapUv:Fe&&m(x.transmissionMap.channel),thicknessMapUv:Ve&&m(x.thicknessMap.channel),alphaMapUv:pe&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ct||D),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Ee||pe),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:re,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ke,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===Fi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function f(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(T,x),b(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function M(x){let T=u[x.type],C;if(T){let I=qn[T];C=pm.clone(I.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new s1(r,T,x,n),l.push(C),h.set(T,C)),C}function S(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:E}}function h1(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,c){r.get(s)[o]=c}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function d1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Dm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nm(){let r=[],e=0,t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,m,_,f,g){let b=r[e];return b===void 0?(b={id:d.id,object:d,geometry:u,material:m,materialVariant:s(d),groupOrder:_,renderOrder:d.renderOrder,z:f,group:g},r[e]=b):(b.id=d.id,b.object=d,b.geometry=u,b.material=m,b.materialVariant=s(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=f,b.group=g),e++,b}function c(d,u,m,_,f,g){let b=o(d,u,m,_,f,g);m.transmission>0?i.push(b):m.transparent===!0?n.push(b):t.push(b)}function l(d,u,m,_,f,g){let b=o(d,u,m,_,f,g);m.transmission>0?i.unshift(b):m.transparent===!0?n.unshift(b):t.unshift(b)}function h(d,u,m){t.length>1&&t.sort(d||d1),i.length>1&&i.sort(u||Dm),n.length>1&&n.sort(u||Dm),m&&(t.reverse(),i.reverse(),n.reverse())}function p(){for(let d=e,u=r.length;d<u;d++){let m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:c,unshift:l,finish:p,sort:h}}function u1(){let r=new WeakMap;function e(i,n){let a=r.get(i),s;return a===void 0?(s=new Nm,r.set(i,[s])):n>=a.length?(s=new Nm,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function p1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function f1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var m1=0;function g1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _1(r){let e=new p1,t=f1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let n=new F,a=new It,s=new It;function o(l){let h=0,p=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let u=0,m=0,_=0,f=0,g=0,b=0,M=0,v=0,S=0,w=0,E=0;l.sort(g1);for(let T=0,C=l.length;T<C;T++){let I=l[T],L=I.color,q=I.intensity,G=I.distance,U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vr?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=L.r*q,p+=L.g*q,d+=L.b*q;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],q);E++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let O=I.shadow,Z=t.get(I);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.directionalShadow[u]=Z,i.directionalShadowMap[u]=U,i.directionalShadowMatrix[u]=I.shadow.matrix,b++}i.directional[u]=H,u++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(L).multiplyScalar(q),H.distance=G,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[_]=H;let O=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,O.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=O.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=U,v++}_++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(L).multiplyScalar(q),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[f]=H,f++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let O=I.shadow,Z=t.get(I);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=H,m++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(q),H.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[g]=H,g++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;let x=i.hash;(x.directionalLength!==u||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==f||x.hemiLength!==g||x.numDirectionalShadows!==b||x.numPointShadows!==M||x.numSpotShadows!==v||x.numSpotMaps!==S||x.numLightProbes!==E)&&(i.directional.length=u,i.spot.length=_,i.rectArea.length=f,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,x.directionalLength=u,x.pointLength=m,x.spotLength=_,x.rectAreaLength=f,x.hemiLength=g,x.numDirectionalShadows=b,x.numPointShadows=M,x.numSpotShadows=v,x.numSpotMaps=S,x.numLightProbes=E,i.version=m1++)}function c(l,h){let p=0,d=0,u=0,m=0,_=0,f=h.matrixWorldInverse;for(let g=0,b=l.length;g<b;g++){let M=l[g];if(M.isDirectionalLight){let v=i.directional[p];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(f),p++}else if(M.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(f),u++}else if(M.isRectAreaLight){let v=i.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),s.identity(),a.copy(M.matrixWorld),a.premultiply(f),s.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),m++}else if(M.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(f),_++}}}return{setup:o,setupView:c,state:i}}function Fm(r){let e=new _1(r),t=[],i=[],n=[];function a(d){p.camera=d,t.length=0,i.length=0,n.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function c(d){n.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let p={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:l,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function x1(r){let e=new WeakMap;function t(n,a=0){let s=e.get(n),o;return s===void 0?(o=new Fm(r),e.set(n,[o])):a>=s.length?(o=new Fm(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b1=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],M1=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Um=new It,Po=new F,Cu=new F;function S1(r,e,t){let i=new rs,n=new Ie,a=new Ie,s=new Lt,o=new sl,c=new ol,l={},h=t.maxTextureSize,p={[sr]:Fi,[Fi]:sr,[_n]:_n},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:v1,fragmentShader:y1}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let m=new ei;m.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Bt(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let g=this.type;this.render=function(w,E,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===Lf&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vo);let T=r.getRenderTarget(),C=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Hn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let q=g!==this.type;q&&E.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(U=>U.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,U=w.length;G<U;G++){let H=w[G],O=H.shadow;if(O===void 0){We("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let Z=O.getFrameExtents();n.multiply(Z),a.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/Z.x),n.x=a.x*Z.x,O.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/Z.y),n.y=a.y*Z.y,O.mapSize.y=a.y));let te=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=te,O.map===null||q===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ds){if(H.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new en(n.x,n.y,{format:Vr,type:Wn,minFilter:pi,magFilter:pi,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new lr(n.x,n.y,Ln),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=zn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ci,O.map.depthTexture.magFilter=ci}else H.isPointLight?(O.map=new ph(n.x),O.map.depthTexture=new Zc(n.x,In)):(O.map=new en(n.x,n.y),O.map.depthTexture=new lr(n.x,n.y,In)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=zn,this.type===vo?(O.map.depthTexture.compareFunction=te?lh:ch,O.map.depthTexture.minFilter=pi,O.map.depthTexture.magFilter=pi):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ci,O.map.depthTexture.magFilter=ci);O.camera.updateProjectionMatrix()}let P=O.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<P;oe++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,oe),r.clear();else{oe===0&&(r.setRenderTarget(O.map),r.clear());let ve=O.getViewport(oe);s.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),L.viewport(s)}if(H.isPointLight){let ve=O.camera,ke=O.matrix,De=H.distance||ve.far;De!==ve.far&&(ve.far=De,ve.updateProjectionMatrix()),Po.setFromMatrixPosition(H.matrixWorld),ve.position.copy(Po),Cu.copy(ve.position),Cu.add(b1[oe]),ve.up.copy(M1[oe]),ve.lookAt(Cu),ve.updateMatrixWorld(),ke.makeTranslation(-Po.x,-Po.y,-Po.z),Um.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Um,ve.coordinateSystem,ve.reversedDepth)}else O.updateMatrices(H);i=O.getFrustum(),v(E,x,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===ds&&b(O,x),O.needsUpdate=!1}g=this.type,f.needsUpdate=!1,r.setRenderTarget(T,C,I)};function b(w,E){let x=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new en(n.x,n.y,{format:Vr,type:Wn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,x,d,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,x,u,_,null)}function M(w,E,x,T){let C=null,I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=C.uuid,q=E.uuid,G=l[L];G===void 0&&(G={},l[L]=G);let U=G[q];U===void 0&&(U=C.clone(),G[q]=U,E.addEventListener("dispose",S)),C=U}if(C.visible=E.visible,C.wireframe=E.wireframe,T===ds?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:p[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=r.properties.get(C);L.light=x}return C}function v(w,E,x,T,C){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ds)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let q=e.update(w),G=w.material;if(Array.isArray(G)){let U=q.groups;for(let H=0,O=U.length;H<O;H++){let Z=U[H],te=G[Z.materialIndex];if(te&&te.visible){let P=M(w,te,T,C);w.onBeforeShadow(r,w,E,x,q,P,Z),r.renderBufferDirect(x,null,q,P,w,Z),w.onAfterShadow(r,w,E,x,q,P,Z)}}}else if(G.visible){let U=M(w,G,T,C);w.onBeforeShadow(r,w,E,x,q,U,null),r.renderBufferDirect(x,null,q,U,w,null),w.onAfterShadow(r,w,E,x,q,U,null)}}let L=w.children;for(let q=0,G=L.length;q<G;q++)v(L[q],E,x,T,C)}function S(w){w.target.removeEventListener("dispose",S);for(let x in l){let T=l[x],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function w1(r,e){function t(){let N=!1,pe=new Lt,ee=null,xe=new Lt(0,0,0,0);return{setMask:function(ye){ee!==ye&&!N&&(r.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){N=ye},setClear:function(ye,ie,se,ne,Ge){Ge===!0&&(ye*=ne,ie*=ne,se*=ne),pe.set(ye,ie,se,ne),xe.equals(pe)===!1&&(r.clearColor(ye,ie,se,ne),xe.copy(pe))},reset:function(){N=!1,ee=null,xe.set(-1,0,0,0)}}}function i(){let N=!1,pe=!1,ee=null,xe=null,ye=null;return{setReversed:function(ie){if(pe!==ie){let se=e.get("EXT_clip_control");ie?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;let ne=ye;ye=null,this.setClear(ne)}},getReversed:function(){return pe},setTest:function(ie){ie?z(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!N&&(r.depthMask(ie),ee=ie)},setFunc:function(ie){if(pe&&(ie=dm[ie]),xe!==ie){switch(ie){case Fc:r.depthFunc(r.NEVER);break;case Uc:r.depthFunc(r.ALWAYS);break;case Oc:r.depthFunc(r.LESS);break;case ca:r.depthFunc(r.LEQUAL);break;case kc:r.depthFunc(r.EQUAL);break;case Bc:r.depthFunc(r.GEQUAL);break;case zc:r.depthFunc(r.GREATER);break;case Vc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){ye!==ie&&(ye=ie,pe&&(ie=1-ie),r.clearDepth(ie))},reset:function(){N=!1,ee=null,xe=null,ye=null,pe=!1}}}function n(){let N=!1,pe=null,ee=null,xe=null,ye=null,ie=null,se=null,ne=null,Ge=null;return{setTest:function(ce){N||(ce?z(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(ce){pe!==ce&&!N&&(r.stencilMask(ce),pe=ce)},setFunc:function(ce,He,Pe){(ee!==ce||xe!==He||ye!==Pe)&&(r.stencilFunc(ce,He,Pe),ee=ce,xe=He,ye=Pe)},setOp:function(ce,He,Pe){(ie!==ce||se!==He||ne!==Pe)&&(r.stencilOp(ce,He,Pe),ie=ce,se=He,ne=Pe)},setLocked:function(ce){N=ce},setClear:function(ce){Ge!==ce&&(r.clearStencil(ce),Ge=ce)},reset:function(){N=!1,pe=null,ee=null,xe=null,ye=null,ie=null,se=null,ne=null,Ge=null}}}let a=new t,s=new i,o=new n,c=new WeakMap,l=new WeakMap,h={},p={},d={},u=new WeakMap,m=[],_=null,f=!1,g=null,b=null,M=null,v=null,S=null,w=null,E=null,x=new $e(0,0,0),T=0,C=!1,I=null,L=null,q=null,G=null,U=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),O=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),O=Z>=2);let P=null,oe={},ve=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),De=new Lt().fromArray(ve),Xe=new Lt().fromArray(ke);function $(N,pe,ee,xe){let ye=new Uint8Array(4),ie=r.createTexture();r.bindTexture(N,ie),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<ee;se++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(pe+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return ie}let ae={};ae[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),z(r.DEPTH_TEST),s.setFunc(ca),Y(!1),ct(Xd),z(r.CULL_FACE),Ue(Hn);function z(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function re(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function be(N,pe){return d[N]!==pe?(r.bindFramebuffer(N,pe),d[N]=pe,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=pe),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function he(N,pe){let ee=m,xe=!1;if(N){ee=u.get(pe),ee===void 0&&(ee=[],u.set(pe,ee));let ye=N.textures;if(ee.length!==ye.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,se=ye.length;ie<se;ie++)ee[ie]=r.COLOR_ATTACHMENT0+ie;ee.length=ye.length,xe=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,xe=!0);xe&&r.drawBuffers(ee)}function Ee(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let fe={[Dr]:r.FUNC_ADD,[Nf]:r.FUNC_SUBTRACT,[Ff]:r.FUNC_REVERSE_SUBTRACT};fe[Uf]=r.MIN,fe[Of]=r.MAX;let Ne={[kf]:r.ZERO,[Bf]:r.ONE,[zf]:r.SRC_COLOR,[Dc]:r.SRC_ALPHA,[qf]:r.SRC_ALPHA_SATURATE,[Wf]:r.DST_COLOR,[Gf]:r.DST_ALPHA,[Vf]:r.ONE_MINUS_SRC_COLOR,[Nc]:r.ONE_MINUS_SRC_ALPHA,[Xf]:r.ONE_MINUS_DST_COLOR,[Hf]:r.ONE_MINUS_DST_ALPHA,[Yf]:r.CONSTANT_COLOR,[jf]:r.ONE_MINUS_CONSTANT_COLOR,[Zf]:r.CONSTANT_ALPHA,[Jf]:r.ONE_MINUS_CONSTANT_ALPHA};function Ue(N,pe,ee,xe,ye,ie,se,ne,Ge,ce){if(N===Hn){f===!0&&(re(r.BLEND),f=!1);return}if(f===!1&&(z(r.BLEND),f=!0),N!==Df){if(N!==g||ce!==C){if((b!==Dr||S!==Dr)&&(r.blendEquation(r.FUNC_ADD),b=Dr,S=Dr),ce)switch(N){case oa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case da:r.blendFunc(r.ONE,r.ONE);break;case qd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case oa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case da:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case qd:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yd:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}M=null,v=null,w=null,E=null,x.set(0,0,0),T=0,g=N,C=ce}return}ye=ye||pe,ie=ie||ee,se=se||xe,(pe!==b||ye!==S)&&(r.blendEquationSeparate(fe[pe],fe[ye]),b=pe,S=ye),(ee!==M||xe!==v||ie!==w||se!==E)&&(r.blendFuncSeparate(Ne[ee],Ne[xe],Ne[ie],Ne[se]),M=ee,v=xe,w=ie,E=se),(ne.equals(x)===!1||Ge!==T)&&(r.blendColor(ne.r,ne.g,ne.b,Ge),x.copy(ne),T=Ge),g=N,C=!1}function Be(N,pe){N.side===_n?re(r.CULL_FACE):z(r.CULL_FACE);let ee=N.side===Fi;pe&&(ee=!ee),Y(ee),N.blending===oa&&N.transparent===!1?Ue(Hn):Ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),a.setMask(N.colorWrite);let xe=N.stencilWrite;o.setTest(xe),xe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?z(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Y(N){I!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),I=N)}function ct(N){N!==Pf?(z(r.CULL_FACE),N!==L&&(N===Xd?r.cullFace(r.BACK):N===If?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),L=N}function pt(N){N!==q&&(O&&r.lineWidth(N),q=N)}function _t(N,pe,ee){N?(z(r.POLYGON_OFFSET_FILL),(G!==pe||U!==ee)&&(G=pe,U=ee,s.getReversed()&&(pe=-pe),r.polygonOffset(pe,ee))):re(r.POLYGON_OFFSET_FILL)}function je(N){N?z(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function ut(N){N===void 0&&(N=r.TEXTURE0+H-1),P!==N&&(r.activeTexture(N),P=N)}function D(N,pe,ee){ee===void 0&&(P===null?ee=r.TEXTURE0+H-1:ee=P);let xe=oe[ee];xe===void 0&&(xe={type:void 0,texture:void 0},oe[ee]=xe),(xe.type!==N||xe.texture!==pe)&&(P!==ee&&(r.activeTexture(ee),P=ee),r.bindTexture(N,pe||ae[N]),xe.type=N,xe.texture=pe)}function At(){let N=oe[P];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function qe(){try{r.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function y(){try{r.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function B(){try{r.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ue(){try{r.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function le(){try{r.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function K(){try{r.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Q(){try{r.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ge(N){return p[N]!==void 0?p[N]:r.getParameter(N)}function Re(N,pe){p[N]!==pe&&(r.pixelStorei(N,pe),p[N]=pe)}function _e(N){De.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),De.copy(N))}function me(N){Xe.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Xe.copy(N))}function de(N,pe){let ee=l.get(pe);ee===void 0&&(ee=new WeakMap,l.set(pe,ee));let xe=ee.get(N);xe===void 0&&(xe=r.getUniformBlockIndex(pe,N.name),ee.set(N,xe))}function Fe(N,pe){let xe=l.get(pe).get(N);c.get(pe)!==xe&&(r.uniformBlockBinding(pe,xe,N.__bindingPointIndex),c.set(pe,xe))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},p={},P=null,oe={},d={},u=new WeakMap,m=[],_=null,f=!1,g=null,b=null,M=null,v=null,S=null,w=null,E=null,x=new $e(0,0,0),T=0,C=!1,I=null,L=null,q=null,G=null,U=null,De.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:z,disable:re,bindFramebuffer:be,drawBuffers:he,useProgram:Ee,setBlending:Ue,setMaterial:Be,setFlipSided:Y,setCullFace:ct,setLineWidth:pt,setPolygonOffset:_t,setScissorTest:je,activeTexture:ut,bindTexture:D,unbindTexture:At,compressedTexImage2D:qe,compressedTexImage3D:R,texImage2D:K,texImage3D:Q,pixelStorei:Re,getParameter:ge,updateUBOMapping:de,uniformBlockBinding:Fe,texStorage2D:ue,texStorage3D:le,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:_e,viewport:me,reset:Ve}}function T1(r,e,t,i,n,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap,p=new Set,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return m?new OffscreenCanvas(R,y):Js("canvas")}function f(R,y,B){let W=1,J=qe(R);if((J.width>B||J.height>B)&&(W=B/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ue=Math.floor(W*J.width),le=Math.floor(W*J.height);d===void 0&&(d=_(ue,le));let K=y?_(ue,le):d;return K.width=ue,K.height=le,K.getContext("2d").drawImage(R,0,0,ue,le),We("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+le+")."),K}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function b(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,y,B,W,J,ue=!1){if(R!==null){if(r[R]!==void 0)return r[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;W&&(le=e.get("EXT_texture_norm16"),le||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===r.RED&&(B===r.FLOAT&&(K=r.R32F),B===r.HALF_FLOAT&&(K=r.R16F),B===r.UNSIGNED_BYTE&&(K=r.R8),B===r.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),B===r.SHORT&&le&&(K=le.R16_SNORM_EXT)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.R8UI),B===r.UNSIGNED_SHORT&&(K=r.R16UI),B===r.UNSIGNED_INT&&(K=r.R32UI),B===r.BYTE&&(K=r.R8I),B===r.SHORT&&(K=r.R16I),B===r.INT&&(K=r.R32I)),y===r.RG&&(B===r.FLOAT&&(K=r.RG32F),B===r.HALF_FLOAT&&(K=r.RG16F),B===r.UNSIGNED_BYTE&&(K=r.RG8),B===r.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),B===r.SHORT&&le&&(K=le.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RG8UI),B===r.UNSIGNED_SHORT&&(K=r.RG16UI),B===r.UNSIGNED_INT&&(K=r.RG32UI),B===r.BYTE&&(K=r.RG8I),B===r.SHORT&&(K=r.RG16I),B===r.INT&&(K=r.RG32I)),y===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGB8UI),B===r.UNSIGNED_SHORT&&(K=r.RGB16UI),B===r.UNSIGNED_INT&&(K=r.RGB32UI),B===r.BYTE&&(K=r.RGB8I),B===r.SHORT&&(K=r.RGB16I),B===r.INT&&(K=r.RGB32I)),y===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),B===r.UNSIGNED_INT&&(K=r.RGBA32UI),B===r.BYTE&&(K=r.RGBA8I),B===r.SHORT&&(K=r.RGBA16I),B===r.INT&&(K=r.RGBA32I)),y===r.RGB&&(B===r.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),B===r.SHORT&&le&&(K=le.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),y===r.RGBA){let Q=ue?Zs:ot.getTransfer(J);B===r.FLOAT&&(K=r.RGBA32F),B===r.HALF_FLOAT&&(K=r.RGBA16F),B===r.UNSIGNED_BYTE&&(K=Q===ft?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),B===r.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,y){let B;return R?y===null||y===In||y===ps?B=r.DEPTH24_STENCIL8:y===Ln?B=r.DEPTH32F_STENCIL8:y===us&&(B=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===In||y===ps?B=r.DEPTH_COMPONENT24:y===Ln?B=r.DEPTH_COMPONENT32F:y===us&&(B=r.DEPTH_COMPONENT16),B}function w(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==ci&&R.minFilter!==pi?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){let y=R.target;y.removeEventListener("dispose",E),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function x(R){let y=R.target;y.removeEventListener("dispose",x),I(y)}function T(R){let y=i.get(R);if(y.__webglInit===void 0)return;let B=R.source,W=u.get(B);if(W){let J=W[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys(W).length===0&&u.delete(B)}i.remove(R)}function C(R){let y=i.get(R);r.deleteTexture(y.__webglTexture);let B=R.source,W=u.get(B);delete W[y.__cacheKey],s.memory.textures--}function I(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let J=0;J<y.__webglFramebuffer[W].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[W][J]);else r.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)r.deleteFramebuffer(y.__webglFramebuffer[W]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=R.textures;for(let W=0,J=B.length;W<J;W++){let ue=i.get(B[W]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),s.memory.textures--),i.remove(B[W])}i.remove(R)}let L=0;function q(){L=0}function G(){return L}function U(R){L=R}function H(){let R=L;return R>=n.maxTextures&&We("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),L+=1,R}function O(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Z(R,y){let B=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let W=R.image;if(W===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{re(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function te(R,y){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){re(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function P(R,y){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){re(B,R,y);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function oe(R,y){let B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){be(B,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}let ve={[Gc]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[Hc]:r.MIRRORED_REPEAT},ke={[ci]:r.NEAREST,[Qf]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[wl]:r.LINEAR_MIPMAP_NEAREST,[Br]:r.LINEAR_MIPMAP_LINEAR},De={[im]:r.NEVER,[om]:r.ALWAYS,[nm]:r.LESS,[ch]:r.LEQUAL,[rm]:r.EQUAL,[lh]:r.GEQUAL,[am]:r.GREATER,[sm]:r.NOTEQUAL};function Xe(R,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===pi||y.magFilter===wl||y.magFilter===Mo||y.magFilter===Br||y.minFilter===pi||y.minFilter===wl||y.minFilter===Mo||y.minFilter===Br)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ve[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ve[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ve[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ke[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ke[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,De[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ci||y.minFilter!==Mo&&y.minFilter!==Br||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function $(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",E));let W=y.source,J=u.get(W);J===void 0&&(J={},u.set(W,J));let ue=O(y);if(ue!==R.__cacheKey){J[ue]===void 0&&(J[ue]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,B=!0),J[ue].usedTimes++;let le=J[R.__cacheKey];le!==void 0&&(J[R.__cacheKey].usedTimes--,le.usedTimes===0&&C(y)),R.__cacheKey=ue,R.__webglTexture=J[ue].texture}return B}function ae(R,y,B){return Math.floor(Math.floor(R/B)/y)}function z(R,y,B,W){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,B,W,y.data);else{ue.sort((Re,_e)=>Re.start-_e.start);let le=0;for(let Re=1;Re<ue.length;Re++){let _e=ue[le],me=ue[Re],de=_e.start+_e.count,Fe=ae(me.start,y.width,4),Ve=ae(_e.start,y.width,4);me.start<=de+1&&Fe===Ve&&ae(me.start+me.count-1,y.width,4)===Fe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++le,ue[le]=me)}ue.length=le+1;let K=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),ge=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Re=0,_e=ue.length;Re<_e;Re++){let me=ue[Re],de=Math.floor(me.start/4),Fe=Math.ceil(me.count/4),Ve=de%y.width,N=Math.floor(de/y.width),pe=Fe,ee=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(r.UNPACK_SKIP_ROWS,N),t.texSubImage2D(r.TEXTURE_2D,0,Ve,N,pe,ee,B,W,y.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,K),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,ge)}}function re(R,y,B){let W=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=r.TEXTURE_3D);let J=$(R,y),ue=y.source;t.bindTexture(W,R.__webglTexture,r.TEXTURE0+B);let le=i.get(ue);if(ue.version!==le.__version||J===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ee=ot.getPrimaries(ot.workingColorSpace),xe=y.colorSpace===dr?null:ot.getPrimaries(y.colorSpace),ye=y.colorSpace===dr||ee===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=f(y.image,!1,n.maxTextureSize);Q=At(y,Q);let ge=a.convert(y.format,y.colorSpace),Re=a.convert(y.type),_e=v(y.internalFormat,ge,Re,y.normalized,y.colorSpace,y.isVideoTexture);Xe(W,y);let me,de=y.mipmaps,Fe=y.isVideoTexture!==!0,Ve=le.__version===void 0||J===!0,N=ue.dataReady,pe=w(y,Q);if(y.isDepthTexture)_e=S(y.format===zr,y.type),Ve&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,_e,Q.width,Q.height,0,ge,Re,null));else if(y.isDataTexture)if(de.length>0){Fe&&Ve&&t.texStorage2D(r.TEXTURE_2D,pe,_e,de[0].width,de[0].height);for(let ee=0,xe=de.length;ee<xe;ee++)me=de[ee],Fe?N&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,me.width,me.height,ge,Re,me.data):t.texImage2D(r.TEXTURE_2D,ee,_e,me.width,me.height,0,ge,Re,me.data);y.generateMipmaps=!1}else Fe?(Ve&&t.texStorage2D(r.TEXTURE_2D,pe,_e,Q.width,Q.height),N&&z(y,Q,ge,Re)):t.texImage2D(r.TEXTURE_2D,0,_e,Q.width,Q.height,0,ge,Re,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&Ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,_e,de[0].width,de[0].height,Q.depth);for(let ee=0,xe=de.length;ee<xe;ee++)if(me=de[ee],y.format!==xn)if(ge!==null)if(Fe){if(N)if(y.layerUpdates.size>0){let ye=_u(me.width,me.height,y.format,y.type);for(let ie of y.layerUpdates){let se=me.data.subarray(ie*ye/me.data.BYTES_PER_ELEMENT,(ie+1)*ye/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,ie,me.width,me.height,1,ge,se)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,Q.depth,ge,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,_e,me.width,me.height,Q.depth,0,me.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,Q.depth,ge,Re,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,_e,me.width,me.height,Q.depth,0,ge,Re,me.data)}else{Fe&&Ve&&t.texStorage2D(r.TEXTURE_2D,pe,_e,de[0].width,de[0].height);for(let ee=0,xe=de.length;ee<xe;ee++)me=de[ee],y.format!==xn?ge!==null?Fe?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,_e,me.width,me.height,0,me.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,me.width,me.height,ge,Re,me.data):t.texImage2D(r.TEXTURE_2D,ee,_e,me.width,me.height,0,ge,Re,me.data)}else if(y.isDataArrayTexture)if(Fe){if(Ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,_e,Q.width,Q.height,Q.depth),N)if(y.layerUpdates.size>0){let ee=_u(Q.width,Q.height,y.format,y.type);for(let xe of y.layerUpdates){let ye=Q.data.subarray(xe*ee/Q.data.BYTES_PER_ELEMENT,(xe+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,Q.width,Q.height,1,ge,Re,ye)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Re,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,ge,Re,Q.data);else if(y.isData3DTexture)Fe?(Ve&&t.texStorage3D(r.TEXTURE_3D,pe,_e,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Re,Q.data)):t.texImage3D(r.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,ge,Re,Q.data);else if(y.isFramebufferTexture){if(Ve)if(Fe)t.texStorage2D(r.TEXTURE_2D,pe,_e,Q.width,Q.height);else{let ee=Q.width,xe=Q.height;for(let ye=0;ye<pe;ye++)t.texImage2D(r.TEXTURE_2D,ye,_e,ee,xe,0,ge,Re,null),ee>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let ee=r.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),Q.parentNode!==ee){ee.appendChild(Q),p.add(y),ee.onpaint=xe=>{let ye=xe.changedElements;for(let ie of p)ye.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{let ye=r.RGBA,ie=r.RGBA,se=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ye,ie,se,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(Fe&&Ve){let ee=qe(de[0]);t.texStorage2D(r.TEXTURE_2D,pe,_e,ee.width,ee.height)}for(let ee=0,xe=de.length;ee<xe;ee++)me=de[ee],Fe?N&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ge,Re,me):t.texImage2D(r.TEXTURE_2D,ee,_e,ge,Re,me);y.generateMipmaps=!1}else if(Fe){if(Ve){let ee=qe(Q);t.texStorage2D(r.TEXTURE_2D,pe,_e,ee.width,ee.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Re,Q)}else t.texImage2D(r.TEXTURE_2D,0,_e,ge,Re,Q);g(y)&&b(W),le.__version=ue.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function be(R,y,B){if(y.image.length!==6)return;let W=$(R,y),J=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);let ue=i.get(J);if(J.version!==ue.__version||W===!0){t.activeTexture(r.TEXTURE0+B);let le=ot.getPrimaries(ot.workingColorSpace),K=y.colorSpace===dr?null:ot.getPrimaries(y.colorSpace),Q=y.colorSpace===dr||le===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ge=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!ge&&!Re?_e[ie]=f(y.image[ie],!0,n.maxCubemapSize):_e[ie]=Re?y.image[ie].image:y.image[ie],_e[ie]=At(y,_e[ie]);let me=_e[0],de=a.convert(y.format,y.colorSpace),Fe=a.convert(y.type),Ve=v(y.internalFormat,de,Fe,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,pe=ue.__version===void 0||W===!0,ee=J.dataReady,xe=w(y,me);Xe(r.TEXTURE_CUBE_MAP,y);let ye;if(ge){N&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Ve,me.width,me.height);for(let ie=0;ie<6;ie++){ye=_e[ie].mipmaps;for(let se=0;se<ye.length;se++){let ne=ye[se];y.format!==xn?de!==null?N?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se,0,0,ne.width,ne.height,de,ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se,Ve,ne.width,ne.height,0,ne.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se,0,0,ne.width,ne.height,de,Fe,ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se,Ve,ne.width,ne.height,0,de,Fe,ne.data)}}}else{if(ye=y.mipmaps,N&&pe){ye.length>0&&xe++;let ie=qe(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){N?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,de,Fe,_e[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,_e[ie].width,_e[ie].height,0,de,Fe,_e[ie].data);for(let se=0;se<ye.length;se++){let Ge=ye[se].image[ie].image;N?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se+1,0,0,Ge.width,Ge.height,de,Fe,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se+1,Ve,Ge.width,Ge.height,0,de,Fe,Ge.data)}}else{N?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de,Fe,_e[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,de,Fe,_e[ie]);for(let se=0;se<ye.length;se++){let ne=ye[se];N?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se+1,0,0,de,Fe,ne.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se+1,Ve,de,Fe,ne.image[ie])}}}g(y)&&b(r.TEXTURE_CUBE_MAP),ue.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function he(R,y,B,W,J,ue){let le=a.convert(B.format,B.colorSpace),K=a.convert(B.type),Q=v(B.internalFormat,le,K,B.normalized,B.colorSpace),ge=i.get(y),Re=i.get(B);if(Re.__renderTarget=y,!ge.__hasExternalTextures){let _e=Math.max(1,y.width>>ue),me=Math.max(1,y.height>>ue);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,ue,Q,_e,me,y.depth,0,le,K,null):t.texImage2D(J,ue,Q,_e,me,0,le,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ut(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,J,Re.__webglTexture,0,je(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,J,Re.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(R,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){let W=y.depthTexture,J=W&&W.isDepthTexture?W.type:null,ue=S(y.stencilBuffer,J),le=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ut(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je(y),ue,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,je(y),ue,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ue,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,R)}else{let W=y.textures;for(let J=0;J<W.length;J++){let ue=W[J],le=a.convert(ue.format,ue.colorSpace),K=a.convert(ue.type),Q=v(ue.internalFormat,le,K,ue.normalized,ue.colorSpace);ut(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je(y),Q,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,je(y),Q,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Q,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(R,y,B){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,y.depthTexture);let ge=a.convert(y.depthTexture.format),Re=a.convert(y.depthTexture.type),_e;y.depthTexture.format===zn?_e=r.DEPTH_COMPONENT24:y.depthTexture.format===zr&&(_e=r.DEPTH24_STENCIL8);for(let me=0;me<6;me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,y.width,y.height,0,ge,Re,null)}}else Z(y.depthTexture,0);let ue=J.__webglTexture,le=je(y),K=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Q=y.depthTexture.format===zr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===zn)ut(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,K,ue,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,Q,K,ue,0);else if(y.depthTexture.format===zr)ut(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,K,ue,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,Q,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(R){let y=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=W}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)fe(y.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?fe(y.__webglFramebuffer[0],R,0):fe(y.__webglFramebuffer,R,0)}else if(B){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=r.createRenderbuffer(),Ee(y.__webglDepthbuffer[W],R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ue)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ee(y.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ue)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,y,B){let W=i.get(R);y!==void 0&&he(W.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ne(R)}function Be(R){let y=R.texture,B=i.get(R),W=i.get(y);R.addEventListener("dispose",x);let J=R.textures,ue=R.isWebGLCubeRenderTarget===!0,le=J.length>1;if(le||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=y.version,s.memory.textures++),ue){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<y.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=r.createFramebuffer()}else B.__webglFramebuffer[K]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)B.__webglFramebuffer[K]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(le)for(let K=0,Q=J.length;K<Q;K++){let ge=i.get(J[K]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),s.memory.textures++)}if(R.samples>0&&ut(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let Q=J[K];B.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let ge=a.convert(Q.format,Q.colorSpace),Re=a.convert(Q.type),_e=v(Q.internalFormat,ge,Re,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),me=je(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,me,_e,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,B.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)he(B.__webglFramebuffer[K][Q],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else he(B.__webglFramebuffer[K],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(y)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let K=0,Q=J.length;K<Q;K++){let ge=J[K],Re=i.get(ge),_e=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,Re.__webglTexture),Xe(_e,ge),he(B.__webglFramebuffer,R,ge,r.COLOR_ATTACHMENT0+K,_e,0),g(ge)&&b(_e)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),Xe(K,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)he(B.__webglFramebuffer[Q],R,y,r.COLOR_ATTACHMENT0,K,Q);else he(B.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,K,0);g(y)&&b(K),t.unbindTexture()}R.depthBuffer&&Ne(R)}function Y(R){let y=R.textures;for(let B=0,W=y.length;B<W;B++){let J=y[B];if(g(J)){let ue=M(R),le=i.get(J).__webglTexture;t.bindTexture(ue,le),b(ue),t.unbindTexture()}}}let ct=[],pt=[];function _t(R){if(R.samples>0){if(ut(R)===!1){let y=R.textures,B=R.width,W=R.height,J=r.COLOR_BUFFER_BIT,ue=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=i.get(R),K=y.length>1;if(K)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[ge]);let Re=i.get(y[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,B,W,0,0,B,W,J,r.NEAREST),c===!0&&(ct.length=0,pt.length=0,ct.push(r.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(ue),pt.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,le.__webglColorRenderbuffer[ge]);let Re=i.get(y[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,Re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function je(R){return Math.min(n.maxSamples,R.samples)}function ut(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(R){let y=s.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function At(R,y){let B=R.colorSpace,W=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==js&&B!==dr&&(ot.getTransfer(B)===ft?(W!==xn||J!==Xi)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",B)),y}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.getTextureUnits=G,this.setTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=te,this.setTexture3D=P,this.setTextureCube=oe,this.rebindTextures=Ue,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E1(r,e){function t(i,n=dr){let a,s=ot.getTransfer(n);if(i===Xi)return r.UNSIGNED_BYTE;if(i===El)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Al)return r.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===iu)return r.BYTE;if(i===nu)return r.SHORT;if(i===us)return r.UNSIGNED_SHORT;if(i===Tl)return r.INT;if(i===In)return r.UNSIGNED_INT;if(i===Ln)return r.FLOAT;if(i===Wn)return r.HALF_FLOAT;if(i===su)return r.ALPHA;if(i===ou)return r.RGB;if(i===xn)return r.RGBA;if(i===zn)return r.DEPTH_COMPONENT;if(i===zr)return r.DEPTH_STENCIL;if(i===cu)return r.RED;if(i===Cl)return r.RED_INTEGER;if(i===Vr)return r.RG;if(i===Rl)return r.RG_INTEGER;if(i===Pl)return r.RGBA_INTEGER;if(i===So||i===wo||i===To||i===Eo)if(s===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===So)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===So)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Ll||i===Dl||i===Nl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Ul||i===Ol||i===kl||i===Bl||i===Ao||i===zl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Fl||i===Ul)return s===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ol)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===kl)return a.COMPRESSED_R11_EAC;if(i===Bl)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Ao)return a.COMPRESSED_RG11_EAC;if(i===zl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vl||i===Gl||i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===jl||i===Zl||i===Jl||i===$l||i===Kl||i===Ql||i===eh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Vl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===ih||i===nh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===th)return s===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===ah||i===Co||i===sh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===rh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Co)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mi({vertexShader:A1,fragmentShader:C1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends Vn{constructor(e,t){super();let i=this,n=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,u=null,m=null,_=typeof XRWebGLBinding<"u",f=new Uu,g={},b=t.getContextAttributes(),M=null,v=null,S=[],w=[],E=new Ie,x=null,T=new di;T.viewport=new Lt;let C=new di;C.viewport=new Lt;let I=[T,C],L=new yl,q=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=S[$];return ae===void 0&&(ae=new ns,S[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=S[$];return ae===void 0&&(ae=new ns,S[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=S[$];return ae===void 0&&(ae=new ns,S[$]=ae),ae.getHandSpace()};function U($){let ae=w.indexOf($.inputSource);if(ae===-1)return;let z=S[ae];z!==void 0&&(z.update($.inputSource,$.frame,l||s),z.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",O);for(let $=0;$<S.length;$++){let ae=w[$];ae!==null&&(w[$]=null,S[$].disconnect(ae))}q=null,G=null,f.reset();for(let $ in g)delete g[$];e.setRenderTarget(M),u=null,d=null,p=null,n=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(n,t)),p},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",H),n.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,re=null,be=null;b.depth&&(be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=b.stencil?zr:zn,re=b.stencil?ps:In);let he={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};p=this.getBinding(),d=p.createProjectionLayer(he),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new en(d.textureWidth,d.textureHeight,{format:xn,type:Xi,depthTexture:new lr(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let z={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(n,t,z),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new en(u.framebufferWidth,u.framebufferHeight,{format:xn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await n.requestReferenceSpace(o),Xe.setContext(n),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function O($){for(let ae=0;ae<$.removed.length;ae++){let z=$.removed[ae],re=w.indexOf(z);re>=0&&(w[re]=null,S[re].disconnect(z))}for(let ae=0;ae<$.added.length;ae++){let z=$.added[ae],re=w.indexOf(z);if(re===-1){for(let he=0;he<S.length;he++)if(he>=w.length){w.push(z),re=he;break}else if(w[he]===null){w[he]=z,re=he;break}if(re===-1)break}let be=S[re];be&&be.connect(z)}}let Z=new F,te=new F;function P($,ae,z){Z.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(z.matrixWorld);let re=Z.distanceTo(te),be=ae.projectionMatrix.elements,he=z.projectionMatrix.elements,Ee=be[14]/(be[10]-1),fe=be[14]/(be[10]+1),Ne=(be[9]+1)/be[5],Ue=(be[9]-1)/be[5],Be=(be[8]-1)/be[0],Y=(he[8]+1)/he[0],ct=Ee*Be,pt=Ee*Y,_t=re/(-Be+Y),je=_t*-Be;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ(_t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let ut=Ee+_t,D=fe+_t,At=ct-je,qe=pt+(re-je),R=Ne*fe/D*ut,y=Ue*fe/D*ut;$.projectionMatrix.makePerspective(At,qe,R,y,ut,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let ae=$.near,z=$.far;f.texture!==null&&(f.depthNear>0&&(ae=f.depthNear),f.depthFar>0&&(z=f.depthFar)),L.near=C.near=T.near=ae,L.far=C.far=T.far=z,(q!==L.near||G!==L.far)&&(n.updateRenderState({depthNear:L.near,depthFar:L.far}),q=L.near,G=L.far),L.layers.mask=$.layers.mask|6,T.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let re=$.parent,be=L.cameras;oe(L,re);for(let he=0;he<be.length;he++)oe(be[he],re);be.length===2?P(L,T,C):L.projectionMatrix.copy(T.projectionMatrix),ve($,L,re)};function ve($,ae,z){z===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(z.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ts*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(L)},this.getCameraTexture=function($){return g[$]};let ke=null;function De($,ae){if(h=ae.getViewerPose(l||s),m=ae,h!==null){let z=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let re=!1;z.length!==L.cameras.length&&(L.cameras.length=0,re=!0);for(let fe=0;fe<z.length;fe++){let Ne=z[fe],Ue=null;if(u!==null)Ue=u.getViewport(Ne);else{let Y=p.getViewSubImage(d,Ne);Ue=Y.viewport,fe===0&&(e.setRenderTargetTextures(v,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(v))}let Be=I[fe];Be===void 0&&(Be=new di,Be.layers.enable(fe),Be.viewport=new Lt,I[fe]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),fe===0&&(L.matrix.copy(Be.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),re===!0&&L.cameras.push(Be)}let be=n.enabledFeatures;if(be&&be.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){p=i.getBinding();let fe=p.getDepthInformation(z[0]);fe&&fe.isValid&&fe.texture&&f.init(fe,n.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),p=i.getBinding();for(let fe=0;fe<z.length;fe++){let Ne=z[fe].camera;if(Ne){let Ue=g[Ne];Ue||(Ue=new ro,g[Ne]=Ue);let Be=p.getCameraImage(Ne);Ue.sourceTexture=Be}}}}for(let z=0;z<S.length;z++){let re=w[z],be=S[z];re!==null&&be!==void 0&&be.update(re,ae,l||s)}ke&&ke($,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}let Xe=new Om;Xe.setAnimationLoop(De),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}},R1=new It,Hm=new Je;Hm.set(-1,0,0,0,1,0,0,0,1);function P1(r,e){function t(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function i(f,g){g.color.getRGB(f.fogColor.value,fu(r)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function n(f,g,b,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?a(f,g):g.isMeshLambertMaterial?(a(f,g),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(f,g),p(f,g)):g.isMeshPhongMaterial?(a(f,g),h(f,g),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(f,g),d(f,g),g.isMeshPhysicalMaterial&&u(f,g,v)):g.isMeshMatcapMaterial?(a(f,g),m(f,g)):g.isMeshDepthMaterial?a(f,g):g.isMeshDistanceMaterial?(a(f,g),_(f,g)):g.isMeshNormalMaterial?a(f,g):g.isLineBasicMaterial?(s(f,g),g.isLineDashedMaterial&&o(f,g)):g.isPointsMaterial?c(f,g,b,M):g.isSpriteMaterial?l(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,t(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Fi&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,t(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Fi&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,t(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,t(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);let b=e.get(g),M=b.envMap,v=b.envMapRotation;M&&(f.envMap.value=M,f.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Hm),f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,f.aoMapTransform))}function s(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform))}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function c(f,g,b,M){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*b,f.scale.value=M*.5,g.map&&(f.map.value=g.map,t(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function l(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function p(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function d(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function u(f,g,b){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fi&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function _(f,g){let b=e.get(g).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function I1(r,e,t,i){let n={},a={},s=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let w=S.program;i.uniformBlockBinding(v,w)}function l(v,S){let w=n[v.id];w===void 0&&(f(v),w=h(v),n[v.id]=w,v.addEventListener("dispose",b));let E=S.program;i.updateUBOMapping(v,E);let x=e.render.frame;a[v.id]!==x&&(d(v),a[v.id]=x)}function h(v){let S=p();v.__bindingPointIndex=S;let w=r.createBuffer(),E=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,w),w}function p(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=n[v.id],w=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,T=w.length;x<T;x++){let C=w[x];if(Array.isArray(C))for(let I=0,L=C.length;I<L;I++)u(C[I],x,I,E);else u(C,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,S,w,E){if(_(v,S,w,E)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let L=T[I],q=g(L);m(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function m(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function _(v,S,w,E){let x=v.value,T=S+"_"+w;if(E[T]===void 0)return typeof x=="number"||typeof x=="boolean"?E[T]=x:ArrayBuffer.isView(x)?E[T]=x.slice():E[T]=x.clone(),!0;{let C=E[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function f(v){let S=v.uniforms,w=0,E=16;for(let T=0,C=S.length;T<C;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,q=I.length;L<q;L++){let G=I[L],U=Array.isArray(G.value)?G.value:[G.value];for(let H=0,O=U.length;H<O;H++){let Z=U[H],te=g(Z),P=w%E,oe=P%te.boundary,ve=P+oe;w+=oe,ve!==0&&E-ve<te.storage&&(w+=E-ve),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=te.storage}}}let x=w%E;return x>0&&(w+=E-x),v.__size=w,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),S}function b(v){let S=v.target;S.removeEventListener("dispose",b);let w=s.indexOf(S.__bindingPointIndex);s.splice(w,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete a[S.id]}function M(){for(let v in n)r.deleteBuffer(n[v]);s=[],n={},a={}}return{bind:c,update:l,dispose:M}}var L1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function D1(){return Xn===null&&(Xn=new jc(L1,16,16,Vr,Wn),Xn.name="DFG_LUT",Xn.minFilter=pi,Xn.magFilter=pi,Xn.wrapS=Bn,Xn.wrapT=Bn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var fh=class{constructor(e={}){let{canvas:t=cm(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Xi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let _=u,f=new Set([Pl,Rl,Cl]),g=new Set([Xi,In,us,ps,El,Al]),b=new Uint32Array(4),M=new Int32Array(4),v=new F,S=null,w=null,E=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,L=null,q=null,G=null,U=null;this._outputColorSpace=Ni;let H=0,O=0,Z=null,te=-1,P=null,oe=new Lt,ve=new Lt,ke=null,De=new $e(0),Xe=0,$=t.width,ae=t.height,z=1,re=null,be=null,he=new Lt(0,0,$,ae),Ee=new Lt(0,0,$,ae),fe=!1,Ne=new rs,Ue=!1,Be=!1,Y=new It,ct=new F,pt=new Lt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function ut(){return Z===null?z:1}let D=i;function At(A,k){return t.getContext(A,k)}try{let A={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",He,!1),D===null){let k="webgl2";if(D=At(k,A),D===null)throw At(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ye("WebGLRenderer: "+A.message),A}let qe,R,y,B,W,J,ue,le,K,Q,ge,Re,_e,me,de,Fe,Ve,N,pe,ee,xe,ye,ie;function se(){qe=new zy(D),qe.init(),xe=new E1(D,qe),R=new Ly(D,qe,e,xe),y=new w1(D,qe),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),q=D.createFramebuffer(),G=D.createFramebuffer(),U=D.createFramebuffer(),B=new Hy(D),W=new h1,J=new T1(D,qe,y,W,R,xe,B),ue=new By(C),le=new Y0(D),ye=new Py(D,le),K=new Vy(D,le,B,ye),Q=new Xy(D,K,le,ye,B),N=new Wy(D,R,J),de=new Dy(W),ge=new l1(C,ue,qe,R,ye,de),Re=new P1(C,W),_e=new u1,me=new x1(qe),Ve=new Ry(C,ue,y,Q,m,c),Fe=new S1(C,Q,R),ie=new I1(D,B,R,y),pe=new Iy(D,qe,B),ee=new Gy(D,qe,B),B.programs=ge.programs,C.capabilities=R,C.extensions=qe,C.properties=W,C.renderLists=_e,C.shadowMap=Fe,C.state=y,C.info=B}se(),_!==Xi&&(T=new Yy(_,t.width,t.height,o,n,a));let ne=new Ou(C,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize($,ae,!1))},this.getSize=function(A){return A.set($,ae)},this.setSize=function(A,k,j=!0){if(ne.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,ae=k,t.width=Math.floor(A*z),t.height=Math.floor(k*z),j===!0&&(t.style.width=A+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set($*z,ae*z).floor()},this.setDrawingBufferSize=function(A,k,j){$=A,ae=k,z=j,t.width=Math.floor(A*j),t.height=Math.floor(k*j),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(_===Xi){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(he)},this.setViewport=function(A,k,j,V){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,k,j,V),y.viewport(oe.copy(he).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Ee)},this.setScissor=function(A,k,j,V){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,k,j,V),y.scissor(ve.copy(Ee).multiplyScalar(z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){y.setScissorTest(fe=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){be=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,j=!0){let V=0;if(A){let X=!1;if(Z!==null){let Me=Z.texture.format;X=f.has(Me)}if(X){let Me=Z.texture.type,Se=g.has(Me),Te=Ve.getClearColor(),Le=Ve.getClearAlpha(),Oe=Te.r,Ke=Te.g,tt=Te.b;Se?(b[0]=Oe,b[1]=Ke,b[2]=tt,b[3]=Le,D.clearBufferuiv(D.COLOR,0,b)):(M[0]=Oe,M[1]=Ke,M[2]=tt,M[3]=Le,D.clearBufferiv(D.COLOR,0,M))}else V|=D.COLOR_BUFFER_BIT}k&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Ve.dispose(),_e.dispose(),me.dispose(),W.dispose(),ue.dispose(),Q.dispose(),ye.dispose(),ie.dispose(),ge.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rt),ne.removeEventListener("sessionend",vt),lt.stop()};function Ge(A){A.preventDefault(),hu("WebGLRenderer: Context Lost."),I=!0}function ce(){hu("WebGLRenderer: Context Restored."),I=!1;let A=B.autoReset,k=Fe.enabled,j=Fe.autoUpdate,V=Fe.needsUpdate,X=Fe.type;se(),B.autoReset=A,Fe.enabled=k,Fe.autoUpdate=j,Fe.needsUpdate=V,Fe.type=X}function He(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pe(A){let k=A.target;k.removeEventListener("dispose",Pe),Ze(k)}function Ze(A){Yt(A),W.remove(A)}function Yt(A){let k=W.get(A).programs;k!==void 0&&(k.forEach(function(j){ge.releaseProgram(j)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,j,V,X,Me){k===null&&(k=_t);let Se=X.isMesh&&X.matrixWorld.determinantAffine()<0,Te=si(A,k,j,V,X);y.setMaterial(V,Se);let Le=j.index,Oe=1;if(V.wireframe===!0){if(Le=K.getWireframeAttribute(j),Le===void 0)return;Oe=2}let Ke=j.drawRange,tt=j.attributes.position,ze=Ke.start*Oe,xt=(Ke.start+Ke.count)*Oe;Me!==null&&(ze=Math.max(ze,Me.start*Oe),xt=Math.min(xt,(Me.start+Me.count)*Oe)),Le!==null?(ze=Math.max(ze,0),xt=Math.min(xt,Le.count)):tt!=null&&(ze=Math.max(ze,0),xt=Math.min(xt,tt.count));let Wt=xt-ze;if(Wt<0||Wt===1/0)return;ye.setup(X,V,Te,j,Le);let kt,yt=pe;if(Le!==null&&(kt=le.get(Le),yt=ee,yt.setIndex(kt)),X.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*ut()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(X.isLine){let vi=V.linewidth;vi===void 0&&(vi=1),y.setLineWidth(vi*ut()),X.isLineSegments?yt.setMode(D.LINES):X.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else X.isPoints?yt.setMode(D.POINTS):X.isSprite&&yt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let vi=X._multiDrawStarts,Ae=X._multiDrawCounts,$i=X._multiDrawCount,dt=Le?le.get(Le).bytesPerElement:1,un=W.get(V).currentProgram.getUniforms();for(let Un=0;Un<$i;Un++)un.setValue(D,"_gl_DrawID",Un),yt.render(vi[Un]/dt,Ae[Un])}else if(X.isInstancedMesh)yt.renderInstances(ze,Wt,X.count);else if(j.isInstancedBufferGeometry){let vi=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ae=Math.min(j.instanceCount,vi);yt.renderInstances(ze,Wt,Ae)}else yt.render(ze,Wt)};function at(A,k,j){A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=Fi,A.needsUpdate=!0,Ot(A,k,j),A.side=sr,A.needsUpdate=!0,Ot(A,k,j),A.side=_n):Ot(A,k,j)}this.compile=function(A,k,j=null){j===null&&(j=A),w=me.get(j),w.init(k),x.push(w),j.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),A!==j&&A.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();let V=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Me=X.material;if(Me)if(Array.isArray(Me))for(let Se=0;Se<Me.length;Se++){let Te=Me[Se];at(Te,j,X),V.add(Te)}else at(Me,j,X),V.add(Me)}),w=x.pop(),V},this.compileAsync=function(A,k,j=null){let V=this.compile(A,k,j);return new Promise(X=>{function Me(){if(V.forEach(function(Se){W.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){X(A);return}setTimeout(Me,10)}qe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ct=null;function ai(A){Ct&&Ct(A)}function Rt(){lt.stop()}function vt(){lt.start()}let lt=new Om;lt.setAnimationLoop(ai),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(A){Ct=A,ne.setAnimationLoop(A),A===null?lt.stop():lt.start()},ne.addEventListener("sessionstart",Rt),ne.addEventListener("sessionend",vt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,k);let j=ne.enabled===!0&&ne.isPresenting===!0,V=T!==null&&(Z===null||j)&&T.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,k,Z),w=me.get(A,x.length),w.init(k),w.state.textureUnits=J.getTextureUnits(),x.push(w),Y.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ne.setFromProjectionMatrix(Y,Rn,k.reversedDepth),Be=this.localClippingEnabled,Ue=de.init(this.clippingPlanes,Be),S=_e.get(A,E.length),S.init(),E.push(S),ne.enabled===!0&&ne.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&Ii(Se,k,-1/0,C.sortObjects)}Ii(A,k,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(re,be,k.reversedDepth),je=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,je&&Ve.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ue===!0&&de.beginShadows();let X=w.state.shadowsArray;if(Fe.render(X,A,k),Ue===!0&&de.endShadows(),(V&&T.hasRenderPass())===!1){let Se=S.opaque,Te=S.transmissive;if(w.setupLights(),k.isArrayCamera){let Le=k.cameras;if(Te.length>0)for(let Oe=0,Ke=Le.length;Oe<Ke;Oe++){let tt=Le[Oe];xi(Se,Te,A,tt)}je&&Ve.render(A);for(let Oe=0,Ke=Le.length;Oe<Ke;Oe++){let tt=Le[Oe];Tt(S,A,tt,tt.viewport)}}else Te.length>0&&xi(Se,Te,A,k),je&&Ve.render(A),Tt(S,A,k)}Z!==null&&O===0&&(J.updateMultisampleRenderTarget(Z),J.updateRenderTargetMipmap(Z)),V&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,k),ye.resetDefaultState(),te=-1,P=null,x.pop(),x.length>0?(w=x[x.length-1],J.setTextureUnits(w.state.textureUnits),Ue===!0&&de.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,L!==null&&L.renderEnd()};function Ii(A,k,j,V){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){V&&pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Y);let Se=Q.update(A),Te=A.material;Te.visible&&S.push(A,Se,Te,j,pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){let Se=Q.update(A),Te=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pt.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),pt.copy(Se.boundingSphere.center)),pt.applyMatrix4(A.matrixWorld).applyMatrix4(Y)),Array.isArray(Te)){let Le=Se.groups;for(let Oe=0,Ke=Le.length;Oe<Ke;Oe++){let tt=Le[Oe],ze=Te[tt.materialIndex];ze&&ze.visible&&S.push(A,Se,ze,j,pt.z,tt)}}else Te.visible&&S.push(A,Se,Te,j,pt.z,null)}}let Me=A.children;for(let Se=0,Te=Me.length;Se<Te;Se++)Ii(Me[Se],k,j,V)}function Tt(A,k,j,V){let{opaque:X,transmissive:Me,transparent:Se}=A;w.setupLightsView(j),Ue===!0&&de.setGlobalState(C.clippingPlanes,j),V&&y.viewport(oe.copy(V)),X.length>0&&Li(X,k,j),Me.length>0&&Li(Me,k,j),Se.length>0&&Li(Se,k,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function xi(A,k,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let ze=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:ze?Wn:Xi,minFilter:Br,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Me=w.state.transmissionRenderTarget[V.id],Se=V.viewport||oe;Me.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let Te=C.getRenderTarget(),Le=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(De),Xe=C.getClearAlpha(),Xe<1&&C.setClearColor(16777215,.5),C.clear(),je&&Ve.render(j);let Ke=C.toneMapping;C.toneMapping=Pn;let tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Ue===!0&&de.setGlobalState(C.clippingPlanes,V),Li(A,j,V),J.updateMultisampleRenderTarget(Me),J.updateRenderTargetMipmap(Me),qe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let xt=0,Wt=k.length;xt<Wt;xt++){let kt=k[xt],{object:yt,geometry:vi,material:Ae,group:$i}=kt;if(Ae.side===_n&&yt.layers.test(V.layers)){let dt=Ae.side;Ae.side=Fi,Ae.needsUpdate=!0,jt(yt,j,V,vi,Ae,$i),Ae.side=dt,Ae.needsUpdate=!0,ze=!0}}ze===!0&&(J.updateMultisampleRenderTarget(Me),J.updateRenderTargetMipmap(Me))}C.setRenderTarget(Te,Le,Oe),C.setClearColor(De,Xe),tt!==void 0&&(V.viewport=tt),C.toneMapping=Ke}function Li(A,k,j){let V=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Me=A.length;X<Me;X++){let Se=A[X],{object:Te,geometry:Le,group:Oe}=Se,Ke=Se.material;Ke.allowOverride===!0&&V!==null&&(Ke=V),Te.layers.test(j.layers)&&jt(Te,k,j,Le,Ke,Oe)}}function jt(A,k,j,V,X,Me){A.onBeforeRender(C,k,j,V,X,Me),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,k,j,V,A,Me),X.transparent===!0&&X.side===_n&&X.forceSinglePass===!1?(X.side=Fi,X.needsUpdate=!0,C.renderBufferDirect(j,k,V,X,A,Me),X.side=sr,X.needsUpdate=!0,C.renderBufferDirect(j,k,V,X,A,Me),X.side=_n):C.renderBufferDirect(j,k,V,X,A,Me),A.onAfterRender(C,k,j,V,X,Me)}function Ot(A,k,j){k.isScene!==!0&&(k=_t);let V=W.get(A),X=w.state.lights,Me=w.state.shadowsArray,Se=X.state.version,Te=ge.getParameters(A,X.state,Me,k,j,w.state.lightProbeGridArray),Le=ge.getProgramCacheKey(Te),Oe=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;let Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=ue.get(A.envMap||V.environment,Ke),V.envMapRotation=V.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Pe),Oe=new Map,V.programs=Oe);let tt=Oe.get(Le);if(tt!==void 0){if(V.currentProgram===tt&&V.lightsStateVersion===Se)return Fn(A,Te),tt}else Te.uniforms=ge.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,j,Te),A.onBeforeCompile(Te,C),tt=ge.acquireProgram(Te,Le),Oe.set(Le,tt),V.uniforms=Te.uniforms;let ze=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=de.uniform),Fn(A,Te),V.needsLights=dn(A),V.lightsStateVersion=Se,V.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=tt,V.uniformsList=null,tt}function Qt(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=gs.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Fn(A,k){let j=W.get(A);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Fa(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let j=0,V=A.length;j<V;j++){let X=A[j];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function si(A,k,j,V,X){k.isScene!==!0&&(k=_t),J.resetTextureUnits();let Me=k.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,Te=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ot.workingColorSpace,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Oe=ue.get(V.envMap||Se,Le),Ke=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,tt=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!j.morphAttributes.position,xt=!!j.morphAttributes.normal,Wt=!!j.morphAttributes.color,kt=Pn;V.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(kt=C.toneMapping);let yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vi=yt!==void 0?yt.length:0,Ae=W.get(V),$i=w.state.lights;if(Ue===!0&&(Be===!0||A!==P)){let Et=A===P&&V.id===te;de.setState(V,A,Et)}let dt=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==$i.state.version||Ae.outputColorSpace!==Te||X.isBatchedMesh&&Ae.batching===!1||!X.isBatchedMesh&&Ae.batching===!0||X.isBatchedMesh&&Ae.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ae.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ae.instancing===!1||!X.isInstancedMesh&&Ae.instancing===!0||X.isSkinnedMesh&&Ae.skinning===!1||!X.isSkinnedMesh&&Ae.skinning===!0||X.isInstancedMesh&&Ae.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ae.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ae.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ae.instancingMorph===!1&&X.morphTexture!==null||Ae.envMap!==Oe||V.fog===!0&&Ae.fog!==Me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==de.numPlanes||Ae.numIntersection!==de.numIntersection)||Ae.vertexAlphas!==Ke||Ae.vertexTangents!==tt||Ae.morphTargets!==ze||Ae.morphNormals!==xt||Ae.morphColors!==Wt||Ae.toneMapping!==kt||Ae.morphTargetsCount!==vi||!!Ae.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Ae.__version=V.version);let un=Ae.currentProgram;dt===!0&&(un=Ot(V,k,X),L&&V.isNodeMaterial&&L.onUpdateProgram(V,un,Ae));let Un=!1,Sr=!1,Ua=!1,bt=un.getUniforms(),Xt=Ae.uniforms;if(y.useProgram(un.program)&&(Un=!0,Sr=!0,Ua=!0),V.id!==te&&(te=V.id,Sr=!0),Ae.needsLights){let Et=Fa(w.state.lightProbeGridArray,X);Ae.lightProbeGrid!==Et&&(Ae.lightProbeGrid=Et,Sr=!0)}if(Un||P!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(D,"projectionMatrix",A.projectionMatrix),bt.setValue(D,"viewMatrix",A.matrixWorldInverse);let Tr=bt.map.cameraPosition;Tr!==void 0&&Tr.setValue(D,ct.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&bt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,Sr=!0,Ua=!0)}if(Ae.needsLights&&($i.state.directionalShadowMap.length>0&&bt.setValue(D,"directionalShadowMap",$i.state.directionalShadowMap,J),$i.state.spotShadowMap.length>0&&bt.setValue(D,"spotShadowMap",$i.state.spotShadowMap,J),$i.state.pointShadowMap.length>0&&bt.setValue(D,"pointShadowMap",$i.state.pointShadowMap,J)),X.isSkinnedMesh){bt.setOptional(D,X,"bindMatrix"),bt.setOptional(D,X,"bindMatrixInverse");let Et=X.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),bt.setValue(D,"boneTexture",Et.boneTexture,J))}X.isBatchedMesh&&(bt.setOptional(D,X,"batchingTexture"),bt.setValue(D,"batchingTexture",X._matricesTexture,J),bt.setOptional(D,X,"batchingIdTexture"),bt.setValue(D,"batchingIdTexture",X._indirectTexture,J),bt.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",X._colorsTexture,J));let wr=j.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&N.update(X,j,un),(Sr||Ae.receiveShadow!==X.receiveShadow)&&(Ae.receiveShadow=X.receiveShadow,bt.setValue(D,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(Xt.envMapIntensity.value=k.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=D1()),Sr){if(bt.setValue(D,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&Ht(Xt,Ua),Me&&V.fog===!0&&Re.refreshFogUniforms(Xt,Me),Re.refreshMaterialUniforms(Xt,V,z,ae,w.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){let Et=Ae.lightProbeGrid;Xt.probesSH.value=Et.texture,Xt.probesMin.value.copy(Et.boundingBox.min),Xt.probesMax.value.copy(Et.boundingBox.max),Xt.probesResolution.value.copy(Et.resolution)}gs.upload(D,Qt(Ae),Xt,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gs.upload(D,Qt(Ae),Xt,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&bt.setValue(D,"center",X.center),bt.setValue(D,"modelViewMatrix",X.modelViewMatrix),bt.setValue(D,"normalMatrix",X.normalMatrix),bt.setValue(D,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let Et=V.uniformsGroups;for(let Tr=0,Oa=Et.length;Tr<Oa;Tr++){let tf=Et[Tr];ie.update(tf,un),ie.bind(tf,un)}}return un}function Ht(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function dn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,k,j){let V=W.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=k,W.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let j=W.get(A);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,j=0){Z=A,H=k,O=j;let V=null,X=!1,Me=!1;if(A){let Te=W.get(A);if(Te.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,Te.__webglFramebuffer),oe.copy(A.viewport),ve.copy(A.scissor),ke=A.scissorTest,y.viewport(oe),y.scissor(ve),y.setScissorTest(ke),te=-1;return}else if(Te.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(Te.__hasExternalTextures)J.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ke=A.depthTexture;if(Te.__boundDepthTexture!==Ke){if(Ke!==null&&W.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}let Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Me=!0);let Oe=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?V=Oe[k][j]:V=Oe[k],X=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?V=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[j]:V=Oe,oe.copy(A.viewport),ve.copy(A.scissor),ke=A.scissorTest}else oe.copy(he).multiplyScalar(z).floor(),ve.copy(Ee).multiplyScalar(z).floor(),ke=fe;if(j!==0&&(V=q),y.bindFramebuffer(D.FRAMEBUFFER,V)&&y.drawBuffers(A,V),y.viewport(oe),y.scissor(ve),y.setScissorTest(ke),X){let Te=W.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,j)}else if(Me){let Te=k;for(let Le=0;Le<A.textures.length;Le++){let Oe=W.get(A.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,j,Te)}}else if(A!==null&&j!==0){let Te=W.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,j)}te=-1},this.readRenderTargetPixels=function(A,k,j,V,X,Me,Se,Te=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){y.bindFramebuffer(D.FRAMEBUFFER,Le);try{let Oe=A.textures[Te],Ke=Oe.format,tt=Oe.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),!R.textureFormatReadable(Ke)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(tt)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-V&&j>=0&&j<=A.height-X&&D.readPixels(k,j,V,X,xe.convert(Ke),xe.convert(tt),Me)}finally{let Oe=Z!==null?W.get(Z).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,k,j,V,X,Me,Se,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le)if(k>=0&&k<=A.width-V&&j>=0&&j<=A.height-X){y.bindFramebuffer(D.FRAMEBUFFER,Le);let Oe=A.textures[Te],Ke=Oe.format,tt=Oe.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),!R.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,Me.byteLength,D.STREAM_READ),D.readPixels(k,j,V,X,xe.convert(Ke),xe.convert(tt),0);let xt=Z!==null?W.get(Z).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,xt);let Wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hm(D,Wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Me),D.deleteBuffer(ze),D.deleteSync(Wt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,j=0){let V=Math.pow(2,-j),X=Math.floor(A.image.width*V),Me=Math.floor(A.image.height*V),Se=k!==null?k.x:0,Te=k!==null?k.y:0;J.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,Se,Te,X,Me),y.unbindTexture()},this.copyTextureToTexture=function(A,k,j=null,V=null,X=0,Me=0){let Se,Te,Le,Oe,Ke,tt,ze,xt,Wt,kt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(j!==null)Se=j.max.x-j.min.x,Te=j.max.y-j.min.y,Le=j.isBox3?j.max.z-j.min.z:1,Oe=j.min.x,Ke=j.min.y,tt=j.isBox3?j.min.z:0;else{let Xt=Math.pow(2,-X);Se=Math.floor(kt.width*Xt),Te=Math.floor(kt.height*Xt),A.isDataArrayTexture?Le=kt.depth:A.isData3DTexture?Le=Math.floor(kt.depth*Xt):Le=1,Oe=0,Ke=0,tt=0}V!==null?(ze=V.x,xt=V.y,Wt=V.z):(ze=0,xt=0,Wt=0);let yt=xe.convert(k.format),vi=xe.convert(k.type),Ae;k.isData3DTexture?(J.setTexture3D(k,0),Ae=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(J.setTexture2DArray(k,0),Ae=D.TEXTURE_2D_ARRAY):(J.setTexture2D(k,0),Ae=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let $i=y.getParameter(D.UNPACK_ROW_LENGTH),dt=y.getParameter(D.UNPACK_IMAGE_HEIGHT),un=y.getParameter(D.UNPACK_SKIP_PIXELS),Un=y.getParameter(D.UNPACK_SKIP_ROWS),Sr=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,kt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,kt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),y.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),y.pixelStorei(D.UNPACK_SKIP_IMAGES,tt);let Ua=A.isDataArrayTexture||A.isData3DTexture,bt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let Xt=W.get(A),wr=W.get(k),Et=W.get(Xt.__renderTarget),Tr=W.get(wr.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,Et.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Oa=0;Oa<Le;Oa++)Ua&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(A).__webglTexture,X,tt+Oa),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(k).__webglTexture,Me,Wt+Oa)),D.blitFramebuffer(Oe,Ke,Se,Te,ze,xt,Se,Te,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||W.has(A)){let Xt=W.get(A),wr=W.get(k);y.bindFramebuffer(D.READ_FRAMEBUFFER,G),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,U);for(let Et=0;Et<Le;Et++)Ua?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xt.__webglTexture,X,tt+Et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xt.__webglTexture,X),bt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wr.__webglTexture,Me,Wt+Et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wr.__webglTexture,Me),X!==0?D.blitFramebuffer(Oe,Ke,Se,Te,ze,xt,Se,Te,D.COLOR_BUFFER_BIT,D.NEAREST):bt?D.copyTexSubImage3D(Ae,Me,ze,xt,Wt+Et,Oe,Ke,Se,Te):D.copyTexSubImage2D(Ae,Me,ze,xt,Oe,Ke,Se,Te);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ae,Me,ze,xt,Wt,Se,Te,Le,yt,vi,kt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,Me,ze,xt,Wt,Se,Te,Le,yt,kt.data):D.texSubImage3D(Ae,Me,ze,xt,Wt,Se,Te,Le,yt,vi,kt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Me,ze,xt,Se,Te,yt,vi,kt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Me,ze,xt,kt.width,kt.height,yt,kt.data):D.texSubImage2D(D.TEXTURE_2D,Me,ze,xt,Se,Te,yt,vi,kt);y.pixelStorei(D.UNPACK_ROW_LENGTH,$i),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt),y.pixelStorei(D.UNPACK_SKIP_PIXELS,un),y.pixelStorei(D.UNPACK_SKIP_ROWS,Un),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Sr),Me===0&&k.generateMipmaps&&D.generateMipmap(Ae),y.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){H=0,O=0,Z=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};function ur(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Km(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Zi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oo={duration:.5,overwrite:!1,delay:0},tp,mi,Dt,yn=1e8,wt=1/yn,Xu=Math.PI*2,F1=Xu/4,U1=0,Qm=Math.sqrt,O1=Math.cos,k1=Math.sin,ni=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},Eh=function(e){return typeof e>"u"},Zn=function(e){return typeof e=="object"},ji=function(e){return e!==!1},ip=function(){return typeof window<"u"},_h=function(e){return zt(e)||ni(e)},eg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ti=Array.isArray,B1=/random\([^)]+\)/g,z1=/,\s*/g,Wm=/(?:-?\.?\d|\.)+/gi,np=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ku=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rp=/[+-]=-?[.\d]+/,V1=/[^,'"\[\]\s]+/gi,G1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,Yn,qu,ap,rn={},bh={},tg,ig=function(e){return(bh=vs(e,rn))&&Ei},Ah=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ko=function(e,t){return!t&&console.warn(e)},ng=function(e,t){return e&&(rn[e]=t)&&bh&&(bh[e]=t)||rn},Bo=function(){return 0},H1={suppressEvents:!0,isStart:!0,kill:!1},xh={suppressEvents:!0,kill:!1},W1={suppressEvents:!0},sp={},Wr=[],Yu={},rg,qi={},Bu={},Xm=30,vh=[],op="",cp=function(e){var t=e[0],i,n;if(Zn(t)||zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=vh.length;n--&&!vh[n].targetTest(t););i=vh[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new up(e[n],i)))||e.splice(n,1);return e},Xr=function(e){return e._gsap||cp(bn(e))[0]._gsap},lp=function(e,t,i){return(i=e[t])&&zt(i)?e[t]():Eh(i)&&e.getAttribute&&e.getAttribute(t)||i},Ui=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},va=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},X1=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Mh=function(){var e=Wr.length,t=Wr.slice(0),i,n;for(Yu={},Wr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},hp=function(e){return!!(e._initted||e._startAt||e.add)},ag=function(e,t,i,n){Wr.length&&!mi&&Mh(),e.render(t,i,n||!!(mi&&t<0&&hp(e))),Wr.length&&!mi&&Mh()},sg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(V1).length<2?t:ni(e)?e.trim():e},og=function(e){return e},an=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},q1=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},vs=function(e,t){for(var i in t)e[i]=t[i];return e},qm=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Zn(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Sh=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},No=function(e){var t=e.parent||Ft,i=e.keyframes?q1(Ti(e.keyframes)):an;if(ji(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Y1=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},cg=function(e,t,i,n,a){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e[n],o;if(a)for(o=t[a];s&&s[a]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=s,t.parent=t._dp=e,t},Ch=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=t._prev,s=t._next;a?a._next=s:e[i]===t&&(e[i]=s),s?s._prev=a:e[n]===t&&(e[n]=a),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ma=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},j1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ju=function(e,t,i,n){return e._startAt&&(mi?e._startAt.revert(xh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Z1=function r(e){return!e||e._ts&&r(e.parent)},Ym=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},wh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rh=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Ph=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rh(e),i._dirty||ma(i,e)),e},lg=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=wh(e.rawTime(),t),(!t._dur||Go(0,t.totalDuration(),i)-t._tTime>wt)&&t.render(i,!0)),ma(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-wt}},jn=function(e,t,i,n){return t.parent&&qr(t),t._start=Nt((fr(i)?i:i||e!==Ft?vn(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cg(e,t,"_first","_last",e._sort?"_start":0),Zu(t)||(e._recent=t),n||lg(e,t),e._ts<0&&Ph(e,e._tTime),e},hg=function(e,t){return(rn.ScrollTrigger||Ah("scrollTrigger",t))&&rn.ScrollTrigger.create(t,e)},dg=function(e,t,i,n,a){if(mp(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!mi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rg!==Yi.frame)return Wr.push(e),e._lazy=[a,n],1},J1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$1=function(e,t,i,n){var a=e.ratio,s=t<0||!t&&(!e._start&&J1(e)&&!(!e._initted&&Zu(e))||(e._ts<0||e._dp._ts<0)&&!Zu(e))?0:1,o=e._rDelay,c=0,l,h,p;if(o&&e._repeat&&(c=Go(0,e._tDur,t),h=ys(c,o),e._yoyo&&h&1&&(s=1-s),h!==ys(e._tTime,o)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||mi||n||e._zTime===wt||!t&&e._zTime){if(!e._initted&&dg(e,t,n,i,c))return;for(p=e._zTime,e._zTime=t||(i?wt:0),i||(i=t&&!p),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,l=e._pt;l;)l.r(s,l.d),l=l._next;t<0&&ju(e,t,i,!0),e._onUpdate&&!i&&nn(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&qr(e,1),!i&&!mi&&(nn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},K1=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},bs=function(e,t,i,n){var a=e._repeat,s=Nt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:Nt(s*(a+1)+e._rDelay*a):s,o>0&&!n&&Ph(e,e._tTime=e._tDur*o),e.parent&&Rh(e),i||ma(e.parent,e),e},jm=function(e){return e instanceof wi?ma(e):bs(e,e._dur)},Q1={_start:0,endTime:Bo,totalDuration:Bo},vn=function r(e,t,i){var n=e.labels,a=e._recent||Q1,s=e.duration()>=yn?a.endTime(!1):e._dur,o,c,l;return ni(t)&&(isNaN(t)||t in n)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?a:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&i&&(c=c/100*(Ti(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+c:s+c)):t==null?s:+t},Fo=function(e,t,i){var n=fr(t[1]),a=(n?2:1)+(e<2?0:1),s=t[a],o,c;if(n&&(s.duration=t[1]),s.parent=i,e){for(o=s,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=ji(c.vars.inherit)&&c.parent;s.immediateRender=ji(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[a-1]}return new qt(t[0],s,t[a+1])},Yr=function(e,t){return e||e===0?t(e):t},Go=function(e,t,i){return i<e?e:i>t?t:i},gi=function(e,t){return!ni(e)||!(t=G1.exec(e))?"":t[1]},eM=function(e,t,i){return Yr(i,function(n){return Go(e,t,n)})},Ju=[].slice,ug=function(e,t){return e&&Zn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zn(e[0]))&&!e.nodeType&&e!==Yn},tM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var a;return ni(n)&&!t||ug(n,1)?(a=i).push.apply(a,bn(n)):i.push(n)})||i},bn=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):ni(e)&&!i&&(qu||!Ms())?Ju.call((t||ap).querySelectorAll(e),0):Ti(e)?tM(e,i):ug(e)?Ju.call(e,0):e?[e]:[]},$u=function(e){return e=bn(e)[0]||ko("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return bn(t,i.querySelectorAll?i:i===e?ko("Invalid scope")||ap.createElement("div"):e)}},pg=function(e){return e.sort(function(){return .5-Math.random()})},fg=function(e){if(zt(e))return e;var t=Zn(e)?e:{each:e},i=ga(t.ease),n=t.from||0,a=parseFloat(t.base)||0,s={},o=n>0&&n<1,c=isNaN(n)||o,l=t.axis,h=n,p=n;return ni(n)?h=p={center:.5,edges:.5,end:1}[n]||0:!o&&c&&(h=n[0],p=n[1]),function(d,u,m){var _=(m||t).length,f=s[_],g,b,M,v,S,w,E,x,T;if(!f){if(T=t.grid==="auto"?0:(t.grid||[1,yn])[1],!T){for(E=-yn;E<(E=m[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(f=s[_]=[],g=c?Math.min(T,_)*h-.5:n%T,b=T===yn?0:c?_*p/T-.5:n/T|0,E=0,x=yn,w=0;w<_;w++)M=w%T-g,v=b-(w/T|0),f[w]=S=l?Math.abs(l==="y"?v:M):Qm(M*M+v*v),S>E&&(E=S),S<x&&(x=S);n==="random"&&pg(f),f.max=E-x,f.min=x,f.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:l?l==="y"?_/T:T:Math.max(T,_/T))||0)*(n==="edges"?-1:1),f.b=_<0?a-_:a,f.u=gi(t.amount||t.each)||0,i=i&&_<0?fM(i):i}return _=(f[d]-f.min)/f.max||0,Nt(f.b+(i?i(_):_)*f.v)+f.u}},Ku=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Nt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(fr(i)?0:gi(i))}},mg=function(e,t){var i=Ti(e),n,a;return!i&&Zn(e)&&(n=i=e.radius||yn,e.values?(e=bn(e.values),(a=!fr(e[0]))&&(n*=n)):e=Ku(e.increment)),Yr(t,i?zt(e)?function(s){return a=e(s),Math.abs(a-s)<=n?a:s}:function(s){for(var o=parseFloat(a?s.x:s),c=parseFloat(a?s.y:0),l=yn,h=0,p=e.length,d,u;p--;)a?(d=e[p].x-o,u=e[p].y-c,d=d*d+u*u):d=Math.abs(e[p]-o),d<l&&(l=d,h=p);return h=!n||l<=n?e[h]:s,a||h===s||fr(s)?h:h+gi(s)}:Ku(e))},gg=function(e,t,i,n){return Yr(Ti(e)?!t:i===!0?!!(i=0):!n,function(){return Ti(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},iM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(a,s){return s(a)},n)}},nM=function(e,t){return function(i){return e(parseFloat(i))+(t||gi(i))}},rM=function(e,t,i){return xg(e,t,0,1,i)},_g=function(e,t,i){return Yr(i,function(n){return e[~~t(n)]})},aM=function r(e,t,i){var n=t-e;return Ti(e)?_g(e,r(0,e.length),t):Yr(i,function(a){return(n+(a-e)%n)%n+e})},sM=function r(e,t,i){var n=t-e,a=n*2;return Ti(e)?_g(e,r(0,e.length-1),t):Yr(i,function(s){return s=(a+(s-e)%a)%a||0,e+(s>n?a-s:s)})},Ss=function(e){return e.replace(B1,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(z1);return gg(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},xg=function(e,t,i,n,a){var s=t-e,o=n-i;return Yr(a,function(c){return i+((c-e)/s*o||0)})},oM=function r(e,t,i,n){var a=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!a){var s=ni(e),o={},c,l,h,p,d;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(Ti(e)&&!Ti(t)){for(h=[],p=e.length,d=p-2,l=1;l<p;l++)h.push(r(e[l-1],e[l]));p--,a=function(m){m*=p;var _=Math.min(d,~~m);return h[_](m-_)},i=t}else n||(e=vs(Ti(e)?[]:{},e));if(!h){for(c in t)pp.call(o,e,c,"get",t[c]);a=function(m){return xp(m,o)||(s?e.p:e)}}}return Yr(i,a)},Zm=function(e,t,i){var n=e.labels,a=yn,s,o,c;for(s in n)o=n[s]-t,o<0==!!i&&o&&a>(o=Math.abs(o))&&(c=s,a=o);return c},nn=function(e,t,i){var n=e.vars,a=n[t],s=Dt,o=e._ctx,c,l,h;if(a)return c=n[t+"Params"],l=n.callbackScope||e,i&&Wr.length&&Mh(),o&&(Dt=o),h=c?a.apply(l,c):a.call(l),Dt=s,h},Lo=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mi),e.progress()<1&&nn(e,"onInterrupt"),e},xs,vg=[],yg=function(e){if(e)if(e=!e.name&&e.default||e,ip()||e.headless){var t=e.name,i=zt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,a={init:Bo,render:xp,add:pp,kill:wM,modifier:SM,rawVars:0},s={targetTest:0,get:0,getSetter:Ih,aliases:{},register:0};if(Ms(),e!==n){if(qi[t])return;an(n,an(Sh(e,a),s)),vs(n.prototype,vs(a,Sh(e,s))),qi[n.prop=t]=n,e.targetTest&&(vh.push(n),sp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ng(t,n),e.register&&e.register(Ei,n,Oi)}else vg.push(e)},St=255,Do={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},zu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},bg=function(e,t,i){var n=e?fr(e)?[e>>16,e>>8&St,e&St]:0:Do.black,a,s,o,c,l,h,p,d,u,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Do[e])n=Do[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+a+a+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&St,n&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(Wm),!t)c=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,s=h<=.5?h*(l+1):h+l-h*l,a=h*2-s,n.length>3&&(n[3]*=1),n[0]=zu(c+1/3,a,s),n[1]=zu(c,a,s),n[2]=zu(c-1/3,a,s);else if(~e.indexOf("="))return n=e.match(np),i&&n.length<4&&(n[3]=1),n}else n=e.match(Wm)||Do.transparent;n=n.map(Number)}return t&&!m&&(a=n[0]/St,s=n[1]/St,o=n[2]/St,p=Math.max(a,s,o),d=Math.min(a,s,o),h=(p+d)/2,p===d?c=l=0:(u=p-d,l=h>.5?u/(2-p-d):u/(p+d),c=p===a?(s-o)/u+(s<o?6:0):p===s?(o-a)/u+2:(a-s)/u+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Mg=function(e){var t=[],i=[],n=-1;return e.split(pr).forEach(function(a){var s=a.match(xa)||[];t.push.apply(t,s),i.push(n+=s.length+1)}),t.c=i,t},Jm=function(e,t,i){var n="",a=(e+n).match(pr),s=t?"hsla(":"rgba(",o=0,c,l,h,p;if(!a)return e;if(a=a.map(function(d){return(d=bg(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=Mg(e),c=i.c,c.join(n)!==h.c.join(n)))for(l=e.replace(pr,"1").split(xa),p=l.length-1;o<p;o++)n+=l[o]+(~c.indexOf(o)?a.shift()||s+"0,0,0,0)":(h.length?h:a.length?a:i).shift());if(!l)for(l=e.split(pr),p=l.length-1;o<p;o++)n+=l[o]+a[o];return n+l[p]},pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Do)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),cM=/hsl[a]?\(/,dp=function(e){var t=e.join(" "),i;if(pr.lastIndex=0,pr.test(t))return i=cM.test(t),e[1]=Jm(e[1],i),e[0]=Jm(e[0],i,Mg(e[1])),!0},zo,Yi=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,a=1e3/240,s=a,o=[],c,l,h,p,d,u,m=function _(f){var g=r()-n,b=f===!0,M,v,S,w;if((g>e||g<0)&&(i+=g-t),n+=g,S=n-i,M=S-s,(M>0||b)&&(w=++p.frame,d=S-p.time*1e3,p.time=S=S/1e3,s+=M+(M>=a?4:a-M),v=1),b||(c=l(_)),v)for(u=0;u<o.length;u++)o[u](S,d,w,f)};return p={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){tg&&(!qu&&ip()&&(Yn=qu=window,ap=Yn.document||{},rn.gsap=Ei,(Yn.gsapVersions||(Yn.gsapVersions=[])).push(Ei.version),ig(bh||Yn.GreenSockGlobals||!Yn.gsap&&Yn||{}),vg.forEach(yg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),l=h||function(f){return setTimeout(f,s-p.time*1e3+1|0)},zo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),zo=0,l=Bo},lagSmoothing:function(f,g){e=f||1/0,t=Math.min(g||33,e)},fps:function(f){a=1e3/(f||240),s=p.time*1e3+a},add:function(f,g,b){var M=g?function(v,S,w,E){f(v,S,w,E),p.remove(M)}:f;return p.remove(f),o[b?"unshift":"push"](M),Ms(),M},remove:function(f,g){~(g=o.indexOf(f))&&o.splice(g,1)&&u>=g&&u--},_listeners:o},p})(),Ms=function(){return!zo&&Yi.wake()},ht={},lM=/^[\d.\-M][\d.\-,\s]/,hM=/["']/g,dM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],a=1,s=i.length,o,c,l;a<s;a++)c=i[a],o=a!==s-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[n]=isNaN(l)?l.replace(hM,"").trim():+l,n=c.substr(o+1).trim();return t},uM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},pM=function(e){var t=(e+"").split("("),i=ht[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[dM(t[1])]:uM(e).split(",").map(sg)):ht._CE&&lM.test(e)?ht._CE("",e):i},fM=function(e){return function(t){return 1-e(1-t)}},ga=function(e,t){return e&&(zt(e)?e:ht[e]||pM(e))||t},ya=function(e,t,i,n){i===void 0&&(i=function(c){return 1-t(1-c)}),n===void 0&&(n=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:n},s;return Ui(e,function(o){ht[o]=rn[o]=a,ht[s=o.toLowerCase()]=i;for(var c in a)ht[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ht[o+"."+c]=a[c]}),a},Sg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vu=function r(e,t,i){var n=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),s=a/Xu*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*k1((h-s)*a)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Sg(o);return a=Xu/a,c.config=function(l,h){return r(e,l,h)},c},Gu=function r(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},n=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:Sg(i);return n.config=function(a){return r(e,a)},n};Ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ya(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;ya("Elastic",Vu("in"),Vu("out"),Vu());(function(r,e){var t=1/e,i=2*t,n=2.5*t,a=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ya("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);ya("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ya("Circ",function(r){return-(Qm(1-r*r)-1)});ya("Sine",function(r){return r===1?1:-O1(r*F1)+1});ya("Back",Gu("in"),Gu("out"),Gu());ht.SteppedEase=ht.steps=rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),a=t?1:0,s=1-wt;return function(o){return((n*Go(0,s,o)|0)+a)*i}}};Oo.ease=ht["quad.out"];Ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return op+=r+","+r+"Params,"});var up=function(e,t){this.id=U1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:lp,this.set=t?t.getSetter:Ih},Vo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),zo||Yi.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Ms(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ph(this,i),!a._dp||a.parent||lg(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ag(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ym(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ym(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,n):this._repeat?ys(this._tTime,a)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?wh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime(Go(-Math.abs(this._delay),this.totalDuration(),a),n!==!1),Rh(this),j1(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&jn(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ji(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wh(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=W1);var n=mi;return mi=i,hp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),mi=n,this},e.globalTime=function(i){for(var n=this,a=arguments.length?i:n.rawTime();n;)a=n._start+a/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,jm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,jm(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(vn(this,i),ji(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ji(n)),this._dur||(this._zTime=-wt),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=n&&a<this.endTime(!0)-wt)},e.eventCallback=function(i,n,a){var s=this.vars;return arguments.length>1?(n?(s[i]=n,a&&(s[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=n)):delete s[i],this):s[i]},e.then=function(i){var n=this,a=n._prom;return new Promise(function(s){var o=zt(i)?i:og,c=function(){var h=n.then;n.then=null,a&&a(),zt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),s(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?c():n._prom=c})},e.kill=function(){Lo(this)},r})();an(Vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var wi=(function(r){Km(e,r);function e(i,n){var a;return i===void 0&&(i={}),a=r.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=ji(i.sortChildren),Ft&&jn(i.parent||Ft,ur(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&hg(ur(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(n,a,s){return Fo(0,arguments,this),this},t.from=function(n,a,s){return Fo(1,arguments,this),this},t.fromTo=function(n,a,s,o){return Fo(2,arguments,this),this},t.set=function(n,a,s){return a.duration=0,a.parent=this,No(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new qt(n,a,vn(this,s),1),this},t.call=function(n,a,s){return jn(this,qt.delayedCall(0,n,a),s)},t.staggerTo=function(n,a,s,o,c,l,h){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=h,s.parent=this,new qt(n,s,vn(this,c)),this},t.staggerFrom=function(n,a,s,o,c,l,h){return s.runBackwards=1,No(s).immediateRender=ji(s.immediateRender),this.staggerTo(n,a,s,o,c,l,h)},t.staggerFromTo=function(n,a,s,o,c,l,h,p){return o.startAt=s,No(o).immediateRender=ji(o.immediateRender),this.staggerTo(n,a,o,c,l,h,p)},t.render=function(n,a,s){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:Nt(n),p=this._zTime<0!=n<0&&(this._initted||!l),d,u,m,_,f,g,b,M,v,S,w,E;if(this!==Ft&&h>c&&n>=0&&(h=c),h!==this._tTime||s||p){if(o!==this._time&&l&&(h+=this._time-o,n+=this._time-o),d=h,v=this._start,M=this._ts,g=!M,p&&(l||(o=this._zTime),(n||!a)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,f=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(f*100+n,a,s);if(d=Nt(h%f),h===c?(_=this._repeat,d=l):(S=Nt(h/f),_=~~S,_&&_===S&&(d=l,_--),d>l&&(d=l)),S=ys(this._tTime,f),!o&&this._tTime&&S!==_&&this._tTime-S*f-this._dur<=0&&(S=_),w&&_&1&&(d=l-d,E=1),_!==S&&!this._lock){var x=w&&S&1,T=x===(w&&_&1);if(_<S&&(x=!x),o=x?0:h%l?l:h,this._lock=1,this.render(o||(E?0:Nt(_*f)),a,!l)._lock=0,this._tTime=h,!a&&this.parent&&nn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,T&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=K1(this,Nt(o),Nt(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&l&&!a&&!S&&(nn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(u=this._first;u;){if(m=u._next,(u._act||d>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(n,a,s);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,a,s),d!==this._time||!this._ts&&!g){b=0,m&&(h+=this._zTime=-wt);break}}u=m}else{u=this._last;for(var C=n<0?n:d;u;){if(m=u._prev,(u._act||C<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(n,a,s);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,a,s||mi&&hp(u)),d!==this._time||!this._ts&&!g){b=0,m&&(h+=this._zTime=C?-wt:wt);break}}u=m}}if(b&&!a&&(this.pause(),b.render(d>=o?0:-wt)._zTime=d>=o?1:-1,this._ts))return this._start=v,Rh(this),this.render(n,a,s);this._onUpdate&&!a&&nn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&qr(this,1),!a&&!(n<0&&!o)&&(h||o||!c)&&(nn(this,h===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,a){var s=this;if(fr(a)||(a=vn(this,a,n)),!(n instanceof Vo)){if(Ti(n))return n.forEach(function(o){return s.add(o,a)}),this;if(ni(n))return this.addLabel(n,a);if(zt(n))n=qt.delayedCall(0,n);else return this}return this!==n?jn(this,n,a):this},t.getChildren=function(n,a,s,o){n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-yn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof qt?a&&c.push(l):(s&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,a,s)))),l=l._next;return c},t.getById=function(n){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===n)return a[s]},t.remove=function(n){return ni(n)?this.removeLabel(n):zt(n)?this.killTweensOf(n):(n.parent===this&&Ch(this,n),n===this._recent&&(this._recent=this._last),ma(this))},t.totalTime=function(n,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(Yi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,a),this._forcing=0,this):this._tTime},t.addLabel=function(n,a){return this.labels[n]=vn(this,a),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,a,s){var o=qt.delayedCall(0,a||Bo,s);return o.data="isPause",this._hasPause=1,jn(this,o,vn(this,n))},t.removePause=function(n){var a=this._first;for(n=vn(this,n);a;)a._start===n&&a.data==="isPause"&&qr(a),a=a._next},t.killTweensOf=function(n,a,s){for(var o=this.getTweensOf(n,s),c=o.length;c--;)Hr!==o[c]&&o[c].kill(n,a);return this},t.getTweensOf=function(n,a){for(var s=[],o=bn(n),c=this._first,l=fr(a),h;c;)c instanceof qt?X1(c._targets,o)&&(l?(!Hr||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&s.push(c):(h=c.getTweensOf(o,a)).length&&s.push.apply(s,h),c=c._next;return s},t.tweenTo=function(n,a){a=a||{};var s=this,o=vn(s,n),c=a,l=c.startAt,h=c.onStart,p=c.onStartParams,d=c.immediateRender,u,m=qt.to(s,an({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||wt,onStart:function(){if(s.pause(),!u){var f=a.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());m._dur!==f&&bs(m,f,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,p||[])}},a));return d?m.render(0):m},t.tweenFromTo=function(n,a,s){return this.tweenTo(a,an({startAt:{time:vn(this,n)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Zm(this,vn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Zm(this,vn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(n,a,s){s===void 0&&(s=0);var o=this._first,c=this.labels,l;for(n=Nt(n);o;)o._start>=s&&(o._start+=n,o._end+=n),o=o._next;if(a)for(l in c)c[l]>=s&&(c[l]+=n);return ma(this)},t.invalidate=function(n){var a=this._first;for(this._lock=0;a;)a.invalidate(n),a=a._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ma(this)},t.totalDuration=function(n){var a=0,s=this,o=s._last,c=yn,l,h,p;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(p=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&s._sort&&o._ts&&!s._lock?(s._lock=1,jn(s,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(a-=h,(!p&&!s._dp||p&&p.smoothChildTiming)&&(s._start+=Nt(h/s._ts),s._time-=h,s._tTime-=h),s.shiftChildren(-h,!1,-1/0),c=0),o._end>a&&o._ts&&(a=o._end),o=l;bs(s,s===Ft&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(n){if(Ft._ts&&(ag(Ft,wh(n,Ft)),rg=Yi.frame),Yi.frame>=Xm){Xm+=Zi.autoSleep||120;var a=Ft._first;if((!a||!a._ts)&&Zi.autoSleep&&Yi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Yi.sleep()}}},e})(Vo);an(wi.prototype,{_lock:0,_hasPause:0,_forcing:0});var mM=function(e,t,i,n,a,s,o){var c=new Oi(this._pt,e,t,0,1,_p,null,a),l=0,h=0,p,d,u,m,_,f,g,b;for(c.b=i,c.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Ss(n)),s&&(b=[i,n],s(b,e,t),i=b[0],n=b[1]),d=i.match(ku)||[];p=ku.exec(n);)m=p[0],_=n.substring(l,p.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==d[h++]&&(f=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:f,c:m.charAt(1)==="="?va(f,m)-f:parseFloat(m)-f,m:u&&u<4?Math.round:0},l=ku.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=o,(rp.test(n)||g)&&(c.e=0),this._pt=c,c},pp=function(e,t,i,n,a,s,o,c,l,h){zt(n)&&(n=n(a||0,e,s));var p=e[t],d=i!=="get"?i:zt(p)?l?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():p,u=zt(p)?l?yM:Eg:gp,m;if(ni(n)&&(~n.indexOf("random(")&&(n=Ss(n)),n.charAt(1)==="="&&(m=va(d,n)+(gi(d)||0),(m||m===0)&&(n=m))),!h||d!==n||Qu)return!isNaN(d*n)&&n!==""?(m=new Oi(this._pt,e,t,+d||0,n-(d||0),typeof p=="boolean"?MM:Ag,0,u),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!p&&!(t in e)&&Ah(t,n),mM.call(this,e,t,d,n,u,c||Zi.stringFilter,l))},gM=function(e,t,i,n,a){if(zt(e)&&(e=Uo(e,a,t,i,n)),!Zn(e)||e.style&&e.nodeType||Ti(e)||eg(e))return ni(e)?Uo(e,a,t,i,n):e;var s={},o;for(o in e)s[o]=Uo(e[o],a,t,i,n);return s},fp=function(e,t,i,n,a,s){var o,c,l,h;if(qi[e]&&(o=new qi[e]).init(a,o.rawVars?t[e]:gM(t[e],n,a,s,i),i,n,s)!==!1&&(i._pt=c=new Oi(i._pt,a,e,0,1,o.render,o,0,o.priority),i!==xs))for(l=i._ptLookup[i._targets.indexOf(a)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Hr,Qu,mp=function r(e,t,i){var n=e.vars,a=n.ease,s=n.startAt,o=n.immediateRender,c=n.lazy,l=n.onUpdate,h=n.runBackwards,p=n.yoyoEase,d=n.keyframes,u=n.autoRevert,m=e._dur,_=e._startAt,f=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:f,M=e._overwrite==="auto"&&!tp,v=e.timeline,S=n.easeReverse||p,w,E,x,T,C,I,L,q,G,U,H,O,Z;if(v&&(!d||!a)&&(a="none"),e._ease=ga(a,Oo.ease),e._rEase=S&&(ga(S)||e._ease),e._from=!v&&!!n.runBackwards,e._from&&(e.ratio=1),!v||d&&!n.stagger){if(q=f[0]?Xr(f[0]).harness:0,O=q&&n[q.prop],w=Sh(n,sp),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!u?_.render(-1,!0):_.revert(h&&m?xh:H1),_._lazy=0),s){if(qr(e._startAt=qt.set(f,an({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ji(c),startAt:null,delay:0,onUpdate:l&&function(){return nn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mi||!o&&!u)&&e._startAt.revert(xh),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),x=an({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ji(c),immediateRender:o,stagger:0,parent:g},w),O&&(x[q.prop]=O),qr(e._startAt=qt.set(f,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mi?e._startAt.revert(xh):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&ji(c)||c&&!m,E=0;E<f.length;E++){if(C=f[E],L=C._gsap||cp(f)[E]._gsap,e._ptLookup[E]=U={},Yu[L.id]&&Wr.length&&Mh(),H=b===f?E:b.indexOf(C),q&&(G=new q).init(C,O||w,e,H,b)!==!1&&(e._pt=T=new Oi(e._pt,C,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(te){U[te]=T}),G.priority&&(I=1)),!q||O)for(x in w)qi[x]&&(G=fp(x,w,e,H,C,b))?G.priority&&(I=1):U[x]=T=pp.call(e,C,x,"get",w[x],H,b,0,n.stringFilter);e._op&&e._op[E]&&e.kill(C,e._op[E]),M&&e._pt&&(Hr=e,Ft.killTweensOf(C,U,e.globalTime(t)),Z=!e.parent,Hr=0),e._pt&&c&&(Yu[L.id]=1)}I&&vp(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&v.render(yn,!0,!0)},_M=function(e,t,i,n,a,s,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,p,d,u;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Qu=1,e.vars[t]="+=0",mp(e,o),Qu=0,c?ko(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(u=l.length;u--;)p=l[u],h=p._pt||p,h.s=(n||n===0)&&!a?n:h.s+(n||0)+s*h.c,h.c=i-h.s,p.e&&(p.e=Vt(i)+gi(p.e)),p.b&&(p.b=h.s+gi(p.b))},xM=function(e,t){var i=e[0]?Xr(e[0]).harness:0,n=i&&i.aliases,a,s,o,c;if(!n)return t;a=vs({},t);for(s in n)if(s in a)for(c=n[s].split(","),o=c.length;o--;)a[c[o]]=a[s];return a},vM=function(e,t,i,n){var a=t.ease||n||"power1.inOut",s,o;if(Ti(t))o=i[e]||(i[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:a})});else for(s in t)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:a})},Uo=function(e,t,i,n,a){return zt(e)?e.call(t,i,n,a):ni(e)&&~e.indexOf("random(")?Ss(e):e},wg=op+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Tg={};Ui(wg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Tg[r]=1});var qt=(function(r){Km(e,r);function e(i,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=r.call(this,s?n:No(n))||this;var c=o.vars,l=c.duration,h=c.delay,p=c.immediateRender,d=c.stagger,u=c.overwrite,m=c.keyframes,_=c.defaults,f=c.scrollTrigger,g=n.parent||Ft,b=(Ti(i)||eg(i)?fr(i[0]):"length"in n)?[i]:bn(i),M,v,S,w,E,x,T,C;if(o._targets=b.length?cp(b):ko("GSAP target "+i+" not found. https://gsap.com",!Zi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||d||_h(l)||_h(h)){n=o.vars;var I=n.easeReverse||n.yoyoEase;if(M=o.timeline=new wi({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),M.kill(),M.parent=M._dp=ur(o),M._start=0,d||_h(l)||_h(h)){if(w=b.length,T=d&&fg(d),Zn(d))for(E in d)~wg.indexOf(E)&&(C||(C={}),C[E]=d[E]);for(v=0;v<w;v++)S=Sh(n,Tg),S.stagger=0,I&&(S.easeReverse=I),C&&vs(S,C),x=b[v],S.duration=+Uo(l,ur(o),v,x,b),S.delay=(+Uo(h,ur(o),v,x,b)||0)-o._delay,!d&&w===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),M.to(x,S,T?T(v,x,b):0),M._ease=ht.none;M.duration()?l=h=0:o.timeline=0}else if(m){No(an(M.vars.defaults,{ease:"none"})),M._ease=ga(m.ease||n.ease||"none");var L=0,q,G,U;if(Ti(m))m.forEach(function(H){return M.to(b,H,">")}),M.duration();else{S={};for(E in m)E==="ease"||E==="easeEach"||vM(E,m[E],S,m.easeEach);for(E in S)for(q=S[E].sort(function(H,O){return H.t-O.t}),L=0,v=0;v<q.length;v++)G=q[v],U={ease:G.e,duration:(G.t-(v?q[v-1].t:0))/100*l},U[E]=G.v,M.to(b,U,L),L+=U.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||o.duration(l=M.duration())}else o.timeline=0;return u===!0&&!tp&&(Hr=ur(o),Ft.killTweensOf(b),Hr=0),jn(g,ur(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(p||!l&&!m&&o._start===Nt(g._time)&&ji(p)&&Z1(ur(o))&&g.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-h)||0)),f&&hg(ur(o),f),o}var t=e.prototype;return t.render=function(n,a,s){var o=this._time,c=this._tDur,l=this._dur,h=n<0,p=n>c-wt&&!h?c:n<wt?0:n,d,u,m,_,f,g,b,M;if(!l)$1(this,n,a,s);else if(p!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=p,M=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,a,s);if(d=Nt(p%_),p===c?(m=this._repeat,d=l):(f=Nt(p/_),m=~~f,m&&m===f?(d=l,m--):d>l&&(d=l)),g=this._yoyo&&m&1,g&&(d=l-d),f=ys(this._tTime,_),d===o&&!s&&this._initted&&m===f)return this._tTime=p,this;m!==f&&this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=s=1,this.render(Nt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(dg(this,h?n:d,s,a,p))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&m!==f))return this;if(l!==this._dur)return this.render(n,a,s)}if(this._rEase){var v=d<o;if(v!==this._inv){var S=v?o:l-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/l);if(this._from&&(this.ratio=b=1-b),this._tTime=p,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&p&&!a&&!f&&(nn(this,"onStart"),this._tTime!==p))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;M&&M.render(n<0?n:M._dur*M._ease(d/this._dur),a,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!a&&(h&&ju(this,n,a,s),nn(this,"onUpdate")),this._repeat&&m!==f&&this.vars.onRepeat&&!a&&this.parent&&nn(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(h&&!this._onUpdate&&ju(this,n,!0,!0),(n||!l)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&qr(this,1),!a&&!(h&&!o)&&(p||o||g)&&(nn(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,a,s,o,c){zo||Yi.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||mp(this,l),h=this._ease(l/this._dur),_M(this,n,a,s,o,h,l,c)?this.resetTo(n,a,s,o,1):(Ph(this,0),this.parent||cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,a){if(a===void 0&&(a="all"),!n&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mi),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,a,Hr&&Hr.vars.overwrite!==!0)._first||Lo(this),this.parent&&s!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,c=n?bn(n):o,l=this._ptLookup,h=this._pt,p,d,u,m,_,f,g;if((!a||a==="all")&&Y1(o,c))return a==="all"&&(this._pt=0),Lo(this);for(p=this._op=this._op||[],a!=="all"&&(ni(a)&&(_={},Ui(a,function(b){return _[b]=1}),a=_),a=xM(o,a)),g=o.length;g--;)if(~c.indexOf(o[g])){d=l[g],a==="all"?(p[g]=a,m=d,u={}):(u=p[g]=p[g]||{},m=a);for(_ in m)f=d&&d[_],f&&((!("kill"in f.d)||f.d.kill(_)===!0)&&Ch(this,f,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Lo(this),this},e.to=function(n,a){return new e(n,a,arguments[2])},e.from=function(n,a){return Fo(1,arguments)},e.delayedCall=function(n,a,s,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(n,a,s){return Fo(2,arguments)},e.set=function(n,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(n,a)},e.killTweensOf=function(n,a,s){return Ft.killTweensOf(n,a,s)},e})(Vo);an(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ui("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new wi,t=Ju.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var gp=function(e,t,i){return e[t]=i},Eg=function(e,t,i){return e[t](i)},yM=function(e,t,i,n){return e[t](n.fp,i)},bM=function(e,t,i){return e.setAttribute(t,i)},Ih=function(e,t){return zt(e[t])?Eg:Eh(e[t])&&e.setAttribute?bM:gp},Ag=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},MM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_p=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},xp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},SM=function(e,t,i,n){for(var a=this._pt,s;a;)s=a._next,a.p===n&&a.modifier(e,t,i),a=s},wM=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Ch(this,t,"_pt"):t.dep||(i=1),t=n;return!i},TM=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},vp=function(e){for(var t=e._pt,i,n,a,s;t;){for(i=t._next,n=a;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:s)?t._prev._next=t:a=t,(t._next=n)?n._prev=t:s=t,t=i}e._pt=a},Oi=(function(){function r(t,i,n,a,s,o,c,l,h){this.t=i,this.s=a,this.c=s,this.p=n,this.r=o||Ag,this.d=c||this,this.set=l||gp,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,a){this.mSet=this.mSet||this.set,this.set=TM,this.m=i,this.mt=a,this.tween=n},r})();Ui(op+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return sp[r]=1});rn.TweenMax=rn.TweenLite=qt;rn.TimelineLite=rn.TimelineMax=wi;Ft=new wi({sortChildren:!1,defaults:Oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zi.stringFilter=dp;var _a=[],yh={},EM=[],$m=0,AM=0,Hu=function(e){return(yh[e]||EM).map(function(t){return t()})},ep=function(){var e=Date.now(),t=[];e-$m>2&&(Hu("matchMediaInit"),_a.forEach(function(i){var n=i.queries,a=i.conditions,s,o,c,l;for(o in n)s=Yn.matchMedia(n[o]).matches,s&&(c=1),s!==a[o]&&(a[o]=s,l=1);l&&(i.revert(),c&&t.push(i))}),Hu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),$m=e,Hu("matchMedia"))},Cg=(function(){function r(t,i){this.selector=i&&$u(i),this.data=[],this._r=[],this.isReverted=!1,this.id=AM++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,a){zt(i)&&(a=n,n=i,i=zt);var s=this,o=function(){var l=Dt,h=s.selector,p;return l&&l!==s&&l.data.push(s),a&&(s.selector=$u(a)),Dt=s,p=n.apply(s,arguments),zt(p)&&s._r.push(p),Dt=l,s.selector=h,s.isReverted=!1,p};return s.last=o,i===zt?o(s,function(c){return s.add(null,c)}):i?s[i]=o:o},e.ignore=function(i){var n=Dt;Dt=null,i(this),Dt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof qt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var a=this;if(i?(function(){for(var o=a.getTweens(),c=a.data.length,l;c--;)l=a.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,p){return p.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),c=a.data.length;c--;)l=a.data[c],l instanceof wi?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof qt)&&l.revert&&l.revert(i);a._r.forEach(function(h){return h(i,a)}),a.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var s=_a.length;s--;)_a[s].id===this.id&&_a.splice(s,1)},e.revert=function(i){this.kill(i||{})},r})(),CM=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(i,n,a){Zn(i)||(i={matches:i});var s=new Cg(0,a||this.scope),o=s.conditions={},c,l,h;Dt&&!s.selector&&(s.selector=Dt.selector),this.contexts.push(s),n=s.add("onMatch",n),s.queries=i;for(l in i)l==="all"?h=1:(c=Yn.matchMedia(i[l]),c&&(_a.indexOf(s)<0&&_a.push(s),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(ep):c.addEventListener("change",ep)));return h&&n(s,function(p){return s.add(null,p)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),Th={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return yg(n)})},timeline:function(e){return new wi(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,i,n){ni(e)&&(e=bn(e)[0]);var a=Xr(e||{}).get,s=i?og:sg;return i==="native"&&(i=""),e&&(t?s((qi[t]&&qi[t].get||a)(e,t,i,n)):function(o,c,l){return s((qi[o]&&qi[o].get||a)(e,o,c,l))})},quickSetter:function(e,t,i){if(e=bn(e),e.length>1){var n=e.map(function(h){return Ei.quickSetter(h,t,i)}),a=n.length;return function(h){for(var p=a;p--;)n[p](h)}}e=e[0]||{};var s=qi[t],o=Xr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=s?function(h){var p=new s;xs._pt=0,p.init(e,i?h+i:h,xs,0,[e]),p.render(1,p),xs._pt&&xp(1,xs)}:o.set(e,c);return s?l:function(h){return l(e,c,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,a=Ei.to(e,an((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),s=function(c,l,h){return a.resetTo(t,c,l,h)};return s.tween=a,s},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ga(e.ease,Oo.ease)),qm(Oo,e||{})},config:function(e){return qm(Zi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,a=e.defaults,s=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!qi[o]&&!rn[o]&&ko(t+" effect requires "+o+" plugin.")}),Bu[t]=function(o,c,l){return i(bn(o),an(c||{},a),l)},s&&(wi.prototype[t]=function(o,c,l){return this.add(Bu[t](o,Zn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ht[e]=ga(t)},parseEase:function(e,t){return arguments.length?ga(e,t):ht},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new wi(e),n,a;for(i.smoothChildTiming=ji(e.smoothChildTiming),Ft.remove(i),i._dp=0,i._time=i._tTime=Ft._time,n=Ft._first;n;)a=n._next,(t||!(!n._dur&&n instanceof qt&&n.vars.onComplete===n._targets[0]))&&jn(i,n,n._start-n._delay),n=a;return jn(Ft,i,0),i},context:function(e,t){return e?new Cg(e,t):Dt},matchMedia:function(e){return new CM(e)},matchMediaRefresh:function(){return _a.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||ep()},addEventListener:function(e,t){var i=yh[e]||(yh[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yh[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:aM,wrapYoyo:sM,distribute:fg,random:gg,snap:mg,normalize:rM,getUnit:gi,clamp:eM,splitColor:bg,toArray:bn,selector:$u,mapRange:xg,pipe:iM,unitize:nM,interpolate:oM,shuffle:pg},install:ig,effects:Bu,ticker:Yi,updateRoot:wi.updateRoot,plugins:qi,globalTimeline:Ft,core:{PropTween:Oi,globals:ng,Tween:qt,Timeline:wi,Animation:Vo,getCache:Xr,_removeLinkedListItem:Ch,reverting:function(){return mi},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return tp=e}}};Ui("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Th[r]=qt[r]});Yi.add(wi.updateRoot);xs=Th.to({},{duration:0});var RM=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},PM=function(e,t){var i=e._targets,n,a,s;for(n in t)for(a=i.length;a--;)s=e._ptLookup[a][n],s&&(s=s.d)&&(s._pt&&(s=RM(s,n)),s&&s.modifier&&s.modifier(t[n],e,i[a],n))},Wu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,a,s){s._onInit=function(o){var c,l;if(ni(a)&&(c={},Ui(a,function(h){return c[h]=1}),a=c),t){c={};for(l in a)c[l]=t(a[l]);a=c}PM(o,a)}}}},Ei=Th.registerPlugin({name:"attr",init:function(e,t,i,n,a){var s,o,c;this.tween=i;for(s in t)c=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(c||0)+"",t[s],n,a,0,0,s),o.op=s,o.b=c,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)mi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Wu("roundProps",Ku),Wu("modifiers"),Wu("snap",mg))||Th;qt.version=wi.version=Ei.version="3.15.0";tg=1;ip()&&Ms();var IM=ht.Power0,LM=ht.Power1,DM=ht.Power2,NM=ht.Power3,FM=ht.Power4,UM=ht.Linear,OM=ht.Quad,kM=ht.Cubic,BM=ht.Quart,zM=ht.Quint,VM=ht.Strong,GM=ht.Elastic,HM=ht.Back,WM=ht.SteppedEase,XM=ht.Bounce,qM=ht.Sine,YM=ht.Expo,jM=ht.Circ;var Rg,jr,Ts,Tp,wa,ZM,Pg,Ep,JM=function(){return typeof window<"u"},gr={},Sa=180/Math.PI,Es=Math.PI/180,ws=Math.atan2,Ig=1e8,Ap=/([A-Z])/g,$M=/(left|right|width|margin|padding|x)/i,KM=/[\s,\(]\S/,Jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Bg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},nS=function(e,t,i){return e.style[t]=i},rS=function(e,t,i){return e.style.setProperty(t,i)},aS=function(e,t,i){return e._gsap[t]=i},sS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},oS=function(e,t,i,n,a){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(a,s)},cS=function(e,t,i,n,a){var s=e._gsap;s[t]=i,s.renderTransform(a,s)},Ut="transform",Ji=Ut+"Origin",lS=function r(e,t){var i=this,n=this.target,a=n.style,s=n._gsap;if(e in gr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=mr(n,o)}):this.tfm[e]=s.x?s[e]:mr(n,e),e===Ji&&(this.tfm.zOrigin=s.zOrigin);else return Jn.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(Ut)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Ji,t,"")),e=Ut}(a||t)&&this.props.push(e,t,a[e])},Vg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hS=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Ap,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)n[s]=this.tfm[s];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Ep(),(!a||!a.isStart)&&!i[Ut]&&(Vg(i),n.zOrigin&&i[Ji]&&(i[Ji]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Gg=function(e,t){var i={target:e,props:[],revert:hS,save:lS};return e._gsap||Ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Hg,Mp=function(e,t){var i=jr.createElementNS?jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):jr.createElement(e);return i&&i.style?i:jr.createElement(e)},sn=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ap,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,As(t)||t,1)||""},Lg="O,Moz,ms,Ms,Webkit".split(","),As=function(e,t,i){var n=t||wa,a=n.style,s=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Lg[s]+e in a););return s<0?null:(s===3?"ms":s>=0?Lg[s]:"")+e},Sp=function(){JM()&&window.document&&(Rg=window,jr=Rg.document,Ts=jr.documentElement,wa=Mp("div")||{style:{}},ZM=Mp("div"),Ut=As(Ut),Ji=Ut+"Origin",wa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hg=!!As("perspective"),Ep=Ei.core.reverting,Tp=1)},Dg=function(e){var t=e.ownerSVGElement,i=Mp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),a;n.style.display="block",i.appendChild(n),Ts.appendChild(i);try{a=n.getBBox()}catch{}return i.removeChild(n),Ts.removeChild(i),a},Ng=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Wg=function(e){var t,i;try{t=e.getBBox()}catch{t=Dg(e),i=1}return t&&(t.width||t.height)||i||(t=Dg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ng(e,["x","cx","x1"])||0,y:+Ng(e,["y","cy","y1"])||0,width:0,height:0}:t},Xg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wg(e))},Jr=function(e,t){if(t){var i=e.style,n;t in gr&&t!==Ji&&(t=Ut),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ap,"-$1").toLowerCase())):i.removeAttribute(t)}},Zr=function(e,t,i,n,a,s){var o=new Oi(e._pt,t,i,0,1,s?zg:Bg);return e._pt=o,o.b=n,o.e=a,e._props.push(i),o},Fg={deg:1,rad:1,turn:1},dS={grid:1,flex:1},$r=function r(e,t,i,n){var a=parseFloat(i)||0,s=(i+"").trim().substr((a+"").length)||"px",o=wa.style,c=$M.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),p=100,d=n==="px",u=n==="%",m,_,f,g;if(n===s||!a||Fg[n]||Fg[s])return a;if(s!=="px"&&!d&&(a=r(e,t,i,"px")),g=e.getCTM&&Xg(e),(u||s==="%")&&(gr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[h],Vt(u?a/m*p:a/100*m);if(o[c?"width":"height"]=p+(d?s:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===jr||!_.appendChild)&&(_=jr.body),f=_._gsap,f&&u&&f.width&&c&&f.time===Yi.time&&!f.uncache)return Vt(a/f.width*p);if(u&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=p+n,m=e[h],b?e.style[t]=b:Jr(e,t)}else(u||s==="%")&&!dS[sn(_,"display")]&&(o.position=sn(e,"position")),_===e&&(o.position="static"),_.appendChild(wa),m=wa[h],_.removeChild(wa),o.position="absolute";return c&&u&&(f=Xr(_),f.time=Yi.time,f.width=_[h]),Vt(d?m*a/p:m&&a?p/m*a:0)},mr=function(e,t,i,n){var a;return Tp||Sp(),t in Jn&&t!=="transform"&&(t=Jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),gr[t]&&t!=="transform"?(a=Xo(e,n),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Dh(sn(e,Ji))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||n||~(a+"").indexOf("calc("))&&(a=Lh[t]&&Lh[t](e,t,i)||sn(e,t)||lp(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?$r(e,t,a,i)+i:a},uS=function(e,t,i,n){if(!i||i==="none"){var a=As(t,e,1),s=a&&sn(e,a,1);s&&s!==i?(t=a,i=s):t==="borderColor"&&(i=sn(e,"borderTopColor"))}var o=new Oi(this._pt,e.style,t,0,1,_p),c=0,l=0,h,p,d,u,m,_,f,g,b,M,v,S;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=sn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=sn(e,t)||n,_?e.style[t]=_:Jr(e,t)),h=[i,n],dp(h),i=h[0],n=h[1],d=i.match(xa)||[],S=n.match(xa)||[],S.length){for(;p=xa.exec(n);)f=p[0],b=n.substring(c,p.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),f!==(_=d[l++]||"")&&(u=parseFloat(_)||0,v=_.substr((u+"").length),f.charAt(1)==="="&&(f=va(u,f)+v),g=parseFloat(f),M=f.substr((g+"").length),c=xa.lastIndex-M.length,M||(M=M||Zi.units[t]||v,c===n.length&&(n+=M,o.e+=M)),v!==M&&(u=$r(e,t,_,M)||0),o._pt={_next:o._pt,p:b||l===1?b:",",s:u,c:g-u,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<n.length?n.substring(c,n.length):""}else o.r=t==="display"&&n==="none"?zg:Bg;return rp.test(n)&&(o.e=0),this._pt=o,o},Ug={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pS=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Ug[i]||i,t[1]=Ug[n]||n,t.join(" ")},fS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,a=t.u,s=i._gsap,o,c,l;if(a==="all"||a===!0)n.cssText="",c=1;else for(a=a.split(","),l=a.length;--l>-1;)o=a[l],gr[o]&&(c=1,o=o==="transformOrigin"?Ji:Ut),Jr(i,o);c&&(Jr(i,Ut),s&&(s.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Xo(i,1),s.uncache=1,Vg(n)))}},Lh={clearProps:function(e,t,i,n,a){if(a.data!=="isFromStart"){var s=e._pt=new Oi(e._pt,t,i,0,0,fS);return s.u=n,s.pr=-10,s.tween=a,e._props.push(i),1}}},Wo=[1,0,0,1,0,0],qg={},Yg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Og=function(e){var t=sn(e,Ut);return Yg(t)?Wo:t.substr(7).match(np).map(Vt)},Cp=function(e,t){var i=e._gsap||Xr(e),n=e.style,a=Og(e),s,o,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?Wo:a):(a===Wo&&!e.offsetParent&&e!==Ts&&!i.svg&&(c=n.display,n.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Ts.appendChild(e)),a=Og(e),c?n.display=c:Jr(e,"display"),l&&(o?s.insertBefore(e,o):s?s.appendChild(e):Ts.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},wp=function(e,t,i,n,a,s){var o=e._gsap,c=a||Cp(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,p=o.xOffset||0,d=o.yOffset||0,u=c[0],m=c[1],_=c[2],f=c[3],g=c[4],b=c[5],M=t.split(" "),v=parseFloat(M[0])||0,S=parseFloat(M[1])||0,w,E,x,T;i?c!==Wo&&(E=u*f-m*_)&&(x=v*(f/E)+S*(-_/E)+(_*b-f*g)/E,T=v*(-m/E)+S*(u/E)-(u*b-m*g)/E,v=x,S=T):(w=Wg(e),v=w.x+(~M[0].indexOf("%")?v/100*w.width:v),S=w.y+(~(M[1]||M[0]).indexOf("%")?S/100*w.height:S)),n||n!==!1&&o.smooth?(g=v-l,b=S-h,o.xOffset=p+(g*u+b*_)-g,o.yOffset=d+(g*m+b*f)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Ji]="0px 0px",s&&(Zr(s,o,"xOrigin",l,v),Zr(s,o,"yOrigin",h,S),Zr(s,o,"xOffset",p,o.xOffset),Zr(s,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},Xo=function(e,t){var i=e._gsap||new up(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,a=i.scaleX<0,s="px",o="deg",c=getComputedStyle(e),l=sn(e,Ji)||"0",h,p,d,u,m,_,f,g,b,M,v,S,w,E,x,T,C,I,L,q,G,U,H,O,Z,te,P,oe,ve,ke,De,Xe;return h=p=d=_=f=g=b=M=v=0,u=m=1,i.svg=!!(e.getCTM&&Xg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[Ut]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ut]!=="none"?c[Ut]:"")),n.scale=n.rotate=n.translate="none"),E=Cp(e,i.svg),i.svg&&(i.uncache?(Z=e.getBBox(),l=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),wp(e,O||l,!!O||i.originIsAbsolute,i.smooth!==!1,E)),S=i.xOrigin||0,w=i.yOrigin||0,E!==Wo&&(I=E[0],L=E[1],q=E[2],G=E[3],h=U=E[4],p=H=E[5],E.length===6?(u=Math.sqrt(I*I+L*L),m=Math.sqrt(G*G+q*q),_=I||L?ws(L,I)*Sa:0,b=q||G?ws(q,G)*Sa+_:0,b&&(m*=Math.abs(Math.cos(b*Es))),i.svg&&(h-=S-(S*I+w*q),p-=w-(S*L+w*G))):(Xe=E[6],ke=E[7],P=E[8],oe=E[9],ve=E[10],De=E[11],h=E[12],p=E[13],d=E[14],x=ws(Xe,ve),f=x*Sa,x&&(T=Math.cos(-x),C=Math.sin(-x),O=U*T+P*C,Z=H*T+oe*C,te=Xe*T+ve*C,P=U*-C+P*T,oe=H*-C+oe*T,ve=Xe*-C+ve*T,De=ke*-C+De*T,U=O,H=Z,Xe=te),x=ws(-q,ve),g=x*Sa,x&&(T=Math.cos(-x),C=Math.sin(-x),O=I*T-P*C,Z=L*T-oe*C,te=q*T-ve*C,De=G*C+De*T,I=O,L=Z,q=te),x=ws(L,I),_=x*Sa,x&&(T=Math.cos(x),C=Math.sin(x),O=I*T+L*C,Z=U*T+H*C,L=L*T-I*C,H=H*T-U*C,I=O,U=Z),f&&Math.abs(f)+Math.abs(_)>359.9&&(f=_=0,g=180-g),u=Vt(Math.sqrt(I*I+L*L+q*q)),m=Vt(Math.sqrt(H*H+Xe*Xe)),x=ws(U,H),b=Math.abs(x)>2e-4?x*Sa:0,v=De?1/(De<0?-De:De):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Yg(sn(e,Ut)),O&&e.setAttribute("transform",O))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(u*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=p-((i.yPercent=p&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=d+s,i.scaleX=Vt(u),i.scaleY=Vt(m),i.rotation=Vt(_)+o,i.rotationX=Vt(f)+o,i.rotationY=Vt(g)+o,i.skewX=b+o,i.skewY=M+o,i.transformPerspective=v+s,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Ji]=Dh(l)),i.xOffset=i.yOffset=0,i.force3D=Zi.force3D,i.renderTransform=i.svg?gS:Hg?jg:mS,i.uncache=0,i},Dh=function(e){return(e=e.split(" "))[0]+" "+e[1]},yp=function(e,t,i){var n=gi(t);return Vt(parseFloat(t)+parseFloat($r(e,"x",i+"px",n)))+n},mS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jg(e,t)},ba="0deg",Ho="0px",Ma=") ",jg=function(e,t){var i=t||this,n=i.xPercent,a=i.yPercent,s=i.x,o=i.y,c=i.z,l=i.rotation,h=i.rotationY,p=i.rotationX,d=i.skewX,u=i.skewY,m=i.scaleX,_=i.scaleY,f=i.transformPerspective,g=i.force3D,b=i.target,M=i.zOrigin,v="",S=g==="auto"&&e&&e!==1||g===!0;if(M&&(p!==ba||h!==ba)){var w=parseFloat(h)*Es,E=Math.sin(w),x=Math.cos(w),T;w=parseFloat(p)*Es,T=Math.cos(w),s=yp(b,s,E*T*-M),o=yp(b,o,-Math.sin(w)*-M),c=yp(b,c,x*T*-M+M)}f!==Ho&&(v+="perspective("+f+Ma),(n||a)&&(v+="translate("+n+"%, "+a+"%) "),(S||s!==Ho||o!==Ho||c!==Ho)&&(v+=c!==Ho||S?"translate3d("+s+", "+o+", "+c+") ":"translate("+s+", "+o+Ma),l!==ba&&(v+="rotate("+l+Ma),h!==ba&&(v+="rotateY("+h+Ma),p!==ba&&(v+="rotateX("+p+Ma),(d!==ba||u!==ba)&&(v+="skew("+d+", "+u+Ma),(m!==1||_!==1)&&(v+="scale("+m+", "+_+Ma),b.style[Ut]=v||"translate(0, 0)"},gS=function(e,t){var i=t||this,n=i.xPercent,a=i.yPercent,s=i.x,o=i.y,c=i.rotation,l=i.skewX,h=i.skewY,p=i.scaleX,d=i.scaleY,u=i.target,m=i.xOrigin,_=i.yOrigin,f=i.xOffset,g=i.yOffset,b=i.forceCSS,M=parseFloat(s),v=parseFloat(o),S,w,E,x,T;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Es,l*=Es,S=Math.cos(c)*p,w=Math.sin(c)*p,E=Math.sin(c-l)*-d,x=Math.cos(c-l)*d,l&&(h*=Es,T=Math.tan(l-h),T=Math.sqrt(1+T*T),E*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),S*=T,w*=T)),S=Vt(S),w=Vt(w),E=Vt(E),x=Vt(x)):(S=p,x=d,w=E=0),(M&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(M=$r(u,"x",s,"px"),v=$r(u,"y",o,"px")),(m||_||f||g)&&(M=Vt(M+m-(m*S+_*E)+f),v=Vt(v+_-(m*w+_*x)+g)),(n||a)&&(T=u.getBBox(),M=Vt(M+n/100*T.width),v=Vt(v+a/100*T.height)),T="matrix("+S+","+w+","+E+","+x+","+M+","+v+")",u.setAttribute("transform",T),b&&(u.style[Ut]=T)},_S=function(e,t,i,n,a){var s=360,o=ni(a),c=parseFloat(a)*(o&&~a.indexOf("rad")?Sa:1),l=c-n,h=n+l+"deg",p,d;return o&&(p=a.split("_")[1],p==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),p==="cw"&&l<0?l=(l+s*Ig)%s-~~(l/s)*s:p==="ccw"&&l>0&&(l=(l-s*Ig)%s-~~(l/s)*s)),e._pt=d=new Oi(e._pt,t,i,n,l,QM),d.e=h,d.u="deg",e._props.push(i),d},kg=function(e,t){for(var i in t)e[i]=t[i];return e},xS=function(e,t,i){var n=kg({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,c,l,h,p,d,u,m;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),s[Ut]=t,o=Xo(i,1),Jr(i,Ut),i.setAttribute("transform",l)):(l=getComputedStyle(i)[Ut],s[Ut]=t,o=Xo(i,1),s[Ut]=l);for(c in gr)l=n[c],h=o[c],l!==h&&a.indexOf(c)<0&&(u=gi(l),m=gi(h),p=u!==m?$r(i,c,l,m):parseFloat(l),d=parseFloat(h),e._pt=new Oi(e._pt,o,c,p,d-p,bp),e._pt.u=m||0,e._props.push(c));kg(o,n)};Ui("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",a="Left",s=(e<3?[t,i,n,a]:[t+a,t+i,n+i,n+a]).map(function(o){return e<2?r+o:"border"+o+r});Lh[e>1?"border"+r:r]=function(o,c,l,h,p){var d,u;if(arguments.length<4)return d=s.map(function(m){return mr(o,m,l)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},s.forEach(function(m,_){return u[m]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(c,u,p)}});var Rp={name:"css",register:Sp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,a){var s=this._props,o=e.style,c=i.vars.startAt,l,h,p,d,u,m,_,f,g,b,M,v,S,w,E,x,T;Tp||Sp(),this.styles=this.styles||Gg(e),x=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(qi[_]&&fp(_,t,i,n,e,a)))){if(u=typeof h,m=Lh[_],u==="function"&&(h=h.call(i,n,e,a),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Ss(h)),m)m(this,e,_,h,i)&&(E=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",pr.lastIndex=0,pr.test(l)||(f=gi(l),g=gi(h),g?f!==g&&(l=$r(e,_,l,g)+g):f&&(h+=f)),this.add(o,"setProperty",l,h,n,a,0,0,_),s.push(_),x.push(_,0,o[_]);else if(u!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(i,n,e,a):c[_],ni(l)&&~l.indexOf("random(")&&(l=Ss(l)),gi(l+"")||l==="auto"||(l+=Zi.units[_]||gi(mr(e,_))||""),(l+"").charAt(1)==="="&&(l=mr(e,_))):l=mr(e,_),d=parseFloat(l),b=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),p=parseFloat(h),_ in Jn&&(_==="autoAlpha"&&(d===1&&mr(e,"visibility")==="hidden"&&p&&(d=0),x.push("visibility",0,o.visibility),Zr(this,o,"visibility",d?"inherit":"hidden",p?"inherit":"hidden",!p)),_!=="scale"&&_!=="transform"&&(_=Jn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in gr,M){if(this.styles.save(_),T=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=sn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=h,h=sn(e,"perspective"),C?e.style.perspective=C:Jr(e,"perspective")}p=parseFloat(h)}if(v||(S=e._gsap,S.renderTransform&&!t.parseTransform||Xo(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new Oi(this._pt,o,Ut,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new Oi(this._pt,S,"scaleY",S.scaleY,(b?va(S.scaleY,b+p):p)-S.scaleY||0,bp),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Ji,0,o[Ji]),h=pS(h),S.svg?wp(e,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&Zr(this,S,"zOrigin",S.zOrigin,g),Zr(this,o,_,Dh(l),Dh(h)));continue}else if(_==="svgOrigin"){wp(e,h,1,w,0,this);continue}else if(_ in qg){_S(this,S,_,d,b?va(d,b+h):h);continue}else if(_==="smoothOrigin"){Zr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){xS(this,h,e);continue}}else _ in o||(_=As(_)||_);if(M||(p||p===0)&&(d||d===0)&&!KM.test(h)&&_ in o)f=(l+"").substr((d+"").length),p||(p=0),g=gi(h)||(_ in Zi.units?Zi.units[_]:f),f!==g&&(d=$r(e,_,l,g)),this._pt=new Oi(this._pt,M?S:o,_,d,(b?va(d,b+p):p)-d,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?iS:bp),this._pt.u=g||0,M&&T!==h?(this._pt.b=l,this._pt.e=T,this._pt.r=tS):f!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=eS);else if(_ in o)uS.call(this,e,_,l,b?b+h:h);else if(_ in e)this.add(e,_,l||e[_],b?b+h:h,n,a);else if(_!=="parseTransform"){Ah(_,h);continue}M||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,l||e[_])),s.push(_)}}E&&vp(this)},render:function(e,t){if(t.tween._time||!Ep())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:mr,aliases:Jn,getSetter:function(e,t,i){var n=Jn[t];return n&&n.indexOf(",")<0&&(t=n),t in gr&&t!==Ji&&(e._gsap.x||mr(e,"x"))?i&&Pg===i?t==="scale"?sS:aS:(Pg=i||{})&&(t==="scale"?oS:cS):e.style&&!Eh(e.style[t])?nS:~t.indexOf("-")?rS:Ih(e,t)},core:{_removeProperty:Jr,_getMatrix:Cp}};Ei.utils.checkPrefix=As;Ei.core.getStyleSaver=Gg;(function(r,e,t,i){var n=Ui(r+","+e+","+t,function(a){gr[a]=1});Ui(e,function(a){Zi.units[a]="deg",qg[a]=1}),Jn[n[13]]=r+","+e,Ui(i,function(a){var s=a.split(":");Jn[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Zi.units[r]="px"});Ei.registerPlugin(Rp);var _r=Ei.registerPlugin(Rp)||Ei,_A=_r.core.Tween;function Zg(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function vS(r,e,t){return e&&Zg(r.prototype,e),t&&Zg(r,t),r}var _i,Uh,yS,on,Kr,Qr,Rs,$g,Ta,Ps,Kg,xr,Dn,Qg,e_=function(){return _i||typeof window<"u"&&(_i=window.gsap)&&_i.registerPlugin&&_i},t_=1,Cs=[],nt=[],Nn=[],Yo=Date.now,Pp=function(e,t){return t},bS=function(){var e=Ps.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,nt),n.push.apply(n,Nn),nt=i,Nn=n,Pp=function(s,o){return t[s](o)}},yr=function(e,t){return~Nn.indexOf(e)&&Nn[Nn.indexOf(e)+1][t]},jo=function(e){return!!~Kg.indexOf(e)},Bi=function(e,t,i,n,a){return e.addEventListener(t,i,{passive:n!==!1,capture:!!a})},ki=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Nh="scrollLeft",Fh="scrollTop",Ip=function(){return xr&&xr.isPressed||nt.cache++},Oh=function(e,t){var i=function n(a){if(a||a===0){t_&&(on.history.scrollRestoration="manual");var s=xr&&xr.isPressed;a=n.v=Math.round(a)||(xr&&xr.iOS?1:0),e(a),n.cacheID=nt.cache,s&&Pp("ss",a)}else(t||nt.cache!==n.cacheID||Pp("ref"))&&(n.cacheID=nt.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},Ai={s:Nh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Oh(function(r){return arguments.length?on.scrollTo(r,$t.sc()):on.pageXOffset||Kr[Nh]||Qr[Nh]||Rs[Nh]||0})},$t={s:Fh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ai,sc:Oh(function(r){return arguments.length?on.scrollTo(Ai.sc(),r):on.pageYOffset||Kr[Fh]||Qr[Fh]||Rs[Fh]||0})},zi=function(e,t){return(t&&t._ctx&&t._ctx.selector||_i.utils.toArray)(e)[0]||(typeof e=="string"&&_i.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},MS=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},vr=function(e,t){var i=t.s,n=t.sc;jo(e)&&(e=Kr.scrollingElement||Qr);var a=nt.indexOf(e),s=n===$t.sc?1:2;!~a&&(a=nt.push(e)-1),nt[a+s]||Bi(e,"scroll",Ip);var o=nt[a+s],c=o||(nt[a+s]=Oh(yr(e,i),!0)||(jo(e)?n:Oh(function(l){return arguments.length?e[i]=l:e[i]})));return c.target=e,o||(c.smooth=_i.getProperty(e,"scrollBehavior")==="smooth"),c},kh=function(e,t,i){var n=e,a=e,s=Yo(),o=s,c=t||50,l=Math.max(500,c*3),h=function(m,_){var f=Yo();_||f-s>c?(a=n,n=m,o=s,s=f):i?n+=m:n=a+(m-a)/(f-o)*(s-o)},p=function(){a=n=i?0:n,o=s=0},d=function(m){var _=o,f=a,g=Yo();return(m||m===0)&&m!==n&&h(m),s===o||g-o>l?0:(n+(i?f:-f))/((i?g:s)-_)*1e3};return{update:h,reset:p,getVelocity:d}},qo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Jg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},i_=function(){Ps=_i.core.globals().ScrollTrigger,Ps&&Ps.core&&bS()},n_=function(e){return _i=e||e_(),!Uh&&_i&&typeof document<"u"&&document.body&&(on=window,Kr=document,Qr=Kr.documentElement,Rs=Kr.body,Kg=[on,Kr,Qr,Rs],yS=_i.utils.clamp,Qg=_i.core.context||function(){},Ta="onpointerenter"in Rs?"pointer":"mouse",$g=Gt.isTouch=on.matchMedia&&on.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in on||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Dn=Gt.eventTypes=("ontouchstart"in Qr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return t_=0},500),Uh=1),Ps||i_(),Uh};Ai.op=$t;nt.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){Uh||n_(_i)||console.warn("Please gsap.registerPlugin(Observer)"),Ps||i_();var n=i.tolerance,a=i.dragMinimum,s=i.type,o=i.target,c=i.lineHeight,l=i.debounce,h=i.preventDefault,p=i.onStop,d=i.onStopDelay,u=i.ignore,m=i.wheelSpeed,_=i.event,f=i.onDragStart,g=i.onDragEnd,b=i.onDrag,M=i.onPress,v=i.onRelease,S=i.onRight,w=i.onLeft,E=i.onUp,x=i.onDown,T=i.onChangeX,C=i.onChangeY,I=i.onChange,L=i.onToggleX,q=i.onToggleY,G=i.onHover,U=i.onHoverEnd,H=i.onMove,O=i.ignoreCheck,Z=i.isNormalizer,te=i.onGestureStart,P=i.onGestureEnd,oe=i.onWheel,ve=i.onEnable,ke=i.onDisable,De=i.onClick,Xe=i.scrollSpeed,$=i.capture,ae=i.allowClicks,z=i.lockAxis,re=i.onLockAxis;this.target=o=zi(o)||Qr,this.vars=i,u&&(u=_i.utils.toArray(u)),n=n||1e-9,a=a||0,m=m||1,Xe=Xe||1,s=s||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(on.getComputedStyle(Rs).lineHeight)||22);var be,he,Ee,fe,Ne,Ue,Be,Y=this,ct=0,pt=0,_t=i.passive||!h&&i.passive!==!1,je=vr(o,Ai),ut=vr(o,$t),D=je(),At=ut(),qe=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Dn[0]==="pointerdown",R=jo(o),y=o.ownerDocument||Kr,B=[0,0,0],W=[0,0,0],J=0,ue=function(){return J=Yo()},le=function(ne,Ge){return(Y.event=ne)&&u&&MS(ne.target,u)||Ge&&qe&&ne.pointerType!=="touch"||O&&O(ne,Ge)},K=function(){Y._vx.reset(),Y._vy.reset(),he.pause(),p&&p(Y)},Q=function(){var ne=Y.deltaX=Jg(B),Ge=Y.deltaY=Jg(W),ce=Math.abs(ne)>=n,He=Math.abs(Ge)>=n;I&&(ce||He)&&I(Y,ne,Ge,B,W),ce&&(S&&Y.deltaX>0&&S(Y),w&&Y.deltaX<0&&w(Y),T&&T(Y),L&&Y.deltaX<0!=ct<0&&L(Y),ct=Y.deltaX,B[0]=B[1]=B[2]=0),He&&(x&&Y.deltaY>0&&x(Y),E&&Y.deltaY<0&&E(Y),C&&C(Y),q&&Y.deltaY<0!=pt<0&&q(Y),pt=Y.deltaY,W[0]=W[1]=W[2]=0),(fe||Ee)&&(H&&H(Y),Ee&&(f&&Ee===1&&f(Y),b&&b(Y),Ee=0),fe=!1),Ue&&!(Ue=!1)&&re&&re(Y),Ne&&(oe(Y),Ne=!1),be=0},ge=function(ne,Ge,ce){B[ce]+=ne,W[ce]+=Ge,Y._vx.update(ne),Y._vy.update(Ge),l?be||(be=requestAnimationFrame(Q)):Q()},Re=function(ne,Ge){z&&!Be&&(Y.axis=Be=Math.abs(ne)>Math.abs(Ge)?"x":"y",Ue=!0),Be!=="y"&&(B[2]+=ne,Y._vx.update(ne,!0)),Be!=="x"&&(W[2]+=Ge,Y._vy.update(Ge,!0)),l?be||(be=requestAnimationFrame(Q)):Q()},_e=function(ne){if(!le(ne,1)){ne=qo(ne,h);var Ge=ne.clientX,ce=ne.clientY,He=Ge-Y.x,Pe=ce-Y.y,Ze=Y.isDragging;Y.x=Ge,Y.y=ce,(Ze||(He||Pe)&&(Math.abs(Y.startX-Ge)>=a||Math.abs(Y.startY-ce)>=a))&&(Ee||(Ee=Ze?2:1),Ze||(Y.isDragging=!0),Re(He,Pe))}},me=Y.onPress=function(se){le(se,1)||se&&se.button||(Y.axis=Be=null,he.pause(),Y.isPressed=!0,se=qo(se),ct=pt=0,Y.startX=Y.x=se.clientX,Y.startY=Y.y=se.clientY,Y._vx.reset(),Y._vy.reset(),Bi(Z?o:y,Dn[1],_e,_t,!0),Y.deltaX=Y.deltaY=0,M&&M(Y))},de=Y.onRelease=function(se){if(!le(se,1)){ki(Z?o:y,Dn[1],_e,!0);var ne=!isNaN(Y.y-Y.startY),Ge=Y.isDragging,ce=Ge&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),He=qo(se);!ce&&ne&&(Y._vx.reset(),Y._vy.reset(),h&&ae&&_i.delayedCall(.08,function(){if(Yo()-J>300&&!se.defaultPrevented){if(se.target.click)se.target.click();else if(y.createEvent){var Pe=y.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,on,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),se.target.dispatchEvent(Pe)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,p&&Ge&&!Z&&he.restart(!0),Ee&&Q(),g&&Ge&&g(Y),v&&v(Y,ce)}},Fe=function(ne){return ne.touches&&ne.touches.length>1&&(Y.isGesturing=!0)&&te(ne,Y.isDragging)},Ve=function(){return(Y.isGesturing=!1)||P(Y)},N=function(ne){if(!le(ne)){var Ge=je(),ce=ut();ge((Ge-D)*Xe,(ce-At)*Xe,1),D=Ge,At=ce,p&&he.restart(!0)}},pe=function(ne){if(!le(ne)){ne=qo(ne,h),oe&&(Ne=!0);var Ge=(ne.deltaMode===1?c:ne.deltaMode===2?on.innerHeight:1)*m;ge(ne.deltaX*Ge,ne.deltaY*Ge,0),p&&!Z&&he.restart(!0)}},ee=function(ne){if(!le(ne)){var Ge=ne.clientX,ce=ne.clientY,He=Ge-Y.x,Pe=ce-Y.y;Y.x=Ge,Y.y=ce,fe=!0,p&&he.restart(!0),(He||Pe)&&Re(He,Pe)}},xe=function(ne){Y.event=ne,G(Y)},ye=function(ne){Y.event=ne,U(Y)},ie=function(ne){return le(ne)||qo(ne,h)&&De(Y)};he=Y._dc=_i.delayedCall(d||.25,K).pause(),Y.deltaX=Y.deltaY=0,Y._vx=kh(0,50,!0),Y._vy=kh(0,50,!0),Y.scrollX=je,Y.scrollY=ut,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Qg(this),Y.enable=function(se){return Y.isEnabled||(Bi(R?y:o,"scroll",Ip),s.indexOf("scroll")>=0&&Bi(R?y:o,"scroll",N,_t,$),s.indexOf("wheel")>=0&&Bi(o,"wheel",pe,_t,$),(s.indexOf("touch")>=0&&$g||s.indexOf("pointer")>=0)&&(Bi(o,Dn[0],me,_t,$),Bi(y,Dn[2],de),Bi(y,Dn[3],de),ae&&Bi(o,"click",ue,!0,!0),De&&Bi(o,"click",ie),te&&Bi(y,"gesturestart",Fe),P&&Bi(y,"gestureend",Ve),G&&Bi(o,Ta+"enter",xe),U&&Bi(o,Ta+"leave",ye),H&&Bi(o,Ta+"move",ee)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=fe=Ee=!1,Y._vx.reset(),Y._vy.reset(),D=je(),At=ut(),se&&se.type&&me(se),ve&&ve(Y)),Y},Y.disable=function(){Y.isEnabled&&(Cs.filter(function(se){return se!==Y&&jo(se.target)}).length||ki(R?y:o,"scroll",Ip),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),ki(Z?o:y,Dn[1],_e,!0)),ki(R?y:o,"scroll",N,$),ki(o,"wheel",pe,$),ki(o,Dn[0],me,$),ki(y,Dn[2],de),ki(y,Dn[3],de),ki(o,"click",ue,!0),ki(o,"click",ie),ki(y,"gesturestart",Fe),ki(y,"gestureend",Ve),ki(o,Ta+"enter",xe),ki(o,Ta+"leave",ye),ki(o,Ta+"move",ee),Y.isEnabled=Y.isPressed=Y.isDragging=!1,ke&&ke(Y))},Y.kill=Y.revert=function(){Y.disable();var se=Cs.indexOf(Y);se>=0&&Cs.splice(se,1),xr===Y&&(xr=0)},Cs.push(Y),Z&&jo(o)&&(xr=Y),Y.enable(_)},vS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=n_;Gt.getAll=function(){return Cs.slice()};Gt.getById=function(r){return Cs.filter(function(e){return e.vars.id===r})[0]};e_()&&_i.registerPlugin(Gt);var Ce,Ns,st,gt,hn,mt,Xp,ed,cc,tc,Jo,Bh,Ci,nd,kp,Gi,r_,a_,Fs,b_,Lp,M_,Vi,Bp,S_,w_,ea,zp,qp,Us,Yp,ic,Vp,Dp,zh=1,Ri=Date.now,Np=Ri(),wn=0,$o=0,s_=function(e,t,i){var n=ln(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},o_=function(e,t){return t&&(!ln(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},SS=function r(){return $o&&requestAnimationFrame(r)},c_=function(){return nd=1},l_=function(){return nd=0},$n=function(e){return e},Ko=function(e){return Math.round(e*1e5)/1e5||0},T_=function(){return typeof window<"u"},E_=function(){return Ce||T_()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Ia=function(e){return!!~Xp.indexOf(e)},A_=function(e){return(e==="Height"?Yp:st["inner"+e])||hn["client"+e]||mt["client"+e]},C_=function(e){return yr(e,"getBoundingClientRect")||(Ia(e)?function(){return Qh.width=st.innerWidth,Qh.height=Yp,Qh}:function(){return br(e)})},wS=function(e,t,i){var n=i.d,a=i.d2,s=i.a;return(s=yr(e,"getBoundingClientRect"))?function(){return s()[n]}:function(){return(t?A_(a):e["client"+a])||0}},TS=function(e,t){return!t||~Nn.indexOf(e)?C_(e):function(){return Qh}},Kn=function(e,t){var i=t.s,n=t.d2,a=t.d,s=t.a;return Math.max(0,(i="scroll"+n)&&(s=yr(e,i))?s()-C_(e)()[a]:Ia(e)?(hn[i]||mt[i])-A_(n):e[i]-e["offset"+n])},Vh=function(e,t){for(var i=0;i<Fs.length;i+=3)(!t||~t.indexOf(Fs[i+1]))&&e(Fs[i],Fs[i+1],Fs[i+2])},ln=function(e){return typeof e=="string"},Pi=function(e){return typeof e=="function"},Qo=function(e){return typeof e=="number"},Ea=function(e){return typeof e=="object"},Zo=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Is=function(e,t,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},Ls=Math.abs,R_="left",P_="top",jp="right",Zp="bottom",Ca="width",Ra="height",nc="Right",rc="Left",ac="Top",sc="Bottom",Kt="padding",Mn="margin",ks="Width",Jp="Height",ri="px",Sn=function(e){return st.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},ES=function(e){var t=Sn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},h_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},br=function(e,t){var i=t&&Sn(e)[kp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},td=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},I_=function(e){var t=[],i=e.labels,n=e.duration(),a;for(a in i)t.push(i[a]/n);return t},AS=function(e){return function(t){return Ce.utils.snap(I_(e),t)}},$p=function(e){var t=Ce.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,a){return n-a});return i?function(n,a,s){s===void 0&&(s=.001);var o;if(!a)return t(n);if(a>0){for(n-=s,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=s;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,a,s){s===void 0&&(s=.001);var o=t(n);return!a||Math.abs(o-n)<s||o-n<0==a<0?o:t(a<0?n-e:n+e)}},CS=function(e){return function(t,i){return $p(I_(e))(t,i.direction)}},Gh=function(e,t,i,n){return i.split(",").forEach(function(a){return e(t,a,n)})},hi=function(e,t,i,n,a){return e.addEventListener(t,i,{passive:!n,capture:!!a})},li=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Hh=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},d_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wh={toggleActions:"play",anticipatePin:0},id={top:0,left:0,center:.5,bottom:1,right:1},Zh=function(e,t){if(ln(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in id?id[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Xh=function(e,t,i,n,a,s,o,c){var l=a.startColor,h=a.endColor,p=a.fontSize,d=a.indent,u=a.fontWeight,m=gt.createElement("div"),_=Ia(i)||yr(i,"pinType")==="fixed",f=e.indexOf("scroller")!==-1,g=_?mt:i.tagName==="IFRAME"?i.contentDocument.body:i,b=e.indexOf("start")!==-1,M=b?l:h,v="border-color:"+M+";font-size:"+p+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((f||c)&&_?"fixed;":"absolute;"),(f||c||!_)&&(v+=(n===$t?jp:Zp)+":"+(s+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+n.op.d2],Jh(m,0,n,b),m},Jh=function(e,t,i,n){var a={display:"block"},s=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,a[i.a+"Percent"]=n?-100:0,a[i.a]=n?"1px":0,a["border"+s+ks]=1,a["border"+o+ks]=0,a[i.p]=t+"px",Ce.set(e,a)},rt=[],Gp={},lc,u_=function(){return Ri()-wn>34&&(lc||(lc=requestAnimationFrame(Mr)))},Ds=function(){(!Vi||!Vi.isPressed||Vi.startX>mt.clientWidth)&&(nt.cache++,Vi?lc||(lc=requestAnimationFrame(Mr)):Mr(),wn||Da("scrollStart"),wn=Ri())},Fp=function(){w_=st.innerWidth,S_=st.innerHeight},ec=function(e){nt.cache++,(e===!0||!Ci&&!M_&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!Bp||w_!==st.innerWidth||Math.abs(st.innerHeight-S_)>st.innerHeight*.25))&&ed.restart(!0)},La={},RS=[],L_=function r(){return li(et,"scrollEnd",r)||Aa(!0)},Da=function(e){return La[e]&&La[e].map(function(t){return t()})||RS},cn=[],D_=function(e){for(var t=0;t<cn.length;t+=5)(!e||cn[t+4]&&cn[t+4].query===e)&&(cn[t].style.cssText=cn[t+1],cn[t].getBBox&&cn[t].setAttribute("transform",cn[t+2]||""),cn[t+3].uncache=1)},N_=function(){return nt.forEach(function(e){return Pi(e)&&++e.cacheID&&(e.rec=e())})},Kp=function(e,t){var i;for(Gi=0;Gi<rt.length;Gi++)i=rt[Gi],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));ic=!0,t&&D_(t),t||Da("revert")},F_=function(e,t){nt.cache++,(t||!Hi)&&nt.forEach(function(i){return Pi(i)&&i.cacheID++&&(i.rec=0)}),ln(e)&&(st.history.scrollRestoration=qp=e)},Hi,Pa=0,p_,PS=function(){if(p_!==Pa){var e=p_=Pa;requestAnimationFrame(function(){return e===Pa&&Aa(!0)})}},U_=function(){mt.appendChild(Us),Yp=!Vi&&Us.offsetHeight||st.innerHeight,mt.removeChild(Us)},f_=function(e){return cc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Aa=function(e,t){if(hn=gt.documentElement,mt=gt.body,Xp=[st,gt,hn,mt],wn&&!e&&!ic){hi(et,"scrollEnd",L_);return}U_(),Hi=et.isRefreshing=!0,ic||N_();var i=Da("refreshInit");b_&&et.sort(),t||Kp(),nt.forEach(function(n){Pi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),rt.slice(0).forEach(function(n){return n.refresh()}),ic=!1,rt.forEach(function(n){if(n._subPinOffset&&n.pin){var a=n.vars.horizontal?"offsetWidth":"offsetHeight",s=n.pin[a];n.revert(!0,1),n.adjustPinSpacing(n.pin[a]-s),n.refresh()}}),Vp=1,f_(!0),rt.forEach(function(n){var a=Kn(n.scroller,n._dir),s=n.vars.end==="max"||n._endClamp&&n.end>a,o=n._startClamp&&n.start>=a;(s||o)&&n.setPositions(o?a-1:n.start,s?Math.max(o?a:n.start+1,a):n.end,!0)}),f_(!1),Vp=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),nt.forEach(function(n){Pi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),F_(qp,1),ed.pause(),Pa++,Hi=2,Mr(2),rt.forEach(function(n){return Pi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Hi=et.isRefreshing=!1,Da("refresh")},Hp=0,$h=1,oc,Mr=function(e){if(e===2||!Hi&&!ic){et.isUpdating=!0,oc&&oc.update(0);var t=rt.length,i=Ri(),n=i-Np>=50,a=t&&rt[0].scroll();if($h=Hp>a?-1:1,Hi||(Hp=a),n&&(wn&&!nd&&i-wn>200&&(wn=0,Da("scrollEnd")),Jo=Np,Np=i),$h<0){for(Gi=t;Gi-- >0;)rt[Gi]&&rt[Gi].update(0,n);$h=1}else for(Gi=0;Gi<t;Gi++)rt[Gi]&&rt[Gi].update(0,n);et.isUpdating=!1}lc=0},Wp=[R_,P_,Zp,jp,Mn+sc,Mn+nc,Mn+ac,Mn+rc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Kh=Wp.concat([Ca,Ra,"boxSizing","max"+ks,"max"+Jp,"position",Mn,Kt,Kt+ac,Kt+nc,Kt+sc,Kt+rc]),IS=function(e,t,i){Os(i);var n=e._gsap;if(n.spacerIsNative)Os(n.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},Up=function(e,t,i,n){if(!e._gsap.swappedIn){for(var a=Wp.length,s=t.style,o=e.style,c;a--;)c=Wp[a],s[c]=i[c];s.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(s.display="inline-block"),o[Zp]=o[jp]="auto",s.flexBasis=i.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Ca]=td(e,Ai)+ri,s[Ra]=td(e,$t)+ri,s[Kt]=o[Mn]=o[P_]=o[R_]="0",Os(n),o[Ca]=o["max"+ks]=i[Ca],o[Ra]=o["max"+Jp]=i[Ra],o[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},LS=/([A-Z])/g,Os=function(e){if(e){var t=e.t.style,i=e.length,n=0,a,s;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;n<i;n+=2)s=e[n+1],a=e[n],s?t[a]=s:t[a]&&t.removeProperty(a.replace(LS,"-$1").toLowerCase())}},qh=function(e){for(var t=Kh.length,i=e.style,n=[],a=0;a<t;a++)n.push(Kh[a],i[Kh[a]]);return n.t=e,n},DS=function(e,t,i){for(var n=[],a=e.length,s=i?8:0,o;s<a;s+=2)o=e[s],n.push(o,o in t?t[o]:e[s+1]);return n.t=e.t,n},Qh={left:0,top:0},m_=function(e,t,i,n,a,s,o,c,l,h,p,d,u,m){Pi(e)&&(e=e(c)),ln(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Zh("0"+e.substr(3),i):0));var _=u?u.time():0,f,g,b;if(u&&u.seek(0),isNaN(e)||(e=+e),Qo(e))u&&(e=Ce.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),o&&Jh(o,i,n,!0);else{Pi(t)&&(t=t(c));var M=(e||"0").split(" "),v,S,w,E;b=zi(t,c)||mt,v=br(b)||{},(!v||!v.left&&!v.top)&&Sn(b).display==="none"&&(E=b.style.display,b.style.display="block",v=br(b),E?b.style.display=E:b.style.removeProperty("display")),S=Zh(M[0],v[n.d]),w=Zh(M[1]||"0",i),e=v[n.p]-l[n.p]-h+S+a-w,o&&Jh(o,w,n,i-w<20||o._isStart&&w>20),i-=i-w}if(m&&(c[m]=e||-.001,e<0&&(e=0)),s){var x=e+i,T=s._isStart;f="scroll"+n.d2,Jh(s,x,n,T&&x>20||!T&&(p?Math.max(mt[f],hn[f]):s.parentNode[f])<=x+1),p&&(l=br(o),p&&(s.style[n.op.p]=l[n.op.p]-n.op.m-s._offset+ri))}return u&&b&&(f=br(b),u.seek(d),g=br(b),u._caScrollDist=f[n.p]-g[n.p],e=e/u._caScrollDist*d),u&&u.seek(_),u?e:Math.round(e)},NS=/(webkit|moz|length|cssText|inset)/i,g_=function(e,t,i,n){if(e.parentNode!==t){var a=e.style,s,o;if(t===mt){e._stOrig=a.cssText,o=Sn(e);for(s in o)!+s&&!NS.test(s)&&o[s]&&typeof a[s]=="string"&&s!=="0"&&(a[s]=o[s]);a.top=i,a.left=n}else a.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},O_=function(e,t,i){var n=t,a=n;return function(s){var o=Math.round(e());return o!==n&&o!==a&&Math.abs(o-n)>3&&Math.abs(o-a)>3&&(s=o,i&&i()),a=n,n=Math.round(s),n}},Yh=function(e,t,i){var n={};n[t.p]="+="+i,Ce.set(e,n)},__=function(e,t){var i=vr(e,t),n="_scroll"+t.p2,a=function s(o,c,l,h,p){var d=s.tween,u=c.onComplete,m={};l=l||i();var _=O_(i,l,function(){d.kill(),s.tween=0});return p=h&&p||0,h=h||o-l,d&&d.kill(),c[n]=o,c.inherit=!1,c.modifiers=m,m[n]=function(){return _(l+h*d.ratio+p*d.ratio*d.ratio)},c.onUpdate=function(){nt.cache++,s.tween&&Mr()},c.onComplete=function(){s.tween=0,u&&u.call(d)},d=s.tween=Ce.to(e,c),d};return e[n]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},hi(e,"wheel",i.wheelHandler),et.isTouch&&hi(e,"touchmove",i.wheelHandler),a},et=(function(){function r(t,i){Ns||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zp(this),this.init(t,i)}var e=r.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=$n;return}i=h_(ln(i)||Qo(i)||i.nodeType?{trigger:i}:i,Wh);var a=i,s=a.onUpdate,o=a.toggleClass,c=a.id,l=a.onToggle,h=a.onRefresh,p=a.scrub,d=a.trigger,u=a.pin,m=a.pinSpacing,_=a.invalidateOnRefresh,f=a.anticipatePin,g=a.onScrubComplete,b=a.onSnapComplete,M=a.once,v=a.snap,S=a.pinReparent,w=a.pinSpacer,E=a.containerAnimation,x=a.fastScrollEnd,T=a.preventOverlaps,C=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ai:$t,I=!p&&p!==0,L=zi(i.scroller||st),q=Ce.core.getCache(L),G=Ia(L),U=("pinType"in i?i.pinType:yr(L,"pinType")||G&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=I&&i.toggleActions.split(" "),Z="markers"in i?i.markers:Wh.markers,te=G?0:parseFloat(Sn(L)["border"+C.p2+ks])||0,P=this,oe=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ve=wS(L,G,C),ke=TS(L,G),De=0,Xe=0,$=0,ae=vr(L,C),z,re,be,he,Ee,fe,Ne,Ue,Be,Y,ct,pt,_t,je,ut,D,At,qe,R,y,B,W,J,ue,le,K,Q,ge,Re,_e,me,de,Fe,Ve,N,pe,ee,xe,ye;if(P._startClamp=P._endClamp=!1,P._dir=C,f*=45,P.scroller=L,P.scroll=E?E.time.bind(E):ae,he=ae(),P.vars=i,n=n||i.animation,"refreshPriority"in i&&(b_=1,i.refreshPriority===-9999&&(oc=P)),q.tweenScroll=q.tweenScroll||{top:__(L,$t),left:__(L,Ai)},P.tweenTo=z=q.tweenScroll[C.p],P.scrubDuration=function(ce){Fe=Qo(ce)&&ce,Fe?de?de.duration(ce):de=Ce.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fe,paused:!0,onComplete:function(){return g&&g(P)}}):(de&&de.progress(1).kill(),de=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(p),_e=0,c||(c=n.vars.id)),v&&((!Ea(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in mt.style&&Ce.set(G?[mt,hn]:L,{scrollBehavior:"auto"}),nt.forEach(function(ce){return Pi(ce)&&ce.target===(G?gt.scrollingElement||hn:L)&&(ce.smooth=!1)}),be=Pi(v.snapTo)?v.snapTo:v.snapTo==="labels"?AS(n):v.snapTo==="labelsDirectional"?CS(n):v.directional!==!1?function(ce,He){return $p(v.snapTo)(ce,Ri()-Xe<500?0:He.direction)}:Ce.utils.snap(v.snapTo),Ve=v.duration||{min:.1,max:2},Ve=Ea(Ve)?tc(Ve.min,Ve.max):tc(Ve,Ve),N=Ce.delayedCall(v.delay||Fe/2||.1,function(){var ce=ae(),He=Ri()-Xe<500,Pe=z.tween;if((He||Math.abs(P.getVelocity())<10)&&!Pe&&!nd&&De!==ce){var Ze=(ce-fe)/je,Yt=n&&!I?n.totalProgress():Ze,at=He?0:(Yt-me)/(Ri()-Jo)*1e3||0,Ct=Ce.utils.clamp(-Ze,1-Ze,Ls(at/2)*at/.185),ai=Ze+(v.inertia===!1?0:Ct),Rt,vt,lt=v,Ii=lt.onStart,Tt=lt.onInterrupt,xi=lt.onComplete;if(Rt=be(ai,P),Qo(Rt)||(Rt=ai),vt=Math.max(0,Math.round(fe+Rt*je)),ce<=Ne&&ce>=fe&&vt!==ce){if(Pe&&!Pe._initted&&Pe.data<=Ls(vt-ce))return;v.inertia===!1&&(Ct=Rt-Ze),z(vt,{duration:Ve(Ls(Math.max(Ls(ai-Yt),Ls(Rt-Yt))*.185/at/.05||0)),ease:v.ease||"power3",data:Ls(vt-ce),onInterrupt:function(){return N.restart(!0)&&Tt&&Is(P,Tt)},onComplete:function(){P.update(),De=ae(),n&&!I&&(de?de.resetTo("totalProgress",Rt,n._tTime/n._tDur):n.progress(Rt)),_e=me=n&&!I?n.totalProgress():P.progress,b&&b(P),xi&&Is(P,xi)}},ce,Ct*je,vt-ce-Ct*je),Ii&&Is(P,Ii,z.tween)}}else P.isActive&&De!==ce&&N.restart(!0)}).pause()),c&&(Gp[c]=P),d=P.trigger=zi(d||u!==!0&&u),ye=d&&d._gsap&&d._gsap.stRevert,ye&&(ye=ye(P)),u=u===!0?d:zi(u),ln(o)&&(o={targets:d,className:o}),u&&(m===!1||m===Mn||(m=!m&&u.parentNode&&u.parentNode.style&&Sn(u.parentNode).display==="flex"?!1:Kt),P.pin=u,re=Ce.core.getCache(u),re.spacer?ut=re.pinState:(w&&(w=zi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),re.spacerIsNative=!!w,w&&(re.spacerState=qh(w))),re.spacer=qe=w||gt.createElement("div"),qe.classList.add("pin-spacer"),c&&qe.classList.add("pin-spacer-"+c),re.pinState=ut=qh(u)),i.force3D!==!1&&Ce.set(u,{force3D:!0}),P.spacer=qe=re.spacer,Re=Sn(u),ue=Re[m+C.os2],y=Ce.getProperty(u),B=Ce.quickSetter(u,C.a,ri),Up(u,qe,Re),At=qh(u)),Z){pt=Ea(Z)?h_(Z,d_):d_,Y=Xh("scroller-start",c,L,C,pt,0),ct=Xh("scroller-end",c,L,C,pt,0,Y),R=Y["offset"+C.op.d2];var ie=zi(yr(L,"content")||L);Ue=this.markerStart=Xh("start",c,ie,C,pt,R,0,E),Be=this.markerEnd=Xh("end",c,ie,C,pt,R,0,E),E&&(xe=Ce.quickSetter([Ue,Be],C.a,ri)),!U&&!(Nn.length&&yr(L,"fixedMarkers")===!0)&&(ES(G?mt:L),Ce.set([Y,ct],{force3D:!0}),K=Ce.quickSetter(Y,C.a,ri),ge=Ce.quickSetter(ct,C.a,ri))}if(E){var se=E.vars.onUpdate,ne=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),se&&se.apply(E,ne||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(ce,He){if(!He)return P.kill(!0);var Pe=ce!==!1||!P.enabled,Ze=Ci;Pe!==P.isReverted&&(Pe&&(pe=Math.max(ae(),P.scroll.rec||0),$=P.progress,ee=n&&n.progress()),Ue&&[Ue,Be,Y,ct].forEach(function(Yt){return Yt.style.display=Pe?"none":"block"}),Pe&&(Ci=P,P.update(Pe)),u&&(!S||!P.isActive)&&(Pe?IS(u,qe,ut):Up(u,qe,Sn(u),le)),Pe||P.update(Pe),Ci=Ze,P.isReverted=Pe)},P.refresh=function(ce,He,Pe,Ze){if(!((Ci||!P.enabled)&&!He)){if(u&&ce&&wn){hi(r,"scrollEnd",L_);return}!Hi&&oe&&oe(P),Ci=P,z.tween&&!Pe&&(z.tween.kill(),z.tween=0),de&&de.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Se){return Se.vars.immediateRender&&Se.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Yt=ve(),at=ke(),Ct=E?E.duration():Kn(L,C),ai=je<=.01||!je,Rt=0,vt=Ze||0,lt=Ea(Pe)?Pe.end:i.end,Ii=i.endTrigger||d,Tt=Ea(Pe)?Pe.start:i.start||(i.start===0||!d?0:u?"0 0":"0 100%"),xi=P.pinnedContainer=i.pinnedContainer&&zi(i.pinnedContainer,P),Li=d&&Math.max(0,rt.indexOf(P))||0,jt=Li,Ot,Qt,Fn,Fa,si,Ht,dn,A,k,j,V,X,Me;for(Z&&Ea(Pe)&&(X=Ce.getProperty(Y,C.p),Me=Ce.getProperty(ct,C.p));jt-- >0;)Ht=rt[jt],Ht.end||Ht.refresh(0,1)||(Ci=P),dn=Ht.pin,dn&&(dn===d||dn===u||dn===xi)&&!Ht.isReverted&&(j||(j=[]),j.unshift(Ht),Ht.revert(!0,!0)),Ht!==rt[jt]&&(Li--,jt--);for(Pi(Tt)&&(Tt=Tt(P)),Tt=s_(Tt,"start",P),fe=m_(Tt,d,Yt,C,ae(),Ue,Y,P,at,te,U,Ct,E,P._startClamp&&"_startClamp")||(u?-.001:0),Pi(lt)&&(lt=lt(P)),ln(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(ln(Tt)?Tt.split(" ")[0]:"")+lt:(Rt=Zh(lt.substr(2),Yt),lt=ln(Tt)?Tt:(E?Ce.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,fe):fe)+Rt,Ii=d)),lt=s_(lt,"end",P),Ne=Math.max(fe,m_(lt||(Ii?"100% 0":Ct),Ii,Yt,C,ae()+Rt,Be,ct,P,at,te,U,Ct,E,P._endClamp&&"_endClamp"))||-.001,Rt=0,jt=Li;jt--;)Ht=rt[jt]||{},dn=Ht.pin,dn&&Ht.start-Ht._pinPush<=fe&&!E&&Ht.end>0&&(Ot=Ht.end-(P._startClamp?Math.max(0,Ht.start):Ht.start),(dn===d&&Ht.start-Ht._pinPush<fe||dn===xi)&&isNaN(Tt)&&(Rt+=Ot*(1-Ht.progress)),dn===u&&(vt+=Ot));if(fe+=Rt,Ne+=Rt,P._startClamp&&(P._startClamp+=Rt),P._endClamp&&!Hi&&(P._endClamp=Ne||-.001,Ne=Math.min(Ne,Kn(L,C))),je=Ne-fe||(fe-=.01)&&.001,ai&&($=Ce.utils.clamp(0,1,Ce.utils.normalize(fe,Ne,pe))),P._pinPush=vt,Ue&&Rt&&(Ot={},Ot[C.a]="+="+Rt,xi&&(Ot[C.p]="-="+ae()),Ce.set([Ue,Be],Ot)),u&&!(Vp&&P.end>=Kn(L,C)))Ot=Sn(u),Fa=C===$t,Fn=ae(),W=parseFloat(y(C.a))+vt,!Ct&&Ne>1&&(V=(G?gt.scrollingElement||hn:L).style,V={style:V,value:V["overflow"+C.a.toUpperCase()]},G&&Sn(mt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(V.style["overflow"+C.a.toUpperCase()]="scroll")),Up(u,qe,Ot),At=qh(u),Qt=br(u,!0),A=U&&vr(L,Fa?Ai:$t)(),m?(le=[m+C.os2,je+vt+ri],le.t=qe,jt=m===Kt?td(u,C)+je+vt:0,jt&&(le.push(C.d,jt+ri),qe.style.flexBasis!=="auto"&&(qe.style.flexBasis=jt+ri)),Os(le),xi&&rt.forEach(function(Se){Se.pin===xi&&Se.vars.pinSpacing!==!1&&(Se._subPinOffset=!0)}),U&&ae(pe)):(jt=td(u,C),jt&&qe.style.flexBasis!=="auto"&&(qe.style.flexBasis=jt+ri)),U&&(si={top:Qt.top+(Fa?Fn-fe:A)+ri,left:Qt.left+(Fa?A:Fn-fe)+ri,boxSizing:"border-box",position:"fixed"},si[Ca]=si["max"+ks]=Math.ceil(Qt.width)+ri,si[Ra]=si["max"+Jp]=Math.ceil(Qt.height)+ri,si[Mn]=si[Mn+ac]=si[Mn+nc]=si[Mn+sc]=si[Mn+rc]="0",si[Kt]=Ot[Kt],si[Kt+ac]=Ot[Kt+ac],si[Kt+nc]=Ot[Kt+nc],si[Kt+sc]=Ot[Kt+sc],si[Kt+rc]=Ot[Kt+rc],D=DS(ut,si,S),Hi&&ae(0)),n?(k=n._initted,Lp(1),n.render(n.duration(),!0,!0),J=y(C.a)-W+je+vt,Q=Math.abs(je-J)>1,U&&Q&&D.splice(D.length-2,2),n.render(0,!0,!0),k||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Lp(0)):J=je,V&&(V.value?V.style["overflow"+C.a.toUpperCase()]=V.value:V.style.removeProperty("overflow-"+C.a));else if(d&&ae()&&!E)for(Qt=d.parentNode;Qt&&Qt!==mt;)Qt._pinOffset&&(fe-=Qt._pinOffset,Ne-=Qt._pinOffset),Qt=Qt.parentNode;j&&j.forEach(function(Se){return Se.revert(!1,!0)}),P.start=fe,P.end=Ne,he=Ee=Hi?pe:ae(),!E&&!Hi&&(he<pe&&ae(pe),P.scroll.rec=0),P.revert(!1,!0),Xe=Ri(),N&&(De=-1,N.restart(!0)),Ci=0,n&&I&&(n._initted||ee)&&n.progress()!==ee&&n.progress(ee||0,!0).render(n.time(),!0,!0),(ai||$!==P.progress||E||_||n&&!n._initted)&&(n&&!I&&(n._initted||$||n.vars.immediateRender!==!1)&&n.totalProgress(E&&fe<-.001&&!$?Ce.utils.normalize(fe,Ne,0):$,!0),P.progress=ai||(he-fe)/je===$?0:$),u&&m&&(qe._pinOffset=Math.round(P.progress*J)),de&&de.invalidate(),isNaN(X)||(X-=Ce.getProperty(Y,C.p),Me-=Ce.getProperty(ct,C.p),Yh(Y,C,X),Yh(Ue,C,X-(Ze||0)),Yh(ct,C,Me),Yh(Be,C,Me-(Ze||0))),ai&&!Hi&&P.update(),h&&!Hi&&!_t&&(_t=!0,h(P),_t=!1)}},P.getVelocity=function(){return(ae()-Ee)/(Ri()-Jo)*1e3||0},P.endAnimation=function(){Zo(P.callbackAnimation),n&&(de?de.progress(1):n.paused()?I||Zo(n,P.direction<0,1):Zo(n,n.reversed()))},P.labelToScroll=function(ce){return n&&n.labels&&(fe||P.refresh()||fe)+n.labels[ce]/n.duration()*je||0},P.getTrailing=function(ce){var He=rt.indexOf(P),Pe=P.direction>0?rt.slice(0,He).reverse():rt.slice(He+1);return(ln(ce)?Pe.filter(function(Ze){return Ze.vars.preventOverlaps===ce}):Pe).filter(function(Ze){return P.direction>0?Ze.end<=fe:Ze.start>=Ne})},P.update=function(ce,He,Pe){if(!(E&&!Pe&&!ce)){var Ze=Hi===!0?pe:P.scroll(),Yt=ce?0:(Ze-fe)/je,at=Yt<0?0:Yt>1?1:Yt||0,Ct=P.progress,ai,Rt,vt,lt,Ii,Tt,xi,Li;if(He&&(Ee=he,he=E?ae():Ze,v&&(me=_e,_e=n&&!I?n.totalProgress():at)),f&&u&&!Ci&&!zh&&wn&&(!at&&fe<Ze+(Ze-Ee)/(Ri()-Jo)*f?at=1e-4:at===1&&Ne>Ze+(Ze-Ee)/(Ri()-Jo)*f&&(at=.9999)),at!==Ct&&P.enabled){if(ai=P.isActive=!!at&&at<1,Rt=!!Ct&&Ct<1,Tt=ai!==Rt,Ii=Tt||!!at!=!!Ct,P.direction=at>Ct?1:-1,P.progress=at,Ii&&!Ci&&(vt=at&&!Ct?0:at===1?1:Ct===1?2:3,I&&(lt=!Tt&&O[vt+1]!=="none"&&O[vt+1]||O[vt],Li=n&&(lt==="complete"||lt==="reset"||lt in n))),T&&(Tt||Li)&&(Li||p||!n)&&(Pi(T)?T(P):P.getTrailing(T).forEach(function(Fn){return Fn.endAnimation()})),I||(de&&!Ci&&!zh?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",at,n._tTime/n._tDur):(de.vars.totalProgress=at,de.invalidate().restart())):n&&n.totalProgress(at,!!(Ci&&(Xe||ce)))),u){if(ce&&m&&(qe.style[m+C.os2]=ue),!U)B(Ko(W+J*at));else if(Ii){if(xi=!ce&&at>Ct&&Ne+1>Ze&&Ze+1>=Kn(L,C),S)if(!ce&&(ai||xi)){var jt=br(u,!0),Ot=Ze-fe;g_(u,mt,jt.top+(C===$t?Ot:0)+ri,jt.left+(C===$t?0:Ot)+ri)}else g_(u,qe);Os(ai||xi?D:At),Q&&at<1&&ai||B(W+(at===1&&!xi?J:0))}}v&&!z.tween&&!Ci&&!zh&&N.restart(!0),o&&(Tt||M&&at&&(at<1||!Dp))&&cc(o.targets).forEach(function(Fn){return Fn.classList[ai||M?"add":"remove"](o.className)}),s&&!I&&!ce&&s(P),Ii&&!Ci?(I&&(Li&&(lt==="complete"?n.pause().totalProgress(1):lt==="reset"?n.restart(!0).pause():lt==="restart"?n.restart(!0):n[lt]()),s&&s(P)),(Tt||!Dp)&&(l&&Tt&&Is(P,l),H[vt]&&Is(P,H[vt]),M&&(at===1?P.kill(!1,1):H[vt]=0),Tt||(vt=at===1?1:3,H[vt]&&Is(P,H[vt]))),x&&!ai&&Math.abs(P.getVelocity())>(Qo(x)?x:2500)&&(Zo(P.callbackAnimation),de?de.progress(1):Zo(n,lt==="reverse"?1:!at,1))):I&&s&&!Ci&&s(P)}if(ge){var Qt=E?Ze/E.duration()*(E._caScrollDist||0):Ze;K(Qt+(Y._isFlipped?1:0)),ge(Qt)}xe&&xe(-Ze/E.duration()*(E._caScrollDist||0))}},P.enable=function(ce,He){P.enabled||(P.enabled=!0,hi(L,"resize",ec),G||hi(L,"scroll",Ds),oe&&hi(r,"refreshInit",oe),ce!==!1&&(P.progress=$=0,he=Ee=De=ae()),He!==!1&&P.refresh())},P.getTween=function(ce){return ce&&z?z.tween:de},P.setPositions=function(ce,He,Pe,Ze){if(E){var Yt=E.scrollTrigger,at=E.duration(),Ct=Yt.end-Yt.start;ce=Yt.start+Ct*ce/at,He=Yt.start+Ct*He/at}P.refresh(!1,!1,{start:o_(ce,Pe&&!!P._startClamp),end:o_(He,Pe&&!!P._endClamp)},Ze),P.update()},P.adjustPinSpacing=function(ce){if(le&&ce){var He=le.indexOf(C.d)+1;le[He]=parseFloat(le[He])+ce+ri,le[1]=parseFloat(le[1])+ce+ri,Os(le)}},P.disable=function(ce,He){if(ce!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,He||de&&de.pause(),pe=0,re&&(re.uncache=1),oe&&li(r,"refreshInit",oe),N&&(N.pause(),z.tween&&z.tween.kill()&&(z.tween=0)),!G)){for(var Pe=rt.length;Pe--;)if(rt[Pe].scroller===L&&rt[Pe]!==P)return;li(L,"resize",ec),G||li(L,"scroll",Ds)}},P.kill=function(ce,He){P.disable(ce,He),de&&!He&&de.kill(),c&&delete Gp[c];var Pe=rt.indexOf(P);Pe>=0&&rt.splice(Pe,1),Pe===Gi&&$h>0&&Gi--,Pe=0,rt.forEach(function(Ze){return Ze.scroller===P.scroller&&(Pe=1)}),Pe||Hi||(P.scroll.rec=0),n&&(n.scrollTrigger=null,ce&&n.revert({kill:!1}),He||n.kill()),Ue&&[Ue,Be,Y,ct].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),oc===P&&(oc=0),u&&(re&&(re.uncache=1),Pe=0,rt.forEach(function(Ze){return Ze.pin===u&&Pe++}),Pe||(re.spacer=0)),i.onKill&&i.onKill(P)},rt.push(P),P.enable(!1,!1),ye&&ye(P),n&&n.add&&!je){var Ge=P.update;P.update=function(){P.update=Ge,nt.cache++,fe||Ne||P.refresh()},Ce.delayedCall(.01,P.update),je=.01,fe=Ne=0}else P.refresh();u&&PS()},r.register=function(i){return Ns||(Ce=i||E_(),T_()&&window.document&&r.enable(),Ns=$o),Ns},r.defaults=function(i){if(i)for(var n in i)Wh[n]=i[n];return Wh},r.disable=function(i,n){$o=0,rt.forEach(function(s){return s[n?"kill":"disable"](i)}),li(st,"wheel",Ds),li(gt,"scroll",Ds),clearInterval(Bh),li(gt,"touchcancel",$n),li(mt,"touchstart",$n),Gh(li,gt,"pointerdown,touchstart,mousedown",c_),Gh(li,gt,"pointerup,touchend,mouseup",l_),ed.kill(),Vh(li);for(var a=0;a<nt.length;a+=3)Hh(li,nt[a],nt[a+1]),Hh(li,nt[a],nt[a+2])},r.enable=function(){if(st=window,gt=document,hn=gt.documentElement,mt=gt.body,Ce){if(cc=Ce.utils.toArray,tc=Ce.utils.clamp,zp=Ce.core.context||$n,Lp=Ce.core.suppressOverwrites||$n,qp=st.history.scrollRestoration||"auto",Hp=st.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),mt){$o=1,Us=document.createElement("div"),Us.style.height="100vh",Us.style.position="absolute",U_(),SS(),Gt.register(Ce),r.isTouch=Gt.isTouch,ea=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bp=Gt.isTouch===1,hi(st,"wheel",Ds),Xp=[st,gt,hn,mt],Ce.matchMedia?(r.matchMedia=function(h){var p=Ce.matchMedia(),d;for(d in h)p.add(d,h[d]);return p},Ce.addEventListener("matchMediaInit",function(){N_(),Kp()}),Ce.addEventListener("matchMediaRevert",function(){return D_()}),Ce.addEventListener("matchMedia",function(){Aa(0,1),Da("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return Fp(),Fp})):console.warn("Requires GSAP 3.11.0 or later"),Fp(),hi(gt,"scroll",Ds);var i=mt.hasAttribute("style"),n=mt.style,a=n.borderTopStyle,s=Ce.core.Animation.prototype,o,c;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=br(mt),$t.m=Math.round(o.top+$t.sc())||0,Ai.m=Math.round(o.left+Ai.sc())||0,a?n.borderTopStyle=a:n.removeProperty("border-top-style"),i||(mt.setAttribute("style",""),mt.removeAttribute("style")),Bh=setInterval(u_,250),Ce.delayedCall(.5,function(){return zh=0}),hi(gt,"touchcancel",$n),hi(mt,"touchstart",$n),Gh(hi,gt,"pointerdown,touchstart,mousedown",c_),Gh(hi,gt,"pointerup,touchend,mouseup",l_),kp=Ce.utils.checkPrefix("transform"),Kh.push(kp),Ns=Ri(),ed=Ce.delayedCall(.2,Aa).pause(),Fs=[gt,"visibilitychange",function(){var h=st.innerWidth,p=st.innerHeight;gt.hidden?(r_=h,a_=p):(r_!==h||a_!==p)&&ec()},gt,"DOMContentLoaded",Aa,st,"load",Aa,st,"resize",ec],Vh(hi),rt.forEach(function(h){return h.enable(0,1)}),c=0;c<nt.length;c+=3)Hh(li,nt[c],nt[c+1]),Hh(li,nt[c],nt[c+2])}else if(gt){var l=function h(){r.enable(),gt.removeEventListener("DOMContentLoaded",h)};gt.addEventListener("DOMContentLoaded",l)}}},r.config=function(i){"limitCallbacks"in i&&(Dp=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Bh)||(Bh=n)&&setInterval(u_,n),"ignoreMobileResize"in i&&(Bp=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Vh(li)||Vh(hi,i.autoRefreshEvents||"none"),M_=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var a=zi(i),s=nt.indexOf(a),o=Ia(a);~s&&nt.splice(s,o?6:2),n&&(o?Nn.unshift(st,n,mt,n,hn,n):Nn.unshift(a,n))},r.clearMatchMedia=function(i){rt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,a){var s=(ln(i)?zi(i):i).getBoundingClientRect(),o=s[a?Ca:Ra]*n||0;return a?s.right-o>0&&s.left+o<st.innerWidth:s.bottom-o>0&&s.top+o<st.innerHeight},r.positionInViewport=function(i,n,a){ln(i)&&(i=zi(i));var s=i.getBoundingClientRect(),o=s[a?Ca:Ra],c=n==null?o/2:n in id?id[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return a?(s.left+c)/st.innerWidth:(s.top+c)/st.innerHeight},r.killAll=function(i){if(rt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),i!==!0){var n=La.killAll||[];La={},n.forEach(function(a){return a()})}},r})();et.version="3.15.0";et.saveStyles=function(r){return r?cc(r).forEach(function(e){if(e&&e.style){var t=cn.indexOf(e);t>=0&&cn.splice(t,5),cn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),zp())}}):cn};et.revert=function(r,e){return Kp(!r,e)};et.create=function(r,e){return new et(r,e)};et.refresh=function(r){return r?ec(!0):(Ns||et.register())&&Aa(!0)};et.update=function(r){return++nt.cache&&Mr(r===!0?2:0)};et.clearScrollMemory=F_;et.maxScroll=function(r,e){return Kn(r,e?Ai:$t)};et.getScrollFunc=function(r,e){return vr(zi(r),e?Ai:$t)};et.getById=function(r){return Gp[r]};et.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!wn};et.snapDirectional=$p;et.addEventListener=function(r,e){var t=La[r]||(La[r]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(r,e){var t=La[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(r,e){var t=[],i={},n=e.interval||.016,a=e.batchMax||1e9,s=function(l,h){var p=[],d=[],u=Ce.delayedCall(n,function(){h(p,d),p=[],d=[]}).pause();return function(m){p.length||u.restart(!0),p.push(m.trigger),d.push(m),a<=p.length&&u.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Pi(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return Pi(a)&&(a=a(),hi(et,"refresh",function(){return a=e.batchMax()})),cc(r).forEach(function(c){var l={};for(o in i)l[o]=i[o];l.trigger=c,t.push(et.create(l))}),t};var x_=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Op=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===hn&&r(mt,t)},jh={auto:1,scroll:1},FS=function(e){var t=e.event,i=e.target,n=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,s=a._gsap||Ce.core.getCache(a),o=Ri(),c;if(!s._isScrollT||o-s._isScrollT>2e3){for(;a&&a!==mt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(jh[(c=Sn(a)).overflowY]||jh[c.overflowX]));)a=a.parentNode;s._isScroll=a&&a!==i&&!Ia(a)&&(jh[(c=Sn(a)).overflowY]||jh[c.overflowX]),s._isScrollT=o}(s._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},k_=function(e,t,i,n){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&FS,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&hi(gt,Gt.eventTypes[0],y_,!1,!0)},onDisable:function(){return li(gt,Gt.eventTypes[0],y_,!0)}})},US=/(input|label|select|textarea)/i,v_,y_=function(e){var t=US.test(e.target.tagName);(t||v_)&&(e._gsapAllow=!0,v_=t)},OS=function(e){Ea(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,a=t.allowNestedScroll,s=t.onRelease,o,c,l=zi(e.target)||hn,h=Ce.core.globals().ScrollSmoother,p=h&&h.get(),d=ea&&(e.content&&zi(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),u=vr(l,$t),m=vr(l,Ai),_=1,f=(Gt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,g=0,b=Pi(n)?function(){return n(o)}:function(){return n||2.8},M,v,S=k_(l,e.type,!0,a),w=function(){return v=!1},E=$n,x=$n,T=function(){c=Kn(l,$t),x=tc(ea?1:0,c),i&&(E=tc(0,Kn(l,Ai))),M=Pa},C=function(){d._gsap.y=Ko(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},I=function(){if(v){requestAnimationFrame(w);var Z=Ko(o.deltaY/2),te=x(u.v-Z);if(d&&te!==u.v+u.offset){u.offset=te-u.v;var P=Ko((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",u.cacheID=nt.cache,Mr()}return!0}u.offset&&C(),v=!0},L,q,G,U,H=function(){T(),L.isActive()&&L.vars.scrollY>c&&(u()>c?L.progress(1)&&u(c):L.resetTo("scrollY",c))};return d&&Ce.set(d,{y:"+=0"}),e.ignoreCheck=function(O){return ea&&O.type==="touchmove"&&I(O)||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){v=!1;var O=_;_=Ko((st.visualViewport&&st.visualViewport.scale||1)/f),L.pause(),O!==_&&Op(l,_>1.01?!0:i?!1:"x"),q=m(),G=u(),T(),M=Pa},e.onRelease=e.onGestureStart=function(O,Z){if(u.offset&&C(),!Z)U.restart(!0);else{nt.cache++;var te=b(),P,oe;i&&(P=m(),oe=P+te*.05*-O.velocityX/.227,te*=x_(m,P,oe,Kn(l,Ai)),L.vars.scrollX=E(oe)),P=u(),oe=P+te*.05*-O.velocityY/.227,te*=x_(u,P,oe,Kn(l,$t)),L.vars.scrollY=x(oe),L.invalidate().duration(te).play(.01),(ea&&L.vars.scrollY>=c||P>=c-1)&&Ce.to({},{onUpdate:H,duration:te})}s&&s(O)},e.onWheel=function(){L._ts&&L.pause(),Ri()-g>1e3&&(M=0,g=Ri())},e.onChange=function(O,Z,te,P,oe){if(Pa!==M&&T(),Z&&i&&m(E(P[2]===Z?q+(O.startX-O.x):m()+Z-P[1])),te){u.offset&&C();var ve=oe[2]===te,ke=ve?G+O.startY-O.y:u()+te-oe[1],De=x(ke);ve&&ke!==De&&(G+=De-ke),u(De)}(te||Z)&&Mr()},e.onEnable=function(){Op(l,i?!1:"x"),et.addEventListener("refresh",H),hi(st,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),S.enable()},e.onDisable=function(){Op(l,!0),li(st,"resize",H),et.removeEventListener("refresh",H),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=ea,ea&&!u()&&u(1),ea&&Ce.ticker.add($n),U=o._dc,L=Ce.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:O_(u,u(),function(){return L.pause()})},onUpdate:Mr,onComplete:U.vars.onComplete}),o};et.sort=function(r){if(Pi(r))return rt.sort(r);var e=st.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),rt.sort(r||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};et.observe=function(r){return new Gt(r)};et.normalizeScroll=function(r){if(typeof r>"u")return Vi;if(r===!0&&Vi)return Vi.enable();if(r===!1){Vi&&Vi.kill(),Vi=r;return}var e=r instanceof Gt?r:OS(r);return Vi&&Vi.target===e.target&&Vi.kill(),Ia(e.target)&&(Vi=e),e};et.core={_getVelocityProp:kh,_inputObserver:k_,_scrollers:nt,_proxies:Nn,bridge:{ss:function(){wn||Da("scrollStart"),wn=Ri()},ref:function(){return Ci}}};E_()&&Ce.registerPlugin(et);_r.registerPlugin(et);var Qp=matchMedia("(prefers-reduced-motion: reduce)").matches,Na=matchMedia("(pointer: coarse)").matches,B_=document.querySelector("#planet-stage");function kS(){document.querySelector("#n8n-video")?.closest("#projects .grid > div")?.classList.add("n8n-feature-card"),document.querySelectorAll("#top-nav .nav-item").forEach((r,e)=>{r.dataset.navIndex=String(e+1).padStart(2,"0")}),document.querySelectorAll("main > section").forEach((r,e)=>{r.dataset.gallery=`${String(e+1).padStart(2,"0")} / ${String(r.id||"SECTION").toUpperCase()}`}),document.body.insertAdjacentHTML("beforeend",`
    <div class="frame-corner frame-corner--tl" aria-hidden="true"></div>
    <div class="frame-corner frame-corner--br" aria-hidden="true"></div>
    <div class="page-coordinate" aria-hidden="true">PORTFOLIO INDEX<br>ZYF / 2026 / SZ</div>`)}function BS(){if(!B_||Qp)return;let r=new Qs,e=new di(34,innerWidth/innerHeight,.1,100);e.position.set(0,0,9.4);let t=new fh({canvas:B_,alpha:!0,antialias:!Na,powerPreference:"high-performance"});t.setSize(innerWidth,innerHeight),t.setPixelRatio(Math.min(devicePixelRatio,Na?1.1:1.7)),t.outputColorSpace=Ni,t.toneMapping=yo,t.toneMappingExposure=1.26;let i=new fn;i.position.set(innerWidth>1100?3.35:2.45,1,-.8),i.scale.setScalar(1.15),i.rotation.set(-.08,-.18,-.12),r.add(i);let n=new Bt(new hr(1.56,96,96),new po({color:15657207,emissive:8414123,emissiveIntensity:.16,metalness:.18,roughness:.2,transmission:.16,thickness:1.4,clearcoat:1,clearcoatRoughness:.12,iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,520]}));n.renderOrder=2,i.add(n);let a={uTime:{value:0}},s=new Bt(new hr(1.585,96,96),new Mi({uniforms:a,transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          vWorld = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main(){
          vec3 viewDir = vec3(0.0, 0.0, 1.0);
          float fresnel = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 2.4);
          float wave = sin(vWorld.y * 6.8 + vWorld.x * 2.8 + uTime * 0.55) * 0.5 + 0.5;
          float ribbons = sin(vWorld.x * 8.0 - vWorld.z * 5.0 - uTime * 0.38) * 0.5 + 0.5;
          // Pearl tones retain the sense of luxury, while the added grey keeps
          // overlapping transparent layers comfortable to look at.
          vec3 violet = vec3(0.43, 0.31, 0.66);
          vec3 cyan = vec3(0.24, 0.72, 0.68);
          vec3 magenta = vec3(0.73, 0.38, 0.61);
          vec3 gold = vec3(0.78, 0.62, 0.38);
          vec3 color = mix(violet, cyan, wave);
          color = mix(color, magenta, ribbons * 0.52);
          color = mix(color, gold, pow(max(vNormal.y, 0.0), 3.0) * 0.34);
          float alpha = 0.14 + fresnel * 0.56 + wave * 0.06;
          gl_FragColor = vec4(color, alpha);
        }`}));s.renderOrder=3,i.add(s);let o=new Bt(new oo(1.61,4),new mn({color:6639743,wireframe:!0,transparent:!0,opacity:.045}));i.add(o);let c=new Mi({transparent:!0,side:_n,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
      varying vec2 vUv;
      void main(){
        float edge = smoothstep(0.0,.16,vUv.y) * smoothstep(1.0,.84,vUv.y);
        float bands = .38 + .62 * step(.45, fract(vUv.y * 13.0));
        vec3 a = vec3(.62,.46,.91); vec3 b = vec3(.42,.78,.71);
        vec3 color = mix(a,b,vUv.x);
        gl_FragColor = vec4(color, edge * bands * .24);
      }`}),l=new Bt(new lo(1.96,2.78,192,8),c);l.rotation.set(1.25,.18,-.2),i.add(l);let h=new fn;[2.25,2.82,3.22].forEach((z,re)=>{let be=new Bt(new ho(z,re===1?.012:.006,8,220),new mn({color:[8545715,6469286,15835513][re],transparent:!0,opacity:[.28,.2,.15][re]}));be.rotation.set(.88+re*.35,.22+re*.51,.12-re*.18),h.add(be)}),i.add(h);let p=new fn,d=[8546733,6207146,14123179,14069090,16052215];for(let z=0;z<42;z+=1){let re=z/42*Math.PI*2,be=2.3+z%4*.27,he=new Bt(new hr(.025+z%3*.022,16,16),new mn({color:d[z%d.length]}));he.position.set(Math.cos(re)*be,Math.sin(re*1.7)*1.12,Math.sin(re)*be),he.userData.phase=re,p.add(he)}i.add(p);let u=["hero","projects","experience","content","contact"],m=[.12,-.24,.3,.22,-.08],_=new fn,f=[],g=[16777215,9393407,3270618,16736189,16763213,9393407];u.forEach((z,re)=>{let be=re/u.length*Math.PI*2,he=m[re],Ee=1.69,fe=new Bt(new hr(.045,18,18),new mn({color:g[re],transparent:!0,opacity:.9}));fe.position.set(Math.sin(be)*Math.cos(he)*Ee,Math.sin(he)*Ee,Math.cos(be)*Math.cos(he)*Ee),fe.userData.section=z,fe.userData.phase=re*.8,_.add(fe),f.push(fe)});let b=[];for(let z=0;z<=120;z+=1){let be=z/120*Math.PI*2,he=Math.sin(be*2+.35)*.28,Ee=1.67;b.push(new F(Math.sin(be)*Math.cos(he)*Ee,Math.sin(he)*Ee,Math.cos(be)*Math.cos(he)*Ee))}let M=new os(b,!0,"centripetal"),v=new Bt(new uo(M,180,.008,6,!0),new mn({color:6809821,transparent:!0,opacity:.48,blending:da,depthWrite:!1}));_.add(v);let S=new Bt(new hr(.028,14,14),new mn({color:16777215,blending:da}));_.add(S),i.add(_);let w="hero",E=Na?520:1400,x=new Float32Array(E*3),T=new Float32Array(E*3),C=[8414378,6207402,14254765,13938018,15854835].map(z=>new $e(z));for(let z=0;z<E;z+=1){let re=new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),be=1.7+Math.pow(Math.random(),1.9)*1.65;re.multiplyScalar(be),x.set([re.x,re.y,re.z],z*3);let he=C[z%C.length].clone().lerp(C[(z+1)%C.length],Math.random()*.35);T.set([he.r,he.g,he.b],z*3)}let I=new ei;I.setAttribute("position",new ui(x,3)),I.setAttribute("color",new ui(T,3));let L=new as(I,new ha({size:Na?.026:.021,vertexColors:!0,transparent:!0,opacity:.64,depthWrite:!1,blending:da,sizeAttenuation:!0}));i.add(L);let q=Na?120:320,G=new Float32Array(q*3);for(let z=0;z<q;z+=1)G[z*3]=(Math.random()-.5)*16,G[z*3+1]=(Math.random()-.5)*10,G[z*3+2]=(Math.random()-.5)*9-2;let U=new ei;U.setAttribute("position",new ui(G,3));let H=new as(U,new ha({color:9206174,size:.014,transparent:!0,opacity:.28}));r.add(H),r.add(new mo(16777215,14537195,3.05));let O=new _o(16777215,4.8);O.position.set(-4,5,7),r.add(O);let Z=new ls(10741723,17,16,2);Z.position.set(4,-2,4),r.add(Z);let te=new ls(16042424,10,12,2);te.position.set(-3,-2,3),r.add(te);let P=new Ie,oe=new Ie;addEventListener("pointermove",z=>oe.set((z.clientX/innerWidth-.5)*2,(z.clientY/innerHeight-.5)*2),{passive:!0});let ve=0,ke=null,De=0,Xe=(z,re=760,be=.42)=>{let he=Math.max(0,u.indexOf(z)),Ee=Math.PI*2,fe=-(he/u.length)*Ee,Ne=(De%Ee+Ee)%Ee,Be=(fe%Ee+Ee)%Ee-Ne;Be=((Be+Math.PI)%Ee+Ee)%Ee-Math.PI,ke={started:performance.now(),from:De,to:De+Be,direction:Be>=0?1:-1,duration:re,strength:be,section:z}};addEventListener("planet:section",z=>{let re=z.detail?.section||"hero";w=re,ke?.section!==re&&Xe(re)}),et.create({trigger:document.documentElement,start:"top top",end:"bottom bottom",onUpdate:z=>{ve=z.progress}}),addEventListener("planet:navigate",z=>{let re=z.detail?.direction||1,he=-(Math.max(0,u.indexOf(z.detail?.section))/u.length)*Math.PI*2,Ee=Math.PI*2,fe=(De%Ee+Ee)%Ee,Ue=(he%Ee+Ee)%Ee-fe;re>0&&Ue<=0&&(Ue+=Ee),re<0&&Ue>=0&&(Ue-=Ee),ke={started:performance.now(),from:De,to:De+Ue+re*Ee,direction:re,duration:1150,strength:1,section:z.detail?.section||"hero"},w=z.detail?.section||"hero"});let $=new xo;$.connect(document);let ae=()=>{$.update();let z=$.getElapsed();a.uTime.value=z,P.lerp(oe,.045);let re=0,be=0,he=0,Ee=1;if(ke){re=Math.min((performance.now()-ke.started)/(ke.duration||1150),1);let D=re<.5?4*re*re*re:1-Math.pow(-2*re+2,3)/2;De=uu.lerp(ke.from,ke.to,D),be=Math.sin(re*Math.PI)*(ke.strength??1),Ee=ke.direction,he=Math.sin(re*Math.PI*2)*Ee*(ke.strength??1),re>=1&&(ke=null)}n.rotation.y=z*.16+ve*Math.PI*1.2+De,n.rotation.x=Math.sin(z*.22)*.055+he*.035,s.rotation.y=z*.11+De*.82,s.rotation.x=-he*.025,o.rotation.y=-z*.035-De*.32,o.rotation.z=z*.018+he*.045,l.rotation.z=-.2+Math.sin(z*.22)*.035+he*.055,h.rotation.y=z*.035+P.x*.08+De*.22,h.rotation.x=P.y*.035+he*.06,p.rotation.y=z*.12+De*.48,L.rotation.y=-z*.028-De*.16,L.rotation.z=z*.012+he*.08,_.rotation.y=n.rotation.y,_.rotation.x=n.rotation.x,S.position.copy(M.getPointAt((z*.035+re*.18)%1)),f.forEach(D=>{let At=D.userData.section===w,qe=1+Math.sin(z*2.4+D.userData.phase)*.14;D.scale.setScalar((At?2.35:.9)*qe*(1+be*.22)),D.material.opacity=At?1:.62}),L.scale.setScalar(1+be*.2),O.intensity=4.8+be*2.5,Z.intensity=17+be*10,te.intensity=10+be*6,p.children.forEach(D=>D.scale.setScalar(.8+Math.sin(z*1.6+D.userData.phase)*.25));let fe=document.body.classList.contains("planet-view-home"),Ne=document.body.classList.contains("planet-nav-hover"),Ue=innerWidth>1100,Be=innerWidth<700,Y=Be?fe?1.42:Ne?1.5:1.85:fe?Ue?2.78:2.02:Ne?Ue?3.55:2.58:Ue?4.45:3.22,ct={projects:1.35,experience:.72,content:-.72,contact:-1.42}[w]??0,pt=fe?Be?-1.55:-.22:ct,_t=Be?fe?.68:Ne?.5:.34:fe?1.15:Ne?.82:.48;i.position.x+=(Y-i.position.x)*.055,i.position.y+=(pt+Math.sin(z*.45)*.045-i.position.y)*.055;let je=_t*(1+be*.16),ut=i.scale.x+(je-i.scale.x)*.075;i.scale.setScalar(ut),i.position.z+=(-.8+be*.52-i.position.z)*.12,i.rotation.x+=(-.08+he*.1-i.rotation.x)*.12,i.rotation.y+=(-.18+be*Ee*.16-i.rotation.y)*.12,i.rotation.z+=((fe?-.12:Ne?-.04:.08)+he*.06-i.rotation.z)*.09,e.position.z+=(9.4-be*.22-e.position.z)*.1,e.position.x+=(P.x*.13-e.position.x)*.025,e.position.y+=(-P.y*.09-e.position.y)*.025,H.rotation.y=z*.003,t.render(r,e),requestAnimationFrame(ae)};ae(),addEventListener("resize",()=>{e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),t.setPixelRatio(Math.min(devicePixelRatio,Na?1.1:1.7))},{passive:!0}),document.body.classList.add("planet-ready")}function zS(){let r=["#projects > .reveal > .grid > div","#experience .scrapbook-card","#practice > .reveal > .grid > div","#content > .reveal > .grid > div","#contact > .reveal > .grid > div"],e=[...document.querySelectorAll(r.join(","))];e.forEach((t,i)=>{t.classList.add("exhibition-card"),t.dataset.exhibit=`OBJ.${String(i+1).padStart(3,"0")}`,!Na&&!Qp&&(t.addEventListener("pointermove",n=>{let a=t.getBoundingClientRect(),s=(n.clientX-a.left)/a.width-.5,o=(n.clientY-a.top)/a.height-.5;t.style.setProperty("--light-x",`${(s+.5)*100}%`),t.style.setProperty("--light-y",`${(o+.5)*100}%`),_r.to(t,{rotateY:s*3.2,rotateX:o*-3.2,z:18,duration:.48,ease:"power2.out",overwrite:!0})}),t.addEventListener("pointerleave",()=>_r.to(t,{rotateY:0,rotateX:0,z:0,duration:.7,ease:"power3.out",overwrite:!0})))}),!Qp&&(_r.from("#hero .relative.group",{clipPath:"inset(0 100% 0 0)",x:-24,duration:1.05,ease:"power4.inOut"}),_r.from("#hero h1, #hero p, #hero .inline-flex",{y:28,opacity:0,stagger:.09,duration:.75,delay:.18,ease:"power3.out"}),e.forEach(t=>{_r.fromTo(t,{y:42,opacity:0,clipPath:"inset(0 0 14% 0)"},{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:.82,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 90%",once:!0}})}),document.querySelectorAll("section h2").forEach(t=>{_r.fromTo(t,{yPercent:70,opacity:0},{yPercent:0,opacity:1,duration:.7,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 92%",once:!0}})}))}function VS(){let r=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&t.intersectionRatio>.4?t.target.play().catch(()=>{}):t.target.pause()}),{threshold:[0,.4,.75]});document.querySelectorAll("video").forEach(e=>r.observe(e))}function GS(){let r=document.querySelector("#experience-modal"),e=[...document.querySelectorAll("[data-experience-detail]")],t={startup:"\u8D1F\u8D23\u89C6\u89C9\u7269\u6599\u3001\u516C\u4F17\u53F7\u5185\u5BB9\u4E0E\u6D3B\u52A8\u4F20\u64AD\u843D\u5730\u3002",youth:"\u534F\u52A9\u8D5B\u4E8B\u8D44\u6599\u3001\u56E2\u961F\u4E0E\u4E13\u5BB6\u7684\u591A\u65B9\u5BF9\u63A5\u3002",honors:"\u5956\u5B66\u91D1\u3001\u63D0\u6848\u4E0E\u6F14\u8BB2\u6BD4\u8D5B\u7684\u9636\u6BB5\u79EF\u7D2F\u3002",volunteer:"\u8D5B\u4E8B\u65B0\u5A92\u4F53\u73B0\u573A\u7684\u8F6C\u64AD\u4E0E\u5A92\u4F53\u652F\u6301\u3002",sailing:"\u966A\u4F34 30+ \u6210\u5458\u63A8\u8FDB\u4EFB\u52A1\u3001\u89E3\u51B3\u6267\u884C\u5361\u70B9\u3002"};if(e.forEach(l=>{let h=t[l.dataset.experienceDetail];if(!h||l.querySelector(".archive-card__caption"))return;let p=document.createElement("span");p.className="archive-card__caption",p.textContent=h,l.appendChild(p)}),!r||!e.length)return;let i={startup:["01 / CAMPUS ARCHIVE","\u521B\u4E1A\u534F\u4F1A","\u5BA3\u4F20\u90E8\u90E8\u957F / \u6838\u5FC3\u9AA8\u5E72",["image/%E6%B5%B7%E6%8A%A5%E6%AD%A3%E9%9D%A2.jpg","image/%E6%B5%B7%E6%8A%A5%E8%83%8C%E9%9D%A2.jpg","image/KT%E6%9D%BF.jpg","image/%E6%8E%A8%E6%96%871.jpg","image/%E6%8E%A8%E6%96%872.jpg"],"\u6211\u7684\u5DE5\u4F5C","\u8D1F\u8D23\u534F\u4F1A<strong>\u516C\u4F17\u53F7\u65E5\u5E38\u8FD0\u8425</strong>\uFF0C\u72EC\u7ACB\u5B8C\u6210\u6D3B\u52A8\u6D77\u62A5\u3001KT\u677F\u3001\u63A8\u6587\u7B49<strong>\u5168\u5957\u89C6\u89C9\u7269\u6599\u8BBE\u8BA1\u4E0E\u56FE\u6587\u64B0\u5199</strong>\u3002","\u4EE3\u8868\u9879\u76EE","\u6DF1\u5EA6\u53C2\u4E0E\u300C\u79D1\u7814\u65B0\u661F\u300D\u7279\u8272\u6D3B\u52A8<strong>\u5168\u6D41\u7A0B\u5BF9\u63A5\u843D\u5730</strong>\uFF0C\u642D\u5EFA\u6821\u5185\u5B66\u672F\u4EA4\u6D41\u4E0E\u5B9E\u8DF5\u5BF9\u63A5\u5E73\u53F0\u3002",["\u516C\u4F17\u53F7\u8FD0\u8425","\u89C6\u89C9\u8BBE\u8BA1","\u6D3B\u52A8\u843D\u5730"]],youth:["02 / CAMPUS ARCHIVE","\u6821\u56E2\u59D4\u79D1\u521B\u90E8","\u5B66\u751F\u9AA8\u5E72",["image/%E6%A0%A1%E5%9B%A2%E5%A7%94%E7%A7%91%E5%88%9B%E9%83%A8.jpg"],"\u5173\u952E\u7ECF\u5386","\u7ECF\u8FC7<strong>5\u8F6E\u9762\u8BD5\u7B5B\u9009</strong>\u8FDB\u5165\u79D1\u521B\u90E8\u6838\u5FC3\u56E2\u961F\uFF0C\u534F\u52A9\u7EDF\u7B79\u300C\u6311\u6218\u676F\u300D\u3001\u521B\u65B0\u5DE5\u7A0B\u7B49\u6821\u7EA7\u91CD\u70B9\u79D1\u521B\u8D5B\u4E8B\u3002","\u5168\u6D41\u7A0B\u534F\u4F5C","\u8D1F\u8D23<strong>\u53C2\u8D5B\u6750\u6599\u5BA1\u6838\u3001\u53C2\u8D5B\u56E2\u961F\u4E0E\u8BC4\u5BA1\u4E13\u5BB6\u5BF9\u63A5\u3001\u73B0\u573A\u4F1A\u52A1\u534F\u8C03</strong>\u7B49\u5168\u73AF\u8282\u5DE5\u4F5C\u3002\u591A\u7EBF\u7A0B\u540C\u6B65\u63A8\u8FDB\u4EFB\u52A1\uFF0C\u4E25\u683C\u8DDF\u8FDB\u65F6\u95F4\u8282\u70B9\uFF0C\u5728\u53C2\u8D5B\u5B66\u751F\u3001\u6307\u5BFC\u8001\u5E08\u3001\u7EC4\u59D4\u4F1A\u4E09\u65B9\u95F4\u505A\u597D\u4FE1\u606F\u540C\u6B65\uFF0C\u4FDD\u969C\u8D5B\u4E8B\u6709\u5E8F\u63A8\u8FDB\u3002",["\u8D5B\u4E8B\u6D41\u7A0B","\u591A\u65B9\u6C9F\u901A","\u4EFB\u52A1\u7BA1\u7406"]],honors:["03 / CAMPUS HIGHLIGHTS","&#x95EA;&#x5149;&#x788E;&#x7247;&#x96C6;&#x9526;","&#x6301;&#x7EED;&#x6295;&#x5165;&#xFF0C;&#x4E5F;&#x6301;&#x7EED;&#x7559;&#x4E0B;&#x7ED3;&#x679C;",["image/%E6%BC%94%E8%AE%B2.jpg"],"&#x5B66;&#x4E1A;&#x4E0E;&#x601D;&#x60F3;&#x5EFA;&#x8BBE;","&#x8363;&#x83B7; 3 &#x6B21;&#x6821;&#x7EA7;&#x5956;&#x5B66;&#x91D1;&#xFF1B;&#x83B7;&#x300C;&#x4F18;&#x79C0;&#x5171;&#x9752;&#x56E2;&#x5458;&#x300D;&#x3002;","&#x7EC4;&#x7EC7;&#x4E0E;&#x8868;&#x8FBE;","&#x7B56;&#x5212;&#x4E66;&#x5927;&#x8D5B;&#x4E09;&#x7B49;&#x5956;&#x3001;&#x63D0;&#x6848;&#x5F81;&#x96C6;&#x4E8C;&#x7B49;&#x5956;&#x3001;&#x6F14;&#x8BB2;&#x6BD4;&#x8D5B;&#x4E09;&#x7B49;&#x5956;&#x7B49;&#x3002;",["CET-4&#xFF1A;527 &#x5206;","CET-6&#xFF1A;471 &#x5206;","&#x519B;&#x8BAD;&#x5148;&#x8FDB;&#x4E2A;&#x4EBA;"]],volunteer:["01 / PRACTICE ARCHIVE","\u5341\u4E94\u8FD0\u5FD7\u613F\u670D\u52A1","\u7B2C\u5341\u4E94\u5C4A\u5168\u56FD\u8FD0\u52A8\u4F1A\u5FD7\u613F\u8005",["image/%E5%BF%97%E6%84%BF%E8%80%85%E8%AF%81%E4%B9%A6.jpg"],"\u670D\u52A1\u573A\u666F","\u4EFB\u804C<strong>\u62F3\u51FB\u8D5B\u4E8B\u65B0\u5A92\u4F53\u8F6C\u64AD\u5C97\u4F4D</strong>\uFF0C\u8D1F\u8D23\u7535\u89C6\u8F6C\u64AD\u914D\u5957\u8F85\u52A9\u5DE5\u4F5C\uFF0C\u7EDF\u7B79\u5A92\u4F53\u7B7E\u5230\u3001\u65B0\u95FB\u53D1\u5E03\u5385\u73B0\u573A\u8FD0\u8425\u7B49\u4E8B\u52A1\u3002","\u80FD\u529B\u6C89\u6DC0","\u8EAB\u5904\u9AD8\u5F3A\u5EA6\u3001\u5FEB\u8282\u594F\u8D5B\u4E8B\u73B0\u573A\uFF0C\u5B8C\u6210\u591A\u5C97\u4F4D\u534F\u540C\u5DE5\u4F5C\uFF0C\u953B\u70BC<strong>\u5E94\u6025\u5904\u7406\u4E0E\u6297\u538B\u80FD\u529B</strong>\u3002\u9762\u5BF9\u591A\u7EBF\u5E76\u884C\u5DE5\u4F5C\uFF0C\u4F18\u5148\u68B3\u7406\u4FE1\u606F\u3001\u5212\u5206\u4EFB\u52A1\u8F7B\u91CD\u7F13\u6025\u6709\u5E8F\u843D\u5730\uFF0C\u9AD8\u6548\u5B8C\u6210\u73B0\u573A\u534F\u8C03\u4E8B\u52A1\u3002",["\u8F6C\u64AD\u8F85\u52A9","\u5A92\u4F53\u8FD0\u8425","\u73B0\u573A\u534F\u8C03"]],sailing:["02 / PRACTICE ARCHIVE","\u751F\u8D22\u6709\u672F\u822A\u6D77","\u6210\u957F\u966A\u4F34\u6559\u7EC3",["image/%E7%94%9F%E8%B4%A2%E6%9C%89%E6%9C%AF.jpg"],"\u966A\u4F34\u4E0E\u534F\u4F5C","\u6BCF\u671F\u8D1F\u8D23\u5BF9\u63A5<strong>30\u4F59\u540D\u5708\u53CB</strong>\uFF0C\u8054\u52A8\u9886\u961F\u3001\u5FD7\u613F\u8005\u7EDF\u7B79\u8425\u5730\u65E5\u5E38\u8FD0\u8425\u4E8B\u52A1","\u9A8C\u8BC1\u7ED3\u679C","\u4EFB\u804C\u5468\u671F\u5185\u6240\u5E26\u5C0F\u7EC4\u83B7\u8BC4<strong>A\u7EA7\u8BC4\u7EA7</strong>\uFF0C\u5706\u6EE1\u8FBE\u6210<strong>\u5C0F\u7EC4\u5168\u5458\u4E0A\u5CB8</strong>\u6210\u679C\uFF0C\u9524\u70BC\u4E86\u793E\u7FA4\u7EF4\u62A4\u4E0E\u6C9F\u901A\u534F\u8C03\u80FD\u529B\u3002",["30+ \u4EBA\u5C0F\u7EC4","A\u7EA7\u8BC4\u7EA7","\u5168\u5458\u4E0A\u5CB8"]]},n=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob("eyJzdGFydHVwIjoiPGg0PuW3peS9nOWxleW8gDwvaDQ+PHA+5Zu057uV5rS75Yqo5Lyg5pKt6ZyA5rGC5qKz55CG5L+h5oGv5bGC57qn77yM6YWN5ZCI5a6M5oiQ5rW35oql44CBS1Qg5p2/5ZKM5o6o5paH562J5LiN5ZCM6L295L2T55qE5YaF5a656KGU5o6l77yb5LuO6KeG6KeJ5ZGI546w5Yiw5Y+R5biD6IqC5aWP5L+d5oyB5LiA6Ie077yM5pa55L6/5ZCM5a2m5b+r6YCf5LqG6Kej5rS75Yqo6YeN54K544CCPC9wPjxoND7ljY/kvZzmlLbojrc8L2g0PjxwPuWcqOekvuWbouaXpeW4uOayn+mAmuS4reaMgee7rei/reS7o+eJqeaWmeS4juihqOi+vuaWueW8j++8jOW9ouaIkOS6huWwhuWIm+aEj+aLhuaIkOWPr+aJp+ihjOa4heWNleOAgeWGjeiQveWIsOWFt+S9k+S6pOS7mOeJqeeahOW3peS9nOS5oOaDr+OAgjwvcD4iLCJ5b3V0aCI6IjxoND7lt6XkvZzlsZXlvIA8L2g0PjxwPuWPguS4juaMkeaImOadr+OAgeWIm+aWsOW3peeoi+etiei1m+S6i+eahOi1hOaWmeaVtOeQhuS4jua1geeoi+WNj+S9nO+8jOi3n+i/m+S4jeWQjOeOr+iKgueahOaXtumXtOiKgueCue+8jOW5tuWcqOWboumYn+OAgeWPgui1m+WQjOWtpuWSjOebuOWFs+iAgeW4iOS5i+mXtOS/neaMgeS/oeaBr+WQjOatpeOAgjwvcD48aDQ+5Y2P5L2c5pS26I63PC9oND48cD7ov5nmrrXnu4/ljoborqnmiJHmm7Tnhp/mgonlpJrnur/nqIvku7vliqHnmoTmi4bliIbmlrnlvI/vvJrlhYjmmI7noa7mr4/kuKrnjq/oioLnmoTkuqTku5jmoIflh4bvvIzlho3pgJrov4fmuIXljZXlkozmsp/pgJrlh4/lsJHpgZfmvI/vvIzkv53or4Hkuovpobnog73mjInoioLlpY/mjqjov5vjgII8L3A+IiwiaG9ub3JzIjoiPGg0PuaIkOmVv+iEiee7nDwvaDQ+PHA+5aWW6aG55LiO6I2j6KqJ6K6w5b2V55qE5piv5LiA5q615oyB57ut5oqV5YWl55qE6L+H56iL77ya5pei5YyF5ous5a2m5Lia5LiO6KGo6L6+6IO95Yqb55qE56ev57Sv77yM5Lmf5p2l6Ieq5LiA5qyh5qyh562W5YiS44CB5o+Q5qGI5ZKM5YWs5byA5bGV56S65Lit55qE5aSN55uY44CCPC9wPjxoND7lrp7ot7XmlLbojrc8L2g0PjxwPumAmui/h+aKiumYtuauteebruagh+aLhuino+S4uuWPr+WujOaIkOeahOWwj+S7u+WKoe+8jOmAkOatpeW7uueri+S6huabtOeos+WumueahOaJp+ihjOiKguWlj++8jOW5tuaKiumYheivu+OAgeWGmeS9nOOAgeihqOi+vuWSjOmhueebruWNj+S9nOayiea3gOS4uuWPr+i/geenu+eahOiDveWKm+OAgjwvcD4iLCJ2b2x1bnRlZXIiOiI8aDQ+546w5Zy65bel5L2cPC9oND48cD7lnKjotZvkuovmlrDlqpLkvZPkuI7nlLXop4bovazmkq3ovoXliqnlnLrmma/kuK3vvIzphY3lkIjlqpLkvZPnrb7liLDjgIHmlrDpl7vlj5HluIPljoXnrYnnjrDlnLrkuovliqHvvJvpnaLlr7nlpJrkurrljY/lkIzlkozpq5jpopHlj5jljJbvvIzkvJjlhYjnoa7orqTkv6Hmga/jgIHliIbmuIXovbvph43nvJPmgKXlkI7lho3pgJDpobnlpITnkIbjgII8L3A+PGg0PuWunui3teaUtuiOtzwvaDQ+PHA+5aSn5Z6L6LWb5LqL6K6p5oiR5pu055u06KeC5Zyw55CG6Kej5LqG546w5Zy65rWB56iL55qE6YeN6KaB5oCn44CC5L+d5oyB5Y+K5pe25ZON5bqU44CB5YeG56Gu5Lyg6L6+5ZKM56iz5a6a6YWN5ZCI77yM5piv56Gu5L+d5q+P5LiA5Liq546v6IqC6aG655WF6L+Q6L2s55qE5Z+656GA44CCPC9wPiIsInNhaWxpbmciOiI8aDQ+6Zmq5Ly05pa55byPPC9oND48cD7lnKjoiKrmtbfpobnnm67kuK3lm7Tnu5XlsI/nu4TmiJDlkZjnmoTlrp7pmYXljaHngrnov5vooYzmsp/pgJrvvIznu5PlkIjpmLbmrrXku7vliqHjgIHlpI3nm5jorrDlvZXlkozml6XluLjlj43ppojvvIzluK7liqnlpKflrrbmiornm67moIfmi4bmiJDmm7TlrrnmmJPlvIDlp4vlkozmjIHnu63lrozmiJDnmoTlsI/mraXpqqTjgII8L3A+PGg0PuWunui3teaUtuiOtzwvaDQ+PHA+5LiOIDMwIOWkmuS9jeWciOWPi+WFseWQjOaOqOi/m+eahOi/h+eoi++8jOiuqeaIkeaMgee7ree7g+S5oOWAvuWQrOOAgeaPkOmXruS4jui3n+i/m++8muS4jeWPque7meWHuuW7uuiuru+8jOS5n+WFs+azqOavj+S4quS6uueahOaJp+ihjOiKguWlj+WSjOWQjue7reWPjemmiOOAgjwvcD4ifQ=="),l=>l.charCodeAt(0)))),a=Object.fromEntries(Object.entries(n).map(([l,h])=>[l,(h.match(/<p>([\s\S]*?)<\/p>/)||["",""])[1]])),s,o=()=>{r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),document.body.style.overflow="",s?.focus()},c=(l,h)=>{let p=i[l];if(!p)return;s=h;let d=l==="startup"?'<div class="archive-media-grid"><button class="archive-media-card archive-media-card--flip" type="button" data-flip-poster aria-label="&#x70B9;&#x51FB;&#x67E5;&#x770B;&#x6D77;&#x62A5;&#x80CC;&#x9762;"><span class="archive-media-card__flip-inner"><span class="archive-media-card__front"><img src="image/%E6%B5%B7%E6%8A%A5%E6%AD%A3%E9%9D%A2.jpg" alt="&#x6D77;&#x62A5;&#x6B63;&#x9762;"></span><span class="archive-media-card__back"><img src="image/%E6%B5%B7%E6%8A%A5%E8%83%8C%E9%9D%A2.jpg" alt="&#x6D77;&#x62A5;&#x80CC;&#x9762;"></span></span><small>&#x70B9;&#x51FB;&#x7FFB;&#x8F6C;</small></button><div class="archive-media-card"><img src="image/KT%E6%9D%BF.jpg" alt="KT &#x677F;"></div><div class="archive-media-card archive-media-card--scroll"><img src="image/%E6%8E%A8%E6%96%871.jpg" alt="&#x516C;&#x4F17;&#x53F7;&#x957F;&#x56FE; 1"><small>&#x6ED1;&#x52A8;&#x67E5;&#x770B; &darr;</small></div><div class="archive-media-card archive-media-card--scroll"><img src="image/%E6%8E%A8%E6%96%872.jpg" alt="&#x516C;&#x4F17;&#x53F7;&#x957F;&#x56FE; 2"><small>&#x6ED1;&#x52A8;&#x67E5;&#x770B; &darr;</small></div></div>':l==="sailing"?'<div class="experience-detail__media experience-detail__media--single experience-detail__media--sailing-full"><img class="experience-detail__sailing-image" src="'+p[3][0]+'" alt="'+p[1]+'&#x76F8;&#x5173;&#x56FE;&#x7247;" style="width:100% !important;height:auto !important;max-height:none !important;object-fit:contain !important;"></div>':'<div class="experience-detail__media '+(p[3].length===1?"experience-detail__media--single":"")+'">'+p[3].map(m=>'<img src="'+m+'" alt="'+p[1]+'&#x76F8;&#x5173;&#x56FE;&#x7247;">').join("")+"</div>",u=p[8].map(m=>"<li>"+m+"</li>").join("");r.innerHTML='<div class="experience-modal__backdrop" data-modal-close></div><div class="experience-modal__dialog" tabindex="-1"><button class="experience-modal__close" type="button" data-modal-close aria-label="&#x5173;&#x95ED;&#x6863;&#x6848;"><i class="ph-bold ph-x"></i></button><article class="experience-detail experience-detail--'+l+(l==="startup"?" experience-detail--archive":"")+'">'+d+'<div class="experience-detail__copy"><p>'+p[0]+'</p><h3 id="experience-modal-title">'+p[1]+"</h3><strong>"+p[2]+"</strong><div><h4>"+p[4]+"</h4><p>"+p[5]+"</p></div><div><h4>"+p[6]+"</h4><p>"+p[7]+"</p></div><ul>"+u+"</ul></div></article></div>",r.querySelector("[data-flip-poster]")?.addEventListener("click",m=>m.currentTarget.classList.toggle("is-flipped")),r.classList.add("is-open"),r.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",r.querySelector(".experience-modal__dialog").focus()};e.forEach(l=>l.addEventListener("click",()=>c(l.dataset.experienceDetail,l))),r.addEventListener("click",l=>{let h=l.target.closest(".experience-detail__media img, .archive-media-grid img");if(h&&!h.closest("[data-flip-poster]")){l.stopPropagation();let p=document.querySelector("#lightbox-overlay"),d=document.querySelector("#lightbox-image"),u=document.querySelector("#lightbox-caption");p&&d&&u&&(d.src=h.currentSrc||h.src,d.alt=h.alt||"",u.textContent=h.alt||"",p.classList.add("active"),document.body.style.overflow="hidden");return}l.target.closest("[data-modal-close]")&&o()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&r.classList.contains("is-open")&&o()})}GS();kS();BS();zS();VS();addEventListener("load",()=>et.refresh());var z_=document.querySelector("#projects"),ef=z_?.querySelector(".grid");if(z_&&ef){ef.hidden=!0;let r=[{title:"\u751F\u65E5\u8BB0\u5F55\u7C3F",tag:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",color:"pink",summary:"\u9762\u5411\u5BB6\u4EBA\u3001\u670B\u53CB\u548C\u540C\u4E8B\u751F\u65E5\u7684\u8F7B\u91CF\u7EA7\u5907\u5FD8\u5F55\uFF1A\u4E00\u6B21\u5F55\u5165\u5373\u53EF\u8BB0\u5F55\u516C\u5386\u3001\u519C\u5386\u3001\u5173\u7CFB\u548C\u63D0\u9192\u65F6\u95F4\u3002",detail:"\u4ECE\u201C\u603B\u6015\u5FD8\u8BB0\u91CD\u8981\u65E5\u5B50\u201D\u7684\u65E5\u5E38\u75DB\u70B9\u51FA\u53D1\uFF0C\u8BBE\u8BA1\u4E86\u751F\u65E5\u5F55\u5165\u3001\u4E34\u8FD1\u63D0\u9192\u548C\u7EAA\u5FF5\u65E5\u67E5\u770B\u7B49\u6D41\u7A0B\uFF0C\u628A\u96F6\u6563\u65E5\u671F\u6536\u8FDB\u4E00\u4E2A\u6E05\u6670\u7684\u5C0F\u7A0B\u5E8F\u3002",image:"image/\u751F\u65E5\u8BB0\u5F55\u7C3F.png",qr:"image/\u751F\u65E5\u8BB0\u5F55\u7C3F\u5C0F\u7A0B\u5E8F\u7801.jpg",facts:["\u516C\u5386 / \u519C\u5386","\u5012\u8BA1\u65F6\u63D0\u9192","\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"],labels:["\u65E5\u5E38\u5DE5\u5177","\u5FAE\u4FE1\u751F\u6001"]},{title:"\u51FA\u884C\u9632\u9057\u6F0F\u6E05\u5355",tag:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",color:"mint",summary:"\u6309\u901A\u52E4\u3001\u65C5\u884C\u548C\u65E5\u5E38\u529E\u4E8B\u573A\u666F\u7EC4\u7EC7\u7269\u54C1\u7684\u6838\u5BF9\u5DE5\u5177\uFF0C\u51FA\u95E8\u524D\u53EF\u5FEB\u901F\u52FE\u9009\u5E76\u67E5\u770B\u9057\u6F0F\u9879\u3002",detail:"\u63D0\u4F9B\u573A\u666F\u6E05\u5355\u3001\u5FEB\u6377\u6838\u5BF9\u548C\u8BB0\u5F55\u5F52\u6863\uFF1A\u628A\u201C\u94A5\u5319\u5E26\u6CA1\u5E26\u3001\u8BC1\u4EF6\u653E\u54EA\u4E86\u201D\u8FD9\u7C7B\u53CD\u590D\u786E\u8BA4\uFF0C\u53D8\u6210\u4E00\u6B21\u53EF\u5B8C\u6210\u7684\u51FA\u53D1\u68C0\u67E5\u3002",image:"image/\u51FA\u884C\u9632\u9057\u6F0F\u6E05\u5355.png",qr:"image/\u51FA\u884C\u9632\u9057\u6F0F\u4E8C\u7EF4\u7801.jpg",facts:["\u573A\u666F\u6E05\u5355","\u5FEB\u6377\u6838\u5BF9","\u8BB0\u5F55\u5F52\u6863"],labels:["\u51FA\u884C\u5FC5\u5907","\u6548\u7387\u6253\u5361"]},{title:"\u9014\u8BF4 APP",tag:"Android \xB7 Beta",color:"teal",summary:"\u4E3A\u65C5\u884C\u521B\u4F5C\u8005\u8BBE\u8BA1\u7684\u79FB\u52A8\u7AEF\u7075\u611F\u91C7\u96C6\u5DE5\u5177\uFF0C\u8986\u76D6\u73B0\u573A\u5F55\u97F3\u3001\u8BED\u97F3\u8F6C\u5199\u3001\u7D20\u6750\u5F52\u7C7B\u548C\u5185\u5BB9\u8349\u7A3F\u751F\u6210\u3002",detail:"\u5C06\u6237\u5916\u5F55\u97F3\u3001\u9014\u4E2D\u89C1\u95FB\u548C\u77AC\u65F6\u7075\u611F\u4E32\u6210\u201C\u91C7\u96C6 \u2192 \u8F6C\u5199 \u2192 \u6574\u7406 \u2192 \u6210\u7A3F\u201D\u7684\u8FDE\u7EED\u8DEF\u5F84\uFF0C\u51CF\u5C11\u56DE\u7A0B\u540E\u7FFB\u627E\u5F55\u97F3\u548C\u4E8C\u6B21\u6574\u7406\u7684\u65F6\u95F4\u3002",video:"image/tusuo-demo-web.mp4",facts:["\u5F55\u97F3\u91C7\u96C6","\u8BED\u97F3\u8F6C\u5199","AI \u6210\u7A3F"],labels:["uni-app","\u8BED\u97F3\u8F6C\u5199","AI \u6587\u6848"]},{title:"AI ArtPalette",tag:"Web",color:"gold",summary:"\u8F93\u5165\u573A\u666F\u3001\u60C5\u7EEA\u6216\u521B\u4F5C\u5173\u952E\u8BCD\u540E\uFF0C\u7531 AI \u751F\u6210\u53EF\u76F4\u63A5\u4F7F\u7528\u7684\u4E3B\u8272\u3001\u8F85\u52A9\u8272\u548C\u6E10\u53D8\u7EC4\u5408\u3002",detail:"\u9762\u5411\u8BBE\u8BA1\u5E08\u3001\u521B\u4F5C\u8005\u4E0E\u5F00\u53D1\u8005\uFF0C\u5C06\u62BD\u8C61\u7684\u6C1B\u56F4\u63CF\u8FF0\u8F6C\u4E3A\u53EF\u7528\u7684\u8272\u5F69\u63D0\u6848\uFF0C\u51CF\u5C11\u4ECE\u7A7A\u767D\u5F00\u59CB\u6311\u8272\u7684\u65F6\u95F4\u3002",image:"image/aiartpalette.png",link:"https://aiartpalette.art",facts:["\u5173\u952E\u8BCD\u8F93\u5165","\u8272\u5F69\u751F\u6210","\u6E10\u53D8\u65B9\u6848"],labels:["AIGC","\u8BBE\u8BA1\u5DE5\u5177"]},{title:"RegretReset",tag:"Web \xB7 Beta",color:"purple",summary:"\u4E00\u4E2A\u56F4\u7ED5\u201C\u540E\u6094\u3001\u7EA0\u7ED3\u4E0E\u53CD\u590D\u56DE\u60F3\u201D\u7684 AI \u53CD\u601D\u5DE5\u5177\uFF0C\u5E2E\u52A9\u7528\u6237\u5148\u770B\u6E05\u95EE\u9898\uFF0C\u518D\u627E\u5230\u80FD\u6267\u884C\u7684\u4E0B\u4E00\u6B65\u3002",detail:"\u901A\u8FC7 CLARIFY \u68B3\u7406\u4E8B\u5B9E\u4E0E\u611F\u53D7\u3001CHOOSE \u5BF9\u9F50\u4EF7\u503C\u548C\u9009\u62E9\u3001ACT \u751F\u6210\u4E0B\u4E00\u6B65\u884C\u52A8\uFF0C\u628A\u201C\u5361\u4F4F\u201D\u8F6C\u5316\u4E3A\u53EF\u63A8\u8FDB\u7684\u81EA\u6211\u5BF9\u8BDD\u3002",image:"image/regretreset.png",link:"https://regretreset.life",facts:["AI \u5BF9\u8BDD\u5F15\u5BFC","Prompt \u7F16\u6392","\u7ED3\u6784\u5316\u884C\u52A8\u8F93\u51FA"],labels:["AI \u966A\u4F34","\u884C\u52A8\u89C4\u5212"]},{title:"\u5FAE\u4FE1\u7206\u6B3E\u8FFD\u8E2A\u6D41",tag:"n8n \u81EA\u52A8\u5316",color:"blue",summary:"\u57FA\u4E8E n8n \u642D\u5EFA\u7684\u5185\u5BB9\u8C03\u7814\u5DE5\u4F5C\u6D41\uFF1A\u6309\u5468\u89E6\u53D1\u3001\u53D1\u73B0\u5FAE\u4FE1\u70ED\u95E8\u5185\u5BB9\u3001\u63D0\u53D6\u6B63\u6587\u4E0E\u4E92\u52A8\u6570\u636E\u5E76\u6C89\u6DC0\u5230\u7EDF\u4E00\u8868\u683C\u3002",detail:"\u628A\u201C\u627E\u7206\u6587\u3001\u6284\u6570\u636E\u3001\u505A\u6C47\u603B\u201D\u62C6\u6210\u5B9A\u65F6\u53D1\u73B0\u3001\u5185\u5BB9\u6293\u53D6\u3001\u5B57\u6BB5\u6E05\u6D17\u548C\u6570\u636E\u6C89\u6DC0\u56DB\u6B65\uFF0C\u8BA9\u8FD0\u8425\u65F6\u95F4\u56DE\u5230\u9009\u9898\u4E0E\u7B56\u7565\u5224\u65AD\u3002",video:"image/n8n.mp4",facts:["\u5B9A\u65F6\u89E6\u53D1","\u5185\u5BB9\u6293\u53D6","\u6570\u636E\u6C89\u6DC0"],labels:["\u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41","\u6570\u636E\u8FFD\u8E2A"]}],e=document.createElement("section");e.className="vibe-diary",e.innerHTML=`
    <div class="vibe-diary__cover" aria-hidden="true"></div>
    <div class="vibe-diary__book">
      <div class="vibe-diary__left"><div class="vibe-diary__paper vibe-diary__contents"><p class="vibe-diary__eyebrow">VIBE CODING / ARCHIVE</p><h3>\u4F5C\u54C1\u76EE\u5F55</h3><p class="vibe-diary__hint">\u9009\u62E9\u4E00\u4E2A\u9879\u76EE\uFF0C\u7FFB\u5F00\u5B83\u7684\u5B8C\u6574\u53CC\u9875\u3002</p><nav aria-label="Vibe Coding \u76EE\u5F55">${r.map((c,l)=>`<button type="button" data-project="${l}"><b>${String(l+1).padStart(2,"0")}</b><span><strong>${c.title}</strong><small>${c.tag}</small></span><em>\u2192</em></button>`).join("")}</nav></div></div>
      <div class="vibe-diary__spine" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="vibe-diary__right"><article class="vibe-diary__paper vibe-diary__detail" aria-live="polite"><p class="vibe-diary__placeholder">\u4ECE\u5DE6\u9875\u76EE\u5F55\u9009\u62E9\u4E00\u4E2A\u4F5C\u54C1<br>\u5728\u8FD9\u91CC\u7FFB\u5F00\u5B83\u7684\u9879\u76EE\u6863\u6848\u3002</p></article></div>
    </div>`,ef.before(e);let t=e.querySelector(".vibe-diary__contents"),i=e.querySelector(".vibe-diary__detail"),n=t.innerHTML,a=c=>c.video?`<video src="${c.video}" muted loop playsinline controls aria-label="${c.title} \u6F14\u793A\u89C6\u9891"></video>`:`<img src="${c.image}" alt="${c.title} \u9879\u76EE\u9884\u89C8">`,s=c=>{let l=r[c];e.classList.add("is-flipping"),window.setTimeout(()=>{let p=l.qr?`<button type="button" class="vibe-diary__qr-button" data-action="show-qr" data-qr="${l.qr}" data-alt="${l.title} \u5C0F\u7A0B\u5E8F\u7801">\u626B\u7801\u4F53\u9A8C \u2197</button>`:"";t.className=`vibe-diary__paper vibe-diary__detail vibe-diary__detail--${l.color}`,t.innerHTML=`<p class="vibe-diary__eyebrow">PROJECT ${String(c+1).padStart(2,"0")} / ${l.tag}</p><div class="vibe-diary__detail-copy"><h3>${l.title}</h3><p class="vibe-diary__summary">${l.summary}</p><div class="vibe-diary__rule"></div><p class="vibe-diary__copy">${l.detail}</p>${l.facts.length?`<div class="vibe-diary__notes">${l.facts.map(d=>`<span>${d}</span>`).join("")}</div>`:""}</div><div class="vibe-diary__footer"><div>${l.labels.map(d=>`<span>#${d}</span>`).join("")}</div>${l.link?`<a class="vibe-diary__link" href="${l.link}" target="_blank" rel="noopener noreferrer">\u8BBF\u95EE\u9879\u76EE \u2197</a>`:""}${p}</div>`,i.className=`vibe-diary__paper vibe-diary__project-page vibe-diary__project-page--${l.color}`,i.innerHTML=`<p class="vibe-diary__eyebrow">${l.tag.toUpperCase()}</p><button type="button" class="vibe-diary__back" data-action="contents">\u2190 \u8FD4\u56DE\u76EE\u5F55</button><div class="vibe-diary__project-media">${a(l)}</div><div class="vibe-diary__project-meta"></div>`,i.querySelector("video")?.play().catch(()=>{}),i.querySelector('[data-action="contents"]')?.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),o()}),t.querySelector('[data-action="previous"]')?.addEventListener("click",()=>s(c-1)),t.querySelector('[data-action="show-qr"]')?.addEventListener("click",d=>{let u=d.currentTarget,m=document.getElementById("lightbox-overlay"),_=document.getElementById("lightbox-image"),f=document.getElementById("lightbox-caption");m&&_&&f&&(_.src=u.dataset.qr,_.alt=u.dataset.alt,f.textContent=u.dataset.alt,m.classList.add("active"),document.body.style.overflow="hidden")}),i.querySelector('[data-action="next"]')?.addEventListener("click",()=>s(c+1))},410),window.setTimeout(()=>e.classList.remove("is-flipping"),820)},o=()=>{e.classList.add("is-flipping"),window.setTimeout(()=>{t.className="vibe-diary__paper vibe-diary__contents",t.innerHTML=n,i.className="vibe-diary__paper vibe-diary__detail",i.innerHTML='<p class="vibe-diary__placeholder">\u4ECE\u5DE6\u9875\u76EE\u5F55\u9009\u62E9\u4E00\u4E2A\u4F5C\u54C1<br>\u5728\u8FD9\u91CC\u7FFB\u5F00\u5B83\u7684\u9879\u76EE\u6863\u6848\u3002</p>'},410),window.setTimeout(()=>e.classList.remove("is-flipping"),820)};e.addEventListener("click",c=>{let l=c.target.closest(".vibe-diary__project-page img");if(l){c.stopPropagation();let p=document.getElementById("lightbox-overlay"),d=document.getElementById("lightbox-image"),u=document.getElementById("lightbox-caption");p&&d&&u&&(d.src=l.currentSrc||l.src,d.alt=l.alt||"",u.textContent=l.alt||"",p.classList.add("active"),document.body.style.overflow="hidden");return}let h=c.target.closest("[data-project]");h&&s(Number(h.dataset.project))})}})();
