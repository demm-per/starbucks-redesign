const BackgroundImage = ({classContainer, urlImage, classImage, altImage}) => {
  return (
    <div className={classContainer}>
        <img src={urlImage} className={classImage} alt={altImage} />
    </div>
  )
}

export default BackgroundImage
