import React, { ReactNode } from 'react';
import { AccordianButton, AccordianWrapper } from './styles';

export interface AccordianTypes {
  visibility: boolean,
  children: ReactNode,
  label: string,
  toggle: () => void
}

// TODO: {...props} instead of styles, determine styles in parent
export default function Accordian({
  visibility,
  children,
  label,
  toggle
}: AccordianTypes) {

  return (
    <>
      <AccordianButton
        type='button'
        onClick={toggle}
        tabIndex={0}
      >
        <span>{label}</span>
      </AccordianButton>
      <AccordianWrapper visible={visibility}>
        {children}
      </AccordianWrapper>
    </>
  );
}