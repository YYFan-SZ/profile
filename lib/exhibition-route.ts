// Original Blender staircase centerline, matching build-exhibition-blender.py.
export const ISLAND_Z = {
  projects: -48,
  experience: -74,
  weekly: -100,
  contact: -126,
} as const;

export function originalStairPoint(t: number): [number, number, number] {
  const u=1-t;
  return [u*u*u*12+3*u*u*t*12.8+3*u*t*t*7+t*t*t*4.8,
    -1.337+7.537*t,
    u*u*u*(-4.8)+3*u*u*t*(-8.3)+3*u*t*t*(-10.8)+t*t*t*(-12.05)];
}
export function harborRoute(sx: number, sy: number): [number, number, number][] {
  const scaled=(p: [number,number,number]): [number,number,number]=>[p[0]*sx,p[1]*sy,p[2]];
  return [
    [5,-1.337,-3], scaled([10,-1.337,-4.8]),
    ...Array.from({length:20},(_,i)=>scaled(originalStairPoint(i/19))),
    scaled([6.4,6.2,-13.5]), scaled([11,6.2,-14]),
    scaled([17,6.2,-18]), scaled([22,6.2,-22]), scaled([25,6.2,-27.5]),
    [25*sx,-1.75,-39],
    [36,-1.75,ISLAND_Z.projects+4],
    [32,-1.75,ISLAND_Z.experience+5],
    [38,-1.75,ISLAND_Z.weekly+5],
    [36,-1.75,ISLAND_Z.contact+5],
  ];
}
export const SEA_ROUTE = harborRoute(1,1);
export const routeCamera = (index: number): [number, number, number] => {
  const [x, y, z] = SEA_ROUTE[index];
  return [x, y + 2.1, z];
};
