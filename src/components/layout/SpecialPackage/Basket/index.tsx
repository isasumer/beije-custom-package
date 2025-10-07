import { getMessages } from "@/i8n";
import { Box, Button, Typography } from "@mui/material";
import styles from "./style.module.scss";

export default function Basker() {
  return (
    <Box className={styles.basket}>
      <Button
        className={styles.basketButton}
        disabled={true}
        variant="contained"
        color="secondary"
      >
        {getMessages("062")}
      </Button>
    </Box>
  );
}
