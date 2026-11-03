"use client";

import { useEffect } from "react";

export default function RoomPage() {
  useEffect(() => {
    window.location.replace("/room-engine/index.html");
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-[#100d1a] text-white">
      <p>
        正在打开 3D 房间……
        <a className="ml-2 underline" href="/room-engine/index.html">
          如果没有自动跳转，点击这里
        </a>
      </p>
    </main>
  );
}
