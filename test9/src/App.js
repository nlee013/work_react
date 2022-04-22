import React from 'react';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';

const App = () => {
  return (
    <div>
      {/* <Test1/> */}
      {/* <Test2/> */}
      <Test3/>
    </div>
  );
};

export default App;

/*

useEffect
컴포넌트가 렌더링 될때마다 특정 작업을 시간을 정해
실행할 수 있도록 하는 Hook이다
화면에 랜더링(화면에 그려진) 후에 실행
component가 mount,unmount,update 됐을 때 실행이 된다

클래스형에서는 componentDidMount 와 componentDidUpdate,
 componentDidUnMount를 합쳐놓은것

2개의 인자를 받는데 
첫번째는 function으로써의 effect이고
두번째에 넣은 인수(인자) 상태가 바뀌면 첫번째 인수(인자)를 재실행 한다
useEffect(콜백함수,[의존함수])

mount란 : 리액트에서 특정 컴포넌트를 끼워넣는 것을 말함
#root dom에 App 넣기

useEffect가 실행되는 시점 :
1. 처음 화면을 랜더링할때 - mount
2. 업데이트 할때 - update
3. 화면이 사라질 때 - unmount

< 사 용 법 >
1. (잘안씀)
useEffect(()=>{
    실행문
})

2. (씀)
useEffect(()=>{
    실행문
}),([])     // [] = 한번만 실행해라

3. (씀)
useEffect(()=>{
    실행문
},[의존변수])   // 변수가 바뀔때마다 실행(update)

4. (가끔씀)
useEffect(()=>{
    실행문

    //effect의 뒷정리
    return()=>{
        실행문
    }
},[의존변수,의존변수])   

//뒷정리는 메모리 누수를 방지하기 위해서 
UI컴포넌트를 제거하기 전에 실행한다. //


*/