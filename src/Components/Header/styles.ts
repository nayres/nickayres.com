import styled from 'styled-components';
import { scales, fonts } from '../../styles';

export const HeaderWrapper = styled('header')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${scales.spacing[4]};
  border-bottom: .5px solid lightgrey;
  font-family: ${fonts.verdana};

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
    text-decoration: none;
    margin: 0 ${scales.spacing[3]};
    font-size: ${scales.font[4]};
    transition: 3s ease-in;
  }

  > a:hover {
    color: grey;
  }
`;