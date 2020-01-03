import React from 'react';
import { scales, useStyle, fonts } from '../../styles';
import Icon from '@mdi/react';
import { mdiAtomVariant } from '@mdi/js';

export default function TabLoading() {
  const css = useStyle({
    width: '100%',
    height: '100%',
    fontFamily: fonts.verdana,
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gridAutoFlow: 'column',
    gridGap: scales.spacing[3],
  });

  const text = useStyle({
    fontSize: scales.font[3],
  });

  return (
    <div {...css()}>
      <Icon size={scales.size[2]} path={mdiAtomVariant} spin />
      <div {...text()}>Loading...</div>
    </div>
  );
};
