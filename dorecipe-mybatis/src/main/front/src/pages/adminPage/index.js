import { useCallback, useEffect, useState} from "react";
import "./style.css";
import "../../style/bootstrap.min.css";
// import "../.././bootstrap.min.css";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { useInput } from "../../hooks/useInput";
import { Link } from "react-router-dom";

const AdminPostMng = () => {
	
  function axios() {}
  
  let [tap, setTap] = useState(0);

  return (
    <>
      <div className="postMngWrap">
        <h3 className="left">게시물 등록</h3>
        <hr className="left width" />
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




function TabContent(props){

// event
  const [event_title, onChangeEventTitle, setTitle] = useInput("");
  const [event_path, onChangeEventPath, setPath] = useInput("");
  const [event_content, onChangeEventContent, setContent] = useInput("");
  const [event_creDate, onChangeEventCreDate, setCDate] = useInput("");
  const [event_finDate, onChangeEventFinDate, setFDate] = useInput("");

  const [emptyError, setEmptyError] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{

    if (event_title.length > 0 ? setEmptyError(false) : setEmptyError(true))
    return;

  },[event_title]);


  const eventHandler= (()=>{
    alert("등록 되었습니다.")
  })

  const data = {
    event_title: `${event_title}`,
    event_path: `${event_path}`,
    event_content: `${event_content}`,
    event_creDate: `${event_creDate}`,
    event_finDate: `${event_finDate}`,
  }
  
  const blob = new Blob([JSON.stringify(data)],{
    type : "application/json",
  });
  
  const formData = new FormData();
  formData.append("data",blob);

  formData.append("event_title",data.event_title);
  formData.append("event_path",data.event_path);
  formData.append("event_content",data.event_content);
  formData.append("event_creDate",data.event_creDate);
  formData.append("event_finDate",data.event_finDate);

  
  axios({
    method: "POST",
    url : "http://localhost:9000/event/insert",
    headers: { "Content-Type": "multipart/form-data" },
    data: formData
  }).then((response)=>{
    console.log(response.data);
  },
    [event_title,event_path,event_content,event_creDate,event_finDate]
  );
  // 끝



  return(
[
<div>
  <form>
    <h4 className="left">공지사항</h4>
    <table className="left">
      <thead>
        <tr>
          <td>제목</td>
          <td>
            <input
            	name="notice_title"
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
        </tr>   
      </tbody>  
    </table>
      <button className="left2 btn btn-outline-secondary">등록</button>
  </form>
</div>
,// 공지사항 끝

<div>
  <form>
    <h4 className="left">이벤트</h4>
    <table className="left">
    <thead>
      <tr>
          <td>제목</td>
          <td>
            <input
              name="event_title"
              className="text"
              required
              type="text"
              placeholder=" 제목을 입력해주세요"
              onChange={onChangeEventTitle}
            />
          </td>
      </tr>
      </thead><tbody>
      <tr>
        <td>파일 첨부</td>
          <td>
            <input
              name="event_path"
              type="file"
              onChange={onChangeEventPath}
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
              required
              onChange={onChangeEventContent}
            ></textarea>
          </td>
      </tr>
      <tr>
        <td>이벤트 기간</td>
        <td>
          <input name="event_creDate" className="date" 
                  type="date"
                  required
                  onChange={onChangeEventCreDate}
          /> ~
          <input name="event_finDate" className="date" 
                  type="date"
                  required
                  onChange={onChangeEventFinDate}
                  />
        </td>
      </tr>  
      </tbody>   
    </table>
    <Link className="mt-3 left2 btn btn-outline-secondary" to={"/event/list"}>이벤트페이지</Link>
    <button type="button" 
            className="left3 btn btn-outline-secondary"
            onClick={eventHandler}
            disabled={error}
    >등록</button>
  </form>
</div>
,// 이벤트 끝

<div>
  <form method="post"
  	action="http://localhost:9000/knowhow/insert">
    <h4 className="left">노하우</h4>
    <table className="left">
      <thead>
        <tr>
          <td>제목</td>
          <td>
            <input
            	name="know_title"
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
              	name="know_path"
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
              	name="know_content"
                className="text" 
                rows="4" 
                cols="50"
              ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
    <button className="left2 btn btn-outline-secondary" type="submit">등록</button>
  </form>
</div>
//노하우 끝

][props.tap]// tap 0은 공지사항 1은 이벤트 2는 노하우
    )
  }



export default AdminPostMng;
