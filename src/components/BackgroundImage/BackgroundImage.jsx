const BackgroundImage = ({classContainer, urlImage, classImage, altImage, ...props}) => {
  return (
    <div className={classContainer} {...props}>
        <img loading="lazy" src={urlImage} className={classImage} alt={altImage} />
    </div>
  )
}

export default BackgroundImage
