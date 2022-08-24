import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const NoticeDetailPage = () => {

  let {noticeId} = useParams();

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
      url: "/notice/detail/"+noticeId,
      method: "get",
      data: {
        notice_num: "test",
        notice_title: "test",
        notice_content: "test",
        notice_creDate: "2022/08/24",
      },
      baseURL: "http://localhost:9000",
    }).then(function (response) {
      console.log(response.data);
      // console.log(response.data[0]);
      setNoticeState(response.data);
    });
  }

  useEffect(() => {
    testAxios();
  }, []);
  
  // console.log(noticeId);
  // console.log(noticeState.notice_title);
  // console.log(noticeState.notice_creDate);
  // console.log(noticeState.notice_content);

  return (
    <>
      {/* <div>공지사항 상세</div> */}
      <li>
          <div className="noticeWrap">
            <h2>| Notice |</h2>
            <div className="noticeDetailTitle noticeBorder">{noticeState.notice_title}</div>  
            <div className="noticeDetailDate">{noticeState.notice_creDate}</div>
            <div>{noticeState.notice_content}</div>
          </div>
      </li>
    </>
  );
};

export default NoticeDetailPage;