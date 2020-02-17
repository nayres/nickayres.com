import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

function removeSpecialChars(s: string) {
  return s.replace(/\n/g, '');
}

function Code({ onChange, data, options }: CodeMirrorTypes) {
  const [value, setValue] = useState('');
  const [consoleResult, setConsole] = useState<string>('');
  const [pass, setPass] = useState(Boolean);
  const {
    snippet,
    testCase
  } = data;

  useEffect(() => {
    setValue(parseSpecialChars(snippet));
    onChange(value);
  }, [onChange]);

  const runCode = () => {
    const submission = removeSpecialChars(value);
    let test = testCase[Math.floor(Math.random() * testCase.length)];
    let result;

    axios({
      method: 'post',
      url: 'http://localhost:8000/codeSubmission',
      data: {
        functionCall: test.functionCall,
        userSubmission: submission
      }
    })
    .then(res => {
      if(removeSpecialChars(res.data.stdout) !== test.expectedResult) {
        result = res.data.stdout;
        setPass(false);
        setConsole(result);
        console.log(test.expectedResult, result);
      } else {
        result = res.data.stdout;
        setPass(true);
        setConsole(result);
        console.log(test.expectedResult, result);
      }
    })
    .catch(err => {
      console.log(err)
    });
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
          {consoleResult &&
            <p>{consoleResult}</p>
          }
          { pass &&
            <p>Correct!</p>
          }
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