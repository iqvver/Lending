import React from 'react';
import Nav from './Nav/Nav';
import './MainContainer.css';
import Service from './Body/Service/Service'
import Calc from './Body/Calc/Calc'
import Service2 from './Body/Service2/Service2';
import Previlege from './Body/Privilege/Privilege'
import Why from './Body/Why/Why';
import News from './Body/News/News';
import FAQ from './Body/FAQ/FAQ';
import CarouselBox from '../Content/Body/Сarousel/CarouselBox'

const MainContainer = () => {
    return (
        <div className='container'>
            <div className='navBlock'> {/* блок с болькой картинкой */}
                <Nav /> 
            </div>
            <div className='serviceBlock'> {/* основной блок сайта с улугами и наполением сайта */}
                <Service />
                <Calc />
                <Service2 />
                <Service />
                <Service2 />
                <Previlege />
                <Why />
                <CarouselBox />
                <News />
                <FAQ />
            </div>
        </div>
    )
}

export default MainContainer;
