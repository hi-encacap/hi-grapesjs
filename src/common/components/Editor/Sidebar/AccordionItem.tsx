import { memo } from "react";

import { Accordion, AccordionItemProps } from "@components/Accordion";

interface SidebarAccordionItemProps extends AccordionItemProps {
  title: string;
}

const SidebarAccordionItem = ({ children, isDefaultExpanded, title }: SidebarAccordionItemProps) => {
  return (
    <Accordion.Item className="border-b-2 border-gray-100" isDefaultExpanded={isDefaultExpanded}>
      <Accordion.Title className="h-12 pl-4 pr-3.5 text-sm" title={title} />
      <Accordion.Content>{children}</Accordion.Content>
    </Accordion.Item>
  );
};

export default memo(SidebarAccordionItem);
