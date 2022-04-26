import React, { useCallback, useMemo, useState } from 'react';

const Test6 = () => {

    const [text, setText] = useState('')
    const [data, setData] = useState([])
/*
    const onAdd = () => {
        setData([...data, text])
        setText('')
    }

    const textSize = () => {
        return text.length
    }
*/
//계속 rendering이 되지 않게 자주 안쓰는 함수는 이런식으로
//callback또는 memo를 사용.

//callback은 함수 자체를 기억
    const onAdd = useCallback(()=>{
        setData([...data, text])
        setText('')
    }, [data, text])
//memo는 return 값을 기억
    const textSize = useMemo(()=>{

        return text.length
    }, [text])

    return (
        <div>
            <h1>useCallback / useMemo</h1>
            <input type='text' value={text}
            onChange={evt=>setText(evt.target.value)}/>
            <button onClick={onAdd}>추가</button>
            <h2>내용:{text} / 길이:{text.length}</h2>
            <hr/>
            <h2>길이:{textSize}</h2>
            <hr/>
            {
                data.map((item, index)=>
                <p key={index}>
                {index} / {item}
                </p>)
            }
        </div>
    );
};

export default Test6;