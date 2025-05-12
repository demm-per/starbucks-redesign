import CustomSection from "../CustomSection/CustomSection";
import BackgroundImages from "./BackgroundImages";
import Content from "./Content";
import Highlight from './Highlight';
const index = () => {
    return (
        <CustomSection className='hero'>
            <BackgroundImages/>
            <div className='hero__container'>
                <Content/>
                <Highlight/>
            </div>
        </CustomSection>
    )
}

export default index
