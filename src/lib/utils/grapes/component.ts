import { Component, ComponentAdd } from "grapesjs";
import { get } from "lodash";

const cloneComponent = (component: Component, refId?: string): ComponentAdd => {
  const attributes = component.getAttributes();
  const tagName = component.get("tagName");
  const components = component.components();
  const id = refId ?? ((get(attributes, "data-p-ref-id") as string) || component.getId());

  return {
    tagName,
    attributes: {
      ...attributes,
      "data-p-ref-id": id,
    },
    components: components.map((element) => cloneComponent(element, id)),
  };
};

export { cloneComponent };
