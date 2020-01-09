import styled from 'styled-components';
import { scales } from '../../styles';

export const Overlay = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
`;

export const Menu = styled('nav')`
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
    top: 0;
    left: 0;
  }
  
  .toggle-menu {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background: #eeeeee;
    padding: 1rem 0.75rem;
    height: inherit;
    cursor: pointer;
    transition: .3s ease-in-out;


    &:hover {
      background: #e0e0e0;
    }

    &:focus {
      outline: 0;
      background: #e0e0e0;
      color: black;
    }
  }

  .tab-body {
    height: 100vh;
    width: 100%;
    background: white;
  }

  .tab {
    text-decoration: none;
    padding: 1.5rem 0;
    width: inherit;
    border-bottom: .025rem solid #e0e0e0;
    transition: .3s ease-in-out;
    cursor: pointer;
    
    &:hover {
      background: #eceff1;
      border-bottom: .025rem solid #eceff1;
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
      margin-left: ${scales.spacing[5]};
    }
  }

  .home-button {
    padding: 1.75rem 0;
    width: inherit;
    text-align: center;
    border-bottom: .025rem solid #f5f5f5;

    > a {
      transition: .3s ease-in-out;
      color: black;

      &:hover {
        color: black;
      }
    }
  }
`;
