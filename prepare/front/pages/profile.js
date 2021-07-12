import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_MY_INFO_REQUEST,
} from '../actions/user';
import wrapper from '../store/ConfigureStore';

const Profile = () => {
  const { myInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(myInfo && myInfo.id)) {
      Router.replace('/');
    }
  }, [myInfo]);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
  }, []);

  if (!myInfo) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={myInfo?.Followings} />
        <FollowList header="팔로워" data={myInfo?.Followers} />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
    // context.store.dispatch({
    //   type: LOAD_MY_INFO_REQUEST,
    // });
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Profile;
