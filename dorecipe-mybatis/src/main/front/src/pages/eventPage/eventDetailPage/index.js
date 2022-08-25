import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
// import '../../../bootstrap.min.css';
// import { setEvent } from "../../../store";



const EventDetailPage = () => {

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

    console.log(event_num+"가져옴?");

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
    <div className="eventCenter">
      <h2>| Event |</h2>
      <h4>참여기간 : {state.event_creDate}~{state.event_finDate}</h4>
      <h2>{state.event_title}</h2>
      <hr/>
      <img className="eventImg" src={state.event_path} alt={state.event_path+"이거 못 찾았음"}/>
      <p>{state.event_content}</p>
    </div>
    </>
  );

  
};
export default EventDetailPage;
