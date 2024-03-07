import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarLeftBlockHeaderTabItemProps {
  isActive: boolean;
  title: string;
}

const SidebarLeftBlockHeaderTabItem = ({
  isActive,
  title,
}: SidebarLeftBlockHeaderTabItemProps) => {
  return (
    <div
      className={twMerge(
        "text-sm px-4 pb-px h-12 relative flex items-center group",
        isActive && "text-blue-500"
      )}
    >
      <span>{title}</span>
      <div
        className={twMerge(
          "absolute inset-x-0 h-0.75 rounded-t-lg bottom-0 group-hover:bg-blue-500",
          isActive && "bg-blue-500"
        )}
      ></div>
    </div>
  );
};

export default memo(SidebarLeftBlockHeaderTabItem);

