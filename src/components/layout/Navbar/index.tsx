"use client";

import * as React from "react";
import Image from "next/image";
import { RightSideButtons } from "./RightSideButtons";
import NavbarMenuItems, { menuItems } from "./NavbarMenuItems";
import { AppBar, Toolbar, Link , Box} from "@mui/material";
import { useMemo, useState } from "react";
import styles from "./styles.module.scss"

export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<string | null>(null);

  const activeItem = useMemo(
    () => menuItems.find((item) => item.key === anchorEl) ?? null,
    [anchorEl]
  );

  return (
    <AppBar
      position="static"
      color="primary"
      className={styles.appBar}
      onMouseLeave={() => setAnchorEl(null)}
    >
      <Toolbar sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Link href="/">
          <Image src="/logo.svg" alt="Beije" width={56} height={24} />
        </Link>
        <NavbarMenuItems activeKey={anchorEl} setAnchorEl={setAnchorEl} />
        <RightSideButtons />
      </Toolbar>
      <Box
        className={`${styles.drawerMenu} ${activeItem ? styles.drawerMenuOpen : styles.drawerMenuClose}`}
        onMouseEnter={() => activeItem && setAnchorEl(activeItem.key)}
      >
        {activeItem?.component}
      </Box>
    </AppBar>
  );
}
