import * as React from 'react';
import styled from 'styled-components';
import { scales } from '../../styles';

export const Wrapper = styled('div')`
  padding: ${scales.spacing[4]};
  display: flex;
`;

export interface TabPageProps {
  children: React.ReactNode 
}

export default function TabPage({ children }: TabPageProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}