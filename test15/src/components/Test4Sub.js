import React from 'react';

const Test4Sub = ({text, count}) => {

    console.log("Test4Sub")

    return (
        <div>
            <h2>Test4Sub : {text} / {count}</h2>
        </div>
    );
};

export default React.memo(Test4Sub);