import ContentBox from "../ContentBox/ContentBox"

const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner__mask-container'>
                <img src="/fondo1.jpg" className='banner__background-image' alt="" />
                <img src="/termo-1.webp" className='banner__background-image termo_1' alt="" />
                <img src="/termo-2.webp" className='banner__background-image termo_2' alt="" />
                <img src="/hojas-fondo-removebg.png" className='banner__background-image ambiente' alt="" />
            </div>
            <div className='banner__container'>
                <ContentBox>
                    <ContentBox.Title title={'Reutiliza y ahorra con cada sorbo'}/>
                    <ContentBox.Text text={'Trae tu vaso o termo y disfruta de $8 de descuento en cada bebida, únete al cambio.'}/>
                    <ContentBox.Link enlace={'#'} text={'Conoce más'}/>
                </ContentBox>
            </div>
        </section>
    )
}

export default Banner
