import { useContext } from 'react';
import {motion} from 'framer-motion'

import BackgroundImage from "../BackgroundImage/BackgroundImage"
import SummerRefreshCard from "./SummerRefreshCard"

import { ViewportContext } from '../../context/ViewportContext';


const SeasonalShowcase = () => {
    const { viewportWidth } = useContext(ViewportContext);

    // OPTION
    // const products = [
    //     {
    //         classCard:'',
    //         classCardContainerBackgroundImages:'',
    //         urlBackgroundImageProductFruit:'',
    //         classBackgroundImageProductFruit:'',
    //         urlBackgroundImageProductColors:'',
    //         classBackgroundImageProductColors:'',
    //         urlImageProduct:'',
    //         classImageProduct:'',
    //         title
    //     }
    // ]

    // BERRYS
    const berryVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: 100, scale: 1.1 },
        visible: { opacity: 1, y: -120, scale: 1.1, transition: { duration: 1, } },
    } : {
        hidden: { opacity: 0, y: 100, scale: 0.5 },
        visible: { opacity: 1, y: -150, scale: 0.8, transition: { duration: 1, } },
    };

    const stainVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: -350, x: 0, scale: 0.8 },
        visible: { opacity: 1, y: -250, x: 0, scale: 1, transition: { duration: 1.2, } },
    } : {
        hidden: { opacity: 0, y: -350, x: 0, scale: 0.8 },
        visible: { opacity: 1, y: -350, x: -90, scale: 1.2, transition: { duration: 1.2, } },
    };

    const productVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 1, rotate: 15, scale: 0, x: 130, y: 200, },
        visible: { opacity: 1, rotate: 0, scale: 1, x: 0, y: -15, transition: { duration: 1.5 } },
    } : {
        hidden: { opacity: 0, rotate: 15, scale: 0, x: 130, y: 200, },
        visible: { opacity: 1, rotate: 0, scale: 1, x: 0, y: 0, transition: { duration: 1.5 } },
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, } },
    };

    // SKIES
    const skiesVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: -100, scale: 0.5, rotate: -140 },
        visible: { opacity: 1, y: -100, scale: 1, rotate: 20, transition: { duration: 1 } },
    } :
        {
            hidden: { opacity: 0, y: -100, scale: 0.5, rotate: -140 },
            visible: { opacity: 1, y: -10, scale: 1, rotate: 20, transition: { duration: 1 } },
        };

    const skiesStainVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: -350, scale: 0.0, },
        visible: { opacity: 1, y: -160, x: 50, scale: 1.8, transition: { duration: 1.2 } },
    } :
        {
            hidden: { opacity: 0, y: -350, scale: 0.0, },
            visible: { opacity: 1, y: -150, x: -20, scale: 1, transition: { duration: 1.2 } },
        };

    const skiesProductVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 1, y: 0, rotate: 0 },
        visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1.5 } },
    } : {
        hidden: { opacity: 1, y: 200, rotate: 0 },
        visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1.5 } },
    };

    const skiesTitleVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, x: -50, y: -90 },
        visible: { opacity: 1, x: 0, y: -90, transition: { duration: 0.8, } },
    } : {
        hidden: { opacity: 0, x: -50, y: 0 },
        visible: { opacity: 1, x: 0, y: 10, transition: { duration: 0.8, } },
    };

    // LEMOTADE
    const lemonadeVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: -100, scale: 0.5, rotate: -140 },
        visible: { opacity: 1, y: -100, scale: 1, rotate: 20, transition: { duration: 1 } },
    } :
        {
            hidden: { opacity: 0, y: -100, scale: 0.5, rotate: -140 },
            visible: { opacity: 1, y: -10, scale: 1, rotate: 20, transition: { duration: 1, } },
        };

    const lemonadeStainVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: -350, scale: 0.0, },
        visible: { opacity: 1, y: -160, x: 50, scale: 1.8, transition: { duration: 1.2 } },
    } :
        {
            hidden: { opacity: 0, y: -350, scale: 0.0, },
            visible: { opacity: 1, y: -150, x: -20, scale: 1, transition: { duration: 1.2, } },
        };

    const lemonadeProductVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, x: 120, y: 150, scale: 0.0, rotate: 15 },
        visible: { opacity: 1, x: 20, y: 0, scale: 1, rotate: 0, transition: { duration: 1.5 } },

    } : {
        hidden: { opacity: 0, x: -120, y: 200, scale: 0.0, rotate: -15, transition: { duration: 1.5 } },
        visible: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, transition: { duration: 1.5 } },
    };

    const LemonadeTitleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, } },
    };

    return (
        <section className='summer-refresh'>
            <BackgroundImage classContainer={'summer-refresh__container-images'} urlImage={"https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/ncr3bv9e5nu9oyn7ydt6"} classImage={'summer-refresh__background-image'} height={500} width={1200} altImage={''} />
            <div className='summer-refresh__container'>
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className='summer-refresh__title'>
                    Summer Refresh
                </motion.h2>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className='summer-refresh__caption'>
                    Disfruta el verano en cada sorbo.
                </motion.p>
                <div className='summer-refresh__cards'>
                    <SummerRefreshCard
                        classCard={'summer-refresh__card summer-refresh__berry'}
                        classCardContainerBackgroundImages={'summer-refresh__contain-mask summer-refresh__contain-mask-berry'}
                        urlBackgroundImageProductFruit={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/jrqgjw7hrx2jfhiwizth'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-berry'}
                        urlBackgroundImageProductColors={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/nhlvocv2ai5pyteyzzhf'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-berry-stains'}
                        urlImageProduct={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/kkwenf5cymcvajoecapi'}
                        classImageProduct={'summer-refresh__image-product'}
                        title={'Berry'}
                        fruitVariants={berryVariants}
                        colorVariants={stainVariants}
                        productVariants={productVariants}
                        titleVariants={titleVariants}
                    />
                    <SummerRefreshCard
                        classCard={'summer-refresh__card summer__refresh-skies'}
                        classCardContainerBackgroundImages={'summer-refresh__contain-mask summer-refresh__contain-mask-skies'}
                        urlBackgroundImageProductFruit={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/eq84rozecfz3bscxrshh'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-skies'}
                        urlBackgroundImageProductColors={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/dojzws1yt6hzcgopmedj'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-skies-stains'}
                        urlImageProduct={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/ylmi4hde29ibwvm1t08k'}
                        classImageProduct={'summer-refresh__image-product'}
                        title={'Skies'}
                        fruitVariants={skiesVariants}
                        colorVariants={skiesStainVariants}
                        productVariants={skiesProductVariants}
                        titleVariants={skiesTitleVariants}
                    />
                    <SummerRefreshCard
                        classCard={'summer-refresh__card summer-refresh__lemonade'}
                        classCardContainerBackgroundImages={'summer-refresh__contain-mask summer-refresh__contain-mask-lemonade'}
                        urlBackgroundImageProductFruit={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/ltukvo8jssyvd9jedtqf'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-lemonade'}
                        urlBackgroundImageProductColors={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/qolqjiqdahp7068jw6sx'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-stains'}
                        urlImageProduct={'https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/i8lngz7z9kptstwejcof'}
                        classImageProduct={'summer-refresh__image-product'}
                        title={'Lemonade'}
                        fruitVariants={lemonadeVariants}
                        colorVariants={lemonadeStainVariants}
                        productVariants={lemonadeProductVariants}
                        titleVariants={LemonadeTitleVariants}
                    />
                </div>
            </div>
        </section>
    )
}

export default SeasonalShowcase
