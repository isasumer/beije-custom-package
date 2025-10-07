"use client";

import { getMessages } from "@/i8n";
import { ProductSelection } from "@/lib/entities";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import SelectionItem from "./SelectionItem";
import styles from "./style.module.scss";
import useBasket from "./useBasket";
import { removeProductSelection } from '@/lib/CustomPacketSlice';
import { useDispatch } from 'react-redux';
export default function Basket() {
  const { getMainProductName, groupedSelections, totalPrice } = useBasket();
  const dispatch = useDispatch();
  return (
    <Box className={styles.basket}>
      {Object.entries(groupedSelections).map(
        ([mainProductId, selections], index) => (
          <Box key={index} className={styles.basketItem}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {getMainProductName(mainProductId)}
              </Typography>
              <Image
                src="/trash.svg"
                alt="trash"
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(removeProductSelection({ mainProductId, productId: selections[0].productId }));
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {selections.map((selection: ProductSelection) => (
                <SelectionItem
                  key={selection.productId}
                  selection={selection}
                />
              ))}
            </Box>
          </Box>
        )
      )}
      <Button
        className={styles.basketButton}
        disabled={Object.keys(groupedSelections).length === 0}
        variant="contained"
        color="secondary"
      >
        {getMessages("062")} (₺{Object.keys(groupedSelections).length === 0 ? "0.00" : (totalPrice)})
      </Button>
    </Box>
  );
}
