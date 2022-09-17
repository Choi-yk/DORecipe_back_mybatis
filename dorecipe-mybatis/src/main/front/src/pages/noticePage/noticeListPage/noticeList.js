import { Link } from "react-router-dom";
import axios from "axios";

const NoticeList = ({ removePost, state, user }) => {
  const removePostOnclick = () => {
    removePost(state.notice_num);
  };

  return (
    <>
      <li>
        <div className="noticeNo">{state.notice_num}</div>
        {/* <div className="noticeTitle">{state.NoticeTitle}</div> */}
        <Link className="noticeTitle" to={`/notice/detail/${state.notice_num}`}>
          {state.notice_title}
        </Link>

        <div className="noticeDate">{state.notice_creDate}</div>
        {/* {user.auth.user.roles.includes("ROLE_ADMIN") && ( */}
        {user.showAdminBoard && (
          <div className="updateOrDelete">
            <Link
              className="updateList"
              to={`/notice/update/${state.notice_num}`}
            >
              수정
            </Link>
            <span className="deleteList" onClick={removePostOnclick}>
              삭제
            </span>
          </div>
        )}
      </li>
    </>
  );
};
export default NoticeList;
