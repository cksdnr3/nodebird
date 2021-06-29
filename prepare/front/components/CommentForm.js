import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { addCommentRequestAction } from '../reducers/post';

const CommentForm = ({ post }) => {
  const [commentText, onChangeCommentText, setCommentText] = useInput('');
  const { myInfo } = useSelector((state) => state.user);
  const { addCommentLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post.Comments.length) {
      setCommentText('');
    }
  }, [post.Comments.length]);

  const onSubmit = useCallback(() => {
    dispatch(
      addCommentRequestAction({
        content: commentText,
        postId: post.id,
        myInfo,
      }),
    );
  }, [commentText]);

  return (
    <Form onFinish={onSubmit}>
      <Form.Item>
        <Input.TextArea style={{ marginBottom: 5 }} placeholder="댓글을 입력해주세요." value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button style={{ float: 'right' }} loading={addCommentLoading} type="primary" htmlType="submit">
          comment
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    User: PropTypes.shape({
      nickname: PropTypes.string,
    }),
    content: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CommentForm;
