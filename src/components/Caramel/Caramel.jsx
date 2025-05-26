import { useContext } from "react";
import { motion } from "motion/react";

import { ViewportContext } from "../../context/ViewportContext";

import BackgroundImage from "../BackgroundImage/BackgroundImage"
import CustomImage from '../CustomImage/CustomImage';
import CustomDiv from '../CustomDiv/CustomDiv';

const MotionBackgroundImage = motion(BackgroundImage);
const MotionCustomImage = motion(CustomImage);
const MotionCustomDiv = motion(CustomDiv);

const Caramel = () => {
    const {viewportWidth} = useContext(ViewportContext);
    return (
        <section className='caramel'>
            <MotionBackgroundImage
                classContainer={'container__background-image'}
                urlImage={'/granos de cafe.png'}
                classImage={'caramel__background-image'}
                altImage={''}
                variants={{
                    hidden: { opacity: 0, },
                    visible: { opacity: 1, },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <div className='caramel__container'>
                <div className='caramel__container-image'>
                    <MotionCustomImage
                        src="/mochiato_redimencionar-removebg-preview-comprimida.png"
                        className='caramel__image'
                        alt="img-Caramel-Macchiato"
                        variants={{hidden: { opacity: 0, y: -100 },visible: { opacity: 1, y: 0 },}}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                    <MotionBackgroundImage
                        classContainer={'container__background-image'}
                        urlImage={'/fondo-caramelo.png'}
                        classImage={'caramel__background-image'}
                        altImage={''}
                        variants={{
                            hidden: { opacity: 0, y: -100, scale:0},
                            visible: { opacity: 1, y: 0, scale:1},
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                </div>
                <MotionCustomDiv
                    className='caramel__info'
                    variants={
                        viewportWidth >=768 ?
                        {
                            hidden: { opacity: 0, y: 150, x: '-50%' },
                            visible: { opacity: 1, y: 0, x: '-50%' },
                        }
                        :{
                            hidden: { opacity: 0, y: 150,  },
                            visible: { opacity: 1, y: 0, },
                        }
                    }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1}}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                >
                    <h2 className='caramel__title'>Caramel Macchiato</h2>
                    <p className='caramel__text'>La combinación de caramelo y café que te hará sonreír.</p>
                </MotionCustomDiv>
            </div>
        </section>
    )
}

export default Caramel
