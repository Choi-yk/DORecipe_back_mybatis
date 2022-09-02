import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
// import { loginUser } from "../../reducer/userReducer";
import { useInput } from "../../../hooks/useInput";
import AccountIcon from "./loginIcon";
import CreateRecipeIcon from "./createRecipeIcon";
const LoginCreateRecipeLogo = () => {
  //util
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  //state
  // const userInfo = useSelector((state) => state.user.info);
  //리덕스 사용 X, 로그인 구현 안돼서 임시로..
  const [userInfo, setUserInfo] = useState(true);

  //logout dispatch

  // const onLogOutHandler = useCallback(() => {
  //   dispatch(
  //     loginUser({
  //       // member_id: member_id,
  //       // member_pwd: member_pwd,
  //       navigate: navigate,
  //     })
  //   );
  // }, [dispatch, navigate]);

  return (
    <>
      <LoginCreateRecipeWrapper>
        <LoginWrapper>
          <AccountIcon userState={userInfo} />
          <CreateRecipeIcon userState={userInfo} />
        </LoginWrapper>
      </LoginCreateRecipeWrapper>
    </>
  );
};

const LoginCreateRecipeWrapper = styled.div`
  width: fit-content;
  display: inline-flex;
`;

const LoginWrapper = styled.div`
  display: inline-flex;
`;

export default LoginCreateRecipeLogo;
