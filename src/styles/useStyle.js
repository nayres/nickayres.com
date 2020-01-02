import { useMemo } from 'react';
import { StyleSheet, css, CSSProperties } from 'aphrodite/no-important';

export default function useStyle(styles = CSSProperties , deps = []) {
  return useMemo(() => {
    const rule = StyleSheet.create({ styles });
    return (prop = 'className') => ({
      [prop]: css(rule.styles),
    });
    // eslint-disable-next-line
  }, [styles, ...deps]);
}