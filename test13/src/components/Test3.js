import React from 'react';
import './Test3.css';
import myStyle from './Test3.module.css';

/*
1.파일명.css
2.filename.module.css :기존 프로젝트에 class를 수정하지 않고
같은 이름으로 작성하되 이름이 중복되지 않게 해준다
-일반 css: className='box'
-model.css:파일명_클래스명_xxxx
-className={참조변수.box} => filename_box_xxx
 */

const Test3 = () => {
    return (
        <div className='wrap'>
            {/* css,module */}
            <div className='box'></div>
            <div className={myStyle.box}></div>

            {/* 다중 클래스 백틱 */}
            <div className='size bg'></div>
                <div className={`${myStyle.size} ${myStyle.bg}`}></div>
            <div className={`size ${myStyle.bg}`}></div>
            
             {/* 다중클래스 */}
             <div className={[myStyle.size,myStyle.bg].join(' ')}></div>
            <div className={['size',myStyle.bg].join(' ')}></div>
        </div>
    );
};

export default Test3;