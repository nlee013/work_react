import React, { useRef, useState } from 'react';

const Form = ({onAdd}) => {

    const textRef = useRef()
    const [text,setText] = useState('')

    const changeInput = (evt) => {
        const {value} = evt.target
        setText(value)
    }

    const onOther = () => {
        onAdd(text)
        //alert('다른일')
        setText('')
        textRef.current.focus()
    }

    return(
        <div>
            <input type='text' value={text} onChange={changeInput}
            ref={textRef}/>
            <button onClick={onOther}>추가</button>
        </div>
    )
}
const List = ({data, onDel}) => {
    return (
       <div>
           {
               data.map(item=><Item key={item.id} item={item} onDel={onDel}/>)
           }
       </div>
    );
};

const Item = ({item,onDel}) => {
    const {id, text} = item
    return (
        <div>
        {id}. {text}
        <button onClick={()=>onDel(id)}>삭제</button>
    </div>
    );
};

const Test1 = () => {

    const no = useRef(4)

    const [data,setData] = useState([
        {id:1,text:'저녁먹기'},
        {id:2,text:'친구만나기'},
        {id:3,text:'회사미팅'}
    ])

    const onAdd = (text) => {

        setData([
            ...data,
            {
                id:no.current++,
                text //text:text
            }
        ])
    }

    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
        //alert('삭제')
    }

    return (
        <div>
            <h1>할일 만들기</h1>
            <Form onAdd={onAdd}/>
            <List data={data} onDel={onDel}/>
        </div>
    );
};


export default Test1;