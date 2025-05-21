const ProductCard = ({img,text, ...props}) => {
    return (
        <li className='hero__product' {...props}>
            <div className='hero__product-container-img'>
                <img src={img} alt={text} className='hero__product-img' />
            </div>
            <div className='hero__product-description'>
                <p className='hero__product-text'>{text}</p>
            </div>
        </li>
    )
}

export default ProductCard
