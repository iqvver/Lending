import React from 'react';
import './Calc.css';

const Calc = () => {
    return (
        <div className='calcBlock'> {/* блок с текстом и переходом на страницу калькулятора */}
            <div>
                <a href="">Калькулятор</a>
            </div>
            <h3>
                Наш калькулятор поможет рассчитать приблизительную стоимость поездки
            </h3>
            <button>Расчитать</button>
        </div>
    )
}

export default Calc;