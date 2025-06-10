import { motion } from 'framer-motion';

import CustomImage from "../CustomImage/CustomImage";
import ResponsiveImageByWidth from '../ResponsiveImageByWidth/ResponsiveImageByWidth';

const SummerRefreshCard = ({ product, ...props }) => {
    return (
        <div className={product.classCard}>
            <div className={product.classCardContainerBackgroundImages}>
                <ResponsiveImageByWidth
                    imageId={product.urlBackgroundImageProductFruit}
                    className={product.classBackgroundImageProductFruit}
                    height='210'
                    width='100'
                    alt={product.alt}
                    widths={[130]}
                    publicFolder='starbucks'
                    sizeRules="(max-width: 480px) 80px, (max-width: 768px) 200px,"
                    variants={product.fruitVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                />

                <ResponsiveImageByWidth
                    imageId={product.urlBackgroundImageProductColors}
                    className={product.classBackgroundImageProductColors}
                    height='210'
                    width='100'
                    alt={product.alt}
                    widths={[80,160,300]}
                    publicFolder='starbucks'
                    sizeRules="(max-width: 480px) 80px, (max-width: 768px) 160px,240px"
                    variants={product.colorVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                />
            </div>
            <ResponsiveImageByWidth
                imageId={product.urlImageProduct}
                className={product.classImageProduct}
                height='210'
                width='100'
                alt={product.alt}
                widths={[80, 160, 350]}
                publicFolder='starbucks'
                sizeRules='(max-width: 480px) 80px, (max-width: 768px) 160px, 200px'
                variants={product.productVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            />

            <div className='summer-refresh__body'>
                <motion.p
                    className='summer-refresh__product-title'
                    variants={product.titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {product.title}
                </motion.p>
            </div>
        </div>
    )
}

export default SummerRefreshCard
