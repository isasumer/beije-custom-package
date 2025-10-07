import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function QuantitySelection() {
  const [value, setValue] = useState(0);
  const handleClickMinus = () => {
    setValue(value - 1);
  };
  const handleClickPlus = () => {
    setValue(value + 1);
  };
  return (
    <Box className={styles.quantitySelection}>
      <Button variant="outlined" color="secondary" onClick={handleClickMinus} className={styles.button}>
        <Image src="/minus.svg" alt="minus" width={24} height={24} />{" "}
      </Button>
      <Box className={styles.value}>{value}</Box>
      <Button variant="outlined" color="secondary" onClick={handleClickPlus} className={styles.button}>
        <Image src="/plus.svg" alt="plus" width={24} height={24} />
      </Button>
    </Box>
  );
}
