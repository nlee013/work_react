import React, {useEffect} from 'react';

const Test2Sub = ({msg, setIsShow}) => {

    //useEffect는 일정 시간이 지나면 사라지게 할 때 사용한다
    //Test2.js에 사용해도 되지만 여기선 setter도 넘길 수 있다.
    useEffect(()=> {

        const timer = setTimeout(()=> {
            setIsShow(false)
        }, 3000)

        return()=>{
            clearInterval(timer)
        }
    })

    return (
        <div style={{background:'skyblue', padding:15, margin:30, fontSize:25}}>
            메세지: {msg}
            
        </div>
    );
};

export default Test2Sub;