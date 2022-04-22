import React, { useEffect, useState } from 'react';

const Test5 = () => {

    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const changeInput = (evt) => {

        const {value} = evt.target
        setStep(Number(value))
    }
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count => count+step)
        }, 1000)

        return()=> {
            console.log('뒷정리')
            clearInterval(timer)
        }
    }, [step])

    return (
        <div>
            <input type='text' value={step} onChange={changeInput}/>
            <h1>출력:{count}</h1>
        </div>
    );
};

export default Test5;