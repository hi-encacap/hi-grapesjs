import GjsEditor from "@grapesjs/react";
import grapesjs, { Editor as GrapesEditor } from "grapesjs";
import { memo, useCallback, useEffect, useState } from "react";

import "../../../styles/grapesjs.scss";
import SidebarLeftBlock from "./Sidebar/Left/Block/Block";
import { EditorComponentType } from "./constant";
import { atomicComponentPlugin, swiperComponentPlugin } from "./plugin";

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
      content: { type: EditorComponentType.DIV },
    });

    blockManager.add("image", {
      label: "Image",
      content: { type: EditorComponentType.IMAGE },
    });

    blockManager.add("slider", {
      label: "Slider Container",
      content: {
        type: EditorComponentType.SWIPER_CONTAINER,
        components: [
          {
            type: EditorComponentType.SWIPER_SLIDE,
          },
        ],
      },
    });

    blockManager.add("slider-slide", {
      label: "Slider Slide",
      content: {
        type: EditorComponentType.SWIPER_SLIDE,
      },
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
          plugins: [atomicComponentPlugin, swiperComponentPlugin],
        }}
        grapesjs={grapesjs}
        onEditor={handleLoadEditor}
      />
    </div>
  );
};

export default memo(Editor);
