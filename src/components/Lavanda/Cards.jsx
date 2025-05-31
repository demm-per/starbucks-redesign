import {motion} from 'framer-motion';

import Card from "./Card";
import { fadeInStagger } from '../../animations/fadeInStagger ';


const MotionCard = motion.create(Card);

const Cards = () => {
    const products = [ 
        {
            classContainerImage:'card__container_image matcha',
            urlImageProduct:'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/dxzdpt3wqea09zkkbxk8',
            title:'Iced Lavanda Matcha Latte',
            description:'Suave, elegante y refrescante.'
        },
        {
            classContainerImage:'card__container_image velvet',
            urlImageProduct:'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/q6cak38nj9ynrcuabgml',
            title:'Iced Lavanda Velvet Latte',
            description:'Cremoso, dulce y aromático.'
        },
        {
            classContainerImage:'card__container_image cream-frappucciono',
            urlImageProduct:'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/bsblypksb755kuhre34d',
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
