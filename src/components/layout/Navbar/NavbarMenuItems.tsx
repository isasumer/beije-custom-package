"use client";

import type { ReactNode } from "react";

import { getMessages } from "@/i8n";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { NavbarProducts } from "./components";

type MenuItem = {
  key: string;
  label: string;
  href: string;
  isClickable: boolean;
  component: ReactNode;
};

export const menuItems: MenuItem[] = [
  {
    key: "products",
    label: getMessages("001"),
    href: "/products",
    isClickable: false,
    component: <NavbarProducts/>,
  },
  {
    key: "about-us",
    label: getMessages("002"),
    href: "/who-we-are",
    isClickable: false,
    component: <div>about-us</div>,
  },
  {
    key: "donation-culture",
    label: getMessages("003"),
    href: "/donation-culture",
    isClickable: false,
    component: <div>donation-culture</div>,
  },
  {
    key: "suggestions",
    label: getMessages("004"),
    href: "/we-recommend",
    isClickable: true,
    component: <div>suggestions</div>,
  },
];

type NavbarMenuItemsProps = {
  activeKey: string | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function NavbarMenuItems({ activeKey, setAnchorEl }: NavbarMenuItemsProps) {
  function handleItemMouseEnter(item: MenuItem) {
    if (item.isClickable) {
      setAnchorEl(null);
      return;
    }

    setAnchorEl(item.key);
  }

  return (
    <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
      {menuItems.map((item) => (
        <Button
          key={item.key}
          color="inherit"
          size="small"
          className={styles.navButton}
          variant="text"
          onMouseEnter={() => handleItemMouseEnter(item)}
          endIcon={!item.isClickable ? <ArrowDropDownIcon /> : undefined}
          aria-expanded={!item.isClickable && activeKey === item.key}
          aria-haspopup={!item.isClickable}
        >
          <Typography variant="body1" className={styles.navButtonText}>
            {item.label}
          </Typography>
        </Button>
      ))}
    </Box>
  );
}
