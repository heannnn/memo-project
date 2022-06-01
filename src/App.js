import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo1',
      content: 'This is memo1',
      createdAt: 1654064360688, // 시간
      updateAt: 1654064371505,
    },
    {
      title: 'Memo2',
      content: 'This is memo2',
      createdAt: 1654064386920, // 시간
      updateAt: 1654064391128,
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
