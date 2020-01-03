import React from 'react';
import { useStyle, media, scales, fonts} from '../../styles';
import { row, column, padding } from '../../styles/common';

import TabPage from '../Common/TabPage';
import NavBar from '../NavBar';

export default function UI() {
  return (
    <>
      <NavBar />
      <TabPage>
        UI
      </TabPage>
    </>
  );
}