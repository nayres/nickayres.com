import React from 'react';
import styled from 'styled-components';
import { scales, fonts } from '../../styles';
import Icon from '@mdi/react';
import { mdiAtomVariant } from '@mdi/js';

const TabsLoading = styled('div')`
  width: 100%;
  height: 100%;
  font-family: ${fonts.verdana};
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: ${scales.spacing[3]};

  > div {
    font-size: ${scales.font[3]};
  }
`;

export default function TabLoading() {
  return (
    <TabsLoading>
      <Icon size={scales.size[2]} path={mdiAtomVariant} spin />
      <div>Loading...</div>
    </TabsLoading>
  );
};
