"use client";

import { ReactNode, useMemo, useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import type { AccordionProps as MuiAccordionProps } from "@mui/material/Accordion";
import styles from "./styles.module.scss";
import Image from "next/image";

export type AccordionItem = {
  id: string;
  title: string;
  summary?: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  className?: string;
  accordionProps?: Partial<MuiAccordionProps>;
  summaryProps?: Partial<AccordionSummaryProps>;
  detailsClassName?: string;
  icon?: string;
};

export type AccordionProps = {
  items: AccordionItem[];
  defaultExpanded?: string | string[];
  multiple?: boolean;
  expandIcon?: ReactNode;
  className?: string;
  onChange?: (expandedIds: string[]) => void;
};

export default function Accordion({
  items,
  defaultExpanded,
  multiple = false,
  expandIcon,
  className,
  onChange,
}: AccordionProps) {
  const initialExpanded = useMemo(() => {
    if (!defaultExpanded) {
      return [] as string[];
    }

    return Array.isArray(defaultExpanded)
      ? defaultExpanded
      : [defaultExpanded];
  }, [defaultExpanded]);

  const [expandedIds, setExpandedIds] = useState<string[]>(initialExpanded);

  const handleToggle = (itemId: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedIds((prev) => {
      let next: string[];

      if (multiple) {
        next = isExpanded
          ? [...prev, itemId]
          : prev.filter((id) => id !== itemId);
      } else {
        next = isExpanded ? [itemId] : [];
      }

      onChange?.(next);

      return next;
    });
  };

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {items.map((item) => {
        const isExpanded = expandedIds.includes(item.id);

        return (
          <MuiAccordion
            key={item.id}
            disableGutters
            elevation={0}
            square={false}
            expanded={isExpanded}
            onChange={handleToggle(item.id)}
            className={styles.accordion}
            {...item.accordionProps}
          >
            <MuiAccordionSummary
              expandIcon={expandIcon ?? <ExpandMoreIcon fontSize="small" />}
              className={styles.summary}
              {...item.summaryProps}
            >
              <div className={styles.summaryContent}>
                {item.icon && (
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                )}
                <Typography variant="body1" fontWeight="bold" >
                  {item.title}
                </Typography>
              </div>
            </MuiAccordionSummary>
            <MuiAccordionDetails
              className={[styles.details, item.detailsClassName].filter(Boolean).join(" ")}
            >
              {item.content}
            </MuiAccordionDetails>
          </MuiAccordion>
        );
      })}
    </div>
  );
}
