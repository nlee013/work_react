import React, { useState } from 'react';
import './Test1.css'


const Test1 = () => {

    const [age,setAge] = useState(20)
    const [isColor,setIsColor] = useState(false)

    const onColor = () => {
        setIsColor(!isColor)
    }

    const onUp = () => {
        setAge(state => state +1)
    }

    const onDown = () => {
        setAge(state => state -1)
    }

    return (
    
            <div className={`wrap ${isColor?'mint':'yellow'}`}>
                <h2>나이:{age}살</h2>
                <h2>배경색: {isColor?'mint':'yellow'}</h2>
                <p>
                    <button onClick={onColor}>배경색</button>
                    <button onClick={onUp}>나이증가</button>
                    <button onClick={onDown}>나이감소</button>
                </p>
            </div>
       
    );
};

export default Test1;