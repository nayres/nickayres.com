import { CSSProperties } from 'aphrodite';
import { css } from 'styled-components';

type Val = string | number;

/*
 * Layout 
*/

export function rect(size: Val): CSSProperties {
  return {
    width: size,
    height: size
  };
}

/*
 * Flex
*/

export function row(
  alignItems?: CSSProperties['alignItems'],
  justifyContent?: CSSProperties['justifyContent'],
): CSSProperties {
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems,
    justifyContent
  };
}

export function column(
  alignItems?: CSSProperties['alignItems'],
  justifyContent?: CSSProperties['justifyContent'],
): CSSProperties {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems,
    justifyContent
  };
}

/*
 * Spacing
*/

export function padVertical(p: Val): CSSProperties {
  return {
    paddingTop: p,
    paddingBottom: p
  };
}

export function padHorizontal(p: Val): CSSProperties {
  return {
    paddingLeft: p,
    paddingRight: p
  };
}

export function padding(vert: Val, horiz: Val = vert): CSSProperties {
  return {
    ...padVertical(vert),
    ...padHorizontal(horiz)
  };
}

export function marginVertical(m: Val): CSSProperties {
  return {
    marginTop: m,
    marginBottom: m
  };
}

export function marginHorizontal(m: Val): CSSProperties {
  return {
    marginLeft: m,
    marginRight: m
  };
}

export function margin(vert: Val, horiz: Val = vert): CSSProperties {
  return {
    ...marginVertical(vert),
    ...marginHorizontal(horiz)
  };
}