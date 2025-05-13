import InfoCard from "../InfoCard/InfoCard"

const PromoHighlights = () => {
    const cards = [
        {
            enlace:'#',
            classContainerImage:'info-section__container-image',
            urlBackgroundImage:'/noticias starbucks.jpg',
            classBackgroundImage:'info-section__image',
            altText:'',
            title:'Noticias Starbucks',
            textButton:'Ver más'
        },
        {
            enlace:'#',
            classContainerImage:'info-section__container-image',
            urlBackgroundImage:'/promociones.jpg',
            classBackgroundImage:'info-section__image',
            altText:'',
            title:'Conoce nuestras promociones',
            textButton:'Ver más'
        }
    ]
    return (
        <section className='block'>
            <div className='block__container'>
                {
                    cards.map((card,index)=>(
                        <InfoCard data={card} key={index}/>
                    ))
                }
            </div>
        </section>
    )
}

export default PromoHighlights
