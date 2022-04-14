import React, { Fragment } from 'react';
import './Test1.css';//css는 수동설치

const Test1 = () => {
    const title = '제목입니다.';

    //java에서 카멜 표기법
    //background-color->backgroundColor

    const style1 = {
        fontSize:40,
        backgroundColor:'lightblue',
        padding:10
    }
    return (
        <Fragment>
           <h2 style={style1}>{title}</h2>

           <div className='con-box'>
               <article>test1</article>
               <article>test2</article>
               <article>test3</article>
               <article>test4</article>
           </div>
        </Fragment>
    );
};

export default Test1;