import React from 'react';
import { useStyle, media, scales, fonts} from '../../styles';
import { row, column, padding } from '../../styles/common';
import { name } from '../Markup';
import Links from './Links';

export default function Header() {
  const wrapper = useStyle({
    ...padding(scales.spacing[4], scales.spacing[5]),
    ...row('center', 'center'),
    borderBottom: '1px solid black',
    fontFamily: fonts.verdana,
    [media.mobilePortrait]: {
      flexDirection: 'column'
    }
  });

  const content = useStyle({
    ...column('center', 'center'),
    [media.mobilePortrait]: {
      flexDirection: 'column'
    }
  });

  const title = useStyle({
    ...column('center', 'center'),
    fontSize: scales.font[2],
  });

  return (
    <div {...wrapper()}>
      <div {...content()}>
        <div {...title()}>{name}</div>
        <Links />
      </div>
    </div>
  );
}