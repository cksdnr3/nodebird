import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import AppLayout from '../components/AppLayout';
import { signupRequestAction } from '../reducers/user';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
  const [email, onChangeEmail] = useInput('');
  const [pwd, onChangePwd] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const { signupLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [pwdCheck, setPwdCheck] = useState('');
  const [pwdError, setPwdError] = useState(false);
  const onChangePwdCheck = useCallback(
    (e) => {
      setPwdCheck(e.target.value);
      setPwdError(e.target.value !== pwd);
    },
    [pwd],
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  console.log(term);
  const onSubmit = useCallback(() => {
    if (pwdCheck !== pwd) {
      setPwdError(true);
      return;
    }

    if (!term) {
      setTermError(true);
      return;
    }

    console.log(email, nickname, pwd);

    dispatch(signupRequestAction({ email, pwd, nickname }));
  }, [pwd, pwdCheck, email]);

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
              <Input value={pwd} required onChange={onChangePwd} />
            </label>
            <label>
              PasswordCheck
              <br />
              <Input value={pwdCheck} required onChange={onChangePwdCheck} />
            </label>
          </div>
          <div>
            <Checkbox onChange={onChangeTerm}>동의 합니다.</Checkbox>
            {pwdError
              ? <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
              : termError && <ErrorMessage>약관에 동의해주세요.</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={signupLoading}
            >
              가입
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
