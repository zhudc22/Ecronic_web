import React from 'react';
import { Layout, Menu, Button } from 'antd';
import  GradientButton from '@/components/button/GradientButton';
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
      <Layout className="min-h-screen bg-[#030409]">
        <Header className="fixed z-10 w-full bg-[#030409] text-white flex justify-between">
          <Menu theme="dark" mode="horizontal"  className="line-height[64px] bg-transparent flex-grow">
            <Menu.Item key="1">PT Systems and Automation</Menu.Item>
            <Menu.Item key="2">Equipment</Menu.Item>
            <Menu.Item key="3">Engineering and Construction</Menu.Item>
            <Menu.Item key="4">Industries</Menu.Item>
            <Menu.Item key="5">Client Services</Menu.Item>
            <Menu.Item key="6">Resources</Menu.Item>
          </Menu>
          <div className="space-x-4">
            <Button ghost shape='round'>Contact Us</Button>
            <Button ghost shape='round'>Client Portal</Button>
            <GradientButton name='FREE QUOTE'/>
          </div>
        </Header>

        <Content className="container mx-auto px-4 pt-20 text-white">
          <main>
            <div className="my-10">
              <h1 className="text-4xl font-bold">
                Optimize your operations with world-class packaging systems
              </h1>
              <p className="my-6">
                Premier Tech strives to develop new equipment that enhance the efficiency and safety of your processing and packaging operations. Explore them now.
              </p>
              <Button type="primary" size="large">See new equipment</Button>
            </div>

            <div className="flex justify-between">
              <div className="w-1/3 p-4">
                <div className="h-64 bg-[rgba(255,255,255,0.1)]">Left Widget</div>
              </div>
              <div className="w-1/3 p-4">
                <div className="h-64 bg-[rgba(255,255,255,0.1)]">Center Widget</div>
              </div>
              <div className="w-1/3 p-4">
                <div className="h-64 bg-[rgba(255,255,255,0.1)]">Right Widget</div>
              </div>
            </div>
          </main>
        </Content>

        <Footer className="text-center text-white bg-[#030409]">
          ©2024 PT Systems and Automation. All Rights Reserved.
        </Footer>
      </Layout>
  );
}
