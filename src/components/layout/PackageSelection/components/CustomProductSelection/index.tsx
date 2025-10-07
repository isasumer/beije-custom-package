import { Box, Typography } from "@mui/material";
import { QuantitySelection } from "../../../../UI";
import Image from "next/image";

export default function CustomProductSelection({
  backgroundColor,
  icon,
  title,
}: ICustomProductSelectionProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: backgroundColor,
            borderRadius: "4px",
            padding: "2px 4px",
            width: "64px",
          }}
        >
          <Image src={icon} alt={title} width={20} height={20} />
        </Box>
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <QuantitySelection />
    </Box>
  );
}

interface ICustomProductSelectionProps {
  backgroundColor: string;
  icon: string;
  title: string;
}
