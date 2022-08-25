import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const NoticeUpdatePage = () => {

	let { noticeId } = useParams();

	const [state, setState] = useState([
		{
			notice_num: 0,
			notice_title: "",
			notice_content: "",
			notice_creDate: "",
		}
	]);

	function testAxios() {
		axios({
			url: "/notice/detail/" + noticeId,
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
			setState(response.data);
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
						<div className="noticeBorder"/>
						{/* <div className="noticeDetailDate">{state.notice_creDate}</div>
						<div>{state.notice_content}</div> */}
					</div>
				</li>
				<form method="post" action={"http://localhost:9000/notice/update"}>
					<table className="left">
					<input type="hidden" name="notice_num" defaultValue={state.notice_num} />
						<thead>
							<tr>
								<td>제목</td>
								<td>
									<input
										className="text"
										type="text"
										id="postTitle"
										name="notice_title"
										placeholder=" 제목을 입력해주세요"
										defaultValue={state.notice_title}
										// onChange={(e) => console.log(e.target.value) }
									></input>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>내용</td>
								<td>
									<textarea
										className="text"
										rows="4"
										cols="50"
										name="notice_content"
										defaultValue={state.notice_content}
										// onChange={(e) => console.log(e.target.value) }
									></textarea>
								</td>
							</tr>
						</tbody>
					</table>
					<button type="submit" className="left2 btn-secondary">수정</button>
				</form>
			</div>
		</>
	)
}
export default NoticeUpdatePage;
