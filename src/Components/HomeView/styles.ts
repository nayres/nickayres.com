import styled from 'styled-components';
import { scales } from '../../styles';

export const Header = styled('div')`
  display: flex;
  align-items: center;
  padding: ${scales.spacing[4]};
  background: #fafafa;
  border-bottom: .25px solid #fafafa;
  height: 22rem;
`;

export const Section = styled('div')`
  display: flex;
  align-items: center;
  padding: ${scales.spacing[4]};
  background: #fafafa;
  height: 30rem;
`;