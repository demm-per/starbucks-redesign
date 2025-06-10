import StarbucksLogo from "../StarbucksLogo/StarbucksLogo"

const RewardsLogo = ({...props}) => {
    return (
        <div className='rewards__logo' {...props}>
            <div className='rewards__logo-container'>
                <StarbucksLogo/>
            </div>
            <div className='rewards-content'>
                <p className='rewards__name-store'>STARBUCKS</p>
                <p className='rewards__logo-text'>REWARDS</p>
            </div>
        </div>
    )
}

export default RewardsLogo
