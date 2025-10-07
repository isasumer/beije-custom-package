"use client";

import { IProductSubProduct } from '@/entities/products';
import { addProductSelection } from '@/lib/CustomPacketSlice';
import { getProductSelection } from '@/lib/selectors';
import { RootState } from '@/lib/store';
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.scss";

export default function QuantitySelection({ mainProductId, subProduct }: { mainProductId: string, subProduct: IProductSubProduct }) {
  const dispatch = useDispatch();
  const getSelection = useSelector((state: RootState) => getProductSelection(state, mainProductId, subProduct.product_id));
  const value = getSelection?.quantity ?? 0;
  const handleClickMinus = () => {
    dispatch(addProductSelection({
      mainProductId,
      productId: subProduct.product_id,
      quantity: value - subProduct.quantityIncrement,
    }));
  };
  const handleClickPlus = () => {
    dispatch(addProductSelection({
      mainProductId,
      productId: subProduct.product_id,
      quantity: value + subProduct.quantityIncrement,
    }));
  };
  return (
    <Box className={styles.quantitySelection}>
      <Button variant="outlined" color="secondary" onClick={handleClickMinus} className={styles.button} disabled={value <= 0}>
        <Image src="/minus.svg" alt="minus" width={24} height={24} />{" "}
      </Button>
      <Box className={styles.value}>{value}</Box>
      <Button variant="outlined" color="secondary" onClick={handleClickPlus} className={styles.button} disabled={value >= subProduct.maxQuantity}>
        <Image src="/plus.svg" alt="plus" width={24} height={24} />
      </Button>
    </Box>
  );
}
