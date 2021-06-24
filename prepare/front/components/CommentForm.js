import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { addComment } from '../reducers/post';

const CommentForm = ({ post }) => {
    const [commentText, onChangeCommentText] = useInput('');
    const dispatch = useDispatch();

    const onSubmit = useCallback(() => {
        console.log(post.id, commentText);
        dispatch(addComment(1));
    }, [commentText]);

    return (
        <Form onFinish={onSubmit}>
            <Form.Item>
                <Input.TextArea style={{ marginBottom: 5 }} placeholder="댓글을 입력해주세요." value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{ float: 'right' }} type="primary" htmlType="submit">
                    comment
                </Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;
