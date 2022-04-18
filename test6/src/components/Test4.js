import React, { useRef, useState } from 'react';

const Test4 = () => {

    const no = useRef(1)
    const textRef = useRef()

    const [data, setData] = useState([])
    const [text, setText] = useState('')

    const onText = (evt) => {
        const {value} = evt.target
        setText(value)
    }
    const onAdd = (evt) => {
        //새로고침 안되게 만들기
        //enter쳐서 값이 들어가게 할때 반드시 필요함--- evt.preventDefault()
        evt.preventDefault()

        setData([
            ...data,
            {
                id:no.current++,
                //text:text
                text//key와 value가 같으면 생략가능
            }
        ])
        setText('')
        textRef.current.focus()
        //----
    }
    return (// <form onSubmit={onAdd}> enter쳐서 값이 들어가게 할때 반드시 필요함---
        <div>
            <form onSubmit={onAdd}>
                아이디: 
                <input type='text' onChange={onText}
                value={text} name='text'/>
            </form>

            <button>추가</button>
            <ul>
                {
                    data.map(item=> <li key={item.id}>{item.id} / {item.text} </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;