import { motion, scale } from "motion/react";

import CustomImage from "../CustomImage/CustomImage";
import ContentBox from "../ContentBox/ContentBox";
import CustomDiv from "../CustomDiv/CustomDiv";

const MotionContentBox = motion(ContentBox);
const MotionCustomImage = motion(CustomImage);

const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner__mask-container'>
                <CustomDiv className="banner__mask">
                    <MotionCustomImage
                        src="/fondo1.jpg"
                        className='banner__background-image'
                        alt=""
                    />

                    <MotionCustomImage
                        src="/hojas-fondo-removebg.png"
                        className='banner__background-image ambiente'
                        alt=""
                        initial={{ opacity: 0, scale: 1.5 }}
                        whileInView={{ opacity: .7, scale: 1 }}
                        transition={{ duration: 1.6, }}
                        viewport={{ once: true, amount: .2 }}
                    />

                </CustomDiv>
                <MotionCustomImage
                    src="/termo-1.webp"
                    className='banner__background-image termo_1'
                    alt=""
                    initial={{ opacity: 0, y: 100, scale: .8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.6, }}
                    viewport={{ once: true, amount: .5 }}
                />
                <MotionCustomImage
                    src="/termo-2.webp"
                    className='banner__background-image termo_2'
                    alt=""
                    initial={{ opacity: 0, y: 100, scale: .5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.6, }}
                    viewport={{ once: true, amount: .5 }}
                />

            </div>
            <div className='banner__container'>
                <MotionContentBox
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6 }}
                    viewport={{ once: true, amount: .5 }}
                >
                    <ContentBox.Title title={'Reutiliza y ahorra con cada sorbo'} />
                    <ContentBox.Text text={'Trae tu vaso o termo y disfruta de $8 de descuento en cada bebida, únete al cambio.'} />
                    <ContentBox.Link enlace={'#'} text={'Conoce más'} />
                </MotionContentBox>
            </div>
        </section>
    )
}

export default Banner
