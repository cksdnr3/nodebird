import { Card, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const { myInfo, logoutLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          {' '}
          <br />
          {' '}
          {myInfo.Posts && myInfo.Posts.length}
        </div>,
        <div key="followings">
          팔로잉
          {' '}
          <br />
          {' '}
          {myInfo.Followings && myInfo.Followings.length}
        </div>,
        <div key="followers">
          팔로워
          {' '}
          <br />
          {' '}
          {myInfo.Followers && myInfo.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{myInfo.nickname[0]}</Avatar>} title={myInfo.nickname} />
      <Button onClick={onLogout} loading={logoutLoading}>
        Logout
      </Button>
    </Card>
  );
};

export default UserProfile;
