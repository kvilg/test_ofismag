import './Slider.css';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import Task1 from '../Tasks/Task1/Task1'
import Task2 from '../Tasks/Task2/Task2'
import Task3 from '../Tasks/Task3/Task3'
import Task4 from '../Tasks/Task4/Task4'
import Task5 from '../Tasks/Task5/Task5'
import Task6 from '../Tasks/Task6/Task6'

function Slider() { 

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning] = useState(true);
    
    const slides = [6];

    const count = useSelector(state => state.counter.value)

    useEffect(() => {
        setCurrentIndex(count-1);
    }, [count]);


    const scrollLeft = () => {
        if (isTransitioning) {
            setCurrentIndex((prev) => 
                prev === 0 ? slides - 1 : prev - 1
            );
        }
    };

    const scrollRight = () => {
        if (isTransitioning) {
            setCurrentIndex((prev) => 
                prev === slides - 1 ? 0 : prev + 1
            );
        }
    };

    return (
    <div className="slider range">
        <button className='left-btn-slider btn' onClick={scrollLeft}>&lt;</button>
        <div className='box-slider'
        style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease' : 'none'
                    }}
        >
            <div key='1' className='item-slider'>
                <Task1/>
            </div>
            <div key='2' className='item-slider'>
                <Task2/>
            </div>
            <div key='3' className='item-slider'>
                <Task3/>
            </div>
            <div key='4' className='item-slider'>
               <Task4/>
            </div>
            <div key='5' className='item-slider'>
                <Task5/>
            </div>
             <div key='6' className='item-slider'>
                 <Task6/>
            </div>
        </div>
        <button className='right-btn-slider btn' onClick={scrollRight}>&gt;</button>
    </div>
  );
}

export default Slider;
