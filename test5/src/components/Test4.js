import React, { useState } from 'react';
import Test4Animal from './Test4Animal';
import Test4Name from './Test4Name';
import Test4Display from './Test4Display';

const Test4 = () => {

    const [name, setName] = useState(''); 
    const [ani, setAni] = useState('');

    const onName = (evt) => {

        const {value} = evt.target
        setName(value)
    }
    const onAni = (evt) => {

        const {value} = evt.target
        setAni(value)
    }
    return (
        <div>
            <Test4Name name={name} onName={onName}/>
            <br/>
            <Test4Animal name={ani} onAni={onAni}/>
            <br/>
            <Test4Display name={name} ani={ani}/>
        </div>
    );
};

export default Test4;