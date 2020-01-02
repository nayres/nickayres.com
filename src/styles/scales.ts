// http://tachyons.io/docs/typography/scale/

type ScaleIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const font: Record<ScaleIndex, string> = Object.freeze({
  1: '3rem',
  2: '2.25rem',
  3: '1.5rem',
  4: '1.25rem',
  5: '1rem',
  6: '0.875rem',
  7: '0.75rem',
});

export const spacing: Record<ScaleIndex, string> = Object.freeze({
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem',
  7: '16rem',
});

export const size: Record<ScaleIndex | 8, string> = Object.freeze({
  1: '1rem',
  2: '2rem',
  3: '4rem',
  4: '8rem',
  5: '16rem',
  6: '32rem',
  7: '48rem',
  8: '64rem',
});