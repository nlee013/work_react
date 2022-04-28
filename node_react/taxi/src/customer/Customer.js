import React, {useEffect, useRef, useState} from 'react';
import taxiService from '../services/taxiService';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css';

const Customer = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        onData()
    }, [])

    //공간을 만들고 수정데이터를 넣어놨다가 input창으로 전달
    const [current, setCurrent] = useState({})

    //수정 클릭시 추가 수정 교체용 버튼 만들 예정
    const [isEdit, setIsEdit] = useState(false)

    const [msg, setMsg] = useState('')
    const [isShow, setIsShow] = useState(false)

    const onData = async () =>{
        const res = await taxiService.getUser()
        setUsers(res)//출력
    }
    const onAdd = (user, image) => {

        taxiService.addUser(user, image)
        onData()
        setMsg('명단을 추가합니다.')
        setIsShow(true)
    }

    const onDel = (item) => {

        taxiService.deleteUser(item._id)
        onData()
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
        taxiService.updateUser(data)
        onData()
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