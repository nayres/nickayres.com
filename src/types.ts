import { ReactNode } from 'react';

export interface ChildrenProp<T = ReactNode> {
  children?: T;
}