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

export const AccordianButton = styled('button')`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  padding: 1.75rem 0;
  border-bottom: .025rem solid #e0e0e0;
  border-top: .025rem solid #e0e0e0;
  border-right: 0;
  border-left: 0;
  transition: .3s ease-in-out;
  cursor: pointer;
  
  &:hover, &:visited {
    background: #eceff1;
    color: black;
  }

  &:focus{
    outline: 0;
    background: #eceff1;
    color: black;
  }

  > span {
    color: black;
    font-size: ${scales.font[5]};
    margin: 0 ${scales.spacing[4]};
  }
`;