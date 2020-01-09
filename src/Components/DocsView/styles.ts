import styled from 'styled-components';
import { fonts, scales } from '../../styles';

export const DocsWrapper = styled('main')`
    height: 100vh;
    position: relative;
    font-family: ${fonts.verdana};
    display: flex;
    width: 100%;
    overflow-x: auto;

    .showcase {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      > div {
        padding: ${scales.spacing[4]}
      }
    }
`;