const CustomList = ({ children, ...props }) => {
  return (
    <ul {...props}>
        {children}
    </ul>
  )
}

const Item = ({children, ...props}) =>{
    return(
        <li {...props}>{children}</li>
    )
}

CustomList.Item = Item;

export default CustomList
