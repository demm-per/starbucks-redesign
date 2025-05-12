const CustomSection = ({ children, ...props }) => {
    return (
        <section {...props}>
            {children}
        </section>
    )
}

export default CustomSection
