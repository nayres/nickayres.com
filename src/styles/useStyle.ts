import { useMemo } from 'react';
import { StyleSheet, css, CSSProperties } from 'aphrodite/no-important';

export default function useStyle(styles: CSSProperties, deps: unknown[] = []) {
  return useMemo(() => {
    const rule = StyleSheet.create({ styles });
    return (prop: string = 'className') => ({
      [prop]: css(rule.styles),
    });
    // eslint-disable-next-line
  }, [styles, ...deps]);
}