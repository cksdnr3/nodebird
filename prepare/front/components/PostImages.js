import React, { useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0]} alt={images[0]} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img style={{ width: '50%', float: 'left' }} role="presentation" src={images[0]} alt={images[0]} onClick={onZoom} />
        <img style={{ width: '50%' }} role="presentation" src={images[1]} alt={images[1]} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img style={{ width: '50%', height: '50%' }} role="presentation" src={images[0]} alt={images[0]} onClick={onZoom} />
        <div style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }} onClick={onZoom} role="presentation">
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더 보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;
