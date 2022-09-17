import { Link } from "react-router-dom";

const EventList = ({ removePost, state, BtnState }) => {
  // 현재 년-월-일 구해서 event_finDate와 비교
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  if (month < 10) {
    month = String("0" + month);
  }
  let date = today.getDate();
  let day = String(year + "-" + month + "-" + date);
  console.log(state.event_finDate);
  console.log(day);
  //--------------------

  const removePostOnclick = () => {
    removePost(state.event_num);
  };

  return (
    <>
      <li>
        <div className="noticeNo">{state.event_num}</div>

        <Link className="noticeTitle" to={`/event/detail/${state.event_num}`}>
          {state.event_title}
        </Link>

        <div className="noticeDate">
          {state.event_creDate}~{state.event_finDate}
          {state.event_finDate <= day ? (
            <span className="finDate"> [종료]</span>
          ) : null}
        </div>
        {BtnState && (
          <div className="updateOrDelete">
            <Link
              className="updateList"
              to={`/event/update/${state.event_num}`}
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

export default EventList;
