import { Editor } from "grapesjs";

const atomicComponentPlugin = (editor: Editor) => {
  editor.DomComponents.addType("div", {
    isComponent: (el) => el.tagName === "DIV",
    model: {
      defaults: {
        attributes: {
          class: "p-4",
          category: "basic",
        },
        tagName: "div",
      },
    },
  });
};

const swiperComponentPlugin = (editor: Editor) => {
  editor.DomComponents.addType("swiper-container", {
    isComponent: (el) => el.tagName === "SWIPER-CONTAINER",
    model: {
      defaults: {
        attributes: {
          category: "basic",
        },
        tagName: "swiper-container",
      },
    },
  });

  editor.DomComponents.addType("swiper-slide", {
    isComponent: (el) => el.tagName === "SWIPER-SLIDE",
    model: {
      defaults: {
        attributes: {
          category: "basic",
        },
        components: [
          {
            type: "div",
          },
        ],
        tagName: "swiper-slide",
      },
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { atomicComponentPlugin, swiperComponentPlugin };
