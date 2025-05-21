const CustomParagraph = ({ children, ...props }) => {
    return (
        <p {...props}>
            {children}
        </p>
    )
}

export default CustomParagraph
