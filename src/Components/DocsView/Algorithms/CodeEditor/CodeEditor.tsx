import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import * as codemirror from 'codemirror';
import { EditorWrapper, Content } from './styles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/display/placeholder';

interface CodeMirrorTypes {
  options: codemirror.EditorConfiguration;
  onChange: (text: string) => void;
  data: any
}
interface EditorTypes {
  onChange?: (text: string) => void;
  data?: any;
}

function Code({ onChange, data, options }: CodeMirrorTypes) {
  const [value, setValue] = useState(data.code);

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
    }, 2000);
  };

  return (
    <>
      <div className="editor-controls">
        <div id="code-result">
          <button
            id="run-button"
            onClick={runCode}
          >
            run
          </button>
        </div>
      </div>
      <EditorWrapper>
        <div className="editorWrapper">
          <CodeMirror
            value={value}
            options={options}
            onBeforeChange={(editor: any, data: any, value: string) => {
              setValue(value);
              onChange(value);
            }}
          />
        </div>
      </EditorWrapper>
    </>
  );
}

Code.defaultProps = {
  onChange: () => {}
};

export default function Editor({ data }: EditorTypes) {
  return (
    <Content>
      <Code
        data={data}
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