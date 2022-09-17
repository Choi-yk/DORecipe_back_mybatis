import "./style.css";
import { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../layout/mainLayOut";
import { MainLogo } from "../../components/_common/mainLogo";
import KaKaoLoginPage from "../../components/LoginMemberCp";
// import KaKaoLogin from 'react-kakao-login';

//commit

const LoginPage = () => {
  const [state, setState] = useState([
    {
      member_id: "",
      memeber_pwd: "",
    },
  ]);

  const [member_id, setMemberId] = useState();
  const [member_pwd, setMemberPwd] = useState();

  const handleMemberId = (e) => {
    setMemberId(e.target.value);
  };
  const handleMemberPwd = (e) => {
    setMemberPwd(e.target.value);
  };

  //   function Axios() {
  //     axios({
  //       url: "user/login",
  //       method: "get",
  //       baseURL: "http://localhost:9000",
  //     }).then(function (response) {
  //       console.log(response.data);
  //       setState(response.data);
  //     });
  //   }

  //   useEffect(() => {
  //     Axios();
  //   }, []);

  const memberLogin = () => {
    //  console.log("click login");
    console.log("ID : ", member_id);
    console.log("PW : ", member_pwd);

    axios
      // .post("http://localhost:9000/user/login", {
      .post(
        "http://localhost:9000/loginTry",
        //   memberId: member_id,
        //   memberPwd: member_pwd,
        {
          data: { username: member_id, password: member_pwd },
        }
        //   { params: { username: member_id, password: member_pwd } }
      )
      .then((res) => {
        console.log("memberLogin callback====================");
        console.log(res);
        //            console.log("memberLogin callback====> " + res);
        console.log("res.data.username :: ", res.data.username);
        console.log("res.data.password :: ", res.data.password);

        if (res.data.member_id !== null && res.data.password !== null) {
          alert("로그인 성공");
          sessionStorage.setItem("member_id", res.data.member_id); // sessionStorage에 id를 member_id라는 key 값으로 저장
        } else {
          alert("로그인 실패 ㅜㅜㅜㅜㅜ");
        }
        //   if (res.data.username === undefined) {
        //     // id 일치하지 않는 경우
        //     console.log("아이디 불일치", res.data.member_id);
        //     alert("입력하신 id가 일치하지 않습니다.");
        //     document.location.href = "/login";
        //   } else if (res.data.member_id === null) {
        //     // id는 있지만, pw 는 다른 경우
        //     console.log("입력하신 비밀번호가 일치하지 않습니다.");
        //     document.location.href = "/login";
        //   } else if (res.data.member_id === member_id) {
        //     // id, pw 모두 일치
        //     console.log("로그인 성공!");
        //     sessionStorage.setItem("member_id", member_id); // sessionStorage에 id를 member_id라는 key 값으로 저장
        //     document.location.href = "/";
        //   }
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  // },
  // [member_id,member_pwd]);

  return (
    <>
      <MainLayout>
        <div className="loginSection">
          {/* 로고 */}
          <div className="loginWrap">
            <div className="logoWrap">
              <MainLogo />
            </div>
            {/*  아이디, 비밀번호 입력란 */}
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
export default LoginPage;
