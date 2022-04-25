import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {

    const [data, setData] = useState('')

    //1.fetch 사용법 : js에서 지원
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res=>res.json())//json형태다
    //     //.then(res=>console.log(res))
    //     .then(res=>setData(res))

    // }, [])

    //2.AXIO 사용법
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //     .then(res=>setData(res.data))
    // })

    //3.async/await 사용(Promise의 단점을 보완)
    // useEffect(()=>{
    //     const getData = async()=> {

    //         const res = await fetch ('https://jsonplaceholder.typicode.com/todos')
    //         const data = await res.json()
    //         setData(data)
    //     }
    //     getData()
    // }, [])

    //4.async/await + axios 사용
    useEffect(()=>{
        const getData = async()=> {

            const res = await axios.get ('https://jsonplaceholder.typicode.com/todos')
            setData(res.data)
        }
        getData()
    }, [])

    return (
        <div>
           {
                data && data.map(item=>
                <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test1;
/*
AJAX 요청법
1.fetch 사용법 : js에서 지원
fetch(url, [option])

fetch(url)
.then(응답=> 응답.json())

fetch(url)
.then(응답=>응답.json())

2.AXIO 사용법
axios.get(url)
.then(응답=>응답.data)
.then 동기처리

3.async/await 사용(Promise의 단점을 보완)
비동기를 동기처럼 사용가능

4.async/await + axios 사용
[js의 데이터와 json데이터 비교]
js file -> import aaa from './경로/filename'

export default [
    {
        id:1,
        name:'수지',
        ahe:20,
        addr:'seoul'
    }
]
--------------------
json file -> import aaa from './경로/filename.json

[
    {
        id:1,
        name:'수지',
        ahe:20,
        addr:'seoul'
    }
]
*/