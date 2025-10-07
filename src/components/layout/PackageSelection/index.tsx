import { Box } from "@mui/material";
import Header from "./Header";
import ProductsTab from "./ProducsTab";
export function PackageSelection() {
  return (
    <Box sx={{ maxWidth: "520px" }}>
      <Header />
      <ProductsTab />
    </Box>
  );
}
