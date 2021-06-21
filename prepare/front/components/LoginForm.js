import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedin }) => {
    const [id, onChangeId] = useInput('');
    const [passwd, onChangePasswd] = useInput('');

    const onSubmitLoginForm = useCallback(() => {
        console.log(id, passwd);
        setIsLoggedin(true);
    }, [id, passwd]);

    return (
        <Form onFinish={onSubmitLoginForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-passwd">비밀번호</label>
                <br />
                <Input name="user-passwd" value={passwd} onChange={onChangePasswd} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>
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
