import { memo } from "react";
import SidebarLeftBlockHeaderTabItem from "./HeaderTabItem";

const SidebarLeftBlockHeader = () => {
  return (
    <div>
      <div className="h-12 border-b-2 border-gray-100">
        <div className="h-12 px-4 flex items-center font-semibold">
          Components
        </div>
      </div>
      <div className="flex items-center px-4 border-b-2 border-gray-100 h-12 justify-between">
        <SidebarLeftBlockHeaderTabItem isActive title="Default" />
        <SidebarLeftBlockHeaderTabItem
          isActive={false}
          title="Your Components"
        />
      </div>
    </div>
  );
};

export default memo(SidebarLeftBlockHeader);

