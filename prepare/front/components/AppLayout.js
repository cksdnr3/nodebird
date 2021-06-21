import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { useState } from 'react';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const InputSearchWrapper = styled(Input.Search)`
    vertical-align: middle;
`;

const ColWrapper = styled(Col)`
    padding: 15px;
`;

const AppLayout = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState('');
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">Node Bird</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">profile</Link>
                </Menu.Item>
                <Menu.Item>
                    <InputSearchWrapper enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">signup</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <ColWrapper xs={24} md={6}>
                    {isLoggedin ? <UserProfile setIsLoggedin={setIsLoggedin} /> : <LoginForm setIsLoggedin={setIsLoggedin} />}
                </ColWrapper>

                <Col xs={24} md={12}>
                    {children}
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
