import { useState} from "react";
import "./style.css";
import "../../style/bootstrap.min.css";
// import "../.././bootstrap.min.css";
import { Nav } from "react-bootstrap";
import axios from "axios";

const AdminPostMng = () => {
  function axios() {}
  let [tap, setTap] = useState(0);

  // const [postState, setPostState] = useState([
  //   {
  //     id: 1,
  //     noticeType: "공지사항",
  //     // NoticeTitle: "공지사항1",
  //     // NoticeDate: "2022/08/19",
  //   },
  //   {
  //     id: 2,
  //     noticeType: "노하우",
  //     // NoticeTitle: "공지사항1",
  //     // NoticeDate: "2022/08/19",
  //   },
  //   {
  //     id: 3,
  //     noticeType: "이벤트",
  //     // NoticeTitle: "공지사항1",
  //     // NoticeDate: "2022/08/19",
  //   },
  // ]);

  return (
    <>
      <div className="postMngWrap">
        <h3 className="left">게시물 등록</h3>
        <hr className="left" />
        <Nav className="left width" variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTap(0);
              }}
              eventKey="link0"
            >
              공지사항
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTap(1);
              }}
              eventKey="link1"
            >
              이벤트
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTap(2);
              }}
              eventKey="link2"
            >
              노하우
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent tap={tap} />
      </div>
    </>
  );
};

function TabContent({ tap }) {
  return [
    <div>
      <form>
        <h4 className="left">공지사항</h4>
        <table className="left">
          <thead>
            <tr>
              <td>제목</td>
              <td>
                <input
                  className="text"
                  type="text"
                  id="postTitle"
                  placeholder=" 제목을 입력해주세요"
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>내용</td>
              <td>
                <textarea className="text" rows="4" cols="50"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="left2 btn btn-outline-secondary">등록</button>
      </form>
    </div>, // 공지사항 끝
    <div>
      <form method="post" action="http://localhost:9000/event/insert">
        <h4 className="left">이벤트</h4>
        <table className="left">
          <thead>
            <tr>
              <td>제목</td>
              <td>
                <input
                  name="event_title"
                  className="text"
                  type="text"
                  id="postTitle"
                  placeholder=" 제목을 입력해주세요"
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>파일 첨부</td>
              <td>
                <input
                  name="event_path"
                  type="file"
                  id="postTitle"
                  placeholder=" 제목을 입력해주세요"
                />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  name="event_content"
                  className="text"
                  rows="4"
                  cols="50"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>이벤트 기간</td>
              <td>
                <input name="event_creDate" className="date" type="date" /> ~
                <input name="event_finDate" className="date" type="date" />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          className="left2 btn btn-outline-secondary"
          //onClick={}
        >
          등록
        </button>
      </form>
    </div>, // 이벤트 끝
    <div>
      <form method="post" action="/event/insert">
        <h4 className="left">노하우</h4>
        <table className="left">
          <thead>
            <tr>
              <td>제목</td>
              <td>
                <input
                  className="text"
                  type="text"
                  id="postTitle"
                  placeholder=" 제목을 입력해주세요"
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>파일 첨부</td>
              <td>
                <input
                  type="file"
                  id="postTitle"
                  placeholder=" 제목을 입력해주세요"
                />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea className="text" rows="4" cols="50"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="left2 btn btn-outline-secondary" type="submit">
          등록
        </button>
      </form>
    </div>,
    //노하우 끝
  ][tap]; // tap 0은 공지사항 1은 이벤트 2는 노하우
}

export default AdminPostMng;
