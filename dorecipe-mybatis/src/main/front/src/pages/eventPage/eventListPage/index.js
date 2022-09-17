import "./style.css";
import { useState, useCallback, useEffect } from "react";
import EventList from "./eventList";
import { Link } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../../layout/mainLayOut";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state);
  const [BtnState, setBtnState] = useState(user.auth.user);
  useEffect(() => {
    if (!user.auth.user) {
      setBtnState(false);
      return;
    } else {
      console.log("BtnState", user.auth.user.roles.includes("ROLE_ADMIN"));
      setBtnState(user.auth.user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  function testAxios() {
    axios.get("http://localhost:9000/event/list").then((result) => {
      setState(result.data);
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
        // console.log(data);
      });
  });

  return (
    <>
      <MainLayout>
        <div className="eventWrap">
          <h2>| Event |</h2>

          {BtnState && (
            <Link className="updateList" to={"/admin"}>
              등록
            </Link>
          )}
          <div className="eventTableWrap">
            <ul>
              <div className="tableHead">
                <div className="noticeNo">No.</div>
                <div className="noticeTitle">제목</div>
                <div className="noticeDate">참여 기간</div>
                {BtnState && <div className="updateOrDelete">수정 및 삭제</div>}
              </div>
              {state.map((e) => (
                <EventList
                  key={e.event_num}
                  removePost={removePost}
                  BtnState={BtnState}
                  // updatePost={updatePost}
                  state={e}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom" />
      </MainLayout>
    </>
  );
};
export default EventPage;
