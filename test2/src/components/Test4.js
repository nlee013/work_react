import React from 'react';

//몇개든 만들수 있다(method) 자바에서는 class라고 생각하면 된다
//props 매개변수
//const Sub = (props) =>{--2)
const Sub = ({name, place, date, time, content}) =>{//--3)
    //비구조 할당 (많이 사용)
    //const {name, place, date, time, content} = props;--2)
    return(

        // <div>--1)
        //     <h2>{props.name}의 이달의 할일</h2>
        //     <ul>
        //         <li>장소: {props.place}</li>
        //         <li>날짜: {props.date}</li>
        //         <li>시간: {props.time}</li>
        //         <li>내용: {props.content}</li>
        //     </ul>
        // </div>
        
        //--2)
        <div>
            <h2>{name}의 이달의 할일</h2>
            <ul>
                <li>장소: {place}</li>
                <li>날짜: {date}</li>
                <li>시간: {time}</li>
                <li>내용: {content}</li>
            </ul>
        </div>
    )
}

const Test4 = () => {
    return (
        <div>
            {/*props :부모 controller에서 자식 controller로 값을 넘길 때 사용*/}
            <Sub name='오점뭐' place='집' date='22-04-14'
            time='PM12:00'content='점심먹기' />
            <hr/>
            <Sub name='1주년' place='성수' date='22-04-20'
            time='PM6:30'content='저녁먹기' />
            <hr/>
            <Sub name='1주년제대로' place='어디가지' date='22-04-23'
            time='PM12:30'content='벚꽃놀이 못하려나' />
            <hr/>
        </div>
    );
};

export default Test4;