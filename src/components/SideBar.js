import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';

function SideBar({ memos, addMemo }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList memos={memos} />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
