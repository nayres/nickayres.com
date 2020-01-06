import styled from 'styled-components';
import { scales } from '../../styles';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;

  .tab-menu {
    height: 100vh;
    width: 12rem;
    transition: .3s ease-in-out;
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
  }

  .toggle-menu {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background: #f5f5f5;
    padding: 1rem 0.75rem;
    height: inherit;

    #tab-button {
      border: none;
      background: transparent;
      padding: 0;
      cursor: pointer;
    }
  }

  .tab-body {
    height: 100vh;
    width: 100%;
    background: white;
  }

  .tab {
    text-decoration: none;
    padding: 1.75rem 0;
    width: inherit;
    border-bottom: .025rem solid #f5f5f5;
    transition: .3s ease-in-out;
    &:hover {
      background: #f5f5f5;
      color: black;
    }

    > span {
      color: black;
      font-size: ${scales.font[5]};
      margin-left: ${scales.spacing[4]};
    }
  }
`;