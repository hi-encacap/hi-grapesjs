import { ReactNode } from "react";

interface SidebarHeaderProps {
  children: ReactNode;
  title: string;
}

const SidebarHeader = ({ children, title }: SidebarHeaderProps) => {
  return (
    <div>
      <div className="h-12 border-b-2 border-gray-100">
        <div className="flex h-12 items-center px-4 text-sm font-semibold">{title}</div>
      </div>
      {children}
    </div>
  );
};

export default SidebarHeader;
