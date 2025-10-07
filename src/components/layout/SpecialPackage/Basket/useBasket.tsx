import { products } from "@/components/layout/PackageSelection/products";
import { ProductSelection } from "@/lib/entities";
import { selectSelections } from "@/lib/selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function useBasket() {
  const selections: ProductSelection[] = useSelector(selectSelections);
  const [totalPrice, setTotalPrice] = useState("0.00");
  const groupedSelections = selections.reduce(
    (acc: Record<string, ProductSelection[]>, selection: ProductSelection) => {
      if (!acc[selection.mainProductId]) {
        acc[selection.mainProductId] = [];
      }
      acc[selection.mainProductId].push(selection);
      return acc;
    },
    {}
  );
  function getMainProductName(mainProductId: string) {
    for (const category of Object.values(products)) {
      const product = category.find(
        (product) => product.main_product_id === mainProductId
      );
      if (product) return product.title;
    }
    return null;
  }

  function getSubProductName(mainProductId: string, productId: string) {
    for (const category of Object.values(products)) {
      const product = category.find(
        (product) => product.main_product_id === mainProductId
      );
      if (product) {
        const subProduct = product.sub_products.find(
          (subProduct) => subProduct.product_id === productId
        );
        if (subProduct) return subProduct.product;
      }
    }
    return null;
  }

  function getPrice(mainProductId: string, productId: string) {
    for (const category of Object.values(products)) {
      const product = category.find(
        (product) => product.main_product_id === mainProductId
      );
      if (product) {
        const subProduct = product.sub_products.find(
          (subProduct) => subProduct.product_id === productId
        );
        if (subProduct) return subProduct.price;
      }
    }
    return 0;
  }

  function getQuantity(mainProductId: string, productId: string) {
    return selections.find(
      (selection) =>
        selection.mainProductId === mainProductId &&
        selection.productId === productId
    )?.quantity;
  }
  useEffect(() => {
    const toFormattedNumber = (num: number) => {
        ///did not worked
      return num.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); //like this 1.152,00
      


    };
    const price = selections.reduce((acc, selection) => acc + selection.quantity * getPrice(selection.mainProductId, selection.productId), 0);
    setTotalPrice(toFormattedNumber(price));
  }, [selections]);
  return {
    getPrice,
    getQuantity,
    getMainProductName,
    getSubProductName,
    groupedSelections,
    totalPrice,
  };
}
