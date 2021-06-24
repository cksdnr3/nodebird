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

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        console.log(e.target.checked);
        setTerm(e.target.checked);
        setTermError(!e.target.checked);
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
                        <label>
                            Nickname
                            <br />
                            <Input value={nickname} required onChange={onChangeNickname} />
                        </label>

                        <label>
                            ID
                            <br />
                            <Input value={id} required onChange={onChangeId} />
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
                        {pwdError ? <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage> : termError && <ErrorMessage>약관에 동의해주세요.</ErrorMessage>}
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
