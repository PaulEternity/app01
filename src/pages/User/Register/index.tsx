// import { Footer } from '@/components';
// import { login } from '@/services/ant-design-pro/api';
// import {
//   LockOutlined,
//   // MobileOutlined,
//   // TaobaoCircleOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// // @ts-ignore
// import {
//   LoginForm,
//   ProFormCheckbox,
//   ProFormText,
// } from '@ant-design/pro-form';
// // @ts-ignore
// import { Helmet, history, useModel } from '@umijs/max';
// // @ts-ignore
// import { Alert, Tabs, message } from 'antd';
// import { createStyles } from 'antd-style';
// // @ts-ignore
// import React, { useState } from 'react';
// import Settings from '../../../../config/defaultSettings';
//
// const useStyles = createStyles(({ token }) => {
//   return {
//     action: {
//       marginLeft: '8px',
//       color: 'rgba(0, 0, 0, 0.2)',
//       fontSize: '24px',
//       verticalAlign: 'middle',
//       cursor: 'pointer',
//       transition: 'color 0.3s',
//       '&:hover': {
//         color: token.colorPrimaryActive,
//       },
//     },
//     lang: {
//       width: 42,
//       height: 42,
//       lineHeight: '42px',
//       position: 'fixed',
//       right: 16,
//       borderRadius: token.borderRadius,
//       ':hover': {
//         backgroundColor: token.colorBgTextHover,
//       },
//     },
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100vh',
//       overflow: 'auto',
//       backgroundImage:
//         "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
//       backgroundSize: '100% 100%',
//     },
//   };
// });
// // const Lang = () => {
// //   return;
// // };
// const LoginMessage: React.FC<{
//   content: string;
// }> = ({ content }) => {
//   return (
//     <Alert
//       style={{
//         marginBottom: 24,
//       }}
//       message={content}
//       type="error"
//       showIcon
//     />
//   );
// };
//
// const Register: React.FC = () => {
//   // const [userLoginState] = useState<API.LoginResult>({});
//   const [type, setType] = useState<string>('account');
//   // const { styles } = useStyles();
//   // const { initialState, setInitialState } = useModel('@@initialState');
//   const { styles } = useStyles();
//
//   // const handleSubmit = async (values: API.LoginParams) => {
//   //   try {
//   //     // 登录
//   //     const user = await login({
//   //       ...values,
//   //       type,
//   //     });
//   //     if (user) {
//   //       const defaultLoginSuccessMessage = '登录成功！';
//   //       message.success(defaultLoginSuccessMessage);
//   //       // await fetchUserInfo();
//   //       if (!history) return;
//   //       const urlParams = new URL(window.location.href).searchParams;
//   //       history.push(urlParams.get('redirect') || '/');
//   //       return;
//   //     }
//   //     console.log(user);
//   //     // 如果失败去设置用户错误信息
//   //     // setUserLoginState(user);
//   //   } catch (error) {
//   //     const defaultLoginFailureMessage = '登录失败，请重试！';
//   //     console.log(error);
//   //     message.error(defaultLoginFailureMessage);
//   //   }
//   // };
//   // const { status, type: loginType } = userLoginState;
//   return (
//     <div className={styles.container}>
//       <Helmet>
//         <title>
//           {'登录'}- {Settings.title}
//         </title>
//       </Helmet>
//       {/*<Lang/>*/}
//       <div
//         style={{
//           flex: '1',
//           padding: '32px 0',
//         }}
//       >
//         <LoginForm
//           contentStyle={{
//             minWidth: 280,
//             maxWidth: '75vw',
//           }}
//           logo={<img alt="logo" src="girl.jpg" />}
//           title="在login/index里"
//           subTitle={
//             <a href="https://github.com/" target="_blank" rel="noreferrer">
//               用户管理中心 from Paul
//             </a>
//           }
//           initialValues={{
//             autoLogin: true,
//           }}
//           // onFinish={async (values) => {
//           //   // await handleSubmit(values as API.LoginParams);
//           // }}
//         >
//           <Tabs
//             activeKey={type}
//             onChange={setType}
//             centered
//             items={[
//               {
//                 key: 'account',
//                 label: '账户密码登录',
//               },
//               // {
//               //   key: 'mobile',
//               //   label: '手机号登录',
//               // },
//             ]}
//           />
//
//           {/*{status === 'error' && loginType === 'account' && (*/}
//           {/*  <LoginMessage content={'错误的账号和密码(admin/ant.design)'} />*/}
//           {/*)}*/}
//           {type === 'account' && (
//             <>
//               <ProFormText
//                 name="userAccount"
//                 fieldProps={{
//                   size: 'large',
//                   prefix: <UserOutlined />,
//                 }}
//                 placeholder={'请输入账号'} //账号: admin or user
//                 rules={[
//                   {
//                     required: true,
//                     message: '账号是必填项！',
//                   },
//                 ]}
//               />
//               <ProFormText.Password
//                 name="userPassword"
//                 fieldProps={{
//                   size: 'large',
//                   prefix: <LockOutlined />,
//                 }}
//                 placeholder={'请输入密码'} //密码: ant.design
//                 rules={[
//                   {
//                     required: true,
//                     message: '密码是必填项！',
//                   },
//                   {
//                     min: 8,
//                     type: 'string',
//                     message: '密码长度不能小于8',
//                   },
//                 ]}
//               />
//             </>
//           )}
//
//           <div
//             style={{
//               marginBottom: 24,
//             }}
//           >
//             <ProFormCheckbox noStyle name="autoLogin">
//               自动登录
//             </ProFormCheckbox>
//             <a
//               style={{
//                 float: 'right',
//               }}
//               href="https://www.google.com.hk/?hl=zh_CN"
//             >
//               忘记密码 ?
//             </a>
//           </div>
//         </LoginForm>
//       </div>
//       <Footer />
//     </div>
//   );
// };
//
// export default Register;
