import React from 'react';
import ProblemNav from './ProblemNav';
import ProblemInfo from './ProblemInfo';
import CodeEditor from './CodeEditor';
import { Wrapper } from './styles';

export default function Algorithms() {
  const data = {
    problems: [
      {
        language: 'javaScript',
        title: 'Hello World',
        description: 'Simply type "Hello world" in between the parenthesis, and run the code!',
        example: 'console.log("Hello World");',
        code: 'console.log();',
      }
    ]
  }

  return (
    <>
      <ProblemNav />
      <Wrapper>
        <div className="section">
          <ProblemInfo
            title={data.problems[0].title}
            description={data.problems[0].description}
            example={data.problems[0].example}
          />
        </div>
        <div className="divider" />
        <div className="editor-section">
          <CodeEditor
            data={data.problems[0]}
          />
        </div>
      </Wrapper>
    </>
  );
};
