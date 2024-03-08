import { memo } from "react";

import { Editor } from "@components/Editor";
import { Provider } from "@providers/index";
import "./styles/index.scss";

const App = () => {
  return (
    <Provider>
      <Editor />
    </Provider>
  );
};

export default memo(App);
