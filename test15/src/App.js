import React from 'react';
import Test1 from './components/Test1';
import Test10 from './components/Test10';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Test5 from './components/Test5';
import Test6 from './components/Test6';
import Test7 from './components/Test7';
import Test8 from './components/Test8';
import Test9 from './components/Test9';

const App = () => {
  return (
    <div>
      {/* <Test1/> */}
      {/* <Test2/> */}
      {/* <Test3/> */}
      {/* <Test4/> */}
      {/* <Test5/> */}
      {/* <Test6/> */}
      {/* <Test7/> */}
      {/* <Test8/> */}
      {/* <Test9/> */}
      <Test10/>
    </div>
  );
};

export default App;

/*
useMemo : return 값을 기억함
useCallback : 함수 자체를 기억함

useMemo(함수, 의존성)
useMemo(()=>{}, deps)
useMemo(()=>{}, [의존변수])

useCallback(함수, 의존성)
useCallback(()=>{}, [의존변수])
*/