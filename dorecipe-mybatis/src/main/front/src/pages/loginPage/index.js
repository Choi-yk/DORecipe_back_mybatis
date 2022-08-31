import "./style.css";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../layout/mainLayOut";

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
					<Link to={"/"}>
						<img class="logo" src="../../../public/img/doRecipeLogo.gif" />
					</Link>
				</div>
				{/*  아이디, 비밀번호 입련란 */}
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
					<a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a> |
					<a href="./joinmember.html">회원가입</a>
				</div>
			</div>
		</div>
		</MainLayout>
		</>
	);
};
export default LoginPage;
