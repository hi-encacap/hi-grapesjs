import { motion } from "framer-motion";
import { ReactNode, memo, useContext, useMemo } from "react";

import { Context, ItemContext } from "./Context";

interface AccordionContentProps {
  children: ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  const context = useContext(Context);
  const itemContext = useContext(ItemContext);
  const id = useMemo(() => itemContext.id, [itemContext.id]);
  const isExpanded = useMemo(() => context.expanded.includes(id), [context.expanded, id]);

  return (
    <motion.div animate={{ height: isExpanded ? "auto" : 0 }} className="overflow-hidden" initial={false}>
      {children}
    </motion.div>
  );
};

export default memo(AccordionContent);
