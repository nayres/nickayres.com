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
  cursor?: any
}
interface EditorTypes {
  onChange?: (text: string) => void;
  data?: any;
  cursor?: any
}

function parseSpecialChars(s: string) {
  return s.replace(/[+]+/g, '\n');
}

function Code({ onChange, data, options }: CodeMirrorTypes) {
  const [value, setValue] = useState("");
  const [testCases, setTestCases] = useState(null);
  const { snippet, testCase } = data;

  useEffect(() => {
    setValue(parseSpecialChars(snippet));
    setTestCases(testCase)
    onChange(value);
  }, [onChange]);

  console.log(testCases);
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
      <EditorWrapper>
        <div className="editorWrapper">
          <CodeMirror
            value={value}
            options={options}
            cursor={{ line: 0, ch: 0 }}
            onBeforeChange={(editor: any, data: any, value: string) => {
              setValue(value);
              onChange(value);
            }}
          />
        </div>
      </EditorWrapper>
      <div className="editor-controls">
        <div id="code-result">
          <button
            id="run-button"
            onClick={runCode}
          >
            Submit
          </button>
        </div>
      </div>
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