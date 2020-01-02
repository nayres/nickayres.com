import React from 'react';
import { Link } from 'react-router-dom';
import { useStyle, media, fonts, scales } from '../../styles';
import { row, column, padding } from '../../styles/common';
import { name, introBio } from '../Markup';

function Title() {
  const css = useStyle({
    fontSize: scales.font[3],
  });

  return (
    <div>
      <h1 { ...css() }>
        { name }
      </h1>
    </div>
  );
}

function Intro() {
  const text = useStyle({
    fontSize: scales.font[5],
    width: '25%'
  });

  const markup = useStyle({
    ...padding(scales.spacing[2]),
    ...row('center', 'center')
  });

  return (
    <div { ...markup() }>
      <p { ...text() }>
        { introBio }
      </p>
    </div>
  )
}

function Main() {
  const css = useStyle({
    ...column('center', 'center'),

    [media.mobilePortrait]: {
      flexDirection: 'column'
    }
  });

  return (
    <div { ...css() }>
      <Title />
      <Intro />
    </div>
  )
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
      <Main />
    </div>
  );
}