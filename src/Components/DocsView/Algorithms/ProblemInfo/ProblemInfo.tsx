import React from 'react';
import ProblemNav from '../ProblemNav';
import { InfoWrapper } from './styles';

interface InfoTypes {
  title: string;
  language: string;
  difficulty: string;
  description: string;
  example: string;
}
export default({
  title,
  language,
  difficulty,
  description,
  example
}: InfoTypes) => {
  return (
    <InfoWrapper>
      <div className="info-content">
        <div className="info-header">
          <div className="info-title">
            <strong>{ title }</strong>
          </div>
          <div className="info-meta-data">
            <>
              <p>Language: </p>
              <span>{ language }</span>
            </>
            <>
              <p>Difficulty: </p>
              <span>{ difficulty }</span>
            </>
          </div>
        </div>
        <div className="info-data">
          <div className="info-data-item">
            <p>Description:</p>
            <div className="info-text-block">
              <span>{ description }</span>
            </div>
          </div>
          <div className="info-data-item">
            <p>Example:</p>
            <div className="info-text-block">
              <span>{ example }</span>
            </div>
          </div>
        </div>
      </div>
      <div className="info-footer"></div>
    </InfoWrapper>
  );
};
