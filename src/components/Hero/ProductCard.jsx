import CustomImage from '../CustomImage/CustomImage';
import ResponsiveImageByWidth from '../ResponsiveImageByWidth/ResponsiveImageByWidth';
const ProductCard = ({ image, ...props }) => {
    return (
        <li className='hero__product' {...props}>
            <div className='hero__product-container-img'>
                <ResponsiveImageByWidth
                    className={image.className}
                    imageId={image.imageId}
                    publicFolder={image.publicFolder}
                    alt={image.alt}
                    widths={image.widths}
                    sizeRules={image.sizeRules}
                    isLazyLoadingEnabled={image.isLazyLoadingEnabled}
                    height={image.height}
                    width={image.width}
                />
            </div>
            <div className='hero__product-description'>
                <p className='hero__product-text'>{image.text}</p>
            </div>
        </li>
    )
}

export default ProductCard
