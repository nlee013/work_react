import React, {useState} from 'react';

const Test2 = () => {

    // const [userName, setUserName] = useState('')
    // const [userPwd, setUserPwd] = useState('')
    const[form, setForm] = useState({
        userId:'',
        userPwd:''
    })

    const{userId, userPwd} = form

    const changeInput = (evt) => {

        const {value, name} = evt.target
        setForm({
            ...form,
            [name]:value
        })
    }
   

    return (
        <div>
            ID:<input type='text' onChange={changeInput}
            value={userId} name='userId'/><br/>
            PWD:<input type='text' onChange={changeInput}
            value={userPwd} name='usePwd'/><br/>
            <button disabled={userPwd.length < 7}>Confirm</button>
            {
                userPwd.length > 6 ?
                <button>confirm</button>:
                <button disabled>confirm</button>
            }
        </div>
    );
};

export default Test2;