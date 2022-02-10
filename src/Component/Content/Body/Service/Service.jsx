import React from 'react';
import image2 from '../../../../Assets/Imeges/image2.jpg'
import './Service.css';

const Service = () => {
    return (
        <div className='serv1'> {/* весь блок услуги */}
            <div className='leftBlock'> {/* левый блок с текстом */}
                <div className='servText'>
                    Услуга
                </div>
                <div className='textBlock'>
                    <h2>Сопровождение детей</h2>
                </div>
                <div className='textBlock2'>
                    Quiti - безопасное перемещение Вашего ребенка по городу и своевременное посещение дополнительных занятий. Сопровождаем детей, пока родители обеспечивают их будущее!
                </div>
                <div className='buttonServBlock'>
                    <button>ОСТАВИТЬ ЗАЯВКУ</button>
                    <a href="">Подробнее</a>
                </div>
            </div>
            <div className='servImg'> {/* правый блок с картинкой */}
                <img src={image2} />
            </div>
        </div>
    )
}

export default Service;
