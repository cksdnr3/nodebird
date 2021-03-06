import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import useInput from '../hooks/useInput';
import AppLayout from '../components/AppLayout';
import { signupRequestAction } from '../reducers/user';
import wrapper from '../store/ConfigureStore';
import { LOAD_MY_INFO_REQUEST } from '../actions/user';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePwd] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const { signupLoading, signupDone, signupError, myInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [pwdCheck, setPwdCheck] = useState('');
  const [pwdError, setPwdError] = useState(false);
  const onChangePwdCheck = useCallback(
    (e) => {
      setPwdCheck(e.target.value);
      setPwdError(e.target.value !== password);
    }, [password],
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (pwdCheck !== password) {
      setPwdError(true);
      return;
    }

    // if (!term) {
    //   setTermError(true);
    //   return;
    // }

    console.log(email, nickname, password);

    dispatch(signupRequestAction({ email, password, nickname }));
  }, [password, pwdCheck, email]);

  useEffect(() => {
    if (signupDone) {
      Router.replace('/');
    }
  }, [signupDone]);

  useEffect(() => {
    if (signupError) {
      console.log(signupError);
    }
  }, [signupError]);

  useEffect(() => {
    if (myInfo) {
      Router.replace('/');
    }
  }, [myInfo]);

  if (myInfo) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Signup | NodeBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label>
              Nickname
              <br />
              <Input value={nickname} required onChange={onChangeNickname} />
            </label>

            <label>
              Email
              <br />
              <Input value={email} type="email" required onChange={onChangeEmail} />
            </label>
            <label>
              Password
              <br />
              <Input value={password} required onChange={onChangePwd} />
            </label>
            <label>
              PasswordCheck
              <br />
              <Input value={pwdCheck} required onChange={onChangePwdCheck} />
            </label>
          </div>
          <div>
            <Checkbox onChange={onChangeTerm}>?????? ?????????.</Checkbox>
            {pwdError
              ? <ErrorMessage>??????????????? ???????????? ????????????.</ErrorMessage>
              : termError && <ErrorMessage>????????? ??????????????????.</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={signupLoading}
            >
              ??????
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Signup;
