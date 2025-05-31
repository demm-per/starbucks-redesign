import {motion} from 'motion/react';

import ProductCard from "./ProductCard";
import CustomList from '../CustomList/CustomList';

const MotionProductCard = motion.create(ProductCard);

const ProductLists = () => {
    const products = [
        { img: "https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/xj1hflnrvreainiq5qdn", text: "Frappuccino de fresa", height:"50", width:"40", alt:"" },
        { img: "https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/bfzfx8i1qxc6hu3w0non", text: "Frappuccino de cereza", height:"50", width:"40", alt:"" },
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
