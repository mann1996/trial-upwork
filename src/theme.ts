import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    primary: [
      '#e0f0ff',
      '#e0e1ff',
      '#c7c8fe',
      '#a5a7fc',
      '#8184f8',
      '#6366f1',
      '#4649e5',
      '#383bca',
      '#3032a3',
      '#2e3081',
    ],
    neutral: [
      '#f7f7f7',
      '#e3e3e3',
      '#e6e6e6',
      '#a4a4a4',
      '#818181',
      '#737373',
      '#515151',
      '#404040',
      '#383838',
      '#171717',
    ],
  },
  primaryColor: 'primary',
  primaryShade: 5,
  fontFamily: 'Inter, sans-serif',
  headings: {
    sizes: {
      h2: { fontWeight: 800, lineHeight: 1.2, fontSize: '2.25rem' },
      h6: { fontWeight: 600, lineHeight: 1.4, fontSize: '1.25rem' },
    },
  },
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.white,
      color: theme.colors.neutral[9],
      lineHeight: theme.lineHeight,
      margin: 0,
      padding: 0,
    },
  }),
};
