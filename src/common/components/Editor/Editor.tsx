import GjsEditor from "@grapesjs/react";
import grapesjs, { Editor as GrapesEditor } from "grapesjs";
import { memo, useCallback, useEffect, useState } from "react";

import "../../../styles/grapesjs.scss";
import { atomicComponentPlugin } from "./plugin";
import SidebarLeftBlock from "./Sidebar/Left/Block/Block";

const Editor = () => {
  const [editor, setEditor] = useState<GrapesEditor | null>(null);
  const [isBlockInitiated, setIsBlockInitiated] = useState(false);

  const handleLoadEditor = useCallback((ref: GrapesEditor) => {
    setEditor(ref);
  }, []);

  const initiateBlocks = useCallback(() => {
    const blockManager = editor!.Blocks;

    blockManager.add("div", {
      label: "Div",
      content: { type: "div" },
    });
    blockManager.add("slider", {
      label: "Slider",
      content: (
        <swiper-container>
          <swiper-slide>Slide 1.1</swiper-slide>
          <swiper-slide>Slide 2.2</swiper-slide>
          <swiper-slide>Slide 3.3</swiper-slide>
        </swiper-container>
      ) as unknown as string,
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
    <div className="flex h-screen w-screen">
      {editor && isBlockInitiated && <SidebarLeftBlock editor={editor} />}
      <div className="gjs" />
      <GjsEditor
        className="flex-1"
        options={{
          canvas: {
            scripts: [
              "https://cdn.tailwindcss.com",
              "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
            ],
          },
          height: "100vh",
          storageManager: false,
          plugins: [atomicComponentPlugin],
        }}
        grapesjs={grapesjs}
        onEditor={handleLoadEditor}
      />
    </div>
  );
};

export default memo(Editor);
