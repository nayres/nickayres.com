import React from 'react';
import { InfoWrapper } from './styles';

interface InfoTypes {
  title: string;
  description: string;
  example: string;
}
export default({ title, description, example }: InfoTypes) => {
  return (
    <InfoWrapper>
      <div className="info-content">
        <div className="info-title">
          <span>{ title }</span>
        </div>
        <div className="info-description">
          <p>{ description }</p>
          <p>Example: { example }</p>
        </div>
      </div>
      <div className="info-footer"></div>
    </InfoWrapper>
  );
};
