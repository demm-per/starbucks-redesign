import {motion} from 'framer-motion';

import Card from "./Card";
import { fadeInStagger } from '../../animations/fadeInStagger ';


const MotionCard = motion.create(Card);

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
                    <MotionCard 
                        key={index}
                        product={product}
                        custom={index}
                        variants={fadeInStagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    />
                ))
            }
        </div>
    )
}

export default Cards
