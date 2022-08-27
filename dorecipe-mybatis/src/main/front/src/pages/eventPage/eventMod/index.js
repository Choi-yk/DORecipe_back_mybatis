import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useParams } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { Link } from "react-router-dom";

// import '../../../bootstrap.min.css';
// import { setEvent } from "../../../store";



const EventModify = () => {

  const params = useParams();

  
  let [state, setState] = useState([
    {
      event_num: 0,
      event_title: "",
      event_content: "",
      event_path: "",
      event_creDate: "",
      event_finDate: "",
    },
  ]);

  function Axios() {

    const event_num = params.detailId; // app.js에서 보내줌

    axios.get('http://localhost:9000/event/detail/'+event_num)
    .then((result)=>{ setState(result.data) })
    .catch(()=>{
      console.log("실패... 이벤트수정페이지")
    })

  }

  useEffect(() => {
    Axios();
  }, []);


  
  
  const [event_num, onChangeEventNum, setNum] = useInput("");
  const [event_title, onChangeEventTitle, setTitle] = useInput("");
  const [event_path, onChangeEventPath, setPath] = useInput("");
  const [event_content, onChangeEventContent, setContent] = useInput("");
  const [event_creDate, onChangeEventCreDate, setCDate] = useInput("");
  const [event_finDate, onChangeEventFinDate, setFDate] = useInput("");
  
  const modHandler = useCallback((e)=>{

  e.preventDefault();

  const data = {
    event_num: `${event_num}`,
    event_title: `${event_title}`,
    event_path: `${event_path}`,
    event_content: `${event_content}`,
    event_creDate: `${event_creDate}`,
    event_finDate: `${event_finDate}`,
  }
  
  
  const formData = new FormData();
  formData.append("event_num",params.detailId);
  formData.append("event_title",data.event_title);
  formData.append("event_path",data.event_path);
  formData.append("event_content",data.event_content);
  formData.append("event_creDate",data.event_creDate);
  formData.append("event_finDate",data.event_finDate);
  // formData.append("state",state);

    
  
    axios({
      method: "POST",
      url : "http://localhost:9000/event/update",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData
    }).then((response)=>{
      console.log(response.data);
      alert("수정되었습니다.");
    },
      [event_num,event_title,event_path,event_content,event_creDate,event_finDate]
    );
  })







  return (
  <>
    <h2 >| Event수정 |</h2>
    <div>
      <form>
        <table className="left">
        <thead>
          <tr>
            <td>
              글번호
            </td>
             <td>
              <input type="text"
                     className="text"  
                     defaultValue={state.event_num}
                     disabled
              />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>제목</td>
              <td>
                <input
                  name="event_title"
                  className="text"
                  type="text"
                  id="postTitle"
                  onChange={onChangeEventTitle}
                  defaultValue={state.event_title} 
                />
              </td>
          </tr>
          <tr>
            <td>파일 첨부</td>
              <td>
                <input
                  name="event_path"
                  type="file"
                  id="postTitle"
                  onChange={onChangeEventPath}
                  defaultValue={state.event_path}
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
                  onChange={onChangeEventContent}
                  defaultValue={state.event_content} 
                ></textarea>
              </td>
          </tr>
          <tr>
            <td>이벤트 기간</td>
            <td>
              <input 
                name="event_creDate" 
                className="date" 
                type="date"
                defaultValue={state.event_creDate} 
                onChange={onChangeEventCreDate}
                /> ~
              <input 
                name="event_finDate" 
                className="date" 
                type="date"
                defaultValue={state.event_finDate} 
                onChange={onChangeEventFinDate}
                />
            </td>
          </tr>  
          </tbody>   
        </table>
        <Link className="mt-3 left2 btn btn-outline-secondary" to={"/event/list"}>목록으로</Link>
    <button type="button" 
            className="left2 btn btn-outline-secondary"
            onClick={modHandler}
            >수정</button>
  </form>
</div>

    </>
  );

  
};
export default EventModify;
