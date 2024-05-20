import { Footer } from '@/components';
import { register } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// @ts-ignore
import { LoginForm, ProFormText } from '@ant-design/pro-form';
// @ts-ignore
import { Helmet, history } from '@umijs/max';
// @ts-ignore
import { Alert, message, Tabs } from 'antd';
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
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Register: React.FC = () => {
  const [userLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { styles } = useStyles();
  // const { initialState} = useModel('@@initialState');
  // const {styles} = useStyles();

  const handleSubmit = async (values: API.RegisterParams) => {
    const { userPassword, checkPassword } = values; //获取
    //校验
    if (userPassword !== checkPassword) {
      message.error('两次密码不一致！');
      return;
    }
    try {
      const id = await register(values);
      // 注册
      // const user = await login({
      //   ...values,
      //   type,
      // });
      if (id > 0) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);

        // await fetchUserInfo();
        if (!history) return;

        const searchParams = new URLSearchParams(history.location.search);
        const redirect = searchParams.get('redirect');

        if (!redirect) {
          // 处理未获取到 redirect 参数的情况
        }

        // 继续处理 redirect 参数

        // if (!history) return;
        // const {query} = history.location;
        // const {redirect} = query as{
        //   redirect:string;
        // };
        // const urlParams = new URL(window.location.href).searchParams;
        history.push('user/login?redirect' + redirect); //重定向
        return;
      } else {
        throw new Error(`register error id = ${id}`);
      }
      // console.log(id);
      // 如果失败去设置用户错误信息
      // setUserLoginState(user);
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;
  return (
    <div className={styles.container}>
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
          logo={<img alt="logo" src="girl.jpg" />}
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
              // {
              //   key: 'mobile',
              //   label: '手机号注册',
              // },
            ]}
          />

          {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'错误的账号和密码(admin/ant.design)'} />
          )}
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
