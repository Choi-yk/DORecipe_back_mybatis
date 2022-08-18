const NoticeList = ({ removePost, state }) => {
  const removePostOnclick = () => {
    removePost(state.id);
  };
  return (
    <>
      <li>
        <div className="noticeNo">{state.id}</div>
        <div className="noticeTitle">{state.NoticeTitle}</div>

        <div className="noticeDate">{state.NoticeDate}</div>
        <div className="removeOrDelete">
          <button>수정</button>
          <button onClick={removePostOnclick}>삭제</button>
        </div>
      </li>
    </>
  );
};
export default NoticeList;
