import React from 'react';
import { motion } from 'motion/react';

import Title from './Title';
import Buttons from './Buttons';
import ProductLists from './ProductLists';
import CustomButton from '../CustomButton/CustomButton';

const MotionTitle = motion.create(Title);
const MotionButtons = motion.create(Buttons);

const Content = () => {
    return (
        <div className='hero__content'>
            <div className='hero__text'>
                <Title className="hero__title">
                    <span className="brand-name-small">STARBUCKS IS...</span>
                    <span className="hero__title-block">
                        PURE <span className="hero__title-highlight-text">LOVE </span><br />
                        OF <span className="hero__title-highlight-text">COFFEE</span>
                    </span>
                </Title>
                <MotionButtons
                    className='hero__container-buttons'
                    variants={{
                        hidden: { opacity: 0, y: 140 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <CustomButton className='btn btn--bg-gr hero__button'>
                        <span className='container__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#fff' }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" /><path d="M9 11v-5a3 3 0 0 1 6 0v5" /></svg>
                        </span>
                        Check our menu
                    </CustomButton>
                    <CustomButton className='btn btn--bg-wh hero__button'>
                        <span className='container__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" /><path d="M6 9l3 0" /></svg>
                        </span>
                        Free Delivery
                    </CustomButton>
                </MotionButtons>
            </div>
            <ProductLists />
        </div>
    )
}

export default Content
