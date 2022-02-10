import React from 'react';
import footerImg from '../../Assets/Imeges/footerimg.png'
import yutobe from '../../Assets/Imeges/yutobe.png'
import vk from '../../Assets/Imeges/vk.png'
import fbook from '../../Assets/Imeges/fbook.png'
import inst from '../../Assets/Imeges/inst.png'
import './Footer.css';

const Footer = () => {
    return (<>
        <div className='footerBlock'> {/* весь блок футер */}
            <div className='footerBlock1'> {/* первый блок футера с картинкой */}
                <img src={footerImg} />
            </div>
            <div>
                <div className='footerBlock2'> {/* второй блок футера с разделами */}
                    <a href=''>Калькулятор сопровождения </a> <br />
                    <a href=''>Сотрудничество</a> <br />
                    <a href=''>Блог Quiti</a> <br />
                    <a href=''>Видео отзывы</a> <br />
                    <a href=''>Наша география</a> <br />
                    <a href=''>Контакты</a> <br />
                </div>
            </div>
            <div>
                <div className='footerBlock3'> {/* третий блок футера с контактами */}
                    <small>Телефон</small> <br />
                    <rt>8 (499) 962-30-50</rt> <br />
                    <ruby>пн-пт 9:00-18:00 </ruby> <br /> <br />
                    <rt><small>Email</small> </rt> <br />
                    <ruby>info@quiti.ru</ruby>
                </div>
            </div>
            <div>
                <div className='footerBlock4'> {/* четвертый блок футера с соц сетями */}
                    <small>Соцсети</small>
                    <div className='footerBlock4Img'>
                        <a href=''> <img src={yutobe} /> </a>
                        <a href=''><img src={vk} /> </a>
                        <a href=''><img src={fbook} /> </a>
                        <a href=''><img src={inst} /> </a>
                        <br /> <br />
                        <small>Мессенджеры</small> <br />
                        <a href=''> Telegram </a>
                        <a href=''> WhatsApp </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='footerOutBlock'> {/* низ футера */}
            <hr />
            <a href=''> Quiti.ru © 2021 Все права защищены </a>
            <a href=''> Пользовательское соглашение </a>
            <a href=''> Договор на оказание услуг </a>
            <a href=''> Дизайн и разработка сайта </a>
        </div>
    </>)
}

export default Footer;