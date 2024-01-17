import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { getBorderStyle } from './gradientUtil';
import { DOT_PREFIX } from '../constant';
import { removeAntdPrefix } from '../utils';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Card'>> = (token) => {
  const { componentCls: cls, lineWidth } = token;

  const componentCls = removeAntdPrefix(cls);

  return {
    [`${DOT_PREFIX}-${componentCls}`]: {
      '&:before': getBorderStyle(lineWidth),

      [`${DOT_PREFIX}-${componentCls}-head`]: {
        position: 'relative',

        '&:before': [
          ...getBorderStyle(lineWidth),
          {
            transition: 'none',
          },
        ],
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Card', 'techTheme'], (token) => {
  return [genStyle(token)];
});
