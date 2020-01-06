import styled from 'styled-components';
import { scales } from '../../styles';

export const HeaderWrapper = styled('header')`
  display: flex;
  background: white;
  border-bottom: .025rem solid #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: ${scales.spacing[4]};
  color: black;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: ${scales.font[2]};
  }
`;

export const HeaderLinks = styled('div')`
  padding-top: ${scales.spacing[3]};

  > a {
    color: black;
    margin: 0 ${scales.spacing[3]};
    font-size: ${scales.font[6]};
    transition: .3s ease-in;

    &:hover {
      color: grey;
    }
  }
`;