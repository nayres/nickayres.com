import React from 'react';
import { InfoWrapper } from './styles';

interface InfoTypes {
  title: string;
  description: string;
}
export default({ title, description }: InfoTypes) => {
  return (
    <InfoWrapper>
      <div className="info-content">
        <div className="info-title">
          <span>{ title }</span>
        </div>
        <div className="info-description">
          <p>{ description }</p>
        </div>
      </div>
      <div className="info-footer"></div>
    </InfoWrapper>
  );
};
