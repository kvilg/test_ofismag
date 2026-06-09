import style from './Task6.module.css';
import React, { useState } from 'react';

function Task6() {
    const [isRaised, setIsRaised] = useState(true);
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
            
        }, 80);

        setTimeout(() => {
            setIsRaised(!isRaised);
        }, 35);
    };

    let buttonClass = style.btn;
    
    if (isPressed) {
        buttonClass += ` ${style.fs}`;
    } else if (isRaised) {
        buttonClass += ` ${style.se}`;
    } else {
        buttonClass += ` ${style.tr}`;
    }

    return (
        <div className={style.Task6}>
            <button 
                className={buttonClass}
                onClick={handleClick}
            >
                Кнопка
            </button>
        </div>
    );
}

export default Task6;