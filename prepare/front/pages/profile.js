import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import useSWR from 'swr';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import {
  LOAD_MY_INFO_REQUEST,
} from '../actions/user';
import wrapper from '../store/ConfigureStore';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((res) => res.data);

const Profile = () => {
  const { myInfo } = useSelector((state) => state.user);

  const [followerLimit, setFollowerLimit] = useState(3);
  const [followingLimit, setFollowingLimit] = useState(3);

  const { data: followersData, error: followerError } = useSWR(`http://localhost:3065/user/followers?limit=${followerLimit}`, fetcher);
  const { data: followingsData, error: followingError } = useSWR(`http://localhost:3065/user/followings?limit=${followingLimit}`, fetcher);

  useEffect(() => {
    if (!(myInfo && myInfo.id)) {
      Router.replace('/');
    }
  }, [myInfo]);

  const showFollowerMore = useCallback(() => {
    setFollowerLimit((prev) => prev + 3);
  }, [followerLimit]);

  const showFollowingMore = useCallback(() => {
    setFollowingLimit((prev) => prev + 3);
  }, [followingLimit]);

  if (!myInfo) {
    return <>내 정보 로딩 중...</>;
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>팔로잉, 팔로워 로딩 실패</div>;
  }

  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={followingsData} showMore={showFollowingMore} loading={!followingsData && !followingError} />
        <FollowList header="팔로워" data={followersData} showMore={showFollowerMore} loading={!followersData && !followerError} />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('getServerSideProps start');
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  console.log('getServerSideProps end');
  await context.store.sagaTask.toPromise();
});
export default Profile;
