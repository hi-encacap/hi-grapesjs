import grapesjs, { Editor as GrapesEditor } from "grapesjs";
import { memo, useCallback, useEffect, useRef, useState } from "react";

import "../../../styles/grapesjs.scss";
import EditorHeader from "./Header/Header";
import SidebarLeftBlock from "./Sidebar/Left/Block/Block";
import { initiateBlocks } from "./helper";
import { atomicComponentPlugin, swiperComponentPlugin } from "./plugin";

const Editor = () => {
  const [isBlockInitiated, setIsBlockInitiated] = useState(false);

  const editorRef = useRef<GrapesEditor | null>(null);

  const initiateEditor = useCallback(() => {
    const editor = grapesjs.init({
      container: ".gjs",
      canvas: {
        scripts: [
          "https://cdn.tailwindcss.com",
          "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
        ],
      },
      height: "100vh",
      storageManager: false,
      plugins: [atomicComponentPlugin, swiperComponentPlugin],
    });

    initiateBlocks(editor, () => setIsBlockInitiated(true));

    return editor;
  }, []);

  const handleClickSave = useCallback(() => {
    const editor = editorRef.current!;

    const data = editor.getProjectData();
    const document = editor.Canvas.getDocument();

    const styleElements = document.querySelectorAll("style");
    let parsedTailwindStyle = "";

    styleElements.forEach((styleElement) => {
      const style = styleElement.innerHTML;
      if (style.includes("tailwindcss")) {
        parsedTailwindStyle = style;
      }
    });

    // eslint-disable-next-line no-console
    console.log("data", data);
    // eslint-disable-next-line no-console
    console.log("parsedTailwindStyle", parsedTailwindStyle);
  }, []);

  useEffect(() => {
    if (editorRef.current) return;

    editorRef.current = initiateEditor();
  }, [initiateEditor]);

  return (
    <div className="flex h-screen w-screen">
      {isBlockInitiated && <SidebarLeftBlock editor={editorRef.current!} />}
      <div className="flex flex-1 flex-col overflow-hidden">
        <EditorHeader onClickSave={handleClickSave} />
        <div className="gjs" />
      </div>
    </div>
  );
};

export default memo(Editor);
