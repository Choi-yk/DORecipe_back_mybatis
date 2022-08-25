import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
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
      console.log("실패... 이벤트디테일페이지")
    })

  }

  useEffect(() => {
    Axios();
  }, []);

  return (
  <>
    <h2 >| Event수정 |</h2>
    <div>
      <form method="post" 
        action="http://localhost:9000/event/update"
        >
        <table className="left">
        <thead>
          <tr>
            <td>
              글번호
            </td>
             <td>
              <input type="text"
                     className="text center"  
                     defaultValue={state.event_num}
                     disabled
                     />
              <input type="hidden" 
                     name="event_num" 
                     defaultValue={state.event_num} 
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
                /> ~
              <input 
                name="event_finDate" 
                className="date" 
                type="date"
                defaultValue={state.event_finDate} 
                />
            </td>
          </tr>  
          </tbody>   
        </table>
    <button type="submit" 
            className="left2 btn btn-outline-secondary"
            >수정</button>
  </form>
</div>

    </>
  );

  
};
export default EventModify;
