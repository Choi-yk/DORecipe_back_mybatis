import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./style.css";
import { useState } from "react";
import { useSelector } from "react-redux";

// import { logout } from "../../../../reduxRefresh/actions/auth";
const AccountIcon = (state) => {
  //페이지 이동
  // const user = useSelector((state) => state);
  const navigate = useNavigate();

  // console.log("user", user);
  const onClickLogOut = () => {
    // console.log("state", state);
    navigate("/");
  };
  const [userState, setState] = useState(state);
  // const [userState, setState] = useState(user);
  console.log("로그ㅇ아웃useState", userState);

  // const onClickLogOut = () => {
  //   // setLogin(false); 로그아웃 시키고 메인페이지로
  //   // const logOut = () => {
  //   // state.dispatch(logout());
  //   // state.state = {
  //   //   showModeratorBoard: false,
  //   //   showAdminBoard: false,
  //   //   currentUser: undefined,
  //   // };
  //   // console.log(state);
  //   // };
  //   // navigate("/");
  // };

  const popover = (
    <Popover>
      <Popover.Body>
        {/* {state ? ( */}
        {state.userState ? (
          <>
            <div className="linkItems">마이페이지</div>
            <div className="linkItems" onClick={onClickLogOut}>
              로그아웃
            </div>
          </>
        ) : (
          <>
            <Link className="linkItems" to="/join">
              회원가입
            </Link>
            <Link className="linkItems" to="/login">
              로그인
            </Link>
          </>
        )}
      </Popover.Body>
    </Popover>
  );

  const ToggleMsgBtn = () => (
    <>
      {/* 버튼 커스텀화 */}
      <style type="text/css">
        {`
    .btn-success {
      width: 2em;
      height: 2em;
      border-radius: 100%;
      background-color: transparent;
      margin-right:3em;
      border:1px solid transparent;
      // color: #463635;
    }
    .btn-success::after{
      background-color: transparent;
    }
    .btn-success:hover{
      background-color: transparent;
    }
    `}
      </style>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button variant="success">
          <FontAwesomeIcon icon={faCircleUser} className="userIcon" />
        </Button>
      </OverlayTrigger>
    </>
  );

  return (
    <>
      <ToggleMsgBtn />
    </>
  );
};
export default AccountIcon;
