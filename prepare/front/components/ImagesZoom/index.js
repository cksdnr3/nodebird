import PropTypes from 'prop-types';

const ImagesZoom = ({ images, onClose }) => {
    return (
        <div>
            <header>
                <h1>상세 이미지</h1>
                <button onClick={onClose}>X</button>
            </header>
            <div>
                <div></div>
            </div>
        </div>
    );
};

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
