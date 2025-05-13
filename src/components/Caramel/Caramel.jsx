import BackgroundImage from "../BackgroundImage/BackgroundImage"

const Caramel = () => {
    return (
        <section className='caramel'>
            <BackgroundImage classContainer={'container__background-image'} urlImage={'/granos de cafe.png'} classImage={'caramel__background-image'} altImage={''}/>
            <div className='caramel__container'>
                <div className='caramel__container-image'>
                    <img src="/mochiato_redimencionar-removebg-preview-comprimida.png" className='caramel__image' alt="img-Caramel-Macchiato" />
                    <BackgroundImage classContainer={'container__background-image'} urlImage={'/fondo-caramelo.png'} classImage={'caramel__background-image'} altImage={''}/>
                </div>
                <div className='caramel__info'>
                    <h2 className='caramel__title'>Caramel Macchiato</h2>
                    <p className='caramel__text'>La combinación de caramelo y café que te hará sonreír.</p>
                </div>
            </div>
        </section>
    )
}

export default Caramel
