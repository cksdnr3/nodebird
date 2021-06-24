import { Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Button } from 'antd/lib/radio';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹 <br /> 0
                </div>,
                <div key="follwings">
                    팔로잉 <br /> 0
                </div>,
                <div key="followers">
                    팔로워 <br /> 0
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>CU</Avatar>} title="chanuk" />
            <Button onClick={onLogout}>Logout</Button>
        </Card>
    );
};

export default UserProfile;
