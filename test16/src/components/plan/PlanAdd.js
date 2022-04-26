import React, { useRef, useState } from 'react';
import {PlanForm} from '../styled/PlanStyled';

const PlanAdd = ({onAdd}) => {

    const textRef = useRef()

    const [form, setForm] = useState({
        text:'',
        day:'',
        daone:false
    })

    const {text, day, done} = form

    const changeInput1 = (evt) => {

        const {value, name} = evt.target

        setForm({
            ...form,
            [name]:value
        })
    }

    const changeInput2 = (evt) => {

        const {name, checked} = evt.target
        setForm({
            ...form,
            [name]:checked
        })
    }

    const onSubmit = (evt) => {

        //새로고침
        evt.preventDefault()

        if(!text || !day) return

        onAdd(form)

        setForm({
            text:'', day:'', done:false
        })
        
        textRef.current.focus()

        text()

    }
    return (
        <PlanForm onSubmit={onSubmit}>
            <div>
                <label>일정</label>
                <input type='text' value={text} name='text' onChange={changeInput1}
                ref={textRef}/>
            </div> 
            <div>
                <label>일시</label>
                <input type='text' value={day} name='day' onChange={changeInput1}/>
            </div> 
            <div>
                <label>중요</label>
                <input type='checkbox' checked={done} name='done' onChange={changeInput2}/>
            </div>
            <button type='submit'>저장</button>
        </PlanForm>
    );
};

export default PlanAdd;