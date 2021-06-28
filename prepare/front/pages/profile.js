import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { myInfo } = useSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={myInfo.Followings && myInfo.Followings} />
        <FollowList header="팔로워" data={myInfo.Followers && myInfo.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
