import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();

    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const onSubmit = useCallback(() => {
        dispatch(addPost);
        setText('');
    }, []);

    const clickImgUploadBtn = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="enter post" />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={clickImgUploadBtn}>Upload Image</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">
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
