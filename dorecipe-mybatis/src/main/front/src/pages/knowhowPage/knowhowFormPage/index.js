import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const KnowhowUpdatePage = () => {

	let { knowhowId } = useParams();

	const [state, setState] = useState([
		{
			know_num: 0,
			know_title: "",
			know_content: "",
			know_creDate: "",
			know_path: ""
		}
	]);

	function testAxios() {
		axios({
			url: "/knowhow/detail/" + knowhowId,
			method: "get",
			data: {
				know_num: "",
				know_title: "",
				know_content: "",
				know_creDate: "",
				know_path: ""
			},
			baseURL: "http://localhost:9000",
		}).then(function(response) {
			console.log(response.data);
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
					<div className="knowhowWrap">
						<h2>| Knowhow |</h2>
						<div className="knowhowBorder" />

					</div>
				</li>
				<form method="post" action={"http://localhost:9000/knowhow/update"}>
					<table className="left">
					<input type="hidden" name="know_num" defaultValue={state.know_num} />
						<thead>
							<tr>
								<td>
									글번호
								</td>
								<td>
									<input type="text"
										className="text center"
										defaultValue={state.know_num}
										disabled
									/>
									<input type="hidden"
										name="event_num"
										defaultValue={state.know_num}
									/>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>제목</td>
								<td>
									<input
										name="know_title"
										className="text"
										type="text"
										id="postTitle"
										defaultValue={state.know_title}
									/>
								</td>
							</tr>
							<tr>
								<td>파일 첨부</td>
								<td>
									<input
										name="know_path"
										type="file"
										id="postTitle"
										defaultValue={state.know_path}
									/>
								</td>
							</tr>
							<tr>
								<td>내용</td>
								<td>
									<textarea
										name="know_content"
										className="text"
										rows="4"
										cols="50"
										defaultValue={state.know_content}
									></textarea>
								</td>
							</tr>

						</tbody>
					</table>
					<button type="submit" className="left2 btn btn-outline-secondary">수정</button>
				</form>
			</div>
		</>
	)
}
export default KnowhowUpdatePage;
