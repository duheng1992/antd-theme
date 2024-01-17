import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { background } from './gradientUtil';
import { DOT_PREFIX } from '../constant';
import { removeAntdPrefix } from '../utils';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Switch'>> = (token) => {
  const { componentCls: cls } = token;

  const componentCls = removeAntdPrefix(cls);

  return {
    [`${DOT_PREFIX}-${componentCls}`]: {
      [`&${DOT_PREFIX}-${componentCls}&${DOT_PREFIX}-${componentCls}-checked`]: {
        '&, &:hover, &:focus': {
          background: `${background} !important`,
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Switch', 'techTheme'], (token) => {
  return [genStyle(token)];
});
