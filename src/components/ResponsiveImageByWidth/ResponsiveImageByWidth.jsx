import React from 'react'
import CustomImage from '../CustomImage/CustomImage';

const ResponsiveImageByWidth = ({
    imageId,
    alt='',
    publicFolder = '',
    className = '',
    widths = [96, 160, 240],
    sizeRules = '(max-width: 480px) 80px, (max-width: 768px) 480px',
    isLazyLoadingEnabled=true,
    width,
    height,
}) => {
    const baseUrl = 'https://res.cloudinary.com/dj5mpbo6m/image/upload';
    const path = publicFolder ? `${publicFolder}/${imageId}` : imageId;

    const srcSet = widths
        .map((width, index) => {
            const resolution = Math.round(width * 1.666); // aprox. 96 -> 160w
            return `${baseUrl}/w_${width},f_auto,q_auto/v1/${path} ${resolution}w`;
        })
        .join(',\n');

    const fallbackWidth = widths[widths.length - 1];
    return (
        <CustomImage
            className={className}
            loading={isLazyLoadingEnabled ? 'lazy' : 'eager'}
            srcSet={srcSet}
            sizes={sizeRules}
            src={`${baseUrl}/w_${fallbackWidth},f_auto,q_auto/v1/${path}`}
            alt={alt}
            width={width}
            height={height}

        />
    )
}

export default ResponsiveImageByWidth
