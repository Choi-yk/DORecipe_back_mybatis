import "./style.css";
import { useState, useCallback, useEffect } from "react";
import NoticeList from "./noticeList";
import { Link } from "react-router-dom";
import axios from "axios";
import CommentService from "../../../services/CommentService";

const NoticePage = () => {
  const [state, setState] = useState([
    {
      notice_num: 0,
      notice_title: "",
      notice_content: "",
      notice_creDate: "",
    },
  ]);

  function testAxios() {
    axios({
      url: "/notice/list",
      method: "get",
      data: {
        notice_num: "test1",
        notice_title: "test1",
        notice_content: "test입닌당",
        notice_creDate: "2022/08/17",
      },
      baseURL: "http://localhost:9000",
    }).then(function (response) {
      console.log(response.data);
      // console.log(response.data[0]);
      setState(response.data);
    });
  }

  useEffect(() => {
    testAxios();
  }, []);

  const removePost = useCallback((notice_num) => {
    const removeState = state.filter((item) => item.notice_num !== notice_num);
    setState(removeState);
    axios
      .get(`http://localhost:9000/notice/delete/${notice_num}`)
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <div className="noticeWrap">
        <h2>| Notice |</h2>
        <Link className="updateList" to={"/notice/create"}>
          등록
        </Link>
        <div className="noticeTableWrap">
          <ul>
            <div className="tableHead">
              <div className="noticeNo">No.</div>
              <div className="noticeTitle">제목</div>
              <div className="noticeDate">작성일자</div>
              <div className="updateOrDelete">수정 및 삭제</div>
            </div>
            {state.map((e) => (
              <NoticeList
                key={e.notice_num}
                removePost={removePost}
                // updatePost={updatePost}
                state={e}
              />
            ))}
          </ul>
        </div>
        {/* <button onClick={() => testAxios()}>axiosTest</button> */}
      </div>
    </>
  );
};
export default NoticePage;
