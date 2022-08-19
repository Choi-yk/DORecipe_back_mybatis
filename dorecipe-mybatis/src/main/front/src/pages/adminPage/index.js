import { useState, useCallback, useEffect } from "react";

const AdminPostMng = () => {
  const [state, setState] = useState([
    {
      id: 1,
      noticeType: "공지사항",
      // NoticeTitle: "공지사항1",
      // NoticeDate: "2022/08/19",
    },
    {
      id: 2,
      noticeType: "노하우",
      // NoticeTitle: "공지사항1",
      // NoticeDate: "2022/08/19",
    },
    {
      id: 3,
      noticeType: "이벤트",
      // NoticeTitle: "공지사항1",
      // NoticeDate: "2022/08/19",
    },
  ]);
  const [postState, setPostState] = useState([
    {
      id: 1,
      noticeType: "공지사항",
      // NoticeTitle: "공지사항1",
      // NoticeDate: "2022/08/19",
    },
    {
      id: 2,
      noticeType: "노하우",
      // NoticeTitle: "공지사항1",
      // NoticeDate: "2022/08/19",
    },
    {
      id: 3,
      noticeType: "이벤트",
      // NoticeTitle: "공지사항1",
      // NoticeDate: "2022/08/19",
    },
  ]);

  useEffect(() => {
    console.log(postState);
  }, [postState]);
  const [postTitle, setPostTitle] = useState("");
  const [postContents, setPostContents] = useState("");
  const onChangeTitle = useCallback(
    (e) => {
      setPostTitle(e.target.value);
    },
    [setPostTitle]
  );
  const onChangeContents = useCallback(
    (e) => {
      setPostContents(e.target.value);
    },
    [setPostContents]
  );
  console.log(postTitle); //입력란
  console.log(postContents); //입력란

  const submitNotice =
    useCallback();
    // (e) => {
    //   setPostContents != "" && setPostTitle != ""
    //     ? form.requestSubmit()
    //     : alert("내용을 입력해주세요.");
    // },
    // [setPostContents, setPostTitle]

  return (
    <>
      <div className="postMngWrap">
        <form>
          <div>
            <div>제목</div>
            <input
              onChange={onChangeTitle}
              type="text"
              id="postTitle"
              placeholder="제목을 입력해주세요"
            />

            <select name="mngCategory">
              <option value={state[0].noticeType}>{state[0].noticeType}</option>
              <option value={state[1].noticeType}>{state[1].noticeType}</option>
              <option value={state[2].noticeType}>{state[2].noticeType}</option>
            </select>
          </div>
          <div>
            <div>내용</div>
            <textarea onChange={onChangeContents} rows="4" cols="50"></textarea>
          </div>
          <button onClick={submitNotice}>등록</button>
        </form>
      </div>
    </>
  );
};
export default AdminPostMng;
