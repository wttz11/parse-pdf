import React from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Layout, Menu, FloatButton, Upload} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import './App.scss';

const {Content, Sider} = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));
const props = {
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange({file, fileList, event}) {
        if (file.status !== 'uploading') {
            console.log(file, fileList, event);
        }
    },
    defaultFileList: [],
};
const App = () => {
    return (
        <>
            <Layout style={{height: '100%'}}>
                <Sider
                    width={200}
                    style={{
                        backgroundColor: '#FFFFFF',
                    }}>
                    <div className="app-sider-title">历史记录</div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            height: '100%',
                            margin: '24px 16px 0',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <div className="app-content-main">
                            学术论文中，作者关键信息提取
                            <Upload {...props}>
                                <FloatButton
                                    icon={<PlusOutlined />}
                                    type="primary"
                                    style={{marginRight: '24px', marginBottom: '24px'}}
                                />
                            </Upload>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
export default App;
