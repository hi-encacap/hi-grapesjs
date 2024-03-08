import { memo } from "react";
import { useIntl } from "react-intl";

import SidebarLeftBlockHeaderTabItem from "./HeaderTabItem";

const SidebarLeftBlockHeader = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <div className="h-12 border-b-2 border-gray-100">
        <div className="flex h-12 items-center px-4 font-semibold">{formatMessage({ id: "components" })}</div>
      </div>
      <div className="flex h-12 items-center justify-between border-b-2 border-gray-100 px-4">
        <SidebarLeftBlockHeaderTabItem isActive title={formatMessage({ id: "default" })} />
        <SidebarLeftBlockHeaderTabItem isActive={false} title={formatMessage({ id: "your_components" })} />
      </div>
    </div>
  );
};

export default memo(SidebarLeftBlockHeader);
