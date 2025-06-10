import { useContext } from 'react';
import { motion, scale } from 'framer-motion';

import SummerRefreshCard from "./SummerRefreshCard";

import { ViewportContext } from '../../context/ViewportContext';
import ResponsiveImageByWidth from '../ResponsiveImageByWidth/ResponsiveImageByWidth';
import CustomDiv from '../CustomDiv/CustomDiv';

import { backgroundImageSummer } from './DataSummerRefresh';


const SeasonalShowcase = () => {
    const { viewportWidth } = useContext(ViewportContext);

    // BERRYS
    const berryVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: 100, scale: 1.1 },
        visible: { opacity: 1, y: -120, scale: 1.1, transition: { duration: 1, } },
    } : {
        hidden: { opacity: 0, y: 100, scale: 0.5 },
        visible: { opacity: 1, y: -80, scale: 1.3, x:100, transition: { duration: 1, } },
    };

    const stainVariants = viewportWidth >= 768 ? {
        hidden: { opacity: 0, y: -350, x: 0, scale: 0.8 },
        visible: { opacity: 1, y: -270, x: 0, scale: 1.1, transition: { duration: 1.2, } },
    } : {
        hidden: { opacity: 0, y: -350, x: 0, scale: 0.8 },
        visible: { opacity: 1, y: -200, x: -90, scale: 1.2, transition: { duration: 1.2, } },
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
        visible: { opacity: 1, y: -200, x: 60, scale: 2, transition: { duration: 1.2 } },
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

    const products = [
        {
            classCard: "summer-refresh__card summer-refresh__berry",
            classCardContainerBackgroundImages:
                "summer-refresh__contain-mask summer-refresh__contain-mask-berry",
            urlBackgroundImageProductFruit: "jrqgjw7hrx2jfhiwizth",
            classBackgroundImageProductFruit:
                "summer-refresh__mask summer-refresh__mask-berry",
            urlBackgroundImageProductColors: "nhlvocv2ai5pyteyzzhf",
            classBackgroundImageProductColors:
                "summer-refresh__mask summer-refresh__mask-berry-stains",
            urlImageProduct: "kkwenf5cymcvajoecapi",
            classImageProduct: "summer-refresh__image-product",
            title: "Berry",
            fruitVariants: berryVariants,
            colorVariants: stainVariants,
            productVariants: productVariants,
            titleVariants: titleVariants,
        },
        {
            classCard: "summer-refresh__card summer__refresh-skies",
            classCardContainerBackgroundImages: "summer-refresh__contain-mask summer-refresh__contain-mask-skies",
            urlBackgroundImageProductFruit: "eq84rozecfz3bscxrshh",
            classBackgroundImageProductFruit: "summer-refresh__mask summer-refresh__mask-skies",
            urlBackgroundImageProductColors: "dojzws1yt6hzcgopmedj",
            classBackgroundImageProductColors: "summer-refresh__mask summer-refresh__mask-skies-stains",
            urlImageProduct: "ylmi4hde29ibwvm1t08k",
            classImageProduct: "summer-refresh__image-product",
            title: "Skies",
            fruitVariants: skiesVariants,
            colorVariants: skiesStainVariants,
            productVariants: skiesProductVariants,
            titleVariants: skiesTitleVariants,
        },
        {
            classCard: 'summer-refresh__card summer-refresh__lemonade',
            classCardContainerBackgroundImages: 'summer-refresh__contain-mask summer-refresh__contain-mask-lemonade',
            urlBackgroundImageProductFruit: 'ltukvo8jssyvd9jedtqf',
            classBackgroundImageProductFruit: 'summer-refresh__mask summer-refresh__mask-lemonade',
            urlBackgroundImageProductColors: 'qolqjiqdahp7068jw6sx',
            classBackgroundImageProductColors: 'summer-refresh__mask summer-refresh__mask-stains',
            urlImageProduct: 'i8lngz7z9kptstwejcof',
            classImageProduct: 'summer-refresh__image-product',
            title: 'Lemonade',
            fruitVariants: lemonadeVariants,
            colorVariants: lemonadeStainVariants,
            productVariants: lemonadeProductVariants,
            titleVariants: LemonadeTitleVariants,
        },
    ];


    return (
        <section className='summer-refresh'>
            <CustomDiv className="summer-refresh__container-images">
                <ResponsiveImageByWidth
                    className={backgroundImageSummer.className}
                    imageId={backgroundImageSummer.imageId}
                    publicFolder={backgroundImageSummer.publicFolder}
                    alt={backgroundImageSummer.alt}
                    widths={backgroundImageSummer.widths}
                    sizeRules={backgroundImageSummer.sizeRules}
                    isLazyLoadingEnabled={backgroundImageSummer.isLazyLoadingEnabled}
                    width={160}
                    height={160}
                />
            </CustomDiv>

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

                    {
                        products.map((product, index) => (
                            <SummerRefreshCard product={product} key={index} />
                        ))
                    }

                    {/* <SummerRefreshCard
                        classCard={'summer-refresh__card summer-refresh__berry'}
                        classCardContainerBackgroundImages={'summer-refresh__contain-mask summer-refresh__contain-mask-berry'}
                        urlBackgroundImageProductFruit={'/background-barry.webp'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-berry'}
                        urlBackgroundImageProductColors={'/background-barry-stain.webp'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-berry-stains'}
                        urlImageProduct={'/Summer-Berry.webp'}
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
                        urlBackgroundImageProductFruit={'/background-skies.webp'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-skies'}
                        urlBackgroundImageProductColors={'/summer-background-skies.webp'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-skies-stains'}
                        urlImageProduct={'/Summer-Skies-Drink.webp'}
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
                        urlBackgroundImageProductFruit={'/Summer-Berry-with-Lemonade-background.webp'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-lemonade'}
                        urlBackgroundImageProductColors={'/mancha_pintura.webp'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-stains'}
                        urlImageProduct={'/summer-berry-with-lemonade.webp'}
                        classImageProduct={'summer-refresh__image-product'}
                        title={'Lemonade'}
                        fruitVariants={lemonadeVariants}
                        colorVariants={lemonadeStainVariants}
                        productVariants={lemonadeProductVariants}
                        titleVariants={LemonadeTitleVariants}
                    /> */}
                </div>
            </div>
        </section>
    )
}

export default SeasonalShowcase
