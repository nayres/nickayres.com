import React from 'react';
import { Link } from 'react-router-dom';
import { useStyle, media, fonts, scales } from '../../styles';
import { row, column, padding } from '../../styles/common';

function Title() {
  const css = useStyle({
    fontSize: scales.font[2],
  });

  return (
    <h1 { ...css() }>
      Nick Ayres
    </h1>
  );
}

export default function Header() {
  const css = useStyle({
    ...padding(scales.spacing[4], scales.spacing[5]),
    ...row('center', 'center'),
    borderBottom: '1px solid black',

    [media.mobilePortrait]: {
      flexDirection: 'column'
    }
  });

  return (
    <div { ...css() }>
      <Title />
    </div>
  );
}