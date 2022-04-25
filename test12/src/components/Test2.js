import React, {useEffect, useState} from 'react';

const dataList = [
    {id:1, name:'배수지'},
    {id:2, name:'abc'},
    {id:3, name:'aBc'},
    {id:4, name:'Dog'},
    {id:5, name:'CAT'},
    {id:6, name:'cat'},
    {id:7, name:'유인나'},
    {id:8, name:'유이'},
    {id:9, name:'정인선'},
    {id:10, name:'정인dk'}
]
const Test2 = () => {

const [data, setData] = useState(dataList)
const [text, setText] = useState('')
    
const changeInput = (evt) => {

     const {value} =evt.target
        setText(value)
    }
//원본인 dataList에서 찾아야된다
const click1 = () => {
    //setData(dataList.filter(item=>item.name.indexOf(text) !== -1))

    //대소문자 구분
    // setData(dataList.filter(item=>item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1))

    //includes 많이 사용안하지만 c라고 하면 c를 포함한 모든 문자 출력
    // setData(dataList.filter(item=>item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())))

    setData(dataList.filter(item=>{
        const result = new RegExp(text, 'ig')
        return item.name.match(result)
    }))
}

useEffect(()=> {

    setData(dataList.filter(item=>{
        const result = new RegExp(text, 'ig')
        return item.name.match(result)
    }))
}, [text])

    return (
        <div>
            <p>
                <input type='text' placeholder='검색어를 입력하세요'
                value={text} onChange={changeInput}/>
                <button onClick={click1}>검색</button>
                <hr/>
                <ul>
                    {
                        data.map(item=><li key={item.id}>{item.name}</li>)
                    }
                </ul>
            </p>
        </div>
    );
};

export default Test2;