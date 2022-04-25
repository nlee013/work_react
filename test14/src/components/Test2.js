import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test2 = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const  [error, setError] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            setData(res.data)
            setLoading(false)
            setError('')

        }).catch(error=>{
            setData([])
            setLoading(true)
            setError('data를 찾을 수 없습니다.')
        })
    }, [])

    return (
        <div>
            {
                data && loading ? <h2>로딩중...</h2>:
                data.map(item=><p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
            <p>
                {error ? error : null}
            </p>
        </div>
    );
};

export default Test2;