import { motion } from "motion/react";

import BackgroundImage from "../BackgroundImage/BackgroundImage";
import InfoCard from "../InfoCard/InfoCard";

const MotionInfoCard = motion.create(InfoCard);

const PromoHighlights = () => {
    const cards = [
        {
            enlace:'#',
            title:'Noticias Starbucks',
            textButton:'Ver más'
        },
        {
            enlace:'#',
            title:'Conoce nuestras promociones',
            textButton:'Ver más'
        }
    ]
    const backgroundImageCard = [
        {
            classContainerImage:'info-section__container-image',
            urlBackgroundImage:'/noticias starbucks.webp',
            classBackgroundImage:'info-section__image',
            altText:'vasos starbucks',
        },
        {
            classContainerImage:'info-section__container-image',
            urlBackgroundImage:'/promociones.webp',
            classBackgroundImage:'info-section__image',
            altText:'carta de bebidas',
        }
    ]
    return (
        <section className='block'>
            <div className="block__container-mask">
                {
                    backgroundImageCard.map((dataImage,index)=>(
                        <BackgroundImage
                            classContainer={dataImage.classContainerImage}
                            urlImage={dataImage.urlBackgroundImage}
                            classImage={dataImage.classBackgroundImage}
                            altImage={dataImage.altText}
                            key={index}
                        />
                    ))
                }
            </div>
            <div className='block__container'>
                {
                    cards.map((card,index)=>(
                        <MotionInfoCard
                            data={card}
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 140 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default PromoHighlights
