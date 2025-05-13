import Card from "./Card"

{/*<div className='card'>
            <div className='card__container_image matcha'>
                <img src="/Iced-Lavanda-Matcha-Latte-STARBUCKS-PRIMAVERA.webp" className='card__image' alt="" />
            </div>
            <div className='card__body'>
                <p className='card__title'>Iced Lavanda Matcha Latte</p>
                <p className='card__description'>Suave, elegante y refrescante.</p>
            </div>
        </div>
     <div className='card'>
                <div className='card__container_image velvet'>
                    <img src="/Iced-Lavanda-Velvet-Latte-STARBUCKS-PRIMAVERA.webp" className='card__image' alt="" />
                </div>
                <div className='card__body'>
                    <p className='card__title card__title--color-wh'>Iced Lavanda Velvet Latte</p>
                    <p className='card__description card__description--color-wh'>Cremoso, dulce y aromático.</p>
                </div>
            </div>
            <div className='card'>
                <div className='card__container_image cream-frappucciono'>
                    <img src="/Lavanda-Cream-Frappucciono-STARBUCKS-PRIMAVERA.webp" className='card__image' alt="" />
                </div>
                <div className='card__body'>
                    <p className='card__title'>Lavanda Cream Frappucciono</p>
                    <p className='card__description'>Suave, elegante y refrescante.</p>
                </div>
            </div> */}

const Cards = () => {
    const products = [ 
        {
            classContainerImage:'card__container_image matcha',
            urlImageProduct:'/Iced-Lavanda-Matcha-Latte-STARBUCKS-PRIMAVERA.webp',
            title:'Iced Lavanda Matcha Latte',
            description:'Suave, elegante y refrescante.'
        },
        {
            classContainerImage:'card__container_image velvet',
            urlImageProduct:'/Iced-Lavanda-Velvet-Latte-STARBUCKS-PRIMAVERA.webp',
            title:'Iced Lavanda Velvet Latte',
            description:'Cremoso, dulce y aromático.'
        },
        {
            classContainerImage:'card__container_image cream-frappucciono',
            urlImageProduct:'/Lavanda-Cream-Frappucciono-STARBUCKS-PRIMAVERA.webp',
            title:'Lavanda Cream Frappucciono',
            description:'Suave, elegante y refrescante.'
        }
    ]
    return (
        <div className='cards'>
            {
                products.map((product,index) =>(
                    <Card product={product} key={index}/>
                ))
            }
        </div>
    )
}

export default Cards
