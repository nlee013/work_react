import React, { useRef, useState } from 'react';

const Test8 = () => {


    const nameRef = useRef()

    //const [name,setName] = useState()
    //const [age,setAge] = useState()
    //const [addr,setAddr] = useState()

    const [form,setForm] = useState({
        name:'',age:'',addr:''
        
    })

    //비구조 할당
    const {name,age,addr} = form

    /*
    const onName = (evt) => {
        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value
        })
      }
    const onAge = (evt) => {
        const {value,name} = evt.target
        setForm({
            ...form,
           [name]:value
        })
      }
    const onAddr = (evt) => {
      const {value,name} = evt.target
      setForm({
        ...form,
          [name]:value
      })
    }
    */

    const changeInput = (evt) => {
        const {value,name} = evt.target
        setForm({
          ...form,
            [name]:value
        })
      }
    const onReset = () => {
       setForm({
           name:'',age:'',addr:''
       })

        nameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <input type='text' onChange={changeInput} value={name} name='name' ref={nameRef}/>
            <input type='text' onChange={changeInput} value={age} name='age'/>
            <input type='text' onChange={changeInput} value={addr} name='addr'/>
            <button onClick={onReset}>초기화</button>
            <br/>
            <h4>{name} / {age} / {addr}</h4>

        </div>
    );
};

export default Test8;