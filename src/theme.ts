import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primary: '#ec4a0a',
    lighten: '#f6a88a',
    grey100: '#ffffff',
    grey200: '#d0d5dd',
    grey300: '#667085',
    grey400: '#344054',
    grey500: '#000000',
  },

  typography: {
    textTitle: `
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        `,
    textSubtitle: `
        font-size: 18px;
        line-height: 28px;
        font-weight: 600;
    `,
    textBody: `
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    `,
    textCaption: `
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
      `,
  },
};

export default theme;
