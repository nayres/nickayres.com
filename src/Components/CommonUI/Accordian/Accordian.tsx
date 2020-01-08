import React, { ReactNode } from 'react';
import { AccordianButton, AccordianWrapper } from './styles';

export interface AccordianTypes {
  visibility: boolean,
  children: ReactNode,
  label: string,
  toggle: () => void
}

export default function Accordian({
  visibility,
  children,
  label,
  toggle
}: AccordianTypes) {
  return (
    <>
      <AccordianButton
        onClick={toggle}
      >
        <span>{label}</span>
      </AccordianButton>
      <AccordianWrapper visible={visibility}>
        {children}
      </AccordianWrapper>
    </>
  );
}