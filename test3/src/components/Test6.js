import React, { useState } from 'react';
import "./Test6.css";

const Test6 = () => {

    //객체는 대괄호 []
    const [data, setData] = useState([
        {id:1, name:'배수지', age:27, addr:'서울', done:true},
        {id:2, name:'유인나', age:40, addr:'부산', done:false},
        {id:3, name:'정인선', age:27, addr:'제주', done:true},
        {id:4, name:'강아람', age:25, addr:'강원', done:false},
        {id:5, name:'이영애', age:48, addr:'대구', done:true},
        {id:6, name:'한효주', age:32, addr:'광주', done:false},
    ])

    return (
        <div className='wrap'>
            <h2>내맘대로 뽑는 연예인 포카</h2>
            <table>
                <col className='w1'/>
                <col className='w2'/>
                <col className='w3'/>
                <col className='w4'/>
                <col className='w5'/>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>참여 여부</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index)=>
                            
                    <tr key={item.id}>
                        {/* <td>{data[0].id}</td>
                        <td>{data[0].name}</td>
                        <td>{data[0].age}</td>
                        <td>{data[0].addr}</td>
                        <td>{data[0].done ? '참여' :'미참여'}</td> */}
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.addr}</td>
                        <td>{item.done ? '참여' :'미참여'}</td>
                    </tr>
                    )
                }
                    

                </tbody>
            </table>
        </div>
    );
};

export default Test6;