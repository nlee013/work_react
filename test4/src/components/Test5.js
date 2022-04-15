import React, { useState } from 'react';

const Test5 = () => {

    const [check, setCheck] = useState(false)

    const changeCheck = (evt) => {

        const {checked} = evt.target
        setCheck(checked)
    }
    return (
        <div style={{color: check ? 'skyblue' : 'black'}}>
            <input type='checkbox' checked={check} onChange={changeCheck}/>
            체크박스를 클릭하세요 
        </div>
       

    );
};

export default Test5;