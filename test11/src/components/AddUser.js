import React, { useRef, useState } from 'react';
//나중에 이 파일과 db 연결 만들예정
const AddUser = ({onAdd}) => {

    const nameRef = useRef()

    const [user, setUser] = useState({
        name:'', job:''
    })

    const {name, job} = user
    const changeInput = (evt) => {

        const {value, name} = evt.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const onSubmit = (evt) => {

        //새로고침
        evt.preventDefault()

        //공백일 때 움직이지 못하게 만들기
        if(!name || !job) return

        onAdd(user)
        
        setUser({
            name:'', job:''
        })
        nameRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>모범 택시 고객 추가</h2>
            <p>
                <label>이름</label>
                <input type='text' value={name} name='name'
                onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
                <label>직업</label>
                <input type='text' value={job} name='job'
                onChange={changeInput}/>
            </p>
            <p>
                <button>추가</button>
            </p>
        </form>
    );
};

export default AddUser;