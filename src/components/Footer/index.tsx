import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  // const defaultMessage = 'Presented By Paul';
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Ant Design Pro',
          title: '暂时没地址',
          href: 'https://pro.ant.design',
          blankTarget: true,  //是否打开新页面
        },
        {
          key: 'github',
          title: <><GithubOutlined />我的GitHub</>,
          href: 'https://github.com/dashboard',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '所以我为什么要重新搞一个项目',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
