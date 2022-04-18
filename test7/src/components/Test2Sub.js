import React from 'react';

const Test2Sub = ({onAdd, onRemove}) => {
    return (
        <div>
            <h3>이름 추가</h3>
            <p>
                <button onClick={()=> onAdd('배수지')}>배수지</button>
                <button onClick={()=> onAdd('유인나')}>유인나</button>
                <button onClick={()=> onAdd('정인선')}>정인선</button>
            </p>
            <h3>이름 삭제</h3>
            <p>
                <button onClick={()=> onRemove('박신혜')}>박신혜</button>
                <button onClick={()=> onRemove('한효주')}>한효주</button>
                <button onClick={()=> onRemove('강아람')}>강아람</button>
            </p>
        </div>
    );
};

export default Test2Sub;