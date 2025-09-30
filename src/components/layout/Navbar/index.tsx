"use client";

import * as React from "react";
import Image from "next/image";
import { RightSideButtons } from "./RightSideButtons";
import NavbarMenuItems from "./NavbarMenuItems";
import { AppBar, Toolbar, Link } from "@mui/material";

export function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Link href="/">
          <Image src="/logo.svg" alt="Beije" width={56} height={24} />
        </Link>
        <NavbarMenuItems />
        <RightSideButtons />
      </Toolbar>
    </AppBar>
  );
}
