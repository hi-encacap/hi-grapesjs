import { Component } from "grapesjs";
import { memo } from "react";
import { useIntl } from "react-intl";

import SidebarHeader from "../Header";
import SidebarHeaderTab from "../HeaderTab";
import SidebarHeaderTabItem from "../HeaderTabItem";

import SidebarRightComponent from "./Component";

interface SidebarRightProps {
  component: Component | null;
}

const SidebarRight = ({ component }: SidebarRightProps) => {
  const { formatMessage } = useIntl();

  return (
    <div className="h-full w-72 flex-shrink-0 border-l-2 border-gray-100">
      <SidebarHeader title={formatMessage({ id: "settings" })}>
        <SidebarHeaderTab>
          <SidebarHeaderTabItem isActive title={formatMessage({ id: "style" })} />
          <SidebarHeaderTabItem isActive={false} title={formatMessage({ id: "attribute" })} />
          <SidebarHeaderTabItem isActive={false} title={formatMessage({ id: "data" })} />
        </SidebarHeaderTab>
      </SidebarHeader>
      {component && <SidebarRightComponent component={component} />}
    </div>
  );
};

export default memo(SidebarRight);
