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
      updatedAt: 1654064371505,
    },
    {
      title: 'Memo2',
      content: 'This is memo2',
      createdAt: 1654064386920, // 시간
      updatedAt: 1654064391128,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);
  const setMemo = (newMemo) => {
    // memos[selectedMemoIndex] = newMemo; // 직접적으로 newMemo를 할당하므로 memos 를 바꿔버림. 불변성 훼손.
    const newMemos = [...memos]; // 미리 memos copy후에 값 할당. 불변성 유지.
    newMemos[selectedMemoIndex] = newMemo;
    setMemos([...newMemos]); // 리렌더링을 위해 새로운 reference 설정
  };

  const addMemo = () => {
    const now = new Date().getTime;

    setMemos([
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
