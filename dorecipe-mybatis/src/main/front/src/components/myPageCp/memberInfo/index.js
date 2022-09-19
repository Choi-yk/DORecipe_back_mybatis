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
  const dispatch = useDispatch();
  const [userState, setUserState] = useState(user);
  const [currentId, setCurrentId] = useState();
  const [currentUserId, setCurrentUserId] = useState();
  const [currentEmail, setEmail] = useState();
  const [currentRole, setRole] = useState();
  const navigate = useNavigate();
  console.log("userState", userState);
  //   console.log("MemberInfoForm", user);

  useEffect(() => {
    if (user.auth.isLoggedIn) {
      console.log("currentUserId", user.auth.user.id);
      setCurrentUserId(user.auth.user.id);
      setCurrentId(user.auth.user.username);
      setEmail(user.auth.user.email);
      axios({
        url: "/member/getMember/" + currentId,
        method: "get",
        baseURL: "http://localhost:9000",
      })
        .then(function (response) {
          console.log("response.data", response.data);
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
      if (user.auth.user.roles.includes("ROLE_ADMIN")) {
        setRole("admin");
      }
    } else {
      //   dispatch(Message("login"));
      //   dispatch(logout());
      alert("로그인 페이지로 이동합니다");
      navigate("/login");
    }
  });
  useCallback(() => {}, []);
  let { memberId } = useParams();

  // 수정 useInput
  let [member_email, onChangeMemberEmail, setMemberEmail] = useInput("");
  let [member_phone, onChangeMemberPhone, setMemberPhone] = useInput("");
  let [member_birth, onChangeMemberBday, setMemberBday] = useInput("");
  let [member_gender, onChangeGender, setMemberGender] = useInput("");
  let [member_name, onChangeMemberName, setMemberName] = useInput("");
  let [member_nickname, onChangeNickName, setMemberNickName] = useInput("");
  let [member_imagePath, onChangeProfile, setMemberProfile] = useInput("");

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

  const onUnsubscribe = (e) => {
    e.preventDefault();
    if (window.confirm("탈퇴하시겠습니까?")) {
      axios({
        url: "/member/delete/" + member_name,
        method: "get",
        baseURL: "http://localhost:9000",
      })
        .then(() => {
          axios({
            url: "/member/delete/user/" + currentUserId,
            method: "post",
            baseURL: "http://localhost:9000",
          })
            .then(function (response) {
              console.log("response.data", response.data);
            })

            .then(function (response) {
              console.log("탈퇴성공");
              navigate("/");
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .then(function (response) {
          console.log("response.data", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("취소하셨습니다.");
    }
  };
  const onChangeInfo = (e) => {
    e.preventDefault();
    if (window.confirm("수정하시겠습니까?")) {
      axios({
        url: "/member/update/" + currentId,
        method: "get",
        baseURL: "http://localhost:9000",
      })
        .then(function (response) {
          console.log("response.data", response.data);
        })

        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("취소하셨습니다.");
    }
  };

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

          {/* </button> */}
          {/* <div className="mt-5 imgPreview">
            <input
              name="member_imagePath"
              type="file"
              accept="img/*"
              // onChange={onLoadFile}
              defaultValue={member_imagePath}
            />
          </div> */}
        </div>

        <div className="infoWrap">
          <div className="items">
            <span className="columnName">아이디</span>
            {/* <span name="member_id">{currentId}</span> */}
            <input
              type="text"
              name="member_id"
              style={{ display: "inline" }}
              // defaultValue={memberState.member_id}
              defaultValue={currentId}
              disabled
            />
          </div>
          <div className="items">
            <span className="columnName">닉네임</span>
            {/* <span name="member_id">{currentId}</span> */}
            <input
              type="text"
              style={{ display: "inline" }}
              name="member_nickname"
              // defaultValue={memberState.member_id}
              defaultValue={member_nickname}
            />
          </div>
          <div className="items">
            <span className="columnName">이름</span>
            {/* <span name="member_name">{memberState.member_name}</span> */}
            <input
              type="text"
              style={{ display: "inline" }}
              name="member_name"
              defaultValue={member_name}
              disabled
            />
          </div>
          <div className="items">
            <span className="columnName">성별</span>
            {/* <span name="member_gender">{memberState.member_gender}</span> */}
            <input
              type="text"
              style={{ display: "inline" }}
              name="member_gender"
              defaultValue={member_gender}
              disabled
            />
          </div>
          <div className="items">
            <span className="columnName">생년월일</span>
            {/* <span name="member_birth">{memberState.member_birth}</span> */}
            <input
              type="text"
              style={{ display: "inline" }}
              name="member_birth"
              defaultValue={member_birth}
              disabled
            />
          </div>
          <div className="items">
            <div className="columnName">휴대폰 번호</div>
            <input
              type="text"
              name="member_phone"
              style={{ display: "inline" }}
              defaultValue={member_phone}
              // defaultValue={memberState.member_phone}
              onChange={onChangeMemberPhone}
            />
          </div>
          <div className="items">
            <span className="columnName">이메일 주소</span>
            <input
              disabled
              type="text"
              name="member_email"
              style={{ display: "inline" }}
              defaultValue={currentEmail}
              onChange={onChangeMemberEmail}
            />
          </div>
          <div style={{ margin: "1em" }}>
            <span>
              <MediumBtn onClick={onChangeInfo}>수정하기</MediumBtn>
              {/* <SubmitRecipeBtn onClick={modHandler}>수정하기</SubmitRecipeBtn> */}
              {/* <button type="button" onClick={modHandler}>수정</button> */}
            </span>
            <span style={{ marginLeft: "3em" }}>
              {/* <SubmitRecipeBtn onClick={removeHandler}> */}
              <MediumBtn onClick={onUnsubscribe}>탈퇴하기</MediumBtn>
            </span>
          </div>
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
