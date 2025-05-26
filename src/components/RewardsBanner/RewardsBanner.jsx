import {motion} from 'motion/react';

import BackgroundImage from "../BackgroundImage/BackgroundImage"
import ContentBox from "../ContentBox/ContentBox";
import RewardsLogo from "./RewardsLogo";

const MotionRewardsLogo = motion(RewardsLogo);
const MotionContentBox = motion(ContentBox);

const RewardsBanner = () => {
    return (
        <section className='rewards'>
            <BackgroundImage classContainer={'rewards__mask'} urlImage={'/background-rewards.jpg'} classImage={'rewards__mask-img'} altImage={''}/>
            <div className='rewards__container'>
                <MotionRewardsLogo
                    initial={{ opacity: 0, scale:0, }}
                    whileInView={{ opacity: 1, scale:1, }}
                    transition={{ duration: 1.6 }}
                    viewport={{ once: true, amount: 1 }}
                />
                <MotionContentBox
                     initial={{ opacity: 0, x:50, }}
                     whileInView={{ opacity: 1, x:0, }}
                     transition={{ duration: 1.6 }}
                     viewport={{ once: true, amount: .5 }}
                >
                    <ContentBox.Title title={'Recompensas que saben mejor'}/>
                    <ContentBox.Text text={'Regístrate en Starbucks Rewards y disfruta de grandes ventajas: bebidas gratis, ofertas especiales y más.'}/>
                    <ContentBox.Link enlace={'#'} text={'Únete ahora'} />
                </MotionContentBox>
            </div>
        </section>
    )
}

export default RewardsBanner;
