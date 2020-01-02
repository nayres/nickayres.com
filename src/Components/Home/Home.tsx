import React from 'react';
import Header from './Header';
import { useStyle } from 'styles';

function Main() {
  const css = useStyle({

  });

  return (
    <div { ...css() }>
      
    </div>
  )
}

export default function Home() {
  return (
    <Header />
  );
}
