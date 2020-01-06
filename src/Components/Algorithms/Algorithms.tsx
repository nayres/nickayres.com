import React from 'react';
import TabPage from '../Common/TabPage';
import { ValidParens } from '../CodeSamples';
import { Wrapper } from './styles';

export default function Algorithms() {
  return (
    <TabPage>
      <Wrapper>
        <ValidParens />
      </Wrapper>
    </TabPage>
  );
}