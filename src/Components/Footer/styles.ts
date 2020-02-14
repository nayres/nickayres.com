import styled from 'styled-components';
import { scales } from '../../styles';

export const FooterWrapper = styled('footer')`
  display: flex;
  background: #fafafa;
  border-top: .25px solid #eeeeee;
  position: relative;
  bottom: 0;
  padding: ${scales.spacing[5]} 0;
  color: black;
  width: 100%;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  a {
    color: black;
    margin: 0 ${scales.spacing[3]};
    font-size: ${scales.font[5]};
    transition: .3s ease-in;

    &:hover {
      color: grey;
    }
  }
`;
