import { Link } from "react-router-dom";

const EventList = ({ removePost, state }) => {

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
          {
            state.event_finDate <= "2022-09-23"
            ? <span className="finDate"> [종료]</span>
            : null
          }
        </div>
        <div className="updateOrDelete">
          <Link className="updateList" to={`/event/update/${state.event_num}`}>
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

export default EventList;
