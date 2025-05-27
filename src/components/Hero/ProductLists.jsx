import {motion} from 'motion/react';

import ProductCard from "./ProductCard";
import CustomList from '../CustomList/CustomList';

const MotionProductCard = motion.create(ProductCard);

const ProductLists = () => {
    const products = [
        { img: "/starbucks-hero-product-1.webp", text: "Frappuccino de fresa", alt:"Frappuccino de fresa" },
        { img: "/starbucks-hero-product-2.webp", text: "Frappuccino de cereza", alt:"Frappuccino de cereza" },
      ];
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
                        img={product.img} text={product.text} alt={product.alt} key={index}/>
                ))
            }
        </CustomList>
    )
}

export default ProductLists
