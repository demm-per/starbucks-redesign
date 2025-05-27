import CustomImage from '../CustomImage/CustomImage';
const ProductCard = ({img,text,alt, ...props}) => {
    return (
        <li className='hero__product' {...props}>
            <div className='hero__product-container-img'>
                <CustomImage src={img} alt={text} className='hero__product-img' alt={alt} />
            </div>
            <div className='hero__product-description'>
                <p className='hero__product-text'>{text}</p>
            </div>
        </li>
    )
}

export default ProductCard
