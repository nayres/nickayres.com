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
        <div className="info-title">
          <span>{ title }</span>
          <p>Language:{ language }</p>
          <p>Difficulty:{ difficulty }</p>
        </div>
        <div className="info-description">
          <p>Description:</p>
          <p>{ description }</p>
          <p>Example:</p>
          <p>{ example }</p>
        </div>
      </div>
      <div className="info-footer"></div>
    </InfoWrapper>
  );
};
