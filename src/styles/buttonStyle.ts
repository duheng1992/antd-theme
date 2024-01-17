import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import {
  getAnimationBackground,
  getBackgroundAnimation,
  getBorderStyle,
} from './gradientUtil';
import { DOT_PREFIX } from '../constant';
import { removeAntdPrefix } from '../utils';

// ============================== Border ==============================
const genBorderStyle: GenerateStyle<FullToken<'Button'>> = (token) => {

  const { componentCls: cls, lineWidth } = token;
  const componentCls = removeAntdPrefix(cls);

  const backgroundAnimation = getBackgroundAnimation(lineWidth);

  return {
    [`${DOT_PREFIX}-${componentCls}`]: {
      // ======================= Primary =======================
      [`&-primary`]: {
        [`&:not(${DOT_PREFIX}-${componentCls}-dangerous)`]: {
          ...getAnimationBackground(lineWidth),
          ...backgroundAnimation,

          '&:disabled': {
            opacity: token.opacityLoading,
            color: token.colorTextLightSolid,
          },
        },
      },

      // ======================= Default =======================
      [`&-default`]: {
        [`&:not(${DOT_PREFIX}-${componentCls}-dangerous)`]: {
          '&:disabled': {
            color: 'transparent',
            opacity: 0.65
          },
          '&:before': getBorderStyle(lineWidth),
          color: 'transparent',
          ...getAnimationBackground(lineWidth),
          'background-clip': 'text',

          '&:disabled:before': {
            opacity: token.opacityLoading,
          },
        },
      },

      // ======================= Dashed =======================
      [`&-dashed`]: {
        [`&:not(:disabled)`]: {
          [`&:not(${DOT_PREFIX}-${componentCls}-disabled)`]: {
            color: 'transparent',
            ...getAnimationBackground(lineWidth),
            'background-clip': 'text'
          },

          // '&:disabled:before': {
          //   opacity: token.opacityLoading,
          // },
        },
      },

      // ======================== Link =========================
      [`&-link`]: {
        '&:disabled': {
          color: 'transparent',
          opacity: 0.65
        },
        ...getAnimationBackground(lineWidth),
        color: 'transparent',
        'background-clip': 'text'
      },

      // ======================== Hover ========================
      [`&${componentCls}-primary, &${componentCls}-default`]: {
        [`&:not(:disabled):not(${DOT_PREFIX}-${componentCls}-dangerous)`]: {
          '&:hover': {
            filter: `brightness(120%)`,
          },
          '&:active': {
            filter: `brightness(80%)`,
          },
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Button', 'techTheme'], (token) => {
  return [genBorderStyle(token)];
});
