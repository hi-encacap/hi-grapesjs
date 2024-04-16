import { Editor } from "grapesjs";

import { cloneComponent } from "@utils/grapes/component";

import { EditorCommand, EditorComponentCategory, EditorComponentType } from "./constant";

const initiateBlocks = (editor: Editor) => {
  const blockManager = editor.Blocks;

  blockManager.add("div", {
    label: "Div",
    category: EditorComponentCategory.ATOMIC,
    content: { type: EditorComponentType.DIV },
  });

  blockManager.add("image", {
    label: "Image",
    category: EditorComponentCategory.ATOMIC,
    content: {
      type: EditorComponentType.IMAGE,
    },
  });

  blockManager.add("text", {
    label: "Text",
    category: EditorComponentCategory.ATOMIC,
    content: {
      type: EditorComponentType.TEXT,
      content: "Insert your text here",
    },
  });

  blockManager.add("slider", {
    label: "Slider Container",
    category: EditorComponentCategory.SLIDER,
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
    category: EditorComponentCategory.SLIDER,
    content: {
      type: EditorComponentType.SWIPER_SLIDE,
    },
  });
};

const initiateCommands = (editor: Editor) => {
  const commandManager = editor.Commands;
  const componentManager = editor.DomComponents;

  commandManager.add(EditorCommand.TLB_CUSTOM_CLONE, () => {
    const currentComponent = editor.getSelected();

    if (!currentComponent) return;
    const parent = currentComponent.parent();

    if (!parent) return;

    const newComponent = componentManager.addComponent(cloneComponent(currentComponent));

    parent.append(newComponent);
  });
};

export { initiateBlocks, initiateCommands };
