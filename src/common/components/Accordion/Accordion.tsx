import { FC, MemoExoticComponent, ReactNode, memo, useCallback, useMemo, useState } from "react";

import Content from "./Content";
import { Context } from "./Context";
import Item from "./Item";
import Title from "./Title";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionType extends MemoExoticComponent<FC<AccordionProps>> {
  Title: typeof Title;
  Item: typeof Item;
  Content: typeof Content;
}

const Accordion = ({ children }: AccordionProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleExpand = useCallback((id: string) => {
    setExpanded((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  }, []);

  const contextValue = useMemo(() => ({ expanded, onExpand: handleExpand }), [expanded, handleExpand]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const MemoAccordion = memo(Accordion) as AccordionType;

MemoAccordion.Title = Title;
MemoAccordion.Item = Item;
MemoAccordion.Content = Content;

export default MemoAccordion;
