/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Wrapper from './ProductImages.styles';

function ProductImages({ images = [{ url: '' }] }) {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <Wrapper>
            <img src={mainImage.url} alt="furniture" className="main" />
            <div className="gallery">
                {images.map((image, index) => (
                    <img
                        src={image.url}
                        alt="furniture"
                        key={index}
                        className={`${image.url === mainImage.url ? 'active' : ''}`}
                        onClick={() => setMainImage(images[index])}
                    />
                ))}
            </div>
        </Wrapper>
    );
}

export default ProductImages;
