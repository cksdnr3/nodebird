import { Card, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import Link from 'next/link';
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

          <Link href={`/user/${myInfo.id}`}>
            <a>
              짹짹
              {' '}
              <br />
              {' '}
              {myInfo?.Posts.length}
            </a>
          </Link>

        </div>,
        <div key="followings">

          <Link href="/profile">
            <a>
              팔로잉
              {' '}
              <br />
              {' '}
              {myInfo?.Followings.length}
            </a>
          </Link>
        </div>,
        <div key="followers">
          <Link href="/profile">
            <a>
              팔로워
              {' '}
              <br />
              {' '}
              {myInfo?.Followers.length}
            </a>
          </Link>

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
