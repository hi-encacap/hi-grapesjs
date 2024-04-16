import { memo, useContext, useId, useLayoutEffect, useMemo, useRef } from "react";

import { Context, ItemContext } from "./Context";
import { AccordionItemProps } from "./interface";

const AccordionItem = ({ children, isDefaultExpanded, ...props }: AccordionItemProps) => {
  const context = useContext(Context);
  const id = useId();

  const isFirstRender = useRef(true);
  const itemContext = useMemo(() => ({ id }), [id]);

  useLayoutEffect(() => {
    if (!isFirstRender.current) {
      return;
    }

    isFirstRender.current = false;

    if (isDefaultExpanded) {
      context.onExpand(id);
    }
  }, [context, isDefaultExpanded, id]);

  return (
    <ItemContext.Provider value={itemContext}>
      <div {...props}>{children}</div>
    </ItemContext.Provider>
  );
};

export default memo(AccordionItem);
