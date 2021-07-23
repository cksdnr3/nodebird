import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import { CloseBtn, Global, Header, ImgWrapper, Indecator, Overlay, SliderWrapper } from './styles';

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SliderWrapper>
        <div>
          <Slider
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            infinite
            afterChange={(slide) => setCurrentSlide(slide)}
          >
            {images.map((image) => (
              <ImgWrapper key={image.src}>
                <img src={image.src} alt={image.src} />
              </ImgWrapper>
            ))}
          </Slider>
          <Indecator>
            <div>
              {currentSlide + 1}
              {' '}
              /
              {images.length}
            </div>
          </Indecator>
        </div>
      </SliderWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
