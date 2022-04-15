import React, { useRef, useState } from 'react';

const Test4 = () => {

    //const colorRef = useRef(null);//--1
    const [color, setColor] = useState('')
    const [text, setText] = useState('')
    
    const onColor = (evt) => {

        //--1
        // console.log(colorRef.current.value)

        // const data = {
        //     color: colorRef.current.value
        //     // color: colorRef.current.value 또는 focus를 붙여서 사용가능하다! 기억해두기**
        // }
        // console.log(data)

        // //json형식
        // const json = JSON.stringify(data, null, 5)//5는 들여쓰기
        // console.log(json)
        const {value} = evt.target
        setColor(value)
        setText(value)

    }

    const onSelect = () => {
        setColor(text)

    }

    return (
        <div>
            <h2 style={{color:color}}>색상 선택</h2>
            {/* <select ref={colorRef}> */}
            <select onChange={onColor}>
                <option value='red'>빨간색</option>
                <option value='green'>초록색</option>
                <option value='pink'>분홍색</option>
                <option value='skyblue'>하늘색</option>
                <option value='yellow'>노란색</option>
            </select>

            {/* <button onClick={onColor}>선택</button> */}
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test4;