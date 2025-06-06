import { motion } from "framer-motion";

import CustomSection from "../CustomSection/CustomSection";
import BackgroundImages from "./BackgroundImages";
import Content from "./Content";
import Highlight from './Highlight';
import CustomDiv from "../CustomDiv/CustomDiv";
import ResponsiveImageByWidth from "../ResponsiveImageByWidth/ResponsiveImageByWidth";

import { heroDecorativeImages } from './DataHero';

const MotionBackgroundImages = motion.create(BackgroundImages);
const index = () => {

    return (
        <CustomSection className='hero'>
            <MotionBackgroundImages
                className="hero__background-images"
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {
                    heroDecorativeImages.map((image, index) => (
                        <CustomDiv className="hero__background-container-image" key={index}>
                            <ResponsiveImageByWidth
                                className={image.className}
                                imageId={image.imageId}
                                publicFolder={image.publicFolder}
                                alt={image.alt}
                                widths={image.widths}
                                sizeRules={image.sizeRules}
                                isLazyLoadingEnabled={image.isLazyLoadingEnabled}
                                width={160}
                                height={160}
                            />
                        </CustomDiv>
                    ))
                }
            </MotionBackgroundImages>
            <div className='hero__container'>
                <Content />
                <Highlight />
            </div>
        </CustomSection>
    )
}

export default index
