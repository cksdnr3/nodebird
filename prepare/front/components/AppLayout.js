import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const { Search } = Input;

const InputSearchWrapper = styled(Search)`
    vertical-align: middle;
`;

const ColWrapper = styled(Col)`
    padding: 15px;
`;

const AppLayout = ({ children }) => {
    const isLoggedin = useSelector((state) => state.user.isLoggedin);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="nodebird">
                    <Link href="/">Node Bird</Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile">profile</Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <InputSearchWrapper enterButton />
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signup">signup</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <ColWrapper xs={24} md={6}>
                    {isLoggedin ? <UserProfile /> : <LoginForm />}
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
