"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./navbar"), { ssr: false });

export default function NavBarWrapper() {
  return <NavBar />;
}
