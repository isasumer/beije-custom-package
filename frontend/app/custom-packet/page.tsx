import { Box } from "@mui/material";
import { PackageSelection, SpecialPackage } from "@/components/layout";
import styles from "./styles.module.scss";

export default function CustomPacket() {
  return (
    <Box className={styles.customPacket}>
      <Box className={styles.customPacketContainer}>
        <PackageSelection />
        <SpecialPackage />
      </Box>
    </Box>
  );
}
