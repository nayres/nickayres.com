import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import * as codemirror from 'codemirror';
import { EditorWrapper, Content } from '../styles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/display/placeholder';

interface CodeMirrorTypes {
  options: codemirror.EditorConfiguration;
  onChange: (text: string) => void;
}
interface EditorTypes {
  onChange?: (text: string) => void;
}

function Code(props: CodeMirrorTypes) {
  const code = `// code`;
  const [value, setValue] = useState(code);
  const { onChange } = props;

  useEffect(() => {
    setValue(value);
    onChange(value);
  }, [onChange]);

  const runCode = () => {
    const s = document.createElement('script');
    s.textContent = value;
    document.body.appendChild(s);
    setTimeout(() => {
      document.body.removeChild(s);
    }, 0);
  };

  return (
    <>
      <EditorWrapper>
        <div className="editorWrapper">
          <CodeMirror
            value={value}
            options={props.options}
            onBeforeChange={(editor: any, data: any, value: string) => {
              setValue(value);
              props.onChange(value);
            }}
          />
        </div>
      </EditorWrapper>
      <div className="editor-controls">
        <div id="code-result">
          <button onClick={runCode}>run</button>
        </div>
      </div>
    </>
  );
}

Code.defaultProps = {
  onChange: () => {}
};

export default function Editor(props: EditorTypes) {
  return (
    <Content>
      <Code
        options={{
          lineNumbers: true,
          indentUnit: 2,
          styleActiveLine: true,
          matchBrackets: true,
          mode: 'javascript',
          lineWrapping: true,
          theme: 'material-darker'
        }}
      />
    </Content>
  );
}