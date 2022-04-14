import React from 'react';

//event 만들기
const Test7 = () => {
    const click1 = () =>{

        alert('click1..')
    }

    const click2 = () =>{

        alert('click2..')

    }

    return (
        <div>
            <h2>Event 사용</h2>
            <p>
                <button onClick={click1}>Click1</button>
                <button onClick={click2}>Click2</button>
            </p>
            <p>
                <button onClick={() => alert('click3')}> Click3</button>
                <button onClick={() => alert('click4')}> Click4</button>
            </p>
        </div>
    );
};

export default Test7;