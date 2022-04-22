import React, {useState} from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {

    //setIsShow = setter
    const [isShow, setIsShow] = useState(false)
    const [msg, setMsg] = useState('')

    const onMsg1 = () => {
        const result = window.confirm('전부 삭제 하시겠습니까?')

        if(result) {
            setIsShow(true)
            setMsg('예 전부 삭제합니다.')
        }
    }

    const onMsg2 = ()=> {
        const result = window.confirm('전부 복구 하시겠습니까?')

        if(result) {
            setIsShow(true)
            setMsg('예 전부 복구합니다.')
        }

    }

    //useEffect는 일정 시간이 지나면 사라지게 할 때 사용한다
    //setIsShow = setter

    // useEffect(()=> {

    //     const timer = setTimeout(()=> {
    //         setIsShow(false)
    //     }, 3000)

    //     return()=>{
    //         clearInterval(timer)
    //     }
    // })
    
    return (
        <div>
            <p>
                <button onClick={onMsg1}>전체 삭제</button>
                <button onClick={onMsg2}>전체 복구</button>
            </p>
            {
                isShow && <Test2Sub msg={msg} setIsShow={setIsShow}/>
            }
            
        </div>
    );
};

export default Test2;