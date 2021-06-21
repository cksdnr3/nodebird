import { Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Button } from 'antd/lib/radio';
import { useCallback } from 'react';

const UserProfile = ({ setIsLoggedin }) => {
    const onLogout = useCallback(() => {
        setIsLoggedin(false);
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
