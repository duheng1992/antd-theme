/* eslint no-console:0 */

import {
  Button,
  Checkbox,
  ConfigProvider,
  Divider,
  Radio,
  Space,
  Switch,
  Tag,
  Typography,
  theme,
  Spin,
  Card,
  // Tooltip,
  DatePicker as DatePickerComponent
} from 'antd';
import React from 'react';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { ThemeProvider, Text } from '.';

import './App.css';
import Table from './components/table';
import DatePicker from './components/datepicker';

const { CheckableTag } = Tag;

const Holder = (props: { children?: React.ReactNode }) => {
  const { token } = theme.useToken();
  const { colorBgContainer, padding } = token;

  return (
    <div style={{ background: colorBgContainer, paddingInline: padding, height: '100%', paddingTop: '30px' }}>
      {props.children}
    </div>
  );
};

const Demo = () => {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [themeLight, setThemeLight] = React.useState<boolean>(true);
  const [componentDisabled, setComponentDisabled] =
    React.useState<boolean>(false);
  const [checkedTags, setCheckedTags] = React.useState<number[]>([0, 2]);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: themeLight ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}
      >
        <ThemeProvider disabled={disabled}>
          <Holder>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBlock: 32,
                rowGap: 32,
              }}
            >
              <Typography.Title>
                Hello, <Text>Antd Theme</Text>
              </Typography.Title>

              <Typography.Paragraph>
                This theme is base on the token system of Ant Design.{' '}
                <Text>Have a nice day~</Text>
              </Typography.Paragraph>
              <Space>
                <Switch
                  checkedChildren="light"
                  unCheckedChildren="dark"
                  checked={themeLight}
                  onChange={() => setThemeLight((d) => !d)}
                />

                <Switch
                  checkedChildren="Custom Theme Enabled"
                  unCheckedChildren="Custom Theme Disable"
                  checked={!disabled}
                  onChange={() => setDisabled((d) => !d)}
                />

                <Switch
                  checkedChildren="Component Disabled"
                  unCheckedChildren="Component Disabled"
                  checked={componentDisabled}
                  onChange={() => setComponentDisabled((d) => !d)}
                />
              </Space>
            </div>

            <Divider />

            <ConfigProvider componentDisabled={componentDisabled}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingBlock: 32,
                  rowGap: 32,
                }}
              >
                <Checkbox.Group
                  options={new Array(3)
                    .fill(null)
                    .map((_, index) => `option-${index}`)}
                />

                <Radio.Group
                  defaultValue="default"
                  options={['default', 'apple', 'orange']}
                />

                <Space>
                  <Button type="primary">Primary</Button>
                  <Button>Default</Button>
                  <Button type="dashed">Dashed</Button>
                  <Button type="primary" danger>
                    Danger
                  </Button>
                  <Button type="text">Text</Button>
                  <Button type="link">Link</Button>
                </Space>

                <Space wrap>
                  <Tag onClick={() => { }}>Tag</Tag>
                  <Tag color="magenta">magenta</Tag>
                  <Tag color="green">green</Tag>
                  {new Array(3).fill(null).map((_, index) => (
                    <CheckableTag
                      key={index}
                      checked={checkedTags.includes(index)}
                      onChange={(checked) => {
                        setCheckedTags((tags) => {
                          if (checked) {
                            return [...tags, index];
                          }
                          return tags.filter((t) => t !== index);
                        });
                      }}
                    >
                      Tag {index}
                    </CheckableTag>
                  ))}
                  {/* <Tooltip title="目前官方没有支持给多选的 tag 添加自定义前缀的功能">
                    <QuestionCircleOutlined size={1} />
                  </Tooltip> */}
                </Space>

                <Space>
                  <Spin size="small" />
                  <Spin />
                  <Spin size="large" />
                </Space>

                <Card title="Card Title" size="small" style={{ minWidth: 300 }}>
                  Hello, <Text>Antd Theme</Text>
                </Card>

                <Table />
                <DatePicker />
                <DatePickerComponent />
              </div>
            </ConfigProvider>
          </Holder>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default Demo;
