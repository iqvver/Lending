import React from 'react';
import image3 from '../../../../Assets/Imeges/image3.png'
import './Service2.css';

const Service2 = () => {
    return (
        <div className='serv2'> {/* весь блок услуги */}
            <div className='leftBlock'>
                <div className='servImg'> {/* правый блок с картинкой */}
                    <img src={image3} />
                </div>
            </div>
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
        </div>

    )
}

export default Service2;
