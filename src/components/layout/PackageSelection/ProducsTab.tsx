"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import Tab from "@mui/material/Tab";
import styles from "./styles.module.scss";
import { getMessages } from "@/i8n";
import { products } from "./products";
import { Accordion, AccordionItem } from "@/components/UI";

import AccordionContent from "./components/AccordionContent";
import { ProductType } from '@/entities/products';

export default function ProducsTab() {
  const [value, setValue] = useState<ProductType>(ProductType.MENSTRUAL);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue as ProductType);
    console.log(newValue);
  };

  return (
    <Box className={styles.tabsWrappedLabel}>
      <TabContext value={value}>
        <Box
          className={styles.tabListContainer}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList
            onChange={handleChange}
            aria-label={getMessages("057")}
            className={styles.tabList}
          >
            <Tab label={getMessages("057")} value={ProductType.MENSTRUAL} />
            <Tab label={getMessages("058")} value={ProductType.SUPPORTIVE} />
          </TabList>
        </Box>
        <TabPanel value={ProductType.MENSTRUAL} className={styles.tabPanel}>
          <Accordion items={mentrualItems} defaultExpanded={["pads"]} />
        </TabPanel>
        <TabPanel value={ProductType.SUPPORTIVE} className={styles.tabPanel}>
          <Accordion items={supportiveItems} defaultExpanded={["cycle"]} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const mentrualItems: AccordionItem[] = products[ProductType.MENSTRUAL].map((product) => ({
  id: product.key,
  title: product.title,
  content: <AccordionContent product={product} />,
  icon: product.icon,
}));

const supportiveItems: AccordionItem[] = products.supportive.map((product) => ({
  id: product.key,
  title: product.title,
  content: <AccordionContent product={product} />,
  icon: product.icon,
}));
