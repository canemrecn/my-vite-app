import React, { useState } from 'react';
import { Menu, } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      style={{ 
        width: collapsed ? '0' : '256px', 
        height: '100vh', 
        position: 'fixed', 
        left: '0', 
        transition: 'width 0.3s ease-in-out', 
        paddingTop: '0px', 
        background: '#001529',
        overflow: 'auto' // Sidebar içeriğinin kaydırılmasını sağlar
      }}
    >
      <Menu 
        defaultSelectedKeys={['1']} 
        defaultOpenKeys={['sub1']} 
        mode="inline" 
        theme="dark" 
        inlineCollapsed={collapsed} 
        items={items} 
      />
    </div>
  );
};

export default Sidebar;

