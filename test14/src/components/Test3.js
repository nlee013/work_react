import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test3 = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const  [error, setError] = useState('')
    const  [valueId, setValueId] = useState(1)
    const  [num, setNum] = useState(1)
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${valueId}`)
        .then(res=>{
            setData(res.data)
            setLoading(false)
            setError('')

        }).catch(error=>{
            setData({})
            setLoading(true)
            setError('주소를 찾지 못함...')
        })
    }, [num])

    //사용자가 입력할 때 마다
    const click1 = () =>{
        setNum(valueId)
    }

    return (
        <div>
            <input type='text' value={valueId}
            onChange={evt=>setValueId(evt.target.value)}/>

            <button onClick={click1}>검색</button>
            
            <h4>
                {
                    data && loading ? <h2>로딩중...</h2> :
                    <h3>출력: {data.title}</h3>
                }
                <p>
                    {error ? error : null}
                </p>
            </h4>
        </div>
    );
};

export default Test3;