import * as React from 'react';
import { useStyle, media, scales} from '../../styles';
import { row, column, padding } from '../../styles/common';

export interface TabPageProps {
  children: React.ReactNode 
}

export default function TabPage({ children }: TabPageProps) {
  const wrapper = useStyle({
    ...padding(scales.spacing[4]),
  });

  return (
    <div {...wrapper()}>
      {children}
    </div>
  );
}