import BackgroundImage from "../BackgroundImage/BackgroundImage"
import ContentBox from "../ContentBox/ContentBox"

const InfoCard = ({data}) => {
    return (
        <div className='info-section'>
            <a href="#" className='info-section__link'>
                <BackgroundImage
                    classContainer={data.classContainerImage}
                    urlImage={data.urlBackgroundImage}
                    classImage={data.classBackgroundImage}
                    altImage={data.altText}
                />
                <div className='info-section__description'>
                    <ContentBox.Title title={data.title}/>
                    <ContentBox.Button text={data.textButton}/>
                </div>
            </a>
        </div>
    )
}

export default InfoCard
