import { Component } from "grapesjs";

import SidebarRightStyle from "./Style";

interface SidebarRightComponentProps {
  component: Component;
}

const SidebarRightComponent = ({ component }: SidebarRightComponentProps) => {
  return <SidebarRightStyle component={component} />;
};

export default SidebarRightComponent;
