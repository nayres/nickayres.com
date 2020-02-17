import React, { useState, useEffect } from 'react';
import * as codemirror from 'codemirror';
import { Controlled as CodeMirror } from 'react-codemirror2'
import axios from 'axios';
import SubmissionResult from './SubmissionResult';
import {
  readableBytes,
  parseSpecialChars,
  removeSpecialChars
} from './helpers';
import { EditorWrapper } from './styles';

interface CodeMirrorTypes {
  options: codemirror.EditorConfiguration;
  onChange: (text: string) => void;
  data: any
  cursor?: any
}

function Code({ onChange, data, options }: CodeMirrorTypes) {
  const [value, setValue] = useState('');
  const [memory, setMemUsage] = useState('');
  const [time, setCPUUsage] = useState<number>(0);
  const [subOutput, setSubOutput] = useState<string>('');
  const [expectResult, setExpectedResult] = useState<string>('');
  const [pass, setPass] = useState(Boolean);
  const {
    snippet,
    testCase
  } = data;

  useEffect(() => {
    setValue(parseSpecialChars(snippet));
    onChange(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);

  const runCode = () => {
    let endPoint;
    if(process.env.NODE_ENV === 'development') {
      endPoint = 'http://localhost:8000/codeSubmission'
    } else {
      endPoint = 'https://js-dispatch.herokuapp.com/codeSubmission'
    }
    const submission = removeSpecialChars(value);
    let test = testCase[Math.floor(Math.random() * testCase.length)];
    axios({
      method: 'post',
      url: endPoint,
      data: {
        functionCall: test.functionCall,
        userSubmission: submission
      }
    })
    .then(res => {
      if(removeSpecialChars(res.data.stdout) !== test.expectedResult) {
        setPass(false);
        setExpectedResult(test.expectedResult);
        setSubOutput(res.data.stdout);
        setMemUsage(readableBytes(res.data.memoryUsage));
        setCPUUsage(res.data.cpuUsage / 1000);
      } else {
        setPass(true);
        setExpectedResult(test.expectedResult);
        setSubOutput(res.data.stdout);
        setMemUsage(readableBytes(res.data.memoryUsage));
        setCPUUsage(res.data.cpuUsage / 1000);
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
      { subOutput &&
        <SubmissionResult
          isCorrect={pass}
          isIncorrect={!pass}
          expected={expectResult}
          stdout={subOutput}
          memoryUsage={memory}
          cpuUsage={time}
        />
      }
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

export default Code;
