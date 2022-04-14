import React from 'react';

const Test3 = () => {

    const title = "신상정보";
    const name = '강아람';
    const age = 30;
    const addr = '서울';
    const gender = '여자';

    return (//jsx (babel이 js로 바꿔준다)
        <div>
            <h2>{title}</h2>
            <ul>
                <li>이름:{name}</li> 
                <li>나이:{age}</li> 
                <li>주소:{addr}</li> 
                <li>성별:{gender}</li> 
            </ul>
        </div>
        //주석 ctrl + /
    );
};

export default Test3;

//위는 rcs ctrl space
//class rcc ctrl space
