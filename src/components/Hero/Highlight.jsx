import { useContext, useRef } from 'react';
import { motion, scale } from 'framer-motion';

import CustomDiv from '../CustomDiv/CustomDiv';
import CustomImage from '../CustomImage/CustomImage';
import { ViewportContext } from '../../context/ViewportContext';
import CustomParagraph from '../CustomParagraph/CustomParagraph';

const MotionCustomDiv = motion.create(CustomDiv);
const MotionCustomParagraph = motion.create(CustomParagraph);

const Highlight = () => {

    const { viewportWidth } = useContext(ViewportContext);
    // console.log(viewportWidth >= 768)
    return (
        <div className="hero__highlight">
            <MotionCustomDiv
                className="hero__highlight-img-container"

                variants={{
                    hidden: { opacity: 0, scale: .5 },
                    visible: { opacity: 1, scale: 1, y: viewportWidth >= 768 ? '-50%' : '0%' },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
            >
                <picture>
                    <source
                        media="(max-width: 767px)"
                        srcSet="/starbucks-hero-250.webp"
                        width="400"
                        height="250"
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet="/starbucks-hero.webp"
                        width="800"
                        height="500"
                    />
                    <CustomImage
                        src="/starbucks-hero.webp"
                        className="hero__highlight-img"
                        alt="Highlight product"
                        isLazyLoadingEnabled={false}
                    />
                </picture>
            </MotionCustomDiv>
            <MotionCustomDiv
                className="hero__highlight-info"
                initial={{ opacity: 0, x: 300, rotate: viewportWidth >= 768 ? 0 : 180 }}
                whileInView={{ opacity: 1, x: 0, rotate: viewportWidth >= 768 ? 180 : 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <MotionCustomParagraph
                    className="hero__highlight-title hero__highlight-title--border-white"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    FRAPPUCCINO
                </MotionCustomParagraph>
                <MotionCustomParagraph
                    className="hero__highlight-title hero__highlight-title--color-white"
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    FRAPPUCCINO
                </MotionCustomParagraph>
            </MotionCustomDiv>
        </div>
    );
};

export default Highlight;
