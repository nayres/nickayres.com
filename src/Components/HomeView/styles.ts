import styled from 'styled-components';
import { fonts, scales } from '../../styles';

export const Wrapper = styled('div')`
  height: 100%;
  position: relative;
  font-family: ${fonts.verdana};
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

export const Header = styled('header')`
  display: flex;
  align-items: center;
  padding: ${scales.spacing[4]};
  background: #fafafa;
  border-bottom: .25px solid #fafafa;
  width: 100%;
  height: 22rem;
`;