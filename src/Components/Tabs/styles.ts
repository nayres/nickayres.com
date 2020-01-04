import styled from 'styled-components';
import { scales } from '../../styles';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;

  .tab-menu {
    height: 100vh;
    width: 15rem;
    transition: .3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .toggle-menu {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-left: .5px solid lightgrey;
    padding: 0.75rem;
    height: inherit;

    #tab-button {
      border: none;
      background: transparent;
      padding: 0;
    }
  }

  .tab-body {
    height: 100vh;
    width: 100vh;
  }

  .tab {
    text-decoration: none;
    padding: 1.75rem 0;
    width: inherit;
    border-bottom: .5px solid lightgrey;

    &:hover {
      background: lightgrey;
    }

    > span {
      color: black;
      font-size: ${scales.font[5]};
      margin-left: ${scales.spacing[4]};
    }
  }
`;