"use client";

import { FC, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider as Provider } from 'styled-components';

import { DefaultStyles } from './default-styles';

type Props = {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const DEFAULT_THEME: DefaultTheme = {
    'colors': {
      'absolute-colors': {
        'white': '#FFF',
        'black': '#000',
        'red': '#CB3F3B',
      },

      'blue-shades': {
        'blue-99': '#2354A8',
        'blue-95': '#3B77D7',
        'blue-60': '#6292E5',
      },

      'white-shades': {
        'white-99': '#E4E4E7',
        'white-10': '#FCFCFD',
      },

      'grey-shades': {
        'grey-70': '#757575',
        'grey-50': '#C2C2C2',
      }
    }
  };

  return (
    <Provider theme={DEFAULT_THEME}>
      <DefaultStyles />
      {children}
    </Provider>
  );
};