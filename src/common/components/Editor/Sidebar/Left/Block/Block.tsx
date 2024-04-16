import { Blocks, Editor } from "grapesjs";
import { memo, useMemo } from "react";
import { useIntl } from "react-intl";

import { Accordion } from "@components/Accordion";
import { EditorComponentCategory } from "@components/Editor/constant";

import SidebarAccordionItem from "../../AccordionItem";

import SidebarLeftBlockDefaultComponent from "./DefaultComponent";
import SidebarHeader from "./Header";

interface SidebarLeftBlockProps {
  editor: Editor;
}

const SidebarLeftBlock = ({ editor }: SidebarLeftBlockProps) => {
  const { formatMessage } = useIntl();

  const blockManager = useMemo(() => editor.Blocks, [editor]);
  const categories = useMemo(() => blockManager.getCategories(), [blockManager]);
  const blocks = useMemo(() => blockManager.getAll(), [blockManager]);
  const blockByCategory = useMemo(
    () =>
      blocks.reduce((acc, block) => {
        const category = block.getCategoryLabel() as EditorComponentCategory;

        if (!acc.has(category)) {
          acc.set(category, [] as unknown as Blocks);
        }

        acc.get(category)!.push(block);

        return acc;
      }, new Map<EditorComponentCategory, Blocks>()),
    [blocks],
  );

  const handleDragEnd = useMemo(() => blockManager.endDrag.bind(blockManager), [blockManager]);
  const handleDragStart = useMemo(() => blockManager.startDrag.bind(blockManager), [blockManager]);

  return (
    <div className="h-screen w-72 flex-shrink-0 border-r-2 border-gray-100">
      <SidebarHeader />
      <Accordion>
        {categories.map((category) => (
          <SidebarAccordionItem
            isDefaultExpanded={category.get("id") === EditorComponentCategory.ATOMIC}
            key={category.get("id")}
            title={formatMessage({ id: category.get("id") })}
          >
            <div className="gjs-blocks-container px-4 pb-5">
              <SidebarLeftBlockDefaultComponent
                blocks={blockByCategory.get(category.get("id") as EditorComponentCategory)!}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
              />
            </div>
          </SidebarAccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default memo(SidebarLeftBlock);
