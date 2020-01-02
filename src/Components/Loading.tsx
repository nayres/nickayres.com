import React from 'react';
import { fonts, scales, useStyle } from '../styles';
import Icon from '@mdi/react';
import { mdiAtomVariant } from '@mdi/js';

export default function Loading() {
  const css = useStyle({
    width: '100vw',
    height: '100vh',

    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gridAutoFlow: 'column',
    gridGap: scales.spacing[3],
  });

  const text = useStyle({
    fontFamily: fonts.verdana,
    fontSize: scales.font[3],
  });

  return (
    <div {...css()}>
      <Icon size={scales.size[2]} path={mdiAtomVariant} spin />
      <div {...text()}>Loading...</div>
    </div>
  );
};
