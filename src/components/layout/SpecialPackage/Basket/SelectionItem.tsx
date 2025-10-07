import { Box, Typography } from "@mui/material";
import { ProductSelection } from "@/lib/entities";
import useBasket from "./useBasket";
export default function SelectionItem({
  selection,
}: {
  selection: ProductSelection;
}) {
  const { getPrice, getQuantity, getSubProductName } = useBasket();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography>{`${getQuantity(
        selection.mainProductId,
        selection.productId
      )} x ${getSubProductName(
        selection.mainProductId,
        selection.productId
      )} `}</Typography>
      <Typography>{`${
        selection.quantity *
        getPrice(selection.mainProductId, selection.productId)
      } `}</Typography>
    </Box>
  );
}
