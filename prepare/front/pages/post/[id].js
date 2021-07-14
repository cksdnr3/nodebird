import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import wrapper from '../../store/ConfigureStore';
import { LOAD_MY_INFO_REQUEST } from '../../actions/user';
import { LOAD_POST_REQUEST } from '../../actions/post';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);
  return (
    <>
      <Head>
        <title>
          {singlePost.User.nickname}
          {' '}
          님의 게시글
        </title>
        {/* 게시글 설명 */}
        <meta name="description" content={singlePost.content} />
        {/* 카톡에 공유했을 때 뜨는 카드는 og. 에 표기된 데이터가 나온다. */}
        <meta property="og.title" content={`${singlePost.User.nickname} 님의 게시글`} />
        <meta property="og.description" content={singlePost.content} />
        <meta property="og.image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} />
        <meta property="og.url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      <AppLayout>
        <PostCard post={singlePost} />
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
    type: LOAD_POST_REQUEST,
    // context.params.id를 통해 현재 페이지의 페이지 쿼리스트링에 접근할 수 있다.
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Post;
