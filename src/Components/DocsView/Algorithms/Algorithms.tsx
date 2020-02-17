import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PROBLEMS_QUERY } from './query';
import ProblemInfo from './ProblemInfo';
import ProblemNav from './ProblemNav';
import CodeEditor from './CodeSubmission';
import { Wrapper } from './styles';


export default function Algorithms() {
  const { data, loading, error } = useQuery(PROBLEMS_QUERY);

  if (loading) return <>Loading...</>;
  if (error) return <>{`Error! ${error.message}`}</>;

  const {
    title,
    language,
    author,
    difficulty,
    documentation: {
      description,
      example
    },
    code
  } = data.problems[2];

  return (
    <>
      <ProblemNav />
      <Wrapper>
        <div className="section">
          <ProblemInfo
            title={title}
            language={language}
            difficulty={difficulty}
            description={description}
            example={example}
          />
        </div>
        <div className="divider" />
        <div className="editor-section">
          <CodeEditor
            data={code}
          />
        </div>
      </Wrapper>
    </>
  );
};
