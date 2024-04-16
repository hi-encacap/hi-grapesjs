import { Editor } from "grapesjs";

import { EditorComponentCategory, EditorComponentType } from "./constant";

const atomicComponentPlugin = (editor: Editor) => {
  // const defaultComponentType = editor.DomComponents.getType("default");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // const defaultComponentTypeModel = defaultComponentType.model;

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

      // initToolbar() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, prefer-rest-params
      //   defaultComponentTypeModel.prototype.initToolbar.apply(this, arguments);

      //   const toolbar = this.get("toolbar");

      //   if (!toolbar) return;

      //   const cloneToolbar = toolbar.find((item) => item.command === EditorCommand.TLB_CLONE);

      //   if (cloneToolbar) {
      //     cloneToolbar.command = EditorCommand.TLB_CUSTOM_CLONE;
      //   }

      //   this.set("toolbar", toolbar);
      // },

      // init() {
      //   this.on("component:update", (model) => {
      //     if (!model) return;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //     const component = model.component as Component;
      //     const refComponents = editor.getComponents();

      //     refComponents
      //       .filter(
      //         (refComponent) => get(refComponent.getAttributes(), "data-p-ref-id") === component.getId(),
      //       )
      //       .forEach((refComponent) =>
      //         refComponent.components(component.components().map((item) => cloneComponent(item))),
      //       );
      //   });
      // },
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
