import React from 'react';
import {motion} from 'framer-motion';

import Cards from './Cards';
import CustomSection from '../CustomSection/CustomSection';
import CustomDiv from '../CustomDiv/CustomDiv';
import StarbucksLogo from '../StarbucksLogo/StarbucksLogo';

const MotionCustomDiv = motion.create(CustomDiv);

const Lavanda = () => {
    return (
        <CustomSection className='section'>
            <div className='section__background-images'>
                <MotionCustomDiv 
                    className='section__logo'
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <StarbucksLogo/>
                </MotionCustomDiv>
            </div>
            <div className='section__container'>
                <div className='section__header'>
                    <motion.h2 
                        className='section__title'
                        initial={{ opacity: 0, x:-100, }}
                        whileInView={{ opacity: 1, x:0, }}
                        transition={{ duration: 1.6,  }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        La <span className='section__title-highlight'>primavera</span> tiene <span className='section__title-highlight'>sabor</span> a <span className='section__title-highlight'>lavanda</span>
                    </motion.h2>
                    <motion.p 
                        className='section__caption'
                        initial={{ opacity: 0, x:-100, }}
                        whileInView={{ opacity: 1, x:0, }}
                        transition={{ duration: 1.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Descubre nuestros sabores.
                    </motion.p>
                </div>
                {/* Start card */}
                <Cards/>
                {/* End card */}
            </div>
        </CustomSection>
    )
}

export default Lavanda
