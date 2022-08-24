// import React, { useEffect, useState } from "react";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NoticePage from "./pages/noticePage/noticeListPage";
import EventPage from "./pages/eventPage/eventListPage";
import NoticeDetailPage from "./pages/noticePage/noticeDetailPage";
import AdminPostMng from "./pages/adminPage";
import EventDetailPage from "./pages/eventPage/eventDetailPage";
function App() {
  return (
    <Routes>
      {/* <Route path={"/notice/list"} element={<NoticePage />} /> */}
      {/* <Route path={"/"} element={<NoticePage />} /> */}
      <Route path={"/notice/list"} element={<NoticePage />} />
      <Route path={"/event/list"} element={<EventPage />} />
      <Route path={"/event/detail/:detailId"} element={<EventDetailPage />}/>
      <Route path={"/notice/detail/:noticeId"} element={<NoticeDetailPage />} />
      <Route path={"/notice/create"} element={<AdminPostMng />} />
      {/* 별도록 jwt설정해줘서 관리자로 로그인 시에만 접근하도록 하기 */}
      {/* <Route path="*" element={<div>없는 페이지임</div>} /> */}
    </Routes>
  );

  // return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
}
export default App;
