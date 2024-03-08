import { Editor } from "grapesjs";

import { EditorComponentCategory, EditorComponentType } from "./constant";

const atomicComponentPlugin = (editor: Editor) => {
  editor.DomComponents.addType(EditorComponentType.DIV, {
    isComponent: (el) => el.tagName === "DIV",
    model: {
      defaults: {
        attributes: {
          class: "p-4",
          category: EditorComponentCategory.ATOMIC,
        },
        tagName: EditorComponentType.DIV,
      },
    },
  });
};

const swiperComponentPlugin = (editor: Editor) => {
  editor.DomComponents.addType(EditorComponentType.SWIPER_CONTAINER, {
    isComponent: (el) => el.tagName === "SWIPER-CONTAINER",
    model: {
      defaults: {
        attributes: {
          category: "basic",
        },
        tagName: EditorComponentType.SWIPER_CONTAINER,
        traits: [
          {
            type: "checkbox",
            label: "Autoplay",
            name: "autoplay",
          },
          {
            type: "number",
            label: "Speed",
            name: "speed",
            min: 0,
          },
          {
            type: "number",
            label: "Slides Per View",
            name: "slides-per-view",
            min: 1,
          },
          {
            type: "checkbox",
            label: "Pagination",
            name: "pagination",
          },
        ],
      },
    },
  });

  editor.DomComponents.addType(EditorComponentType.SWIPER_SLIDE, {
    isComponent: (el) => el.tagName === "SWIPER-SLIDE",
    model: {
      defaults: {
        attributes: {
          category: EditorComponentCategory.ATOMIC,
        },
        components: [
          {
            tagName: EditorComponentType.DIV,
            type: EditorComponentType.TEXT,
            content: "Slider Slide",
            attributes: {
              class: "w-full h-72 flex items-center justify-center",
            },
          },
        ],
        tagName: EditorComponentType.SWIPER_SLIDE,
        draggable: "swiper-container",
      },
    },
  });
};

export { atomicComponentPlugin, swiperComponentPlugin };
