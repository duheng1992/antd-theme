import { ConfigProvider } from 'antd';
import useButtonStyle from './styles/buttonStyle';
import useTagStyle from './styles/tagStyle';
import useSwitchStyle from './styles/switchStyle';
import useCheckboxStyle from './styles/checkboxStyle';
import useRadioStyle from './styles/radioStyle';
import useSpinStyle from './styles/spinStyle';
import useDividerStyle from './styles/dividerStyle';
import useCardStyle from './styles/cardStyle';
import useDatepickerStyle from './styles/datePickerStyle';
import * as React from 'react';
import { PREFIX } from './constant';

export interface ThemeProviderProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, disabled } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);

  // Button
  useButtonStyle(getPrefixCls(`btn`));

  // Tag
  useTagStyle(getPrefixCls(`tag`));

  // Switch
  useSwitchStyle(getPrefixCls(`switch`));

  // Checkbox
  useCheckboxStyle(getPrefixCls(`checkbox`));

  // Radio
  useRadioStyle(getPrefixCls(`radio`));

  // Spin
  useSpinStyle(getPrefixCls(`spin`));

  // Divider
  useDividerStyle(getPrefixCls(`divider`));

  // Card
  useCardStyle(getPrefixCls(`card`));

  // DatePicker
  useDatepickerStyle(getPrefixCls(`picker`));

  // ====================== Render ======================
  // 自定义主题类
  // const passedCls = disabled ? undefined : PREFIX;
  const prefixCls = disabled ? undefined : PREFIX;

  return (
    <ConfigProvider
      prefixCls={prefixCls}
    >
      {children}
    </ConfigProvider>
  );
}
