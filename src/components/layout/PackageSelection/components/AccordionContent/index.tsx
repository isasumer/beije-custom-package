import { Box } from '@mui/material';
import ProductDescription from '../ProductDescription';
import CustomProductSelection from '../CustomProductSelection';
import { IProduct } from '@/entities/products';

export default function AccordionContent({
  product,
}: {
  product: IProduct;
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {product.description && <ProductDescription description={product.description} />}
      {product.sub_products.map((sub_product) => (
        <CustomProductSelection
          mainProductId={product.main_product_id}
          subProduct={sub_product}
key={sub_product.product_id}
        />
      ))}
    </Box>
  );
}