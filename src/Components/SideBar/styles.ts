import styled from 'styled-components';
import { scales } from '../../styles';

export const Overlay = styled('div')`font-display: auto;
  display: flex;
  flex-direction: row;
  width: 100vw;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
`;

export const Menu = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
  
  .tab-menu {
    height: 100vh;
    width: 16rem;
    transition: .3s ease-in-out;
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
  }
  .toggle-menu {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background: #e0e0e0;
    padding: 1rem 0.75rem;
    height: inherit;
    cursor: pointer;
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
    cursor: pointer;
    
    &:hover {
      background: #f5f5f5;
      color: black;
    }

    > span {
      color: black;
      font-size: ${scales.font[5]};
      margin-left: ${scales.spacing[5]};
    }
  }

  .home-button {
    padding: 1.75rem 0;
    width: inherit;
    text-align: center;
    border-bottom: .025rem solid #f5f5f5;
    transition: .3s ease-in-out;
    color: black;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`;
