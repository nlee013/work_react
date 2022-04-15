import React, { useRef, useState } from 'react';

const Test3 = () => {

    //useRef :DOM에 이름을 붙이기 const idRef = useRef();
    //1.Ref 이름선언
    //2.참조하는 부분 지정
    //3.참조하는 부분에 적용할 작업
    // [Ref이름].current.[작업]

    const idRef = useRef();

    const [userId,setUserId] = useState('')
    const [userPwd,setUserPwd] = useState('')

    const changeInput1 = (e) => {
        //setUserId(e.target.value)
        const {value} = e.target
        setUserId(value)
    }

    const changeInput2 = (e) => {
       // setUserPwd(e.target.value)
       const {value} = e.target
       setUserPwd(value)
    }

    const onReset = () => {
        setUserId('')
        setUserPwd('')
        idRef.current.focus()
    }

    return (
        <div>
            id: <input type='text' onChange={changeInput1} value={userId} ref={idRef}/>
            pwd: <input type='text' onChange={changeInput2} value={userPwd}/>
            <button onClick={onReset}>초기화</button>
            <h2>id: {userId}</h2>
            <h2>pwd: {userPwd}</h2>
        </div>
    );
};

export default Test3;