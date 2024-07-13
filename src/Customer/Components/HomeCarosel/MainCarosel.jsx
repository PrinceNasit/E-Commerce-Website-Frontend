import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCoroselData } from './MainCaroselData';

const MainCarosel = () => {
    const items = HomeCoroselData.map((item)=> <img className='cursor-pointer' role='presentation' 
    src={item.image} alt=''/>)
    // console.log(items);
    return (
    <div>
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>
    );
}

export default MainCarosel;