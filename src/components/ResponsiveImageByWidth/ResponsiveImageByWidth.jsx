import React from 'react';
import { motion } from 'motion/react';

import CustomImage from '../CustomImage/CustomImage';

const MotionCustomImage = motion.create(CustomImage);
const ResponsiveImageByWidth = ({
    imageId,
    alt='',
    publicFolder = '',
    className = '',
    widths = [96, 160, 240],
    sizeRules = '(max-width: 480px) 96px, (max-width: 768px) 160px, 240px',
    isLazyLoadingEnabled=true,
    isFetchpriority=false,
    width,
    height,
    ...props
}) => {
    const baseUrl = 'https://res.cloudinary.com/dj5mpbo6m/image/upload';
    const path = publicFolder ? `${publicFolder}/${imageId}` : imageId;

    const srcSet = widths
        .map((width, index) => {
            const resolution = Math.round(width * 1.666); // aprox. 96 -> 160w
            return `${baseUrl}/w_${width},f_auto,q_auto/v1/${path} ${resolution}w`;
        })
        .join(',\n');
        console.log(srcSet)

    const fallbackWidth = widths[widths.length - 1];
    return (
        <MotionCustomImage
            className={className}
            loading={isLazyLoadingEnabled ? 'lazy' : 'eager'}
            fetchPriority={isFetchpriority ? 'high' : 'auto'}
            srcSet={srcSet}
            sizes={sizeRules}
            src={`${baseUrl}/w_${fallbackWidth},f_auto,q_auto/v1/${path}`}
            alt={alt}
            width={width}
            height={height}
            {...props}
        />
    )
}

export default ResponsiveImageByWidth
