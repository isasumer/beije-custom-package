import { Typography, Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <Box className={styles.productDescription}>
      <Image src="/heart.svg" alt="description" width={24} height={24} />
      <Typography>{description}</Typography>
    </Box>
  );
}
