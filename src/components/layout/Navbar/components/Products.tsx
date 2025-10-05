import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Typography } from "@mui/material";
import { getMessages } from "@/i8n";
import BandIcon from "@/assets/icons/Band";
import PedIcon from "@/assets/icons/Ped";
const PRIMARY_COLOR = "#b42029";

export default function Products() {
  return (
    <Box className={styles.productsContainer}>
      <Box sx={{ display: "flex", gap: 2 }}>
        {products.map((product) => (
          <Box
            key={product.key}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="subtitle1" fontWeight="bold">{product.category}</Typography>
            {product.items.map((item) => (
              <Box key={item.id} sx={{ display: "flex", gap: 2 ,  cursor: "pointer" }}>
                <Box >{item.icon}</Box>
                <Typography sx={{ "&:hover": { textDecoration: "underline" } }}>{item.name}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {cardMenu.map((card) => (
          <Box key={card.id} >
            <Image src={card.src} alt={card.name} width={172} height={135} style={{borderRadius: "12px"}} />
            <Typography >{card.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const products = [
  {
    category: getMessages("001"),
    key: "product",
    items: [
      {
        id: 1,
        name: getMessages("006"),
        icon: <PedIcon color={PRIMARY_COLOR} />,
      },
      {
        id: 2,
        name: getMessages("007"),
        icon: <BandIcon color={PRIMARY_COLOR}/>,
      },
      {
        id: 3,
        name: getMessages("008"),
        icon: <BandIcon  color={PRIMARY_COLOR}/>,
      },
      {
        id: 4,
        name: getMessages("009"),
        icon: <BandIcon color={PRIMARY_COLOR}/>,
      },
      {
        id: 5,
        name: getMessages("010"),
        icon: <BandIcon color={PRIMARY_COLOR} />,
      },
      {
        id: 6,
        name: getMessages("011"),
        price: 100,
        icon: <BandIcon color={PRIMARY_COLOR} />,
      },
    ],
  },
  {
    category: getMessages("020"),
    key: "packages",
    items: [
      {
        id: 1,
        name: getMessages("014"),
        icon: <BandIcon color={PRIMARY_COLOR}/>,
      },
      {
        id: 2,
        name: getMessages("015"),
        price: 100,
        icon: <BandIcon color={PRIMARY_COLOR}/>,
      },
      {
        id: 3,
        name: getMessages("016"),
        price: 100,
        icon: <BandIcon color={PRIMARY_COLOR}/>,
      },
      {
        id: 4,
        name: getMessages("017"),
        price: 100,
        icon: <BandIcon color={PRIMARY_COLOR} />,
      },
      {
        id: 5,
        name: getMessages("018"),
        price: 100,
        icon: <BandIcon color={PRIMARY_COLOR}/>,
      },
      {
        id: 6,
        name: getMessages("019"),
        price: 100,
        icon: <BandIcon color={PRIMARY_COLOR}/>,
      },
    ],
  },
];
const cardMenu = [
  {
    id: 1,
    name: getMessages("021"),
    src: "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fcustom-packet.webp&w=1920&q=75",
    href: "/custom-package",
    key: "custom-package",
    description: getMessages("023"),
  },
  {
    id: 2,
    name: getMessages("022"),
    src: "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fstudent.png&w=1920&q=75",
    href: "/student-package",
    key: "student-package",
    description: getMessages("024"),
  },
];
