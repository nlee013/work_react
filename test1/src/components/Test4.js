import React from 'react';

const Test4 = () => {

    const style1 = {

        backgroundColor:'pink',
        fontSize:30,
        color:'green'
    }
    return (
        <div>
            <p 지금은 style={style1}>지금은 React 공부중</p>
            <p>오늘은 목요일</p>
            <p style={{backgroundColor:'tomato', 
                padding:0, fontSize:50, textIndent:20}}>
                지금은 React 공부중이라요
            </p>
        </div>
    );
};

export default Test4; 