import React from 'react';
import { SubmissionWrapper } from './styles';

interface SubmissionTypes {
  isCorrect: boolean,
  isIncorrect: boolean,
  expected: string,
  stdout: string,
  memoryUsage: string,
  cpuUsage: number,
  onClick: () => void;
}

function SubmissionResult({
  isCorrect,
  isIncorrect,
  expected,
  stdout,
  memoryUsage,
  cpuUsage,
  onClick
}: SubmissionTypes) {
  return (
    <SubmissionWrapper
      onClick={onClick}
    >
      <div className="sub-content">
        <div className="sub-controls">
          <button
            id="sub-back-button"
            type="button"
            onClick={onClick}
          >
            back
          </button>
        </div>
        <div className="sub-binary-result">
          { isCorrect &&
            <h2 className="sub-result" id="correct">Correct!</h2>
          }
          { isIncorrect &&
            <h2 className="sub-result" id="incorrect">Incorrect..</h2>
          }
        </div>
        <>
          <div className="sub-console">
            <h2>Expected: </h2>
            <span>{expected}</span>
          </div>
          <div className="sub-console">
            <h2>Result: </h2>
            <span>{stdout}</span>
          </div>
          <div className="sub-console">
            <h2>Memory Usage: </h2>
            <span>{memoryUsage}</span>
          </div>
          <div className="sub-console">
            <h2>Time: </h2>
            <span>{cpuUsage}ms</span>
          </div>
        </>
      </div>
    </SubmissionWrapper>
  );
}

export default SubmissionResult;
