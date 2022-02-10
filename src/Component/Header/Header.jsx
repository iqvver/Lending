import React from 'react';
import './Header.css';
import logo from '../../Assets/Imeges/logo.png'

const Header = () => {
    return (
        <header className='headerBlock'>
            <div>
                <img className='logo' src={logo} /> {/* логотип */}
            </div>
            <div className='buttonBlock'> {/* блок кнопок навигации */}
                <button>Сопровождение</button>
                <button>Бебиситеры</button>
                <button>Групповые поездки</button>
                <button>Фотостудия</button>
                <button>О Компании</button>
                <button>FAQ</button>
                <button>Каотакты</button>
            </div>
        </header>
    )
}

export default Header;
