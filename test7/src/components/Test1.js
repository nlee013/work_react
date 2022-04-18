import React from 'react';

const Test1 = () => {

    const onAddr1 = () =>{
        alert('test')
    }
    const onAddr2 = (text) =>{
        alert(text)
    }
    return (
        <div>
            <button onClick={onAddr1}>확인1</button>
            <button onClick={()=> onAddr2('안녕!')}>확인2</button>
        </div>
    );
};

export default Test1;