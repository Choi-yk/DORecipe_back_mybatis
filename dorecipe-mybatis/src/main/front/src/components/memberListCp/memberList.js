import { Link } from "react-router-dom";
import "./style.css";
const MemberList = ({ removePost, state, isLoading, hasItems, countState }) => {
  const removePostOnclick = () => {
    removePost(state.member_id);
  };

  return (
    <>
      {hasItems === 0 ? (
        <li> 가입한 회원이 없습니다. </li>
      ) : (
        <li>
          <div className="noticeNo">
            {hasItems} {state.member_name}
          </div>
          <Link className="noticeTitle" to={`/member/${state.member_id}`}>
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
      )}
    </>
  );
};
export default MemberList;