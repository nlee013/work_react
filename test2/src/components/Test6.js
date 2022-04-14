import React from 'react';
import Test6Sub from './Test6Sub';

//Test6.js->Test6Sub.js->App.js
const Test6 = () => {
    return (
        <div>
            <Test6Sub
                title = '배수지 신상'
                name ='배수지'
                age={27}
                addr="서울"
                tel='010-123-1234'
                color='rgb(212, 172, 245)'
                done={true}
            />

            <Test6Sub
                title = '유인나 신상'
                addr="제주도"
                tel='010-123-1234'
                color='rgb(113, 230, 226)'
                done={false}
                />
        </div>
    );
};

export default Test6;