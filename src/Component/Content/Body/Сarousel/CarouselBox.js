import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css';
import img1 from '../../../../Assets/Imeges/Carousel/1.jpg'
import img2 from '../../../../Assets/Imeges/Carousel/2.jpg'
import img3 from '../../../../Assets/Imeges/Carousel/3.jpg'

const CarouselBox = () => {
    return (
        <div className='carouselBox'> {/* блок карусели */}
            <Carousel> {/* карусель bootstrap */}
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img3} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselBox;