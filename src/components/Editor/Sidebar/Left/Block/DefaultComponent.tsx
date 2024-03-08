import { Blocks } from "grapesjs";
import { memo } from "react";
import SidebarLeftBlockItem, { SidebarLeftBlockItemProps } from "./Item";

interface SidebarLeftBlockDefaultComponentProps
  extends Pick<SidebarLeftBlockItemProps, "onDragStart" | "onDragEnd"> {
  blocks: Blocks;
}

const SidebarLeftBlockDefaultComponent = ({
  blocks,
  onDragStart,
  onDragEnd,
}: SidebarLeftBlockDefaultComponentProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {blocks.map((item) => (
        <SidebarLeftBlockItem
          key={item.getLabel().toLowerCase()}
          data={item}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
  );
};

export default memo(SidebarLeftBlockDefaultComponent);

