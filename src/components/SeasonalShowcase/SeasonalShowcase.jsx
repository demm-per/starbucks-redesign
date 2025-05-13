import BackgroundImage from "../BackgroundImage/BackgroundImage"
import SummerRefreshCard from "./SummerRefreshCard"

const SeasonalShowcase = () => {
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
    return (
        <section className='summer-refresh'>
            <BackgroundImage classContainer={'summer-refresh__container-images'} urlImage={"/summer-background-4.jpg"} classImage={'summer-refresh__background-image'} altImage={''}/>
            <div className='summer-refresh__container'>
                <h2 className='summer-refresh__title'>Summer Refresh</h2>
                <p className='summer-refresh__caption'>Disfruta el verano en cada sorbo.</p>
                <div className='summer-refresh__cards'>
                    <SummerRefreshCard
                        classCard={'summer-refresh__card summer-refresh__berry'}
                        classCardContainerBackgroundImages={'summer-refresh__contain-mask summer-refresh__contain-mask-berry'}
                        urlBackgroundImageProductFruit={'/background-barry.png'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-berry'}
                        urlBackgroundImageProductColors={'/background-barry-stain.png'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-berry-stains'}
                        urlImageProduct={'/Summer-Berry.png'}
                        classImageProduct={'summer-refresh__image-product'}
                        title={'Berry'}
                    />
                    <SummerRefreshCard
                        classCard={'summer-refresh__card summer__refresh-skies'} 
                        classCardContainerBackgroundImages={'summer-refresh__contain-mask summer-refresh__contain-mask-skies'}
                        urlBackgroundImageProductFruit={'/background-skies.png'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-skies'}
                        urlBackgroundImageProductColors={''}
                        classBackgroundImageProductColors={''}
                        urlImageProduct={'/Summer-Skies-Drink.png'}
                        classImageProduct={'summer-refresh__image-product'}
                        title={'Skies'}
                    />
                    <SummerRefreshCard
                        classCard={'summer-refresh__card summer-refresh__lemonade'}
                        classCardContainerBackgroundImages={'summer-refresh__contain-mask summer-refresh__contain-mask-lemonade'}
                        urlBackgroundImageProductFruit={'/Summer-Berry-with-Lemonade-background.png'}
                        classBackgroundImageProductFruit={'summer-refresh__mask summer-refresh__mask-lemonade'}
                        urlBackgroundImageProductColors={'/mancha_pintura.png'}
                        classBackgroundImageProductColors={'summer-refresh__mask summer-refresh__mask-stains'}
                        urlImageProduct={'/summer-berry-with-lemonade.png'}
                        classImageProduct={'summer-refresh__image-product'}
                        title={'Lemonade'}
                    />
                </div>
            </div>
        </section>
    )
}

export default SeasonalShowcase
