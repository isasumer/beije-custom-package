import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function NavbarProducts() {
  return (
    <Box className={styles.productsContainer}>
      <Box sx={{ display: "flex", gap: 2 }}>
        {products.map((product) => (
          <Box
            key={product.key}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h6">{product.category}</Typography>
            {product.items.map((item) => (
              <Box key={item.id}sx={{ display: "flex", gap: 2 }} >
                <Image src={item.src} alt={item.name} width={24} height={24} />
                <Typography>{item.name}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {cardMenu.map((card) => (
          <Box key={card.id} >
            <Image src={card.src} alt={card.name} width={172} height={135} />
            <Typography>{card.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const products = [
  {
    category: "product",
    key: "product",
    items: [
      {
        id: 1,
        name: "beije Ped",
        src: "/ped.svg",
      },
      {
        id: 2,
        name: "beije Günlük Ped",
        src: "/ped.svg",
      },
      {
        id: 3,
        name: "beije Tampon",
        src: "/band.svg",
      },
      {
        id: 4,
        name: "beije Kap",
        src: "/band.svg",
      },
      {
        id: 5,
        name: "Isı Bandı",
        src: "/band.svg",
      },
      {
        id: 6,
        name: "beije Cycle Essentials",
        price: 100,
        src: "/band.svg",
      },
    ],
  },
  {
    category: "packages",
    key: "packages",
    items: [
      {
        id: 1,
        name: "Populer paketler",
        src: "/band.svg",
      },
      {
        id: 2,
        name: "Ped Paketleri",
        price: 100,
        src: "/band.svg",
      },
      {
        id: 3,
        name: "Tampon Paketleri",
        price: 100,
        src: "/band.svg",
      },
      {
        id: 4,
        name: "Deneme Paketi",
        price: 100,
        src: "/band.svg",
      },
      {
        id: 5,
        name: "Özel Paketler",
        price: 100,
        src: "/band.svg",
      },
      {
        id: 6,
        name: "Tüm Paketler",
        price: 100,
        src: "/band.svg",
      },
    ],
  },
];
const cardMenu = [
  {
    id: 1,
    name: "Kendi Paketini Oluştur",
    src: "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fcustom-packet.webp&w=1920&q=75",
    href: "/custom-package",
    key: "custom-package",
    description: "2 ayda bir gönderim",
  },
  {
    id: 2,
    name: "beije Kampüs",
    src: "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fstudent.png&w=1920&q=75",
    href: "/student-package",
    key: "student-package",
    description: "Öğrenciler için",
  },
];
