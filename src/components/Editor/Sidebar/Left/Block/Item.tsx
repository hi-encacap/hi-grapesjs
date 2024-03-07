import { Block } from "grapesjs";
import { memo, useCallback } from "react";

export interface SidebarLeftBlockItemProps {
  data: Block;
  onDragStart: (data: Block) => void;
  onDragEnd: VoidFunction;
}

const SidebarLeftBlockItem = ({
  data,
  onDragStart,
  onDragEnd,
}: SidebarLeftBlockItemProps) => {
  console.log(data);

  const handleDragStart = useCallback(() => {
    onDragStart(data);
  }, [data, onDragStart]);

  return (
    <div
      id={data.getId()}
      className="gjs-block gjs-one-bg gjs-four-color-h"
      title={data.getLabel()}
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      draggable
    >
      <div>{data.getLabel()}</div>
    </div>
  );
};

export default memo(SidebarLeftBlockItem);

