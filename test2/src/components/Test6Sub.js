import React from 'react';
import PropTypes from 'prop-types';

const Test6Sub = ({title, name, age, addr, tel, color, done}) => {
    return (
        // <div style={{border:'1px solid rgb(212, 172, 245)', padding:30}}>
        <div style={{border:`1px solid ${color}`, padding:30}}>
            <h2>{title}</h2>
            <ul>
                <li>이름: {name}</li>
                <li>나이: {age}</li>
                <li>주소: {addr}</li>
                <li>전화: {tel}</li>
                <li>색상: {color}</li>
                <li>로그인 여부: {done ? '로그인' : '로그아웃'}</li>
            </ul>
        </div>
    );
};

//props의 data type definition
Test6Sub.propTypes ={
    name:PropTypes.string.isRequired,//반드시 필수로 필요
    age: PropTypes.number.isRequired,
    addr:PropTypes.string,
    tel:PropTypes.string,
    color:PropTypes.string,
    done:PropTypes.bool
}
//props의 기본값
Test6Sub.defaultProps = {
    name: '무명',//반드시 필수로 필요
    age: '30',
    addr: '대한민국',
    tel: '010-000-0000',
    color: 'rgb(239, 236, 146)',
    done: true
}

export default Test6Sub;
