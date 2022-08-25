import "./style.css";
import { useState, useCallback, useEffect } from "react";
import MemberList from "./memberList";
import { Link } from "react-router-dom";
import axios from "axios";
// import CommentService from "../../../services/CommentService";

const MemberListPage = () => {
  const [state, setState] = useState([
    {
      member_id: "",
      member_name: "",
      member_email: "",
    },
  ]);

  function testAxios() {
    axios({
      url: "/member/list",
      method: "get",
      data: {
        member_id: "",
        member_pwd: "",
        member_name: "",
        member_email: "",
        member_gender: "",
        member_birth: "",
        member_phone: "",
        member_imagePath: "",
        member_joinDate: "",
        member_like: "",
        member_role: "",
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

  const removePost = useCallback((member_id) => {
    const removeState = state.filter((item) => item.member_id !== member_id);
    setState(removeState);
    axios
      .get(`http://localhost:9000/member/delete/${member_id}`)
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <div className="noticeWrap">
        <h2>| Member |</h2>
        <Link className="updateList" to={"/join"}>
          등록
        </Link>
        <div className="noticeTableWrap">
          <ul>
            <div className="tableHead">
              <div className="noticeNo">이름</div>
              <div className="noticeTitle">아이디</div>
              <div className="noticeDate">이메일</div>
              <div className="updateOrDelete">수정 및 삭제</div>
            </div>
            {state.map((e) => (
              <MemberList key={e.member_id} removePost={removePost} state={e} />
            ))}
          </ul>
        </div>
        {/* <button onClick={() => testAxios()}>axiosTest</button> */}
      </div>
    </>
  );
};
export default MemberListPage;
