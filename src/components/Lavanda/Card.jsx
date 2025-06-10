import CustomImage from '../CustomImage/CustomImage'
import ResponsiveImageByWidth from '../ResponsiveImageByWidth/ResponsiveImageByWidth'

const Card = ({product, ...props}) => {
    return (
        <div className='card' {...props}>
            <div className={product.classContainerImage}>
                <ResponsiveImageByWidth
                    imageId={product.idImageProduct}
                    className={product.classImage}
                    height={product.height}
                    width={product.width}
                    alt={product.alt}
                    widths={product.widths}
                    publicFolder={product.publicFolder}
                    sizeRules={product.sizeRules}
                />
            </div>
            <div className='card__body'>
                <p className='card__title'>{product.title}</p>
                <p className='card__description'>{product.description}</p>
            </div>
        </div>

    )
}

export default Card
