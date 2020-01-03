import React from 'react';
// import { Link } from 'react-router-dom';
import { useStyle, media, scales } from '../../styles';
import { row, column, padding } from '../../styles/common';
import { name, introBio } from '../Markup';

export default function Header() {
  const wrapper = useStyle({
    ...padding(scales.spacing[4], scales.spacing[5]),
    ...row('center', 'center'),
    borderBottom: '1px solid black',
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
    fontSize: scales.font[3],
  });

  const text = useStyle({
    fontSize: scales.font[4],
    width: '25%'
  });

  const markup = useStyle({
    ...padding(scales.spacing[2]),
    ...row('center', 'center')
  });

  return (
    <div {...wrapper()}>
      <div {...content()}>
        <h1 {...title()}>
          {name}
        </h1>
        <div {...markup()}>
          <p {...text()}>
            {introBio}
          </p>
        </div>
      </div>
    </div>
  );
}