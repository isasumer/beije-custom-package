"use client";

import type { ReactNode } from "react";
import { getMessages } from "@/i8n";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Products, Quicklinks } from "./components";

export default function NavbarMenuItems({
  activeKey,
  setAnchorEl,
}: NavbarMenuItemsProps) {
  function handleItemMouseEnter(item: MenuItem) {
    setAnchorEl(item.component ? item.key : null);
  }

  return (
    <Box
      className={styles.navbarMenuItems}
    >
      {menuItems.map((item) => (
        <Button
          key={item.key}
          color="inherit"
          size="small"
          className={styles.navButton}
          variant="text"
          onMouseEnter={() => handleItemMouseEnter(item)}
          endIcon={
            item.component ? (
              <KeyboardArrowDownIcon fontSize="large" />
            ) : undefined
          }
          aria-expanded={!!item.component && activeKey === item.key}
          aria-haspopup={!!item.component}
        >
          <Typography variant="body1" className={styles.navButtonText}>
            {item.label}
          </Typography>
          {item.hasWarningAnimation && (
            <div className={styles.warningAnimation} />
          )}
        </Button>
      ))}
    </Box>
  );
}

export const menuItems: MenuItem[] = [
  {
    key: "products",
    label: getMessages("001"),
    href: "/products",
    component: <Products />,
    hasWarningAnimation: false,
  },
  {
    key: "about-us",
    label: getMessages("002"),
    href: "/who-we-are",
    component: <Quicklinks view="about-us" />,
    hasWarningAnimation: true,
  },
  {
    key: "donation-culture",
    label: getMessages("003"),
    href: "/donation-culture",
    component: <Quicklinks view="donation-culture" />,
    hasWarningAnimation: false,
  },
  {
    key: "suggestions",
    label: getMessages("004"),
    href: "/we-recommend",
    component: null,
    hasWarningAnimation: false,
  },
];

type NavbarMenuItemsProps = {
  activeKey: string | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<string | null>>;
};

type MenuItem = {
  key: string;
  label: string;
  href: string;
  component: ReactNode;
  hasWarningAnimation: boolean;
};
