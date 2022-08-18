import "./style.css";
import { useState, useCallback } from "react";
import NoticeList from "./noticeList";
const NoticePage = () => {
  const [state, setState] = useState([
    {
      id: 1,
      NoticeTitle: "공지 사항1",
      NoticeDate: "2022/08/18",
    },
    {
      id: 2,
      NoticeTitle: "공지 사항2",
      NoticeDate: "2022/08/18",
    },
  ]);

  const removePost = useCallback((id) => {
    const removeState = state.filter((item) => item.id !== id);
    setState(removeState);
  });

  return (
    <>
      <div className="noticeWrap">
        <h2>| Notice |</h2>
        <div className="noticeTableWrap">
          <ul>
            <div className="tableHead">
              <div className="noticeNo">No.</div>
              <div className="noticeTitle">제목</div>
              <div className="noticeDate">작성일자</div>
              <div className="updateOrDelete">수정 및 삭제</div>
            </div>
            {state.map((e) => (
              <NoticeList
                key={e.id}
                removePost={removePost}
                // updatePost={updatePost}
                state={e}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default NoticePage;
