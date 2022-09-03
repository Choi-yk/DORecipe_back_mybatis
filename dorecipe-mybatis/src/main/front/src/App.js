// import React, { useEffect, useState } from "react";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import NoticePage from "./pages/noticePage/noticeListPage";
import NoticeDetailPage from "./pages/noticePage/noticeDetailPage";
import NoticeUpdatePage from "./pages/noticePage/noticeFormPage";

import KnowhowPage from "./pages/knowhowPage/knowhowListPage";
import KnowhowDetailPage from "./pages/knowhowPage/knowhowDetailPage";
import KnowhowUpdatePage from "./pages/knowhowPage/knowhowFormPage";

import EventPage from "./pages/eventPage/eventListPage";
import EventDetailPage from "./pages/eventPage/eventDetailPage";
import EventModify from "./pages/eventPage/eventMod";

import AdminPostMng from "./pages/adminPage";
import JoinMemberPage from "./pages/joinMemberPage";
import MemberListPage from "./pages/memberListPage";

import MainPage from "./pages/mainPage";
import CreateRecipePage from "./pages/createRecipePage";

import LoginPage from "./pages/loginPage";
import SearchRecipePage from "./pages/SearchRecipePage";

function App() {
  return (
    <Routes>
      {/* <Route path={"/notice/list"} element={<NoticePage />} /> */}
      {/* <Route path={"/"} element={<NoticePage />} /> */}
      <Route path={"/notice/list"} element={<NoticePage />} />
      <Route path={"/notice/detail/:noticeId"} element={<NoticeDetailPage />} />
      <Route path={"/notice/update/:noticeId"} element={<NoticeUpdatePage />} />
      <Route path={"/event/list"} element={<EventPage />} />
      <Route path={"/knowhow/list"} element={<KnowhowPage />} />
      <Route path={"/event/detail/:detailId"} element={<EventDetailPage />} />
      <Route
        path={"/knowhow/detail/:knowhowId"}
        element={<KnowhowDetailPage />}
      />
      <Route path={"/event/detail/:detailId"} element={<EventDetailPage />} />
      <Route path={"/event/update/:detailId"} element={<EventModify />} />
      <Route path={"/knowhow/list"} element={<KnowhowPage />} />
      <Route
        path={"/knowhow/detail/:knowhowId"}
        element={<KnowhowDetailPage />}
      />
      <Route
        path={"/knowhow/update/:knowhowId"}
        element={<KnowhowUpdatePage />}
      />
      <Route path={"/notice/create"} element={<AdminPostMng />} />
      <Route path={"/join"} element={<JoinMemberPage />} />
      <Route path={"/member"} element={<MemberListPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/"} element={<MainPage />} />
      {/* 별도록 jwt설정해줘서 관리자로 로그인 시에만 접근하도록 하기 */}
      {/* <Route path="*" element={<div>없는 페이지임</div>} /> */}
      <Route path={"/recipe/create"} element={<CreateRecipePage />} />
      <Route path={"/recipe/search/:searchId"} element={<SearchRecipePage />} />
    </Routes>
  );

  // return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
}
export default App;
