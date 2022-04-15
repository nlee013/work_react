import React, { useState } from 'react';

const Test1 = () => {

    const [data,setData] = useState([
        {id:1,name:'배수지',age:27,done:true},
        {id:2,name:'유인나',age:40,done:false},
        {id:3,name:'정인선',age:30,done:true},
        {id:4,name:'강아랑',age:25,done:false},
        {id:5,name:'이영애',age:45,done:true}
    ])
    
    const onAdd1 = () => {
        setData(data.concat({id:6,name:'한예슬',age:35,done:false}))
    }

    const onAdd2 = () => {
        const newData = data.concat({id:6,name:'안젤리나',age:35,done:true})

        setData(newData)
    }

    const onAdd3 = () => {
        setData([
            ...data,
            {id:8,name:'김희선',age:40,done:false}
        ])
    }

    const onAdd4 = () => {
        const newData = ({id:6,name:'안젤리나',age:35,done:true})

        setData([...data,newData])
    }

    return (
        <div>

            <p>
                <button onClick={onAdd1}>추가1</button>
                <button onClick={onAdd2}>추가2</button>
                <button onClick={onAdd3}>추가3</button>
                <button onClick={onAdd4}>추가4</button>

            </p>

            {
            data.map((item,index)=><p key={item.id}>
                {item.id} / {item.name} /{item.age} /{item.done ? '참' : '거짓'} 
                </p>)
            }  
            <hr/>
            {
                data.map(item=><p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }

        </div>
    );
};

export default Test1;