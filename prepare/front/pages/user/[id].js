import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { Avatar, Card } from 'antd';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LOAD_USER_POSTS_REQUEST } from '../../actions/post';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../actions/user';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import wrapper from '../../store/ConfigureStore';

const User = () => {
  const { myInfo, userInfo } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    function onScroll() {
      if (window.scrollY
        + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: id,
            lastId,
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  return (
    <>
      <AppLayout>
        {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            {' '}
            님의 게시글
          </title>
          <meta name="description" content={userInfo.nickname} />
          <meta property="og.title" content={`${userInfo.nickname} 님의 게시글`} />
          <meta property="og.description" content={userInfo.nickname} />
          <meta property="og.image" content="https://nodebird.com/favicon.ico" />
          <meta property="og.url" content={`https://nodebird.com/user/${id}`} />
        </Head>
        )}
        {userInfo && (userInfo.id !== myInfo?.id)
          ? (
            <Card
              style={{ marginBottom: 20 }}
              actions={[
                <div key="twit">
                  짹짹
                  <br />
                  {userInfo.Posts}
                </div>,
                <div key="following">
                  팔로잉
                  <br />
                  {userInfo.Followings}
                </div>,
                <div key="follower">
                  팔로워
                  <br />
                  {userInfo.Followers}
                </div>,
              ]}
            >
              <Card.Meta
                avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                title={userInfo.nickname}
              />
            </Card>
          )
          : null}
        {mainPosts.map((c) => (
          <PostCard key={c.id} post={c} />
        ))}
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: context.params.id,
  });

  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default User;
