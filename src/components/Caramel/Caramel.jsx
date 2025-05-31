import { useContext } from "react";
import { motion } from "motion/react";

import { ViewportContext } from "../../context/ViewportContext";

import BackgroundImage from "../BackgroundImage/BackgroundImage"
import CustomImage from '../CustomImage/CustomImage';
import CustomDiv from '../CustomDiv/CustomDiv';

const MotionBackgroundImage = motion.create(BackgroundImage);
const MotionCustomImage = motion.create(CustomImage);
const MotionCustomDiv = motion.create(CustomDiv);

const Caramel = () => {
    const {viewportWidth} = useContext(ViewportContext);
    return (
        <section className='caramel'>
            <MotionBackgroundImage
                classContainer={'container__background-image'}
                urlImage={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/wgwih5rlftktlu07vnhb'}
                classImage={'caramel__background-image'}
                height='200'
                width='300'
                altImage={'granos de cafe'}
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
                        src="https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/n854qgkjrvsdwyxud9hu"
                        className='caramel__image'
                        height='400'
                        width='270'
                        alt="img-Caramel-Macchiato"
                        variants={{hidden: { opacity: 0, y: -100 },visible: { opacity: 1, y: 0 },}}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                    <MotionBackgroundImage
                        classContainer={'container__background-image'}
                        urlImage={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/pq3kqv0edpgvrcaxoji4'}
                        classImage={'caramel__background-image'}
                        height='250'
                        width='400'
                        altImage={'Salpicaduras de Caramelo'}
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
