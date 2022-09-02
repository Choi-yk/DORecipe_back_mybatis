import "./style.css";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../layout/mainLayOut";
import { MainLogo } from "../../components/_common/mainLogo";
import { useInput } from "../../hooks/useInput";

const LoginPage = () => {
	// 다 한거 아님~


	// const [state, setState] = useState([
	// 	{
	// 		member_id:"",
	// 		memeber_pwd:""
	// 	},
	// ]);

	// function Axios() {
	// 	axios({
	// 		url: "/login",
	// 		method: "get",
	// 		baseURL: "http://localhost:9000",
	// 	}).then(function(response) {
	// 		console.log(response.data);
	// 		setState(response.data);
	// 	});
	// }

	// useEffect(() => {
	// 	Axios();
	// }, []);
	
	let [member_id] = useInput("");
	let [member_pwd] = useInput("");
	
	const memberLogin = useCallback((e)=>{
		e.preventDefault(); // 정리~

		member_id = document.getElementById("member_id").value;
		member_pwd = document.getElementById("member_pwd").value; // 암호화..시켜줘야하는디

		const loginData = {
			member_id: `${member_id}`,
			member_pwd: `${member_pwd}`
		}

		const formData = new FormData("");

		formData.append("member_id", loginData.member_id);
		formData.append("member_pwd", loginData.member_pwd);


		axios({
				method: "post",
				url: "http://localhost:9000/login",
				headers: { "Content-Type": "multipart/form-data" },
				data: formData
		}).then((response) => {
			console.log(response.data);
			alert("로그인 완료!");
			if(response.data.member_id === member_id) {
				console.log("success");
				console.log(loginData.member_id);
				console.log(loginData.member_pwd);
				alert("로그인 완료!");
				// 메인으로 이동
				window.location.href="http://localhost:3000";
			}	
			else
				console.log("fail");

			// if(response.data.member_id === )

		}, [member_id,member_pwd]);
	});
		
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
						<form>
							<input
								name="member_id"
								className="idInput"
								required
								type="text"
								placeholder="아이디"
							/>
							<input
								name="member_pwd"
								className="pwdInput"
								required
								type="password"
								placeholder="비밀번호"
							/>
							<button onSubmit={memberLogin}>
								로그인
							</button>
						</form>
					</div>

					<div className="linkWraps">
						<Link to={"/join"}>회원가입</Link>
					</div>
				</div>
			</div>
			</MainLayout>
		</>
	);
};
export default LoginPage;
