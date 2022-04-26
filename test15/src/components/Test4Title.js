import React, { memo } from 'react';

const Test4Title = memo(() => {
    
    console.log("Test4Title")

    return (
        <div>
            <h1>Test4Title 입니다.</h1>
        </div>
    );
});

export default Test4Title;