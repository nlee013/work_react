import React, { useReducer } from 'react';

//useReducer는 useState의 대체 함수
//복잡한 정적 로직 만드는경우/다음 state가 이전 state에 의존적인 경우
//더 사용함.
const initialState = 0;
const reducer = (state, action) => {

    switch(action.type){
        case 'INCREMENT' :
            return state + 1

        case 'DECREMENT' :
            return state - 1
        case 'RESET' :
            return 0
        default:
            return 0
    }
}
const Test7 = () => {

    //const [count, setCount] = useState(10)
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>출력: {count}</h2>
            <p>
                <button onClick={()=>dispatch({type:'INCREMENT'})}>
                    증가
                </button>
                <button onClick={()=>dispatch({type:'DECREMENT'})}>
                    감소
                </button>
                <button onClick={()=>dispatch({type:'RESET'})}>
                    초기화
                </button>
            </p>
        </div>
    );
};

export default Test7;

/*
1.액션명
별칭 - 증가별칭
사용자 정의 이름 - 영문 대소문자 가능.(주로 영문 대문자로 사용)
증가 : INCREMENT
감소 : DECREMENT
초기화: RESET

2.상태 업데이트 로직을 담는 함수(setter에 의해 변함)
const 함수명 = (state, action) => {

    switch(action.type){
        case '액션명' : 
        return '값'
    }
}

3.const [state, dispatch] = useReducer(reducer, initialState);

const [상태값, dispatch] = useReducer(상태 업데이트 로직을 담은 함수, 초기값)

4.이벤트 = {()=>dispatch({type:'액션명'})}

*/