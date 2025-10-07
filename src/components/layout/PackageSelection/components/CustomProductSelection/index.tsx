import { Box, Typography } from "@mui/material";
import { QuantitySelection } from "../../../../UI";
import Image from "next/image";
import { IProductSubProduct } from '@/entities/products';

export default function CustomProductSelection({
  mainProductId,
  subProduct,
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
            backgroundColor: subProduct.backgroundColor,
            borderRadius: "4px",
            padding: "2px 4px",
            width: "64px",
          }}
        >
          <Image src={subProduct.iconSr} alt={subProduct.product} width={20} height={20} />
        </Box>
        <Typography variant="body1" fontWeight="bold">
          {subProduct.product}
        </Typography>
      </Box>
      <QuantitySelection mainProductId={mainProductId} subProduct={subProduct} />
    </Box>
  );
}

interface ICustomProductSelectionProps {
  mainProductId: string;
  subProduct: IProductSubProduct;
}
