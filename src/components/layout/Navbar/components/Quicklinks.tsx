import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { getMessages } from "@/i8n";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles.module.scss";

type TView = "about-us" | "donation-culture";

export default function Quicklinks({ view }: { view: TView }) {
  return (
    <Box className={styles.aboutUsContainer}>
      <Typography variant="subtitle1" fontWeight="bold">
        {titleMap[view]}
      </Typography>
      <Box className={styles.aboutUsQuickLinks}>
        {menuItems?.[view as keyof typeof menuItems]?.map((item) => (
          <Box key={item.title}>
            <Image
              src={item.image}
              alt={item.title}
              width={160}
              height={80}
              style={{ borderRadius: "12px" }}
            />
            <Box className={styles.aboutUsItem}>
              <Typography sx={{ "&:hover": { textDecoration: "underline" } }}>
                {item.title}
              </Typography>
              <KeyboardArrowRightIcon />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const titleMap: Record<TView, string> = {
  "about-us": getMessages("002"),
  "donation-culture": getMessages("003"),
};

const menuItems: Record<
  TView,
  { title: string; href: string; image: string }[]
> = {
  "about-us": [
    {
      title: getMessages("025"),
      href: "/know-us/why-beije",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fwhy.png&w=3840&q=75",
    },
    {
      title: getMessages("026"),
      href: "/know-us/students",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fstudent.png&w=3840&q=75",
    },
    {
      title: getMessages("027"),
      href: "/know-us/how-it-works",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fhow.png&w=3840&q=75",
    },
    {
      title: getMessages("028"),
      href: "/know-us/price-policy",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fprice.png&w=3840&q=75",
    },
    {
      title: getMessages("029"),
      href: "/know-us/faqs",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Ffaq.png&w=3840&q=75",
    },
    {
      title: getMessages("030"),
      href: "/know-us/all-materials",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fall-materials.png&w=3840&q=75",
    },
  ],
  "donation-culture": [
    {
      title: getMessages("031"),
      href: "/donation-culture/our-philosophy",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Four-philosophy.webp&w=1920&q=75",
    },
    {
      title: getMessages("032"),
      href: "/donation-culture/donation-pad",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fdonation-pad.webp&w=1920&q=75",
    },
    {
      title: getMessages("033"),
      href: "/charity",
      image:
        "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fcharity.webp&w=1920&q=75",
    },
  ],
};
