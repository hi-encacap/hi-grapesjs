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
      className="gjs-block gjs-one-bg gjs-four-color-h flex flex-col"
      title={data.getLabel()}
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      draggable
    >
      <div className="flex-1" />
      <div className="py-2 bg-gray-100 text-slate-700">{data.getLabel()}</div>
    </div>
  );
};

export default memo(SidebarLeftBlockItem);

