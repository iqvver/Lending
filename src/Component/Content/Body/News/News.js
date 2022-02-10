import React from 'react';
import './News.css';
import newsImg1 from '../../../../Assets/Imeges/Rectangle5.png'

const News = () => {
    return (<>
        <div className='newsBox'> {/* весь блок с новостями  */}
            <div className="newsColumn">
                <img className='newsImg' src={newsImg1} />
                <h4>Новая услуга в период карантина. Доставка еды.</h4>
                <small>Продолжаем нашу рубрику «Вопрос-ответ». В этот раз ответим на ваши вопросы.</small>
                <br />
                <a href="">Смотреть</a>
            </div>
            <div className="newsColumn">
                <img className='newsImg' src={newsImg1} />
                <h4>Есть ли будущее у дистанционного обучения в России?</h4>
                <small>Продолжаем нашу рубрику «Вопрос-ответ». В этот раз ответим на ваши вопросы по утилизации мусора.</small>
                <br />
                <a href="">Смотреть</a>
            </div>
            <div className="newsColumn">
                <img className='newsImg' src={newsImg1} />
                <h4>Как проводить с пользой время на самоизоляции?</h4>
                <small>Продол раз ответим на ваши вопросы по утилизации мусора и расценок на коммунальные услуги.</small>
                <br />
                <a href="">Смотреть</a>
            </div>
        </div>
        <div className='newsButton'>
            <button>Смотреть все новости</button>
        </div>
    </>)
}

export default News;