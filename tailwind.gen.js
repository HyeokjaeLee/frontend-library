/* eslint-disable */

import fs from 'fs';

import tailwindConfig from './tailwind.config.js';

const createVariableScss = () => {
  /**
   * @type {import('tailwindcss').Config}
   */
  const config = tailwindConfig;

  const stylelintIgnoreString = '/* stylelint-disable */';

  const { theme } = config;

  for (const key in theme) {
    const themeItem = theme[key];

    const exceptions = [
      'height',
      'width',
      'padding',
      'margin',
      'fontWeight',
      'extend',
    ];

    if (exceptions.includes(key)) continue;

    switch (key) {
      case 'colors': {
        const colorStringList = [stylelintIgnoreString];

        for (const colorPrefix in themeItem) {
          const color = themeItem[colorPrefix];

          for (const colorUnit in color) {
            const colorValue = color[colorUnit];

            colorStringList.push(
              `$${colorPrefix}-${colorUnit}: ${colorValue};`,
            );
          }
        }

        fs.writeFileSync(
          './src/styles/libs/_colors.scss',
          colorStringList.join('\n'),
        );

        break;
      }

      default: {
        const stringList = [stylelintIgnoreString];
        const item = themeItem[key];

        for (const value in item) stringList.push(`$${value}: ${item[value]};`);

        fs.writeFileSync(
          `./src/styles/libs/_${key}.scss`,
          stringList.join('\n'),
        );

        break;
      }
    }
  }
};

createVariableScss();
