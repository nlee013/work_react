//Main Components
import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';

//class 형태는 너무 많고 무거워서
//method로 사용. java에서는 class 여기서는 component
function App() {
  return (
    <div>
      <h2>App.js : 화면에 보이는 App 컴포넌트</h2>
      {/* <Test1/> */}
      {/* <Test2/> */}
      <Test3/>
      <Test4/>
    </div>
  );
}

export default App;