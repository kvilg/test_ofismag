import './Task2.css';


function Task2() { 

  


    return (
    <div className="Task2">
        <div className='form-main'>
            <div className='form-logo'>Заполните поля</div>
            <div className='form-help-logo'>ну пожалуста</div>
        </div>
        <form className='form'>
            <div className='form-fp-section'>
                <div className='form-fp-logo'><div className='fp-logo-text'>Основное</div></div>
                <div className='form-name'>
                    <div className='form-name-text'>имя</div>
                    <input type="text" placeholder="по паспорту" className='form-name-input' id="" />
                </div>
                <div className='form-color'>
                    <div className='form-color-text'>цвет вашего настроения</div>
                    <input type="color" name="" className='form-color-input' id="" />
                </div>
            </div>
             <div className='form-se-section'>
                <div className='form-se-logo'>
                    <div className='fp-logo-text'>
                        Дополнительное
                    </div>
                </div>
                <div className='form-coment'>
                    <div className='form-coment-name'>
                        Комментарий
                    </div>
                    <textarea 
                        className='form-se-textarea' 
                        placeholder="Напишите хоть что нибудь. 
                        Если хотите конечно." id=""
                    ></textarea>
                </div>
             </div>
            <div className='form-tr-section'>
                <div className='fp'>
                    <div><input className='input-checbox' type="checkbox" name="" id="" /></div>
                    <div className='text-checkbox'>
                        Ну а тут просто полежит радиобатон
                    </div>
                </div>
                <div className='se'>
                    <div>
                        <input className='input-checbox-2' type="checkbox" name="" id="" />
                    
                    </div>
                    <div className='text-checkbox'>
                       Соглашаюсь на всё, что бы вы не придумали и осознаю, 
                       что это может означать что угодно
                    </div>
                </div>
            </div>
            <button className='form-btn'>
                Отправить все мои данные
            </button>
        </form>
    </div>
  );
}

export default Task2;
