import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { addPostRequestAction } from '../reducers/post';
import useInput from '../hooks/useInput';

const PostForm = () => {
  const { imagePaths, addPostLoading } = useSelector((state) => state.post);
  const { myInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const imageInput = useRef();

  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (myInfo.Posts.length) {
      setText('');
    }
  }, [myInfo.Posts.length]);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequestAction(text));
  }, [text]);

  const clickImgUploadBtn = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="enter post" />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={clickImgUploadBtn}>Upload Image</Button>
        <Button type="primary" style={{ float: 'right' }} loading={addPostLoading} htmlType="submit">
          Twit
        </Button>
      </div>
      <div>
        {imagePaths.map((path) => (
          <div key={path} style={{ display: 'inline-block' }}>
            <img src={path} style={{ width: 200 }} alt={path} />
            <div>
              <Button>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
