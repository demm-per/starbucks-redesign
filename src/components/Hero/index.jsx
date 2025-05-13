import BackgroundImage from "../BackgroundImage/BackgroundImage";
import CustomSection from "../CustomSection/CustomSection";
import BackgroundImages from "./BackgroundImages";
import Content from "./Content";
import Highlight from './Highlight';
const index = () => {
    return (
        <CustomSection className='hero'>
            <BackgroundImages className={'hero__background-images'}>
                <BackgroundImage classContainer={'hero__background-container-image'} urlImage={'/dona_starbucks_hero.webp'} classImage={'hero__background-image'} altImage={''} />
                <BackgroundImage classContainer={'hero__background-container-image'} urlImage={'/frapuccino_starbucks_hero.webp'} classImage={'hero__background-image'} altImage={''} />
            </BackgroundImages>
            <div className='hero__container'>
                <Content />
                <Highlight />
            </div>
        </CustomSection>
    )
}

export default index
