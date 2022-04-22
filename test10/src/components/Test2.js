import React, { useEffect, useRef, useState } from 'react';

const Test2 = () => {

    const [text,setText] = useState('')

    const ref1 = useRef();

    // 웹에 콘솔창 보기
    useEffect(()=>{
        console.log('useEffect')
        ref1.current.focus()
    })    // },[]) : 한 번만 실행한다

    return (
        <div>
            <input type='text' ref={ref1} 
            onChange={evt=>setText(evt.target.value)}/>        
        </div>
    );
};

export default Test2;