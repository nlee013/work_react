import React, { useReducer } from 'react';

const initialState = {width:100}
const reducer = (state, action)=>{

    switch(action.type){
        case 'PLUS':
            return {
                width:state.width + action.step
            }

        case 'MINUS':
            return {
                width:state.width - action.step
            }

        case 'RESET':
            return{
                width:100
            }

        default:
            return state
    }
}
const Test9 = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div style={{width:state.width, height:100, background:'tomato',
            margin:123, transition:'0.3s'}}></div>
                <p>
                    <button onClick={()=>dispatch({type:'PLUS', step:30})}>
                        증가
                    </button>
                    <button onClick={()=>dispatch({type:'MINUS', step:30})}>
                        감소
                    </button>
                    <button onClick={()=>dispatch({type:'RESET'})}>
                        초기화
                    </button>
                </p>
        </div>
    );
};

export default Test9;