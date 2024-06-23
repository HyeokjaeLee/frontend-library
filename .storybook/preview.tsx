import '@styles/_global.scss';
import '@styles/storybook.scss';

import { Preview } from '@storybook/react';
import React from 'react';

const DARK_MODE_QUERY = 'backgrounds.value:!hex(333333)';
const DARK_MODE_CLASS = 'dark';

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => {
      if (window.location.href.includes(DARK_MODE_QUERY)) {
        document.documentElement.classList.add(DARK_MODE_CLASS);
      } else {
        document.documentElement.classList.remove(DARK_MODE_CLASS);
      }

      return <Story />;
    },
  ],

  tags: ['autodocs'],
} satisfies Preview;
