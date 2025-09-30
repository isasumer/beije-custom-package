"use client";

import { getMessages } from "@/i8n";
import { Box, Button, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import styles from "./styles.module.scss";
export default function NavbarMenuItems() {
  const [anchorEl, setAnchorEl] = useState<string | null>(null);

  function handleItemMouseEnter(item: MenuItem) {
    setAnchorEl(item.key);
  }
  function handleItemMouseLeave(item: MenuItem) {
    setAnchorEl(null);
  }

  return (
    <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
      {menuItems.map((item) => (
        <Button
          key={item.label}
          color="inherit"
          size="small"
          className={styles.navButton}
          variant="text"
          onMouseEnter={()=>handleItemMouseEnter(item)}
          onMouseLeave={()=>handleItemMouseLeave(item)}
        //   endIcon={!item.isClickable ? <ArrowDropDownIcon /> : undefined}
        >
          <Typography variant="body1" className={styles.navButtonText}>
            {item.label}
          </Typography>
  
              <Collapse in={anchorEl === item.key}>{item.drawerList}</Collapse>
        </Button>
      ))}
    </Box>
  );
}

type MenuItem = {
  key: string;
  label: string;
  href: string;
  isClickable: boolean;
  drawerList: React.ReactNode;
};

const menuItems: MenuItem[] = [
  {
    key: "products",
    label: getMessages("001"),
    href: "/products",
    isClickable: false,
    drawerList: <div>products</div>,
  },
  {
    key: "about-us",
    label: getMessages("002"),
    href: "/who-we-are",
    isClickable: false,
    drawerList: <div>about-us</div>,
  },
  {
    key: "donation-culture",
    label: getMessages("003"),
    href: "/donation-culture",
    isClickable: false,
    drawerList: <div>donation-culture</div>,
  },
  {
    key: "suggestions",
    label: getMessages("004"),
    href: "/we-recommend",
    isClickable: true,
    drawerList: <div>suggestions</div>,
  },
];
