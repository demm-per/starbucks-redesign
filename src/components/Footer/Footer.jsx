import CustomDiv from "../CustomDiv/CustomDiv"
import CustomImage from "../CustomImage/CustomImage"
import CustomLink from "../CustomLink/CustomLink"
import CustomList from "../CustomList/CustomList"
import StarbucksLogo from "../StarbucksLogo/StarbucksLogo"

const footerOptions = {
    aboutUs:[
        {
            enlace:'#',
            text:'Trabaja con nosotros'
        },
        {
            enlace:'#',
            text:'Historias Starbucks'
        },
    ],
    customerService:[
        {
            enlace:'#',
            text:'Contáctanos'
        },
        {
            enlace:'#',
            text:'Facturas Electrónicas'
        },
        {
            enlace:'#',
            text:'Formas de comprar'
        },
    ],
    options:[
        {
            enlace:'#',
            text:'Accesibilidad Web'
        },
        {
            enlace:'#',
            text:'Aviso de Privacidad'
        },
        {
            enlace:'#',
            text:'Boletines'
        },
        {
            enlace:'#',
            text:'Condiciones de uso'
        },
        {
            enlace:'#',
            text:'Mapa del sitio'
        },
        {
            enlace:'#',
            text:'Preferencias sobre cookies'
        },
    ],
    socialMediaIcons:[
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--alternative-color facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>,
            name:'Faceboock',
            enlace:'#',
            ariaLabel:'Abrir Faceboock'
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--alternative-color instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>,
            name:'Instagram',
            enlace:'#',
            ariaLabel:'Abrir Instagram'
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--alternative-color x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>,
            name:'X',
            enlace:'#',
            ariaLabel:'Abrir X'
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--alternative-color youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>,
            name:'YouTube',
            enlace:'#',
            ariaLabel:'Abrir Youtube'
        },
    ]
}

const Footer = () => {
    return (
        <footer className='footer'>
            <CustomDiv className="footer__containerBackgroundImage">
                <CustomImage className="footer__backgroundImage" src="https://res.cloudinary.com/dj5mpbo6m/image/upload/f_auto,q_auto/v1/starbucks/dktzdyyzzwwmjyi3ipxe" alt=""/>
            </CustomDiv>
            <div className='footer__container'>
                <div className='footer-content'>
                    <div className='info'>
                        <h3 className='info__title'>Sobre Nosotros</h3>
                        <CustomList className='info__items'>
                            {
                                footerOptions.aboutUs.map((option, index) => (
                                    <CustomList.Item className='info__link' key={index}>
                                        <CustomLink href={option.enlace} className='info__link'>{option.text}</CustomLink>
                                    </CustomList.Item>
                                ))
                            }
                        </CustomList>
                    </div>
                    <div className='footer__brand-social'>
                        <div className='logo__container logo__container--footer'>
                            <a href="#" className='logo__link'>
                                <StarbucksLogo/>
                            </a>
                        </div>
                        <CustomList className='networks'>
                            {
                                footerOptions.socialMediaIcons.map((option, index) => (
                                    <CustomList.Item className='network' key={index}>
                                        <CustomLink href={option.enlace} className='network__link' aria-label={option.ariaLabel}>
                                            {option.icon}
                                        </CustomLink>
                                    </CustomList.Item>
                                ))
                            }
                        </CustomList>
                    </div>
                    <div className='info'>
                        <h3 className='info__title'>Atención al cliente</h3>
                        <CustomList className='info__items'>
                            {
                                footerOptions.customerService.map((option, index) => (
                                    <CustomList.Item className='info__item' key={index}>
                                        <CustomLink href={option.enlace} className='info__link'>{option.text}</CustomLink>
                                    </CustomList.Item>
                                ))
                            }
                        </CustomList>
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <CustomList className='info__items info__items--row'>
                            {
                                footerOptions.options.map((option, index) => (
                                    <CustomList.Item className='info__item' key={index}>
                                        <CustomLink className='info__link' href='#'>{option.text}</CustomLink>
                                    </CustomList.Item>
                                ))
                            }
                        </CustomList>
                    </div>
                    <div className='copyright__container'>
                        {/* derechos reservados */}
                        <p className='copyright'>&copy; {new Date().getFullYear()} Starbucks Cofee Company. Reservados todos los derechos</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
