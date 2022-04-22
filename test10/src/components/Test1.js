import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {

    const [count,setCount] = useState(1)

    const ref1 = useRef()
    const ref2 = useRef()
    

    const onColor = () => {
        ref1.current.style.color = 'pink'
        ref2.current.style.color = 'skyblue'
        setCount(count + 1)
    }

    // 브라우저에 그려진 후 실행함
    useEffect(()=>{
        ref1.current.style.color='red'
    })

    // 브라우저에 그려지기 전에 실행함
    useLayoutEffect(()=>{
        ref2.current.style.color='blue'
    })

    return (
        <div style={{margon:30}}>
            <h1>출력: {count}</h1>
            <h1 ref={ref1}>useEffect</h1>
            <h1 ref={ref2}>useLayoutEffect</h1>
            <button onClick={onColor}>확인</button>
        </div>
    );
};

export default Test1;

