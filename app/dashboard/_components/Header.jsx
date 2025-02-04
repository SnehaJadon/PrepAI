"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  const route = useRouter()
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />

      <ul className="hidden md:flex gap-6 ">
        <li onClick={()=>route.push("/dashboard")} className= {`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === "/dashboard" && "font-bold text-primary"}`}>
          Dashboard
        </li>
        <li className= {`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === "/dashboard/questions" && "font-bold text-primary"}`}>
          Questions
        </li>
        <li className= {`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === "/dashboard/upgrade" && "font-bold text-primary"}`}>
          Upgrade
        </li>
        <li className= {`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === "/dashboard/how" && "font-bold text-primary"}`}>
          How it works?
        </li>
      </ul>

      <UserButton />
    </div>
  );
}

export default Header;
