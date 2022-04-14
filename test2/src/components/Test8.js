import React from 'react';

const Test8 = () => {

    const title = '연예인'
    const arr = ['배수지', '유인나', '정인선', '강아람', '이영애']
    const data = [
                {id:1, name:'배수지', age:27},
                {id:2, name:'유인나', age:40},
                {id:3, name:'정인선', age:28},
                {id:4, name:'강아람', age:25},
                {id:5, name:'이영애', age:48},
    ]
    return (
        <div>
            <h2>{title}</h2>
            <p>{arr[0]}</p>
            <p>{arr[3]}</p>
            
            {
                arr.map((item, index)=> {

                    return (<p key={index}>{index}/{item}</p>)
                })
            }
            <hr/>

            {
                arr.map((item, index)=> {

                    return (<p key={index}>{index}/{item}</p>)
                })
            }
            <hr/>
            {
                data.map((item, index)=> {

                    return (<p key={item.id}>{item.id}/{item.name}/{item.age}</p>)
                })
            }
            <hr/>
            {
                data.map((item, index)=>
                    <p key={index}>{item.id}/{item.name}/{item.age}</p>)
            }
        </div>
    );
};
//react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
//오류가 f12 console창에 뜨는건 반복되지 않는 고유 index값 만들어달라는 것
//unique key값을 만들라는 뜻이므로 key값을 5, 6, 7, 8 이렇게 줄 필요 없고
//<p key={index}>이런식으로 만든다

export default Test8;