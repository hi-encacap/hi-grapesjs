import { Editor } from "grapesjs";
import { memo, useMemo } from "react";
import SidebarLeftBlockDefaultComponent from "./DefaultComponent";
import SidebarLeftBlockHeader from "./Header";

interface SidebarLeftBlockProps {
  editor: Editor;
}

const SidebarLeftBlock = ({ editor }: SidebarLeftBlockProps) => {
  const blockManager = useMemo(() => editor.Blocks, [editor]);
  const blocks = useMemo(() => blockManager.getAll(), [blockManager]);

  return (
    <div className="w-72 border-r-2 border-gray-100 h-screen">
      <SidebarLeftBlockHeader />
      <div className="">
        <SidebarLeftBlockDefaultComponent
          blocks={blocks}
          onDragEnd={blockManager.endDrag}
          onDragStart={blockManager.startDrag}
        />
      </div>
    </div>
  );
};

export default memo(SidebarLeftBlock);

