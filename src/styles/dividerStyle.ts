import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { background } from './gradientUtil';
import { DOT_PREFIX } from '../constant';
import { removeAntdPrefix } from '../utils';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Divider'>> = (token) => {
  const { componentCls: cls, lineWidth } = token;

  const componentCls = removeAntdPrefix(cls);

  return {
    [`${DOT_PREFIX}-${componentCls}`]: {
      [`&${DOT_PREFIX}-${componentCls}-horizontal`]: {
        border: 'none',
        height: lineWidth,
        background,
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Divider', 'techTheme'], (token) => {
  return [genStyle(token)];
});
