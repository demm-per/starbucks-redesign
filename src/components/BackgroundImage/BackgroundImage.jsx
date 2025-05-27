const BackgroundImage = ({classContainer, isLazyLoadingEnabled = true, urlImage, classImage, altImage, ...props}) => {
  return (
    <div className={classContainer} {...props}>
        <img loading={isLazyLoadingEnabled ? 'lazy' : 'eager'} src={urlImage} className={classImage} alt={altImage} />
    </div>
  )
}

export default BackgroundImage
