import { Link } from "react-router-dom";

const NoticeList = ({ removePost, state }) => {
  const removePostOnclick = () => {
    removePost(state.id);
  };
  return (
    <>
      <li>
        <div className="noticeNo">{state.id}</div>
        {/* <div className="noticeTitle">{state.NoticeTitle}</div> */}
        <Link className="noticeTitle" to={`/notice/${state.id}`}>
          {state.NoticeTitle}
        </Link>

        <div className="noticeDate">{state.NoticeDate}</div>
        <div className="updateOrDelete">
          <Link className="updateList" to={`/admin/${state.id}`}>
            수정
          </Link>
          <span className="deleteList" onClick={removePostOnclick}>
            삭제
          </span>
        </div>
      </li>
    </>
  );
};
export default NoticeList;
