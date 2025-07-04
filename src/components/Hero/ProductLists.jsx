import { motion } from 'motion/react';

import ProductCard from "./ProductCard";
import CustomList from '../CustomList/CustomList';

const MotionProductCard = motion.create(ProductCard);

import { products } from './DataHero';

const ProductLists = () => {
    return (
        <CustomList className='hero__products'>
            {
                products.map((product, index) => (
                    <MotionProductCard
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        image={product}
                        key={index}
                    />
                ))
            }
        </CustomList>
    )
}

export default ProductLists
