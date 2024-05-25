import { Footer } from '@/components';
import { register } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// @ts-ignore
import { LoginForm, ProFormText } from '@ant-design/pro-form';
// @ts-ignore
import { Helmet, history } from '@umijs/max';
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { message, Tabs } from 'antd';
import { createStyles } from 'antd-style';
// @ts-ignore
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});
// const Lang = () => {
//   return;
// };

const Register: React.FC = () => {
  // const [userLoginState] = useState<API.RegisterResult>({});
  const [type, setType] = useState<string>('account');
  const {
    styles: { container },
  } = useStyles();
  // const { initialState} = useModel('@@initialState');
  // const {styles} = useStyles();

  const handleSubmit = async (values: API.RegisterParams) => {
    const { userPassword, checkPassword } = values;

    if (userPassword !== checkPassword) {
      message.error('两次输入的密码不一致');
      return;
    }

    try {
      const id = await register(values);
      if (id) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);

        if (!history) return;
        const { query } = history.location;
        history.push({
          pathname: '/user/login',
          query,
        });
        return;
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={container}>
      <Helmet>
        <title>
          {'注册'}- {Settings.title}
        </title>
      </Helmet>
      {/*<Lang/>*/}
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          logo={<img alt="logo" src="" />}
          title="在login/index里"
          subTitle={
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              用户管理中心 from Paul
            </a>
          }
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账户密码注册',
              },
            ]}
          />
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入账号'} //账号: admin or user
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码'} //密码: ant.design
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于8',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'确认密码'} //密码: ant.design
                rules={[
                  {
                    required: true,
                    message: '必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于8',
                  },
                ]}
              />
            </>
          )}
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
