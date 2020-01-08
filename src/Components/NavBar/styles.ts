import styled from 'styled-components';
import { scales } from '../../styles';

export const HeaderWrapper = styled('nav')`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #1565c0;
  padding: ${scales.spacing[3]} ${scales.spacing[4]};
  color: black;

  button {
    flex: 0 0 auto;
    text-align: center;
    background: none;
    border: 0;
    padding: 0 ${scales.spacing[1]};
    cursor: pointer;
    
    &:hover {
      background: #0d47a1;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .title {
    font-size: ${scales.font[3]};
    text-decoration: none;
    color: #eeeeee;
  }
`;