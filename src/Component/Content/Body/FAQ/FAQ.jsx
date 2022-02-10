import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (<>
        <div className='faqBoxText'> {/* заголовок со ссылкой */}
            <h4><a href="">Часто задаваемые вопросы (FAQ)</a></h4>
        </div>
        <div className='faqBox'> {/* вель блок FAQ */}
            <div className='faqText'> {/* блок с текстом */}
                <h2>Отправьте заявку и мы расскажем подробно о наших услугах</h2>
            </div>
            <div className='faqBoxForm'>{/* блок с формой */}
                <form> {/* подключена форма с инпутами для отправки данных */}
                    <div>
                        <input type="text" placeholder="Имя*" />
                        <br />
                    </div>
                    <div>
                        <input type="number" placeholder="Телефон" />
                        <br />
                    </div>
                    <div>
                        <input type="email" placeholder="Email*" />
                        <br />
                    </div>
                    <div>
                        <input type="text" placeholder="Комментарий" />
                        <br />
                    </div>
                    <button type="submit">отправить</button>
                    <br />
                    <div className='faqFormText'> {/* текст под кнопкой */}
                        <small>
                            Нажимая кнопку «Отправить заявку», Вы принимаете условия пользовательского соглашения
                        </small>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default FAQ;