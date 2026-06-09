import './Header.css';

import {  useDispatch } from 'react-redux'
import { setValue  } from '../store'

function Header() { 

  


    const dispatch = useDispatch()

    return (
    <div className="header">
    
        <div className='sector'>
            <div className='sector-center'>
                <div className='aline-center'>
                    <nav className='nav'>
                        <button className='task-nav' onClick={() => dispatch(setValue(1))}>task1</button>
                        <button className='task-nav' onClick={() => dispatch(setValue(2))}>task2</button>
                        <button className='task-nav' onClick={() => dispatch(setValue(3))}>task3</button>
                        <button className='task-nav' onClick={() => dispatch(setValue(4))}>task4</button>
                        <button className='task-nav' onClick={() => dispatch(setValue(5))}>task5</button>
                        <button className='task-nav' onClick={() => dispatch(setValue(6))}>task6</button>
                    </nav>
                </div>
            </div>
        </div>

      
    </div>
  );
}

export default Header;
