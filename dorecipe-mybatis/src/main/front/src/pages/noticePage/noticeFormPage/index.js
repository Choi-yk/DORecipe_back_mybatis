import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const NoticeUpdatePage = () => {

	let { noticeId } = useParams();

	const [noticeState, setNoticeState] = useState([
		{
			notice_num: 0,
			notice_title: "",
			notice_content: "",
			notice_creDate: "",
		}
	]);

	function testAxios() {
		axios({
			url: "/notice/update/" + noticeId,
			method: "get",
			data: {
				notice_num: "",
				notice_title: "",
				notice_content: "",
				notice_creDate: "",
			},
			baseURL: "http://localhost:9000",
		}).then(function(response) {
			console.log(response.data);
			// console.log(response.data[0]);
			setNoticeState(response.data);
		});
	}

	useEffect(() => {
		testAxios();
	}, []);


	return (
		<>
		<div>
		
		<li>
			<div className="noticeWrap">
				<h2>| Notice |</h2>
				<div className="noticeDetailTitle noticeBorder">{noticeState.notice_title}</div>
				<div className="noticeDetailDate">{noticeState.notice_creDate}</div>
				<div>{noticeState.notice_content}</div>
			</div>
		</li>
			<form>
				<table className="left">
					<tr>
						<td>제목</td>
						<td>
							<input
								className="text"
								type="text"
								id="postTitle"
								placeholder=" 제목을 입력해주세요"
							>{noticeState.notice_title}</input>
						</td>
					</tr>
					<tr>
						<td>내용</td>
						<td>
							<textarea
								className="text"
								rows="4"
								cols="50"
							></textarea>
						</td>
					</tr>
				</table>
				<button className="left2 btn-secondary">수정</button>
			</form>
		</div>
		</>
	)
}
export default NoticeUpdatePage;
