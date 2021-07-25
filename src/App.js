import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '뭐가뭐야', '맛집추천']);
  let [count, setCount] = useState(0);
  
  return (    
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={()=>{setCount(count++)}}>👍</span> {count} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}
export default App;
