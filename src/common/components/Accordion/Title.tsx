import { ChevronRight } from "lucide-react";
import { HTMLAttributes, memo, useCallback, useContext, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { Context, ItemContext } from "./Context";

interface AccordionTitleProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  title: string;
}

const AccordionTitle = ({ className, title, ...props }: AccordionTitleProps) => {
  const context = useContext(Context);
  const itemContext = useContext(ItemContext);
  const id = useMemo(() => itemContext.id, [itemContext.id]);
  const isExpanded = useMemo(() => context.expanded.includes(id), [context.expanded, id]);

  const handleToggle = useCallback(() => {
    context.onExpand(id);
  }, [context, id]);

  return (
    <div
      className={twMerge("flex items-center justify-between", className)}
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      {...props}
    >
      <div>{title}</div>
      <div className="flex h-6 w-6 items-center justify-end">
        <ChevronRight className={twMerge("duration-100", isExpanded && "rotate-90")} size={16} />
      </div>
    </div>
  );
};

export default memo(AccordionTitle);
