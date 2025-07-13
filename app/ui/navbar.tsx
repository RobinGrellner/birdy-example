"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <div className="ml-6 m-2 p-2 w-fit flex flex-row fixed bg-slate-700 rounded-2xl">
      {currentPath !== "/" && (
        <>
          <Link href="/" className="flex items-center">
            <svg
              className="w-10 h-10 text-slate-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Link>
          <div className="min-h-10/12 w-px bg-slate-50 mx-2"></div>
        </>
      )}

      <h1 className="p-3 flex items-center font-bold text-center text-slate-50 ">
        {currentPath == "/" ? "User List" : "User Detail"}
      </h1>
    </div>
  );
}
