import "./style.css";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../layout/mainLayOut";
import { MainLogo } from "../../components/_common/mainLogo";
import JoinMemberPage from "../joinMemberPage";

const LoginPage = () => {
	
	const [state, setState] = useState([
		{
			member_id:"",
			memeber_pwd:""
		},
	]);

	function Axios() {
		axios({
			url: "/login",
			method: "get",
			baseURL: "http://localhost:9000",
		}).then(function(response) {
			console.log(response.data);
			setState(response.data);
		});
	}

	useEffect(() => {
		Axios();
	}, []);

	return (
		<>
		<MainLayout>
			<div class="loginSection">
				{/* 로고 */}
				<div class="loginWrap">
					<div class="logoWrap">
						<MainLogo />
					</div>
					{/*  아이디, 비밀번호 입력란 */}
					<div class="formWrap">
						<form action="#" method="get">
							<input
								name="member_id"
								class="idInput"
								required
								type="text"
								placeholder="아이디"
							/>
							<input
								class="pwdInput"
								required
								type="password"
								placeholder="비밀번호"
							/>
							<button type="submit" name="loginBtn" onclick="alertBlanks()">
								로그인
							</button>
						</form>
					</div>

					{/* 아이디, 비밀번호 찾기, 회원가입 */}
					<div class="linkWraps">
					<Link to={"#"}>아이디 찾기</Link> | <Link to={"#"}>비밀번호 찾기</Link> | <Link to={"/join"}>회원가입</Link>

					</div>
				</div>
			</div>
			</MainLayout>
		</>
	);
};
export default LoginPage;
