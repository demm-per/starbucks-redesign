const CustomLink = ({children, ...props}) => {
  return (
    <a {...props}>
        {children}
    </a>
  )
}

export default CustomLink
