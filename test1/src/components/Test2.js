import React, { Fragment } from 'react';

const Test2 = () =>{

    return(

        // <div>
        //     <p>함수로 만든 컴포넌트</p>
        // </div>
        //div 역할이다. 
        
        // <Fragment>
        // <h2>JSX영역</h2>
        // <p>return() 한줄 이상은 div로 묶어준다</p>
        // <p>div로 계속해서 묶어줄 때는 ul안에 div는 사용불가</p>
        // </Fragment>

        <>
        <p>외태그에는 반드시 /를 해줌</p>
        <input type="text"/>
        </>
    );
}

 export default Test2;