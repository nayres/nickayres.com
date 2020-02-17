import React from 'react';
import { SubmissionWrapper } from './styles';

interface SubmissionTypes {
  isCorrect: boolean,
  isIncorrect: boolean,
  expected: string,
  stdout: string,
  memoryUsage: string,
  cpuUsage: number
}

function SubmissionResult({isCorrect, isIncorrect, expected, stdout, memoryUsage, cpuUsage}: SubmissionTypes) {
  return (
    <SubmissionWrapper>
      <div className="sub-content">
        <div>
          { isCorrect &&
            <strong>Correct!</strong>
          }
          { isIncorrect &&
            <strong>Incorrect..</strong>
          }
        </div>
        <div>
          Result: {stdout}
        </div>
        <div>
          Expected: {expected}
        </div>
        <div>
          Memory Usage: {memoryUsage}
        </div>
        <div>
          Time: {cpuUsage}ms
        </div>
      </div>
    </SubmissionWrapper>
  );
}

export default SubmissionResult;
