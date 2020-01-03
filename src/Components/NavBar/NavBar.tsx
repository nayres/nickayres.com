import * as React from 'react';
import { useStyle, media, scales} from '../../styles';
import { row, column, padding } from '../../styles/common';

export default function NavBar() {
  const nav = useStyle({
    ...padding(scales.spacing[3], scales.spacing[5]),
    ...row('center', 'space-between'),
    background: 'lightgrey'
  });

  return (
    <nav {...nav()}>

    </nav>
  );
}