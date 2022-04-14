import React, { Fragment } from 'react';

const Test1 = () => {
    return (
        // <div>
        //     <h2>JSX영역 : 화면에 보이는 부분</h2>
        // </div>

        // <Fragment>
        //     <h2>JSX영역</h2>
        //     <p>return() 한줄 이상은 div로 묶어준다</p>
        //     <p>div로 계속해서 묶어줄때는 ul안에 div는 사용불가다</p>
        // </Fragment>

        <>
        <p>외태그에는 반드시 /를 해줌</p>
        <br/>
        </>
    )
}
export default Test1;