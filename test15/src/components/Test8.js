import React, { useReducer } from 'react';

const initialState = 0

const reducer = (state, action) => {

    switch(action.type){

        case 'INCREMENT':
            return state + action.step

        case 'DECREMENT':
            return state - action.step

        default :
            return state
        
    }
}
const Test8 = () => {

    const [count1, dispatcher1] = useReducer(reducer, initialState)
    const [count2, dispatcher2] = useReducer(reducer, 100)
    const [count3, dispatcher3] = useReducer(reducer, 200)

    return (
        <div>
            <h2>출력: {count1}</h2>
            <p>
                <button onClick={()=>dispatcher1({type: 'INCREMENT', step:10})}>
                    증가10
                </button>
                <button onClick={()=>dispatcher1({type: 'DECREMENT', step:50})}>
                    감소50
                </button>
            </p>
            <hr/>
            <h2>출력: {count2}</h2>
            <p>
                <button onClick={()=>dispatcher2({type: 'INCREMENT', step:100})}>
                    증가100
                </button>
                <button onClick={()=>dispatcher2({type: 'DECREMENT', step:200})}>
                    감소200
                </button>
            </p>
            <hr/><h2>출력: {count3}</h2>
            <p>
                <button onClick={()=>dispatcher3({type: 'INCREMENT', step:500})}>
                    증가500
                </button>
                <button onClick={()=>dispatcher3({type: 'DECREMENT', step:500})}>
                    감소500
                </button>
            </p>
            <hr/>
        </div>
    );
};

export default Test8;