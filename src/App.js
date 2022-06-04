import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { getItem, setItem } from './lib/storage';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

const debouncedSetItem = debounce(setItem, 2000);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
    },
    [selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    const now = new Date().getTime;
    const newMemos = [
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ];

    setMemos(newMemos);
    debouncedSetItem('memo', newMemos);
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        debouncedSetItem('memo', newMemos);
        return newMemos;
      });

      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
