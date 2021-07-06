import React, { useCallback, useEffect, useState } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import { HeartOutlined, MessageOutlined, RetweetOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import FollowBtn from './FollowBtn';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { deletePostRequestAction } from '../reducers/post';
import { LIKE_REQUEST, UNLIKE_REQUEST } from '../actions/post';

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.myInfo?.id);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const { deletePostLoading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const liked = post.Likers.find((l) => l.id === id);
  const onLike = useCallback(() => {
    dispatch({
      type: LIKE_REQUEST,
      data: post.id,
    });
  }, []);

  const onUnlike = useCallback(() => {
    dispatch({
      type: UNLIKE_REQUEST,
      data: post.id,
    });
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const clickDeleteBtn = useCallback(() => {
    dispatch(deletePostRequestAction(post.id));
  }, [post.id]);

  return (
    <div style={{ marginBottom: 10 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onUnlike}
            />
          ) : (
            <HeartOutlined
              key="heart"
              onClick={onLike}
            />
          ),
          <MessageOutlined
            key="comment"
            onClick={onToggleComment}
          />,
          <Popover
            key="more"
            content={(
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button loading={deletePostLoading} onClick={clickDeleteBtn} type="danger">삭제</Button>
                  </>
                ) : (
                  <>
                    <Button>신고</Button>
                  </>
                )}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={id && id !== post.User.id && <FollowBtn post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            renderItem={(item) => (post.Comments.length
              ? (
                <li>
                  <Comment
                    content={item.content}
                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                    author={item.User.nickname}
                  />
                </li>
              )
              : <></>)}
            header={`${post.Comments.length}개의 댓글`}
            dataSource={post.Comments}
            itemLayout="horizontal"
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.shape({
      nickname: PropTypes.string,
      id: PropTypes.number,
    }),
    content: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
