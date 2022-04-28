import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({data}) => {

    const {name} = useParams() //name은 App(3)의 name과 같음 ★useParams뭐하는애?

    return (
        <div>
            <h1>Front 페이지 입니닷</h1>
            {
                data.filter(item=>item.title===name).map((item,index)=>(
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <h2>{item.info}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default Front;