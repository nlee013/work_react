import React, { Fragment, useState } from 'react';

//toggle key처럼 만들어준다

const Test6 = () => {

    const [check, setCheck] = useState(false)

    const onToggle = (evt) => {

        const {checked} = evt.target
        setCheck(checked)
    }
    return (
        <Fragment>
            <p>
                <input type='checkbox' checked={check} onChange={onToggle}/>
                {check ? '숨기기' : '보이기'}
            </p>

            {
                check && 
            <div style={{width:400, height:100, background:'pink', margin:30}}>
                보이냥 냥냥?
            </div>
            }
        </Fragment>
    );
};

export default Test6;