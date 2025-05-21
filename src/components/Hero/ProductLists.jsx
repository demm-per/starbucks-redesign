import {motion} from 'motion/react';

import ProductCard from "./ProductCard";
import CustomList from '../CustomList/CustomList';

const MotionProductCard = motion(ProductCard);

const ProductLists = () => {
    const products = [
        { img: "/starbucks-hero-product-1.png", text: "Frappuccino de fresa" },
        { img: "/starbucks-hero-product-2.png", text: "Frappuccino mixto" },
      ];
    return (
        <CustomList className='hero__products'>
            {
                products.map((product, index) => (
                    <MotionProductCard
                    variants={{
                        hidden: { opacity: 0, y: 130 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                        img={product.img} text={product.text} key={index}/>
                ))
            }
        </CustomList>
    )
}

export default ProductLists
