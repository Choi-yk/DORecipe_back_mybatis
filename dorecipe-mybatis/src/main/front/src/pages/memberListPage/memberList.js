import { Link } from "react-router-dom";

const MemberList = ({ removePost, state }) => {
  const removePostOnclick = () => {
    removePost(state.member_id);
  };

  return (
    <>
      <li>
        <div className="noticeNo">{state.member_name}</div>
        {/* <div className="noticeTitle">{state.NoticeTitle}</div> */}
        <Link className="noticeTitle" to={`/notice/${state.member_id}`}>
          {state.member_id}
        </Link>

        <div className="noticeDate">{state.member_email}</div>
        <div className="updateOrDelete">
          <Link className="updateList" to={`/admin/${state.member_id}`}>
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
export default MemberList;
