import { Editor } from "grapesjs";

const typePlugin = (editor: Editor) => {
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

// eslint-disable-next-line import/prefer-default-export
export { typePlugin };
