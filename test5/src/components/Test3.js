import React, { useState } from 'react';

const Name = () => {

    const [name,setName] = useState('배수지')

    const onChange = (evt) => {
        const {value} = evt.target
        setName(value)
    }

    return(//name은 자기 자신한테서 가져온것이고 나머지는 외부에서 가져오기
        <div>
            <h2>Name 컴포넌트</h2>
            <p>
                <label>이름:</label>
                <input type='text' value={name} onChange={onChange}/>
                <span style={{marginLeft:15}}>{name}</span>
            </p>
        </div>
    )
}

const Animal = ({ani,changeInput}) => {
    return(
        <div>
            <h2>Animal 컴포넌트</h2>
            <p>
                <label>동물:</label>
                <input type='text' value={ani} onChange={changeInput}/>
                <span style={{marginLeft:15}}>{ani}</span>
            </p>
        </div>
    )
}

const Display = ({ani}) => {
    return(
        <div>
            <h2>Display 컴포넌트</h2>
            <h2>내가 좋아하는 동물은 {ani} 입니다</h2>
        </div>
    )
}

const Test3 = () => {

    const [ani,setAni] = useState('')

    const changeInput = (evt) => {
        const {value} = evt.target
        setAni(value)
    }

    return (
        <div>
            <Name/>
            <hr/>
            <Animal ani={ani} changeInput={changeInput}/>
            <hr/>
            <Display ani={ani}/>
        </div>
    );
};

export default Test3;