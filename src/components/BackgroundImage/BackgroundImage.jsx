const BackgroundImage = ({
  classContainer,
  isLazyLoadingEnabled = true,
  urlImage,
  classImage,
  height,
  width,
  altImage,
  ...props }) => {
  return (
    <div className={classContainer} {...props}>
      <img loading={isLazyLoadingEnabled ? 'lazy' : 'eager'} src={urlImage} className={classImage} height={height} width={width} alt={altImage} />
    </div>
  )
}

export default BackgroundImage
