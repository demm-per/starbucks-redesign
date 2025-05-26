import { forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CustomImage = ({ ...props }) => {
    return (
        <img loading="lazy"
            {...props}
        />
    );
};

export default CustomImage;
