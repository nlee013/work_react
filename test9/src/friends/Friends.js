import React, { useRef, useState } from 'react';
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import './style.css';
import friend from '../assets/api/FriendData';

const Friends = () => {

    const no = useRef(friend.length + 1)

    const [data,setData] = useState(friend)
    const [done,setDone] = useState(true)
 
    const click1 = () => {
        setData([])
    }

    const click2 = () => {
        setData(friend)
    }

    const changeChk = (evt) => {
        const {checked} = evt.target
        setDone(checked)
    }
 
    const onAdd = (form) => {
        
        form.id = no.current++
        setData([
            ...data,form
        ])
        
    }

    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
    }

    return (
        <div className='wrap'>
            <h1>친구들 총 인원: {data.length}명</h1>
            <p className='chk'>
                <input type='checkbox' checked={done} onChange={changeChk}/>
                {
                    done ? '추가 비활성' : '추가 활성'
                }
            </p>
            
            <FriendList data={data} onDel={onDel}/>

            <p className='btn'>
                <button onClick={click1}>모두 삭제</button>
                <button onClick={click2}>초기 복구</button>
            </p>
            {
                done && <FriendInput onAdd={onAdd}/>
            }
            
        </div>
    );
};

export default Friends;