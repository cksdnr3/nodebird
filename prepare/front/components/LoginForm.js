import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLocationOrigin } from 'next/dist/next-server/lib/utils';
import axios from 'axios';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [passwd, onChangePasswd] = useInput('');
  const { loginLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onSubmitLoginForm = useCallback(() => {
    console.log(email, passwd);
    dispatch(
      loginRequestAction({
        email,
        passwd,
      }),
    );
  }, [email, passwd]);

  return (
    <Form onFinish={onSubmitLoginForm}>
      <div>
        <label htmlFor="user-emial">이메일</label>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-passwd">비밀번호</label>
        <br />
        <Input name="user-passwd" value={passwd} onChange={onChangePasswd} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={loginLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>Signup</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
