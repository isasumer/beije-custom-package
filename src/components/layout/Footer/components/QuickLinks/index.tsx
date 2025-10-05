import { getMessages } from "@/i8n";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function QuickLinks() {
  return (
    <Box sx={{ display: "flex", gap: "16px" }}>
      <Box >
        <Box className={styles.quickLinks}>
          {quickLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
        </Box>

        <Link href="/">
          <Image src="/bCertification.svg" alt="Beije" width={50} height={84} />
        </Link>
      </Box>
      <Box style={{ display: "flex", flexDirection: "column",  gap: "20px" }}>
        {socialMedia.map((link) => (
          <Link key={link.title} href={link.href}  style={{ display: "flex", alignItems: "center", gap: "4px" }} >
            <Image src={link.icon} alt={link.title} width={25} height={24} />
            {link.title}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

const quickLinks = [
  {
    title: getMessages("006"),
    href: "/beije-ped",
  },
  {
    title: getMessages("051"),
    href: "/blog",
  },

  {
    title: getMessages("007"),
    href: "/beije-panty-liners",
  },
  {
    title: getMessages("052"),
    href: "/faqs",
  },
  {
    title: getMessages("008"),
    href: "/beije-tampon",
  },
  {
    title: getMessages("002"),
    href: "/who-we-are",
  },
  {
    title: getMessages("054"),
    href: "/beije-store",
  },
  {
    title: getMessages("053"),
    href: "/quiz",
  },
];

const socialMedia = [
  {
    title: getMessages("046"),
    href: "/facebook",
    icon: "/facebook.svg",
  },

  {
    title: getMessages("047"),
    href: "/instagram",
    icon: "/instagram.svg",
  },
  {
    title: getMessages("048"),
    href: "/twitter",
    icon: "/twitter.svg",
  },
  {
    title: getMessages("049"),
    href: "/linkedin",
    icon: "/linkedin.svg",
  },
  {
    title: getMessages("050"),
    href: "/spotify",
    icon: "/spotify.svg",
  },
];
