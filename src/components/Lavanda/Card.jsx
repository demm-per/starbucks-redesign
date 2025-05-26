const Card = ({product, ...props}) => {
    return (
        <div className='card' {...props}>
            <div className={product.classContainerImage}>
                <img src={product.urlImageProduct} className='card__image' alt="" />
            </div>
            <div className='card__body'>
                <p className='card__title'>{product.title}</p>
                <p className='card__description'>{product.description}</p>
            </div>
        </div>

    )
}

export default Card
