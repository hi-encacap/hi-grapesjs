import { memo } from "react";
import { useIntl } from "react-intl";

interface EditorHeaderProps {
  onClickSave: VoidFunction;
}

const EditorHeader = ({ onClickSave }: EditorHeaderProps) => {
  const { formatMessage } = useIntl();

  return (
    <div className="flex h-12 flex-shrink-0 items-center justify-end border-b-2 border-gray-100 px-6">
      <button
        className="bg-teal-500 px-4 py-2 text-sm text-white duration-100 hover:bg-teal-700"
        type="button"
        onClick={onClickSave}
      >
        {formatMessage({ id: "save" })}
      </button>
    </div>
  );
};

export default memo(EditorHeader);
