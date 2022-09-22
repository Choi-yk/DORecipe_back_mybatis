import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import { MediumBtn, SubmitRecipeBtn } from "../../_common/buttons";
import "./style.css";
import { useInput } from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../../reduxRefresh/actions/auth";
import { SET_MESSAGE } from "../../../reduxRefresh/actions/types";
import Message from "../../../reduxRefresh/reducers/message";

const MemberInfoForm = () => {
  const userMsg = useSelector((state) => state.message);
  const user = useSelector((state) => state);
  const [userState, setUserState] = useState();
  const [currentUserName, setCurrentUserName] = useState();
  const [currentUserId, setCurrentUserId] = useState();
  const [currentEmail, setEmail] = useState();
  const [currentRole, setRole] = useState();
  const navigate = useNavigate();
  console.log("userState", userState);
  //   console.log("MemberInfoForm", user);

  useEffect(() => {
    if (user.auth.isLoggedIn) {
      setCurrentUserId(user.auth.user.id);
      setCurrentUserName(user.auth.user.username);
      setEmail(user.auth.user.email);
      if (user.auth.user.roles.includes("ROLE_ADMIN")) {
        setRole("admin");
      }
      console.log("currentUserName", user.auth.user.username);
      axios({
        url: "/member/getMember/" + user.auth.user.username,
        method: "get",
        // params: { member_id: currentUserName },
        baseURL: "http://localhost:9000",
      })
        .then(function (response) {
          console.log("response.data", response);
          setMemberPhone(response.data.member_phone);
          setMemberBday(response.data.member_birth.substring(0, 10));
          setMemberGender(response.data.member_gender);
          setMemberName(response.data.member_name);
          setMemberNickName(response.data.member_nickname);
          setMemberProfile(response.data.member_imagePath);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("로그인 페이지로 이동합니다");
      navigate("/login");
    }
  }, []);

  // 수정 useInput
  let [member_email, setMemberEmail] = useState("");
  let [member_phone, setMemberPhone] = useState("");
  let [member_birth, setMemberBday] = useState("");
  let [member_gender, setMemberGender] = useState("");
  let [member_name, setMemberName] = useState("");
  let [member_nickname, setMemberNickName] = useState("");
  let [member_imagePath, setMemberProfile] = useState("");

  // 멤버

  // 미리보기
  // const preview = ()=>{
  //     if(!files) return false;
  //     const imgEl = document.querySelector('.img_box');
  //     const reader = new FileReader();

  //     reader.onload = () =>
  //     (imgEl.style.backgroundImage = `url(${reader.result})`);

  //     reader.readAsDataURL(files[0]);
  // }

  return (
    <>
      {/* 회원 정보 */}
      <form className="container-sm myPage-box1 center">
        <SectionTitle>
          {currentRole === "admin" ? (
            <span> 관리자 </span>
          ) : (
            <span> 회원 </span>
          )}
          정보
        </SectionTitle>
        <div className="imgWrap">
          {/* <button onChange={onChangeMemberImg}> */}
          {member_imagePath == null ? (
            <img src={member_imagePath} />
          ) : (
            <img src="/img/profileImage.png" />
          )}
        </div>

        <div className="infoWrap">
          <div className="items">
            <span className="columnName">아이디</span>
            {/* <span name="member_id">{currentId}</span> */}
            <span>{currentUserName}</span>
            {/* <input
              type="text"
              name="member_id"
              style={{ display: "inline" }}
              // defaultValue={memberState.member_id}
              defaultValue={currentUserName}
              disabled
            /> */}
          </div>
          <div className="items">
            <span className="columnName">닉네임</span>
            <span name="member_id">{member_nickname}</span>
            {/* <input
              type="text"
              style={{ display: "inline" }}
              name="member_nickname"
              // defaultValue={memberState.member_id}
              defaultValue={member_nickname}
            /> */}
            <span>{member_nickname}</span>
          </div>
          <div className="items">
            <span className="columnName">이름</span>
            <span name="member_name">{member_name}</span>
            {/* <input
              type="text"
              style={{ display: "inline" }}
              name="member_name"
              defaultValue={member_name}
              disabled
            /> */}
          </div>
          <div className="items">
            <span className="columnName">성별</span>
            <span name="member_gender">{member_gender}</span>
            {/* <input
              type="text"
              style={{ display: "inline" }}
              name="member_gender"
              defaultValue={member_gender}
              disabled
            /> */}
          </div>
          <div className="items">
            <span className="columnName">생년월일</span>
            <span name="member_birth">{member_birth}</span>
            {/* <input
              type="text"
              style={{ display: "inline" }}
              name="member_birth"
              defaultValue={member_birth}
              disabled
            /> */}
          </div>
          <div className="items">
            <div className="columnName">휴대폰 번호</div>
            <span name="member_birth">{member_phone}</span>
            {/* <input
              type="text"
              name="member_phone"
              style={{ display: "inline" }}
              defaultValue={member_phone}
              // defaultValue={memberState.member_phone}
              onChange={onChangeMemberPhone}
            /> */}
          </div>
          <div className="items">
            <span className="columnName">이메일 주소</span>
            <span name="member_birth">{member_email}</span>
            {/* <input
              disabled
              type="text"
              name="member_email"
              style={{ display: "inline" }}
              defaultValue={currentEmail}
              onChange={onChangeMemberEmail}
            /> */}
          </div>
          {/* <div style={{ margin: "1em" }}>
            <span>
              <MediumBtn onClick={onChangeInfo}>수정하기</MediumBtn>
            </span>
            <span style={{ marginLeft: "3em" }}>
              <MediumBtn onClick={onUnsubscribe}>탈퇴하기</MediumBtn>
            </span>
          </div> */}
        </div>
      </form>
    </>
  );
};
export default MemberInfoForm;
const SectionTitle = styled.div`
  background-color: #8d3232;
  display: inline-block;
  width: 90%;
  margin: 1em 3em;
  color: #fffdf5;
  height: 2.4em;
  font-size: 21px;
  font-weight: 700;
  padding: 0.5em 0;
  padding-left: 0.5em;
`;
