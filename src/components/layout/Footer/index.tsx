import { Box } from "@mui/material";
import { SubmitEmail, Quicklinks, BottomSection } from "./components";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.footer}>
        <Box className={styles.linkSection}>
          <SubmitEmail />
          <Quicklinks />
        </Box>
        <BottomSection />
      </Box>
    </Box>
  );
}