import React, { useRef, useState } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {

    const no = useRef(7)//id:no.current++,

    const [data, setData] = useState([
        {id:1,name:'배수지'},
        {id:2,name:'유인나'},
        {id:3,name:'정인선'},
        {id:4,name:'강아람'},
        {id:5,name:'박신혜'},
        {id:6,name:'한효주'},

    ])

    const onAdd = (text) =>{
       //alert('추가')
        setData([
        ...data,
            {
                id:no.current++,//const no = useState(7)
                name:text //사용자에게 입력값을 받을예정
            }
        ])
    }
    const onRemove = (name) =>{
        //alert('삭제')
        setData(data.filter(item=>item.name!==name))//id!==3 3만 빼고 출력
    }
    return (
        <div>
            {
                data.map(item=>
                <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
            <hr/>
            <Test2Sub onAdd={onAdd} onRemove={onRemove}/>
        </div>
    );
};

export default Test2;