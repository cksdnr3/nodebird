import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import useInput from '../hooks/useInput';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [pwd, onChangePwd] = useInput('');
    const [nickname, onChangeNickname] = useInput('');

    const [pwdCheck, setPwdCheck] = useState('');
    const [pwdError, setPwdError] = useState(false);
    const onChangePwdCheck = useCallback(
        (e) => {
            setPwdCheck(e.target.value);
            setPwdError(e.target.value !== pwd);
        },
        [pwd]
    );

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.value);
        setTermError(true);
    }, []);

    const onSubmit = useCallback(() => {
        if (pwdCheck !== pwd) {
            return setPwdError(true);
        }

        if (!term) {
            return setTermError(true);
        }

        console.log(id, nickname, pwd);
    }, [pwd, pwdCheck, id]);

    return (
        <>
            <Head>
                <title>Signup | NodeBird</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-nickname">Nickname</label>
                        <br />
                        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />

                        <label htmlFor="user-id">ID </label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                        <label htmlFor="user-pwd">Password </label>
                        <br />
                        <Input name="user-pwd" value={pwd} required onChange={onChangePwd} />
                        <label htmlFor="user-pwdcheck">PasswordCheck</label>
                        <br />
                        <Input name="user-pwdcheck" value={pwdCheck} required onChange={onChangePwdCheck} />
                        {pwdError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                            동의 합니다.
                        </Checkbox>
                        {termError && <ErrorMessage>약관에 동의해주세요.</ErrorMessage>}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit">
                            가입
                        </Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;
