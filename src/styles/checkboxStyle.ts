import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { background, getBorderStyle } from './gradientUtil';
import { DOT_PREFIX } from '../constant';
import { removeAntdPrefix } from '../utils';

// ============================== Border ==============================
export const genStyle: GenerateStyle<
  FullToken<'Checkbox'> | FullToken<'Radio'>
> = (token) => {
  const { componentCls: cls, lineWidth } = token;

  const componentCls = removeAntdPrefix(cls);
  
  return {
    [`${DOT_PREFIX}-${componentCls}-wrapper`]: {
      [`${DOT_PREFIX}-${componentCls}`]: {
        '&:before': [
          ...getBorderStyle(lineWidth),
          {
            inset: 0,
          },
        ],

        [`&${DOT_PREFIX}-${componentCls}-checked ${DOT_PREFIX}-${componentCls}-inner`]: {
          background: `${background} !important`,
        },
      },

      '&-disabled': {
        [`${DOT_PREFIX}-${componentCls}`]: {
          '&:before': {
            opacity: token.opacityLoading,
          },
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Checkbox', 'techTheme'], (token) => {
  return [genStyle(token)];
});
