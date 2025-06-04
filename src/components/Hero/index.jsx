import { motion } from "framer-motion";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import CustomSection from "../CustomSection/CustomSection";
import BackgroundImages from "./BackgroundImages";
import Content from "./Content";
import Highlight from './Highlight';

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
                <BackgroundImage classContainer={'hero__background-container-image'} isLazyLoadingEnabled={false} urlImage={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1/starbucks/pffemn52c1rx7fqza4jz'} classImage={'hero__background-image'} height={100} width={100} altImage={'dona de vainilla'} />
                <BackgroundImage classContainer={'hero__background-container-image'} isLazyLoadingEnabled={false} urlImage={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1/starbucks/i6qai4hnyjj76vdifffd'} classImage={'hero__background-image'} height={100} width={100} altImage={'frappuccino'} />
            </MotionBackgroundImages>
            <div className='hero__container'>
                <Content />
                <Highlight />
            </div>
        </CustomSection>
    )
}

export default index
