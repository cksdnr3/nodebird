import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';

const ColWrapper = styled(Col)`
  padding: 15px;
`;
const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-child {
        padding-left: 0 !important;

    }
    .ant-col:last-child {
        padding-right: 0 !important;
    }
`;

const AppLayout = ({ children }) => {
  const { myInfo } = useSelector((state) => state.user);
  const [searchInput, onChangeSearchInput] = useInput('');

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="nodebird">
          <Link href="/">Node Bird</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">profile</Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search
            style={{ verticalAlign: 'middle' }}
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <ColWrapper xs={24} md={6}>
          {myInfo
            ? <UserProfile />
            : <LoginForm />}
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
