import { Editor } from "grapesjs";

import { EditorComponentType } from "./constant";

const initiateBlocks = (editor: Editor, onFinish: VoidFunction) => {
  const blockManager = editor.Blocks;

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

  onFinish();
};

export { initiateBlocks };
