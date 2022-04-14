import React from 'react';

//몇개든 만들수 있다(method) 자바에서는 class라고 생각하면 된다
const Sub = () =>{
    return(

        <div>
            <h2>배수지의 이달의 할일</h2>
            <ul>
                <li>장소: 서울</li>
                <li>날짜;2022-04-14</li>
                <li>시간:오전 11: 19</li>
                <li>내용: 스터디</li>
            </ul>
        </div>
    )
}

const Test3 = () => {
    return (
        <div>
            <Sub/>
            <hr/>
            <Sub/>
            <hr/>
            <Sub/>
        </div>
    );
};

export default Test3;