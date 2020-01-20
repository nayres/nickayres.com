import styled from 'styled-components';
import { fonts } from '../../styles';

export const DocsWrapper = styled('main')`
    font-family: ${fonts.verdana};
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    width: 100%;
    height: 100%;
    min-height: 0;
`;