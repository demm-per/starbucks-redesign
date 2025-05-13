const ContentBox = ({children}) => {
    return (
        <div className='content-box'>
            {children}
        </div>
    )
}

const Title = ({ title }) => {
    return(
        <h2 className='content-box__title'>{title}</h2>
    );
}

const Text = ({ text }) => {
    return(
        <p className='content-box__text'>{text}</p>
    );
}

const Link = ({ enlace, text }) => {
    return (
        <a href={enlace} className='btn btn--bg-gr btn--medium'>
            {text}
        </a>
    );
}

const Button = ({ text }) => {
    return (
        <button className='btn btn--bg-gr btn--medium'>
            {text}
        </button>
    );
}

ContentBox.Title = Title;
ContentBox.Text = Text;
ContentBox.Link = Link;
ContentBox.Button = Button;

export default ContentBox
