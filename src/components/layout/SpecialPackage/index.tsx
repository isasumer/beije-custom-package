import { getMessages } from "@/i8n";
import { Box, Typography } from "@mui/material";
import Basket from "./Basket";
import styles from "./styles.module.scss";
export function SpecialPackage() {
  return (
    <Box className={styles.specialPackage}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {getMessages("059")}
        </Typography>
        <Box className={styles.specialPackageChip}>
          <Box className={styles.dot}></Box>
          <Typography variant="caption" fontWeight="bold">
            {getMessages("060")}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ color: "#000000b2" }}>
        {getMessages("061")}
      </Typography>
      <Basket />
    </Box>
  );
}
