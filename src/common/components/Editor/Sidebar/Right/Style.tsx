import { Component } from "grapesjs";
import { ChangeEvent, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";

import { Select, SelectOption } from "@components/Form";

interface SidebarRightStyleProps {
  component: Component;
}

const SidebarRightStyle = ({ component }: SidebarRightStyleProps) => {
  const { formatMessage } = useIntl();
  const [className, setClassName] = useState<string>("");

  const stateOptions = useMemo<SelectOption[]>(
    () => [{ value: "no-state", label: formatMessage({ id: "no_state" }) }],
    [formatMessage],
  );

  const handleSetClassName = useCallback(
    (value: string) => {
      component.setClass(value.split(" "));
    },
    [component],
  );

  const handleChangeClassName = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setClassName(e.target.value);
      handleSetClassName(e.target.value);
    },
    [handleSetClassName],
  );

  useEffect(() => {
    const classes = component.getClasses() as string[];
    setClassName(classes.join(" "));
  }, [component]);

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="border-b-2 border-gray-100 pb-5">
        <Select id="state" label={formatMessage({ id: "state" })} options={stateOptions} />
      </div>
      <div className="flex flex-col space-y-2.5">
        <div className="text-sm">{formatMessage({ id: "class" })}</div>
        <textarea
          className="h-20 border-2 border-gray-100 p-3 outline-none focus:border-gray-200"
          value={className}
          onChange={handleChangeClassName}
        />
      </div>
    </div>
  );
};

export default memo(SidebarRightStyle);
