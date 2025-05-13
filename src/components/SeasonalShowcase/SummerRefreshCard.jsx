const SummerRefreshCard = ({
    classCard='',
    classCardContainerBackgroundImages='',
    urlBackgroundImageProductFruit='',
    classBackgroundImageProductFruit='',
    urlBackgroundImageProductColors='',
    classBackgroundImageProductColors='',
    urlImageProduct='',
    classImageProduct='',
    title='',
}) => {
    return (
        <div className={classCard}>
            <div className={classCardContainerBackgroundImages}>
                <img src={urlBackgroundImageProductFruit} className={classBackgroundImageProductFruit} alt="" />
                <img src={urlBackgroundImageProductColors} className={classBackgroundImageProductColors} alt="" />
            </div>
            <img src={urlImageProduct} className={classImageProduct} alt="" />
            <div className='summer-refresh__body'>
                <p className='summer-refresh__product-title'>{title}</p>
            </div>
        </div>
    )
}

export default SummerRefreshCard
