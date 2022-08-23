import "./style.css";
import { useState, useCallback, useEffect } from "react";
import EventList from "./eventList";
import { Link } from "react-router-dom";
import axios from "axios";

const EventPage = () => {
  const [state, setState] = useState([
    {
      event_num: 0,
      event_title: "",
      event_content: "",
      event_path: "",
      event_creDate: "",
      event_finDate: "",
    },
  ]);

  function testAxios() {
    axios({
      url: "/event/list",
      method: "get",
      data: {
        event_num: "test1",
        event_title: "test1",
        event_path: "test1",
        event_content: "test1",
        event_creDate: "2022/08/17",
        event_finDate: "2022/08/17",
      },
      baseURL: "http://localhost:9000",
    }).then(function (response) {
      console.log(response.data);
      setState(response.data);
    });
  }

  useEffect(() => {
    testAxios();
  }, []);

  const removePost = useCallback((event_num) => {
    const removeState = state.filter((item) => item.event_num !== event_num);
    setState(removeState);
    axios
      .get(`http://localhost:9000/event/delete/${event_num}`)
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <div className="eventWrap">
        <h2>| Event |</h2>
        <Link className="updateList" to={"/event/create"}>
          등록
        </Link>
        <div className="eventTableWrap">
          <ul>
            <div className="tableHead">
              <div className="eventNo">No.</div>
              <div className="eventTitle">제목</div>
              <div className="eventDate">참여 기간</div>
              <div className="updateOrDelete">수정 및 삭제</div>
            </div>
            {state.map((e) => (
              <EventList
                key={e.event_num}
                removePost={removePost}
                // updatePost={updatePost}
                state={e}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default EventPage;
