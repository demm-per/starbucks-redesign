import 'react-lazy-load-image-component/src/effects/blur.css';

const CustomImage = ({ isLazyLoadingEnabled = true, ...props }) => {
    return (
        <img
            loading={isLazyLoadingEnabled ? 'lazy' : 'eager'}
            {...props}
        />
    );
};

export default CustomImage;
