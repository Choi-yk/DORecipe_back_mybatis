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
  // console.log("LoginCreateRecipeLogo", state);
  return (
    <>
      <LoginCreateRecipeWrapper>
        <LoginWrapper>
          {/* <AccountIcon userState={state} /> */}
          <AccountIcon />
          <CreateRecipeIcon />
          {/* <CreateRecipeIcon userState={state} /> */}
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
