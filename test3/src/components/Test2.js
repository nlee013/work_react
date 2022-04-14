import React, {useState} from 'react';

const Test2 = () => {

    const [bgColor, setBgColor] = useState('rgb(221, 197, 240)')

    const onColor = () =>{
        //setBgColor('rgb(153, 250, 246)')
        setBgColor(bgColor ===  'rgb(221, 197, 240)' ? 'rgb(153, 250, 246)' : 'rgb(221, 197, 240)')
    }
    return (//toggle key
        <div>
            <p>h2를 클릭하면 배경색이 light violet/light aqua</p>
            <h2 style={{width:400, padding:50,
                border:'3px solid rgb(239, 236, 146)',
                backgroundColor:bgColor, cursor:'pointer'}}
                onClick={onColor}>
                배경색: {bgColor}
            </h2>
        </div>
    );
};

export default Test2;