import GjsEditor from "@grapesjs/react";
import grapesjs, { Editor as GrapesEditor } from "grapesjs";
import { memo, useCallback, useEffect, useState } from "react";
import { typePlugin } from "./plugin";

import "../../styles/grapesjs.scss";
import SidebarLeftBlock from "./Sidebar/Left/Block/Block";

const Editor = () => {
  const [editor, setEditor] = useState<GrapesEditor | null>(null);
  const [isBlockInitiated, setIsBlockInitiated] = useState(false);

  const handleLoadEditor = useCallback((editor: GrapesEditor) => {
    setEditor(editor);
  }, []);

  const initiateBlocks = useCallback(() => {
    const blockManager = editor!.Blocks;

    blockManager.add("div", {
      label: "Div",
      content: { type: "div" },
    });

    setIsBlockInitiated(true);
  }, [editor]);

  useEffect(() => {
    if (!editor) {
      return;
    }

    initiateBlocks();
  }, [editor, initiateBlocks]);

  return (
    <div className="flex w-screen h-screen">
      {editor && isBlockInitiated && <SidebarLeftBlock editor={editor} />}
      <div className="gjs"></div>
      <GjsEditor
        className="flex-1"
        options={{
          canvas: {
            scripts: ["https://cdn.tailwindcss.com"],
          },
          height: "100vh",
          storageManager: false,
          plugins: [typePlugin],
        }}
        grapesjs={grapesjs}
        onEditor={handleLoadEditor}
      />
    </div>
  );
};

export default memo(Editor);

