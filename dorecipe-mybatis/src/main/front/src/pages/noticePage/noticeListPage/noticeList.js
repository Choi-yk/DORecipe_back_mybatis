import { Link } from "react-router-dom";
import axios from "axios";

const NoticeList = ({ removePost, state }) => {
  const removePostOnclick = () => {
    removePost(state.notice_num);
  };

  // function testAxios() {
  //   axios({
  //     url: "/notice/list",
  //     method: "get",
  //     data: {
  //       notice_num: "test1",
  //       notice_title: "test1",
  //       notice_content: "test입닌당",
  //       notice_creDate: "2022/08/17",
  //     },
  //     baseURL: "http://localhost:9000",
  //   }).then(function (response) {
  //     console.log(response.data);
  //   });
  // }

  return (
    <>
      <li>
        <div className="noticeNo">{state.notice_num}</div>
        {/* <div className="noticeTitle">{state.NoticeTitle}</div> */}
        <Link className="noticeTitle" to={`/notice/detail/${state.notice_num}`}>
          {state.notice_title}
        </Link>

        <div className="noticeDate">{state.notice_creDate}</div>
        <div className="updateOrDelete">
          <Link className="updateList" to={`/notice/update/${state.notice_num}`}>
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
