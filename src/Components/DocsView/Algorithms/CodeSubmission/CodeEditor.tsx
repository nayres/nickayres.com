import React from 'react';
import Code from './UserCode';
import { Content } from './styles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/display/placeholder';

interface EditorTypes {
  onChange?: (text: string) => void;
  data?: any;
  cursor?: any
}

function Editor({ data }: EditorTypes) {
  return (
    <Content>
      <Code
        data={data}
        options={{
          lineNumbers: true,
          styleActiveLine: true,
          matchBrackets: true,
          smartIndent: false,
          mode: 'javascript',
          indentWithTabs: true,
          theme: 'material-darker'
        }}
      />
    </Content>
  );
}

export default Editor;
