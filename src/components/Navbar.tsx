"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu"; 
import Link from "next/link";

function Navbar() { 
  const [active, setActive] = useState<string | null>(null); 

  return (
    <div className="fixed top-5 inset-x-0 max-w-2xl mx-auto z-58"> 
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"> 
          <Link href="/" onClick={() => setActive("Home")}>Home</Link> 
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Courses"> 
          <Link href="/courses" onClick={() => setActive("Our Courses")}>Our Courses</Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Content"> 
          <Link href="/content" onClick={() => setActive("Content")}>Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
