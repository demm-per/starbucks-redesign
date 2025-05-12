import React from 'react';
import Title from './Title';
import Buttons from './Buttons';
import ProductLists from './ProductLists';
const Content = () => {
    return (
        <div className='hero__content'>
            <div className='hero__text'>
                <Title/>
                <Buttons/>
            </div>
            <ProductLists/>
        </div>
    )
}

export default Content
