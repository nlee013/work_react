import React, { useState } from 'react';
import './Test5.css';

const Test5 = () => {
    const [isActive, seIsActive] = useState(false)

    const onAdd = () => {
        seIsActive(true)
    }
    const onRemove = () => {
        seIsActive(false)
    }
    const onToggle = () => {
        seIsActive(!isActive)
    }
    return (
        <div className='wrap'>
            <div className='on'>오늘은 목요일입니다.</div>
            <div className='test'>오늘은 목요일입니다.</div>
            <div className={isActive? 'on':''}>오늘은 목요일입니다.</div>
            <div className= {`${isActive ? 'test' : ''} ${isActive ? 'on' : ''}`}>
                오늘은 목요일입니다.
            </div>
        
            <p>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </p>
        </div>
    );
};

export default Test5;