import { useCallback, useEffect, useRef, useState} from "react";
import "./style.css";
import "../../style/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { useInput } from "../../hooks/useInput";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminPostMng = () => {
   
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

// event---------------------------------------------------------------
  const [event_title, onChangeEventTitle, setTitle] = useInput("");
  const [event_path, onChangeEventPath, setPath] = useInput("");
  const [event_content, onChangeEventContent, setContent] = useInput("");
  const [event_creDate, onChangeEventCreDate, setCDate] = useInput("");
  const [event_finDate, onChangeEventFinDate, setFDate] = useInput("");

  const [emptyError, setEmptyError] = useState(null);
  const [error, setError] = useState(null);


const eventHandler = useCallback(
  (e)=>{
  e.preventDefault();
  

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
  formData.append("event_image",files[0]);
  formData.append("event_path",data.event_path);
  formData.append("event_content",data.event_content);
  formData.append("event_creDate",data.event_creDate);
  formData.append("event_finDate",data.event_finDate);

  // data 비워져 있으면 보내지 않고 alert
  if(data.event_title === "" || 
     data.event_content === "" ||
     data.event_creDate === "" ||
     data.event_finDate === ""  ){
        alert('제목, 내용, 이벤트 기간을 입력해 주세요.');
      }else{
        alert("등록되었습니다.");
        
    axios({
      method: "POST",
      url : "http://localhost:9000/event/insert",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData
    }).then((response)=>{
      console.log(response.data);
      // window.location.reload();
      document.getElementById('eventData1').value = "";
      document.getElementById('eventData2').value = "";
      document.getElementById('eventData3').value = "";
      document.getElementById('eventData4').value = "";
      document.getElementById('eventData5').value = "";
    });
  }
  },
  [event_title,event_path,event_content,event_creDate,event_finDate]

  );


  //파일 읽고 저장
  const[files, setFiles] = useState('');

  const onLoadFile = (e)=>{

    const file = e.target.files;
    setFiles(file);
  };

  useEffect(() => {
    preview();
    return() => preview();

  });
  // 미리보기
  const preview = ()=>{
    if(!files) return false;
    const imgEl = document.querySelector('.img_box');
    const reader = new FileReader();

    reader.onload = () =>
      (imgEl.style.backgroundImage = `url(${reader.result})`);

      reader.readAsDataURL(files[0]);
  }

  // 끝-----------------------------------------------------------

    // knowhow------------------------------------------------------
    const [know_title, onChangeKnowhowTitle, setKnowhowTitle] = useInput("");
    const [know_content, onChangeKnowhowContent, setKnowhowContent] = useInput("");
    // const [know_creDate, onChangeKnowhoCreDate, setKnowhowCDate] = useInput("");
    const [know_path, onChangeKnowhowPath, setKnowhowPath] = useInput("");
  
    useEffect(() => {
      if(know_title.length > 0 ? setEmptyError(false) : setEmptyError(true))
        return;
    }, [know_title]);

    const insertKnowhow = useCallback((e) => {
      e.preventDefault();

      const KnowData = {
        know_title: `${know_title}`,
        know_content: `${know_content}`,
        // know_creDate: `${know_creDate}`,
        know_path: `${know_path}`
      }
    
      const KnowBlob = new Blob([JSON.stringify(KnowData)], {
        type: "application/json"
      });
    
      const KnowFormData= new FormData();
      KnowFormData.append("data", KnowBlob);
    
      KnowFormData.append("know_title", KnowData.know_title);
      KnowFormData.append("know_content", KnowData.know_content);
      // KnowFormData.append("know_creDate", KnowData.know_creDate);
      KnowFormData.append("know_path", KnowData.know_path);
    
      if(KnowData.know_title === "" || KnowData.know_content === "") 
           alert("제목과 내용을 입력해 주세요.");
      else {
        axios({
          method: "post",
          url: "http://localhost:9000/knowhow/insert",
          headers: { "Content-Type": "multipart/form-data" },
          data: KnowData
        }).then((response) => {
          console.log(response.data);
          alert("노하우가 등록되었습니다.");
          //노하우 리스트로 이동
          window.location.href = "http://localhost:3000/knowhow/list"
        },
          [know_title, know_content, know_path]
        );
      }
    });
    
  
    // knowhow 끝-----------------------------------------------------------

