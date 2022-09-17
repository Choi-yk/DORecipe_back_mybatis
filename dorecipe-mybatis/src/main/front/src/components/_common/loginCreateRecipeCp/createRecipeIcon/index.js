import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faHouse } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./style.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const CreateRecipeIcon = () => {
  const user = useSelector((state) => state);

  const [userState, setUserState] = useState(user);
  const [iconState, setIcon] = useState(faPencil);
  console.log("CreateRecipeIcon_auth", user);

  useEffect(() => {
    if (userState.auth.isLoggedIn) {
      if (userState.auth.user.roles.includes("ROLE_ADMIN")) {
        setIcon(faHouse);
      }
    } else setIcon(faPencil);
  });

  const navigate = useNavigate();
  const onClickRecipe = () => {
    navigate("/recipe/create");
  };
  const onClickAdmin = () => {
    navigate("/admin");
  };

  const popover = (
    <Popover>
      <Popover.Body>
        {!user.auth.isLoggedIn ? (
          <>
            <Link className="linkItems" to="/">
              <div>로그인 후 </div>
              <div>작성 가능합니다</div>
            </Link>
          </>
        ) : iconState === faPencil ? (
          <>
            <div className="linkItems" onClick={onClickRecipe}>
              레시피 작성
            </div>
          </>
        ) : (
          <>
            <>
              <div className="linkItems" onClick={onClickAdmin}>
                관리자 홈으로
              </div>
            </>
          </>
        )}
        {/* {user ? (
          <>
            <div className="linkItems" onClick={onClickRecipe}>
              레시피 작성
            </div>
          </>
        ) : (
          <>
            <Link className="linkItems" to="/">
              로그인 후 작성가능합니다
            </Link>
          </>
        )} */}
      </Popover.Body>
    </Popover>
  );

  const ToggleMsgBtn = () => (
    <>
      {/* 버튼 커스텀화 */}
      <style type="text/css">
        {`
      .btn-success {
        display: inline-block;
        border: 1px solid #fffdf5;
        border-radius: 100%;
        width: 2em;
        height: 2em;
        width: 2em;
        height: 2em;
        border-radius: 100%;
        background-color: transparent;
        margin-right:3em;

      }
      
      `}
      </style>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button variant="success">
          {" "}
          <FontAwesomeIcon className="createRecipeIcon" icon={iconState} />
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
export default CreateRecipeIcon;
