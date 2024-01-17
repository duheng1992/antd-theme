import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';
import { DOT_PREFIX } from '../constant';

import { getBackground, getBorderStyle } from './gradientUtil';
import { removeAntdPrefix } from '../utils';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Tag'>> = (token) => {

  const { componentCls: cls, lineWidth } = token;

  const componentCls = removeAntdPrefix(cls);

  return {
    [`${DOT_PREFIX}-${componentCls}`]: {
      fontSize: 'inherit !important',
      [`&:not(${DOT_PREFIX}-${componentCls}-checkable)`]: {
        '&:before': getBorderStyle(lineWidth),
      },

      [`&${DOT_PREFIX}-${componentCls}-checkable`]: {
        background: token.colorBgContainerDisabled,
        backgroundPosition: `-${lineWidth}px -${lineWidth}px`,
        transition: 'all 0.3s',

        [`&-checked`]: {
          ...getBackground(lineWidth),
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Tag', 'techTheme'], (token) => {
  return [genStyle(token)];
});
