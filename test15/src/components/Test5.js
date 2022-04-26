import React, { useCallback, useState } from 'react';

const Test5 = () => {

    const [count, setCount] = useState(1)
    const ran = Math.random()
    //console.log('test')

    const increment = useCallback(() => {

        console.log('incre: ' + ran)
        setCount(count + 1)
    },[])

    const decrement = useCallback(() => {

        console.log('decre:' + ran)
        setCount(count - 1)
    }, [])

    return (
        <div>
           <h1>{count}</h1>
           <button onClick={increment}>증가</button>
           <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Test5;