import CustomDiv from '../CustomDiv/CustomDiv';
import ResponsiveImageByWidth from '../ResponsiveImageByWidth/ResponsiveImageByWidth';
const ProductCard = ({ image, ...props }) => {
    return (
        <li className='hero__product' {...props}>
            <CustomDiv className="hero__product-containerBackgroundImages">
                <ResponsiveImageByWidth 
                    imageId='kjhnwfbbbcfgny4vpwvf'
                    alt=''
                    publicFolder = 'starbucks'
                    className='hero__product-BackgroundImage'                    
                    widths = {[80]}
                    sizeRules = '(max-width: 480px) 96px, (max-width: 768px) 160px, 240px'
                    isLazyLoadingEnabled={false}
                    isFetchpriority={true}
                    width='80'
                    height='80'
                />
            </CustomDiv>
            <div className='hero__product-container-img'>
                <ResponsiveImageByWidth
                    className={image.className}
                    imageId={image.imageId}
                    publicFolder={image.publicFolder}
                    alt={image.alt}
                    widths={image.widths}
                    sizeRules={image.sizeRules}
                    isLazyLoadingEnabled={image.isLazyLoadingEnabled}
                    isFetchpriority={image.isFetchpriority}
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
