import React, { useEffect, useState } from 'react';

const Test4 = () => {

    const [count, seCount] = useState(1)

    // useEffect(()=> {

    //     //setInterval 시간 사용할 때 사용
    //     const timer = setInterval(()=>{
    //         seCount(count + 1)
    //     }, 1000)

    //     return()=> {
    //         console.log('뒷정리')
    //         clearInterval(timer)
    //     }
    // })

    useEffect(()=> {

        //setInterval 시간 사용할 때 사용
        const timer = setInterval(()=>{
            console.log('timer')
            seCount(count + 1)
        }, 1000)

        return()=> {
            clearInterval(timer)
        }

    }, []) //초기값 1을 가져오고 2가 되고 멈춘다.
    //콘솔창에서 보면 1씩 증가(내부적으로)

    return (
        <div>
           <h1>출력:{count}</h1>
        </div>
    );
};

export default Test4;