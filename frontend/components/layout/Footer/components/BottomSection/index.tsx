import { Box, Link, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { getMessages } from "@/i8n";
import Image from "next/image";

export default function BottomSection() {
  return (
    <Box className={styles.bottomSectionContainer}>
      <Box className={styles.bottomLinks}>
        <Typography variant="subtitle2" color="text.secondary">
          {getMessages("039")}
        </Typography>
        <Box className={styles.bottomLinksList}>
          {bottomLinks.map((item) => (
            <Link key={item.title} href={item.href}  sx={{ textDecoration: "none" } }>
              <Typography variant="subtitle2" color="text.secondary">
                {item.title}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box className={styles.bottomLinksLanguage}>
          <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
            EN
          </Typography>
          |
          <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
            TR
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "6px" }}>
        {payments.map((item) => (
          <Image
            key={item.id}
            src={item.icon}
            alt={item.alt}
            width={50}
            height={50}
          />
        ))}
      </Box>
    </Box>
  );
}

const bottomLinks = [
  {
    title: getMessages("040"),
    href: "/kvkk",
  },
  {
    title: getMessages("041"),
    href: "/kvkk-application-form",
  },
  {
    title: getMessages("042"),
    href: "/membership-agreement",
  },
  {
    title: getMessages("043"),
    href: "/privacy-policy",
  },
  {
    title: getMessages("044"),
    href: "/cookies-policy",
  },
  {
    title: getMessages("045"),
    href: "/test-results",
  },
];

const payments = [
  {
    id: 1,
    icon: "/troy.svg",
    alt: "troy",
  },
  {
    id: 2,
    icon: "/mastercard.svg",
    alt: "mastercard",
  },
  {
    id: 3,
    icon: "/visa.svg",
    alt: "visa",
  },
  {
    id: 4,
    icon: "/americanExpress.svg",
    alt: "americanExpress",
  },
];
