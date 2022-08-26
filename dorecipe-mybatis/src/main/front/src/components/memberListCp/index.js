// import "./style.css";
import { useState, useCallback, useEffect } from "react";
import MemberList from "./memberList.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
const List = () => {
  const [state, setState] = useState([
    { member_id: "", member_name: "", member_email: "" },
  ]);
  //로딩중
  const [isLoading, setLoading] = useState(false);
  //리스트 아이템
  const [hasItems, setNumState] = useState(0);

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
    })
      .then(function (response) {
        setState(response.data);
        setNumState(response.data.length);
        console.log(response.data.length);
      })
      .catch(function () {
        setLoading(true);
      });
  }

  useEffect(() => {
    testAxios();
  }, []);

  const removePost = useCallback((member_id) => {
    const removeState = state.filter((item) => item.member_id !== member_id);
    setState(removeState);
    setNumState(hasItems - 1);

    axios
      .get(`http://localhost:9000/member/delete/${member_id}`)
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <ListWrapper>
        <ListTitle> | Member | </ListTitle>
        <ListTblWrap>
          <ul>
            <TableHead>
              <div className="noticeNo">이름</div>
              <div className="noticeTitle">아이디</div>
              <div className="noticeDate">이메일</div>
              <div className="updateOrDelete">수정 및 삭제</div>
            </TableHead>

            {state.map((e) => (
              <MemberList
                key={e.member_id}
                removePost={removePost}
                state={e}
                isLoading={isLoading}
                hasItems={hasItems}
              />
            ))}
          </ul>
        </ListTblWrap>
      </ListWrapper>
    </>
  );
};
export default List;

const ListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const ListTitle = styled.h2`
  text-align: center;
  margin: 1em 0;
  margin-bottom: 2em;
  font-weight: 700;
`;

const ListTblWrap = styled.div`
  margin: 1em 0;
  /* align-items: center; */
  & ul > li {
    list-style: none;
    display: inline-flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: 1em 0;
    border-bottom: 1px solid #ad939156;
  }
`;
const TableHead = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #ad939156;
  padding: 0.5em 0;
`;
