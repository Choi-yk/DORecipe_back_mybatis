import "./style.css";
import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/mainLayOut";
import { MainLogo } from "../../components/_common/mainLogo";
// import { history } from "../../reduxRefresh/helpers/history";
import { connect } from "react-redux";
import { login } from "../../reduxRefresh/actions/auth.js";
// const LoginPage = ({ history, dispatch, user }) => {

// const LoginPage = (state) => {
// const LoginPage = (user) => {
const LoginPage = (auth) => {
  const [member_id, setMemberId] = useState();
  const [member_pwd, setMemberPwd] = useState();

  const [loadingState, setState] = useState(false);

  //   console.log("auth", );
  const handleMemberId = (e) => {
    setMemberId(e.target.value);
  };
  const handleMemberPwd = (e) => {
    setMemberPwd(e.target.value);
  };

  //   console.log("state!!!!!!!", user);
  console.log("state!!!!!!!", auth);
  //   console.log("user!!!!!!!", user);
  const navigate = useNavigate();
  //   const { dispatch } = state;
  const { dispatch, history } = auth;

  const { isLoggedIn, message } = auth;
  console.log("isLoggedIn", isLoggedIn);
  console.log("message", message);
  const memberLogin = (e) => {
    e.preventDefault();
    console.log("ID : ", member_id);
    console.log("PW : ", member_pwd);

    if (member_id.length > 0 && member_pwd.length > 0) {
      dispatch(login(member_id, member_pwd))
        .then(() => {
          setState(true);
          console.log("history>?", history);
          //  history.push("/profile"); //라우팅으로 특정 페이지ㅔ서 다른 페이지로 이동할떄 프롭스 전달
          history.push("/"); //라우팅으로 특정 페이지ㅔ서 다른 페이지로 이동할떄 프롭스 전달
          //  history.pathname.push("/member/info/"); //라우팅으로 특정 페이지ㅔ서 다른 페이지로 이동할떄 프롭스 전달
          //  history.push({ pathname: "/", state: { isLoggedIn } }); //라우팅으로 특정 페이지ㅔ서 다른 페이지로 이동할떄 프롭스 전달
          //  history.state.push(...history, "/profile");
        })
        .then(() => {
          alert("로그인 성공");
          navigate({ to: "/" }, { replace: true, state: auth });
        })
        .catch((err) => {
          setState(false);
          alert(err);
          //  state.state({
          //    loading: false,
          //  });
        });
    } else {
      setState(false);
    }

    //  console.log("login", login);
  };

  return (
    <>
      <MainLayout>
        <div className="loginSection">
          <div className="loginWrap">
            <div className="logoWrap">
              <MainLogo />
            </div>

            <div className="formWrap">
              <form action="#" method="get">
                <input
                  value={member_id || ""}
                  name="member_id"
                  className="idInput"
                  required
                  type="text"
                  placeholder="아이디"
                  onChange={handleMemberId}
                />
                <input
                  value={member_pwd || ""}
                  name="memeber_pwd"
                  className="pwdInput"
                  required
                  type="password"
                  placeholder="비밀번호"
                  onChange={handleMemberPwd}
                />
                <button type="button" name="loginBtn" onClick={memberLogin}>
                  로그인
                </button>
              </form>
            </div>
            <div className="linkWraps">
              <div>{/* <KaKaoLoginPage/>    카카오 소셜 로그인*/}</div>
              <Link to={"/join"}>회원가입</Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  console.log("mapStateToProps+message", { state });
  return {
    isLoggedIn,
    message,
  };
}
export default connect(mapStateToProps)(LoginPage);
