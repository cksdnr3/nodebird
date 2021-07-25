import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import { ADD_POST_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../actions/post';

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
    if (!text || !text.trim()) {
      return alert('게시글을 작성해주세요!');
    }

    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

  const clickImgUploadBtn = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onDelete = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} name="image" encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="enter post" />
      <div>
        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={clickImgUploadBtn}>Upload Image</Button>
        <Button type="primary" style={{ float: 'right' }} loading={addPostLoading} htmlType="submit">
          Twit
        </Button>
      </div>
      <div>
        {imagePaths.map((path, i) => (
          <div key={path} style={{ display: 'inline-block' }}>
            <img src={path} style={{ width: 200 }} alt={path} />
            <div>
              <Button onClick={onDelete(i)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
