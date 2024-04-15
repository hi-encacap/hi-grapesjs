import { ReactNode, memo } from "react";

interface SidebarHeaderTabProps {
  children: ReactNode;
}

const SidebarHeaderTab = ({ children }: SidebarHeaderTabProps) => {
  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-gray-100 px-4">{children}</div>
  );
};

export default memo(SidebarHeaderTab);
