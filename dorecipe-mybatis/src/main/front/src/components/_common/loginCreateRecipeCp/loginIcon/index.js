import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./style.css";
import { useState } from "react";
const AccountIcon = ({ userState }) => {
  /**로그인 구현 안돼서 임시로 테스트, true==로그인*/
  // const [loginStatus, setLogin] = useState(true);

  //페이지 이동
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    // setLogin(false); 로그아웃 시키고 메인페이지로
    navigate("/");
  };

  const popover = (
    <Popover>
      <Popover.Body>
        {userState ? (
          <>
            <div className="linkItems" onClick={onClickLogin}>
              마이페이지
            </div>
            <div className="linkItems" onClick={onClickLogOut}>
              로그아웃
            </div>
          </>
        ) : (
          <>
            <Link className="linkItems" to="/join">
              회원가입
            </Link>
            <Link className="linkItems" to="/">
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
