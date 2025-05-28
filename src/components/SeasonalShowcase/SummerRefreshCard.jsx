import { motion } from 'framer-motion';

import CustomImage from "../CustomImage/CustomImage";

const MotionCustomImage = motion.create(CustomImage);

const SummerRefreshCard = ({
    classCard = '',
    classCardContainerBackgroundImages = '',
    urlBackgroundImageProductFruit = '',
    classBackgroundImageProductFruit = '',
    urlBackgroundImageProductColors = '',
    classBackgroundImageProductColors = '',
    urlImageProduct = '',
    classImageProduct = '',
    title = '',
    fruitVariants='',
    colorVariants='',
    productVariants='',
    titleVariants='',
}) => {
    return (
        <div className={classCard}>
            <div className={classCardContainerBackgroundImages}>
                <MotionCustomImage
                    src={urlBackgroundImageProductFruit}
                    className={classBackgroundImageProductFruit}
                    height='210'
                    width='100'
                    alt=""
                    variants={fruitVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                />
                <MotionCustomImage
                    src={urlBackgroundImageProductColors}
                    className={classBackgroundImageProductColors}
                    height='150'
                    width='100'
                    alt=""
                    variants={colorVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                />
            </div>
            <MotionCustomImage
                src={urlImageProduct}
                className={classImageProduct}
                height='130'
                width='100'
                alt=""
                variants={productVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            />
            <div className='summer-refresh__body'>
                <motion.p
                    className='summer-refresh__product-title'
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {title}
                </motion.p>
            </div>
        </div>
    )
}

export default SummerRefreshCard
