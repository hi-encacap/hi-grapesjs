import { memo } from "react";
import { useIntl } from "react-intl";

import SidebarHeader from "../../Header";
import SidebarHeaderTab from "../../HeaderTab";
import SidebarHeaderTabItem from "../../HeaderTabItem";

const SidebarLeftBlockHeader = () => {
  const { formatMessage } = useIntl();

  return (
    <SidebarHeader title={formatMessage({ id: "components" })}>
      <SidebarHeaderTab>
        <SidebarHeaderTabItem isActive title={formatMessage({ id: "default" })} />
        <SidebarHeaderTabItem isActive={false} title={formatMessage({ id: "your_components" })} />
      </SidebarHeaderTab>
    </SidebarHeader>
  );
};

export default memo(SidebarLeftBlockHeader);
