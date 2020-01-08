import styled from 'styled-components';
import { scales } from '../../../styles';

interface AccordianProps {
  readonly visible: boolean
}

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const AccordianWrapper = styled('div')<AccordianProps>`
  display: flex;
  width: inherit;
  flex-direction: column;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  position: relative;
`;

export const AccordianButton = styled('div')`
  display: flex;
  text-decoration: none;
  width: 100%;
  padding: 1.75rem 0;
  border-bottom: .025rem solid #f5f5f5;
  transition: .3s ease-in-out;
  position: relative;

  &:hover, &:visited, &:focus {
    background: #f5f5f5;
    color: black;
  }

  > span {
    color: black;
    font-size: ${scales.font[5]};
    margin-left: ${scales.spacing[4]};
  }
`;