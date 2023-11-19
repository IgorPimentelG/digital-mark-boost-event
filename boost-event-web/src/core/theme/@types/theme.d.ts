import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    'colors': {
      'absolute-colors': {
        'white': string;
        'black': string;
        'red': string;
      },

      'blue-shades': {
        'blue-99': string;
        'blue-95': string;
        'blue-60': string;
      }

      'white-shades': {
        'white-99': string;
        'white-15': string;
        'white-10': string;
      },

      'grey-shades': {
        'grey-70': string;
        'grey-50': string;
      }
    }
  }
}