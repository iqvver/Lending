import React from 'react';
import image1 from '../../../Assets/Imeges/image1.png'
import './Nav.css';

const Nav = () => {
    return (
        <div className='imgBlock'> {/* блок с картинкой и текстом */}
            <img className='image1' src={image1} />
            <div className='infoBlock'>
                <h5>Сервис Quiti</h5>
                <h1>Сопровождение детей и подбор надежных бебиситтеров</h1>
            </div>
            <div className='buttBlock'> {/* блок с кнопками */}
                <button>СОПРВОЖДЕНИЕ ДЕТЕЙ</button>
                <button>БЕБИСИТЕРЫ</button>
                <button>ГРУППОВЫЕ ПОЕЗДКИ</button>
                <button>СОТРУДНИЧЕСТВО</button>
            </div>
        </div>
    )
}

export default Nav;
