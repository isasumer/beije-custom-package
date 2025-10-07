import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import Header from "./Header";
import ProductsTab from "./ProducsTab";
export function PackageSelection() {
  return (
    <Box className={styles.packageSelection}>
      <Header />
      <ProductsTab/>
    </Box>
  );
}

//*
// h1: 'h2',
// h2: 'h2',
// h3: 'h2',
// h4: 'h2',
// h5: 'h2',
// h6: 'h2',
// subtitle1: 'h2',
// subtitle2: 'h2',
// body1: 'span',
// body2: 'span',
//
//
//
//  */