// notice ----------------------------------------------------------------------------------

  let [notice_title, onChangeNoticeTitle, setNoticeTitle] = useInput("");
  let [notice_content, onChangeNoticeContent, setNoticeContent] = useInput("");
  
  const insertNotice = useCallback((e)=>{
	  
	  
	  const noticeData = {
    	notice_title: `${notice_title}`,
      	notice_content: `${notice_content}`
	  }
	  
	  const noticeBlob = new Blob([JSON.stringify(noticeData)],{
	      type : "application/json",
	  });   
	     
	  const formData = new FormData();
	  formData.append("noticeData",noticeBlob);
	  
	  formData.append("notice_title",noticeData.notice_title);
	  formData.append("notice_content",noticeData.notice_content);
	
	  
	  if(noticeData.notice_title === "" || noticeData.notice_content ===""){
		alert("제목과 내용을 입력해주세요.");
	  }else{
    	axios({
      		method: "POST",
      		url : "http://localhost:9000/notice/insert",
      		headers: { "Content-Type": "multipart/form-data" },
      		data: formData
	    }).then((response)=>{
	      	console.log(response.data);
	  		document.getElementById('noticeTitle').value="";
	  		document.getElementById('noticeContent').value="";
	     	alert("공지사항이 등록되었습니다.");
	     	window.location.href="http://localhost:3000/notice/list";
	    	});
	  }
    }, [notice_title,notice_content]);
     
// notice 끝---------------------------------------------------------------------------------


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
              id="noticeTitle"
              name="notice_title"
              className="text"
              type="text"
              placeholder=" 제목을 입력해주세요"
              onChange={onChangeNoticeTitle}
            />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>내용</td>
            <textarea 
             id="noticeContent"
             name="event_content"
             className="text" 
             rows="4" 
             cols="50"
             required
             onChange={onChangeNoticeContent}
           ></textarea>
        </tr>   
      </tbody>  
    </table>
      <button type="button"
         onClick={insertNotice}
         disabled={error}
         className="left2 btn btn-outline-secondary">등록</button>
  </form>
</div>
,// 공지사항 끝-------------------------------------------------------

<div>
  <h4 className="left">이벤트</h4>
    <table className="left dpib">
    <thead>
      <tr>
          <td>제목</td>
          <td>
             {
             (event_title.length === 0 ||
              event_content.length === 0 ||
              event_creDate.length === 0 ||
              event_finDate.length === 0) &&(
              <WarningMsg>
              제목, 내용, 이벤트 기간을 입력해 주세요
              </WarningMsg>
             )
            }
            <input
              name="event_title"
              className="text"
              id="eventData1"
              required
              type="text"
              placeholder=" 제목을 입력해주세요"
              onChange={onChangeEventTitle}
              maxLength={50}
            />
            
          </td>
      </tr>
      </thead><tbody>
      <tr>
        <td>파일 첨부</td>
          <td>
            <input
              name="event_path eventData"
              type="file"
              id="eventData2"
              onChange={onChangeEventPath && onLoadFile}
            />
          </td>
      </tr>
      <tr>
          <td>내용</td>
          <td>
            <textarea 
              name="event_content"
              className="text eventData" 
              rows="4" 
              cols="50"
              required
              id="eventData3"
              onChange={onChangeEventContent}
            ></textarea>
          </td>
      </tr>
      <tr>
        <td>이벤트 기간</td>
        <td>
          <input name="event_creDate" className="date eventData" 
                  type="date"
                  required
                  id="eventData4"
                  onChange={onChangeEventCreDate}
          /> ~
          <input name="event_finDate" className="date eventData" 
                  type="date"
                  required
                  id="eventData5"
                  onChange={onChangeEventFinDate}
          />
        </td>
      </tr>  
      </tbody>   
    </table>

    <div className="mt-5 bottom imgPreview floatRight">
        <h4 className="eventCenter">{event_path}</h4>
        <div className="img_box"/>
    </div>

    <Link className="mt-3 left2 btn btn-outline-secondary" to={"/event/list"}>이벤트페이지</Link>
    <button type="button" 
            className="left3 btn btn-outline-secondary"
            onClick={eventHandler}
            disabled={error}
    >등록</button>
</div>
,// 이벤트 끝-------------------------------------------------------

<div>
  <form>
    <h4 className="left">노하우</h4>
    <table className="left">
      <thead>
        <tr>
          <td>제목</td>
          <td>
            <input
               name="know_title"
              className="text"
              required
              type="text"
              id="postTitle"
              placeholder=" 제목을 입력해주세요"
              onChange={onChangeKnowhowTitle}
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
                onChange={onChangeKnowhowPath}
              />
            </td>
        </tr>
        <tr>
          <td>내용</td>
            <td>
              <textarea 
                 name="know_content"
                required
                className="text" 
                rows="4" 
                cols="50"
                placeholder="내용을 입력해주세요"
                onChange={onChangeKnowhowContent}
              ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
    <Link className="mt-3 left2 btn btn-outline-secondary" to={"/knowhow/list"}>노하우페이지</Link>
    <button type="button" className="left2 btn btn-outline-secondary"
      onClick={insertKnowhow} disabled={error}>
      등록
    </button>
  </form>
</div>
//노하우 끝-------------------------------------------------------

][props.tap]// tap 0은 공지사항 1은 이벤트 2는 노하우
    )
  }

const WarningMsg = styled.div`
  display: inline-block;
  margin-left: 4em;
  color: #8d3232;
  font-size: smaller;
  font-weight: 400;
`;

export default AdminPostMng;