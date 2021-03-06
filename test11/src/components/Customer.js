import React, {useRef, useState} from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css'

const Customer = () => {

    const no = useRef(5)
    const userData = [
        {id:1, name:'배수지', job:'무지개 택시 기사'},
        {id:2, name:'유인나', job:'무지개 택시 대표'},
        {id:3, name:'정인선', job:'무지개 택시 이사'},
        {id:4, name:'박신혜', job:'무지개 택시 경리'}
    ]

    const [users, setUsers] = useState(userData)

    //공간을 만들고 수정데이터를 넣어놨다가 input창으로 전달
    const [current, setCurrent] = useState({})

    //수정 클릭시 추가 수정 교체용 버튼 만들 예정
    const [isEdit, setIsEdit] = useState(false)

    const [msg, setMsg] = useState('')
    const [isShow, setIsShow] = useState(false)

    const onAdd = (user) => {

        user.id = no.current++
        setUsers([
            ...users,
            user
        ])

        setMsg('명단을 추가합니다.')
        setIsShow(true)
    }

    const onDel = (id) => {

        setUsers(users.filter(user=>user.id !== id))
        setMsg('명단을 삭제합니다.')
        setIsShow(true)
    }

    const onEdit = (user) => {
        setIsEdit(true)
        setCurrent(user)
        setMsg('명단을 수정합니다.')
        setIsShow(true)
    }

    const onUpdate = (data) => {
        setIsEdit(false)
        setUsers(users.map(user=>user.id === data.id ? data:user))
        setMsg('명단을 수정 완료합니다.')
        setIsShow(true)
    }
    return (
        <div className='Customer'>
          {
              isEdit ? <EditUser current={current} onUpdate={onUpdate}
              setIsEdit={setIsEdit}/> : <AddUser onAdd={onAdd}/>
          
          }
          <ListUser users={users} onDel={onDel}
          onEdit={onEdit}/> 

          <Message msg={msg} isShow={isShow} setIsShow={setIsShow}/>
        </div>
    );
};

export default Customer;