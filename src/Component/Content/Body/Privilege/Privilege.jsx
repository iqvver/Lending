import React from 'react';
import Vector from '../../../../Assets/Imeges/Vector.png'
import './Privilege.css'

const Privilege = () => {
    return (
        <div className="row"> {/* строка с нашими привилегиями */}
            <div className="column"> {/* колонка */}
                <img className='vector' src={Vector} />
                <a href="">Прямой договор с компанией</a>
            </div>
            
            <div className="column">
                <img className='vector' src={Vector} />
                <a href="">Свобода от забот для родителей</a>
            </div>
            <div className="column">
                <img className='vector' src={Vector} />
                <a href="">Сопровождающие с большим стажем</a>
            </div>
            <div className="column">
                <img className='vector' src={Vector} />
                <a href="">Свобода от забот для родителей</a>
            </div>
            <div className="column">
                <img className='vector' src={Vector} />
                <a href="">Свобода от забот для родителей</a>
            </div>
        </div>
    )
}

export default Privilege;
