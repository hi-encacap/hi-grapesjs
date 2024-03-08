import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarLeftBlockHeaderTabItemProps {
  isActive: boolean;
  title: string;
}

const SidebarLeftBlockHeaderTabItem = ({ isActive, title }: SidebarLeftBlockHeaderTabItemProps) => {
  return (
    <div
      className={twMerge(
        "group relative flex h-12 items-center px-4 pb-px text-sm",
        isActive && "text-blue-500",
      )}
    >
      <span>{title}</span>
      <div
        className={twMerge(
          "absolute inset-x-0 bottom-0 h-0.75 rounded-t-lg group-hover:bg-blue-500",
          isActive && "bg-blue-500",
        )}
      />
    </div>
  );
};

export default memo(SidebarLeftBlockHeaderTabItem);
