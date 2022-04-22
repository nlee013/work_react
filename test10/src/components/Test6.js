import React, { useEffect, useState } from 'react';

const Test6 = () => {

    const [count, setCount] = useState(1)
    const [done, setDone] = useState(true)

    const onToggle = () => {

        setDone(!done)
    }

    const onReset = () => {

        setDone(false)
        setCount(0)
    }

    useEffect(()=> {

        console.log(count)

        let timer = null

        if(done){
            timer = setInterval(()=> {
                setCount(state => state + 1)
            }, 1000)
        }else if(!done){

        }
        return()=> {
            console.log('Clear Count')
            clearInterval(timer)//뒷정리
        }
    }, [done, count])

    return (
        <div style={{margin:30}}>
            <h1 style={{fontSize:50}}>카운트:{count}</h1>
            <button onClick={onToggle}>{done ? '중지':'시작'}</button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test6;