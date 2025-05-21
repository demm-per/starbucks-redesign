import CustomButton from "../CustomButton/CustomButton"

const Buttons = ({children,...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default Buttons
