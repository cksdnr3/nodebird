import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../actions/user';

const FollowBtn = ({ post }) => {
  const { myInfo, followLoading, unfollowLoading } = useSelector((state) => state.user);
  const following = myInfo?.Followings.find((f) => f.id === post.User.id);

  const dispatch = useDispatch();
  const followHandlr = useCallback(() => {
    if (following) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [following]);
  return (
    <>
      <Button loading={followLoading || unfollowLoading} onClick={followHandlr}>
        {following ? 'Unfollow' : 'Follow'}
      </Button>
    </>
  );
};

FollowBtn.propTypes = {
  post: PropTypes.shape().isRequired,
};

export default FollowBtn;
