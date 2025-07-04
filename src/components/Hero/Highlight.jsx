import { useContext, useRef } from 'react';
import { motion, scale } from 'framer-motion';

import CustomDiv from '../CustomDiv/CustomDiv';
import { ViewportContext } from '../../context/ViewportContext';
import CustomParagraph from '../CustomParagraph/CustomParagraph';

const MotionCustomDiv = motion.create(CustomDiv);
const MotionCustomParagraph = motion.create(CustomParagraph);

import ResponsiveImageByWidth from '../ResponsiveImageByWidth/ResponsiveImageByWidth';
import { HighlightImage } from './DataHero';

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
                <ResponsiveImageByWidth
                    className={HighlightImage.className}
                    imageId={HighlightImage.imageId}
                    publicFolder={HighlightImage.publicFolder}
                    alt={HighlightImage.alt}
                    widths={HighlightImage.widths}
                    sizeRules={HighlightImage.sizeRules}
                    isLazyLoadingEnabled={HighlightImage.isLazyLoadingEnabled}
                    isFetchpriority={HighlightImage.isFetchpriority}
                    height={250}
                    width={250}
                />
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
