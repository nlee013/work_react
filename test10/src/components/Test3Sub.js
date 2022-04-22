import React, { useEffect, useState } from 'react';

const Test3Sub = () => {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const move = (evt) => {
        setX(evt.clientX)
        setY(evt.clientY)
    }

    useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('mousemove',move)

        // < 뒷정리 > (메모리 누수를 방지) :위에 있는 작업을 지워라!
        // 위와 같은 작업이 계속 쌓이면 메모리가 꽉차서 작동을 멈출 수 있음 
        return()=>{
            window.addEventListener('mousemove',move)

        }
    }) // []는 한번만 실행: 어디에? 콘솔창에!!

    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{width:500,height:150, fontSize:50, margin:20, textAlign:'center',border:'1px solid #000', lineHeight:'150px'}}>
                X:{x} Y:{y}
            </div>
        </div>
    );
};

export default Test3Sub;