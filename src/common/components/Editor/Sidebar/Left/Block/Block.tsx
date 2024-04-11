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

  const handleDragEnd = useMemo(() => blockManager.endDrag.bind(blockManager), [blockManager]);
  const handleDragStart = useMemo(() => blockManager.startDrag.bind(blockManager), [blockManager]);

  return (
    <div className="h-screen w-72 flex-shrink-0 border-r-2 border-gray-100">
      <SidebarLeftBlockHeader />
      <div className="gjs-blocks-container p-4">
        <SidebarLeftBlockDefaultComponent
          blocks={blocks}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        />
      </div>
    </div>
  );
};

export default memo(SidebarLeftBlock);
