import CustomImage from '../CustomImage/CustomImage'

const Card = ({product, ...props}) => {
    return (
        <div className='card' {...props}>
            <div className={product.classContainerImage}>
                <CustomImage src={product.urlImageProduct} className='card__image' height="150" width="110" alt="" />
            </div>
            <div className='card__body'>
                <p className='card__title'>{product.title}</p>
                <p className='card__description'>{product.description}</p>
            </div>
        </div>

    )
}

export default Card
