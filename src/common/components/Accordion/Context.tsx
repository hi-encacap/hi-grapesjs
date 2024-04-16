import { createContext } from "react";

import { AccordionContextType, AccordionItemContextType } from "./interface";

const Context = createContext<AccordionContextType>({
  expanded: [],
  onExpand: () => {},
});

const ItemContext = createContext<AccordionItemContextType>({
  id: "",
});

export { Context, ItemContext };
