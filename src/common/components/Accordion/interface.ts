import { HTMLAttributes, ReactNode } from "react";

export interface AccordionContextType {
  expanded: string[];
  onExpand: (id: string) => void;
}

export interface AccordionItemContextType {
  id: string;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isDefaultExpanded?: boolean;
}
