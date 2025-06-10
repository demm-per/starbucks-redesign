import { motion } from 'framer-motion';

import Card from "./Card";
import { fadeInStagger } from '../../animations/fadeInStagger ';

import {products} from './DataLavanda';

const MotionCard = motion.create(Card);

const Cards = () => {
    return (
        <div className='cards'>
            {
                products.map((product, index) => (
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
