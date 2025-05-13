import BackgroundImage from "../BackgroundImage/BackgroundImage"
import ContentBox from "../ContentBox/ContentBox";
import RewardsLogo from "./RewardsLogo";

const RewardsBanner = () => {
    return (
        <section className='rewards'>
            <BackgroundImage classContainer={'rewards__mask'} urlImage={'/background-rewards.jpg'} classImage={'rewards__mask-img'} altImage={''}/>
            <div className='rewards__container'>
                <RewardsLogo/>
                <ContentBox>
                    <ContentBox.Title title={'Recompensas que saben mejor'}/>
                    <ContentBox.Text text={'Regístrate en Starbucks Rewards y disfruta de grandes ventajas: bebidas gratis, ofertas especiales y más.'}/>
                    <ContentBox.Link enlace={'#'} text={'Únete ahora'} />
                </ContentBox>
            </div>
        </section>
    )
}

export default RewardsBanner;
