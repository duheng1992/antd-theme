import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';
import { DOT_PREFIX } from '../constant';

import { getBackground, getBorderStyle } from './gradientUtil';
import { removeAntdPrefix } from '../utils';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'DatePicker'>> = (token) => {

  const { componentCls: cls, lineWidth } = token;

  const componentCls = removeAntdPrefix(cls);
  return {
    [`${DOT_PREFIX}-${componentCls}`]: {
      '&:before': getBorderStyle(lineWidth),
    },
    [`${DOT_PREFIX}-${componentCls}-cell-inner:before`]: getBorderStyle(lineWidth),
  }
};

// ============================== Export ==============================
export default genComponentStyleHook(['DatePicker', 'techTheme'], (token) => {
  return [genStyle(token)];
});
