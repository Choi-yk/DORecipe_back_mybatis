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

import MyPage from "./pages/myPage";
import AdminPostMng from "./pages/adminPage";
import JoinMemberPage from "./pages/joinMemberPage";
import MemberListPage from "./pages/memberListPage";

import MainPage from "./pages/mainPage";
import CreateRecipePage from "./pages/createRecipePage";

import LoginPage from "./pages/loginPage";
import SearchRecipePage from "./pages/searchRecipePage";

import DetailSearchPage from "./pages/detailSearchPage";
import DetailRecipePage from "./pages/recipeDetailsPage";

import NotFoundPage from "./pages/errorPage";

import Recipe from "./Recipe.js";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "./reduxRefresh/actions/auth";
import { clearMessage } from "./reduxRefresh/actions/message";
// import UserState from "./reduxRefresh/reducers/auth";
import { history } from "./reduxRefresh/helpers/history";

import EventBus from "./reduxRefresh/common";
import { connect } from "react-redux";
function App() {
  const userMsg = useSelector((state) => state.message);
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("user", user);
  console.log("userMsg", userMsg);
  const [userState, setCurrentUser] = useState(user);

  useEffect(() => {
    user.state = {
      //마운트 되었을때 상태 설정
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
    // user.auth = {          /////////reload할때 바꿔줘서 문제였음
    //   //마운트 되었을때 상태 설정
    //   isLoggedIn: false,
    // };
    dispatch(clearMessage());
  }, []);

  // history.listen((location) => {
  //   // console.log("location", history.location);
  //   // user.dispatch(clearMessage()); // clear message when changing location
  //   dispatch(clearMessage()); // clear message when changing location
  // });

  useEffect(() => {
    // const userState = user;
    // history.listen((location) => {
    //   // user.dispatch(clearMessage(location)); // clear message when changing location
    //   user.dispatch(clearMessage()); // clear message when changing location
    //   // console.log(history, history);
    // });
    dispatch(clearMessage());
    const currentUser = user.auth.user;
    if (currentUser) {
      setCurrentUser({
        currentUser: currentUser,
        showModeratorBoard: currentUser.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: currentUser.roles.includes("ROLE_ADMIN"),
      });
      user.state = userState;
      console.log("currentUser", currentUser);
    } else {
      setCurrentUser({
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined,
      });
    }
    EventBus.on("logout", () => {
      logOut();
    });

    EventBus.remove("logout");
  }, []);

  const logOut = () => {
    dispatch(logout());
    setCurrentUser({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
    user.state = userState;
    console.log("logOut", user);
  };
  // const { currentUser, showModeratorBoard, showAdminBoard } = user.state;
  const { currentUser, showModeratorBoard, showAdminBoard } = user;
  // console.log("currentUser", currentUser);
  return (
    <Routes history={history}>
      {/* <Routes> */}
      <Route path={"/notice/list"} element={<NoticePage />} user={user} />

      <Route
        path={"/notice/detail/:noticeId"}
        element={<NoticeDetailPage />}
        user={user}
      />
      <Route path={"/notice/update/:noticeId"} element={<NoticeUpdatePage />} />

      <Route path={"/knowhow/list"} element={<KnowhowPage />} user={user} />
      <Route
        path={"/knowhow/detail/:knowhowId"}
        element={<KnowhowDetailPage />}
      />
      <Route
        path={"/knowhow/update/:knowhowId"}
        element={<KnowhowUpdatePage />}
      />

      <Route path={"/event/list"} element={<EventPage />} auth={user} />
      <Route path={"/event/detail/:detailId"} element={<EventDetailPage />} />
      <Route path={"/event/update/:detailId"} element={<EventModify />} />

      <Route path={"/admin"} element={<AdminPostMng />} />
      <Route path={"/join"} element={<JoinMemberPage />} />

      {currentUser ? (
        <Route path={"/member/info/"} element={<MyPage />} />
      ) : (
        // <Route path={"/member/info/:memberId"} element={<MyPage />} />
        <Route path={"/"} element={<MainPage />} />
      )}

      <Route path={"/member/info"} element={<MyPage />} />

      <Route path={"/login"} element={<LoginPage />} />

      <Route exact path={"/"} element={<MainPage />} />
      {currentUser ? (
        <Route path={"/recipe/create"} element={<CreateRecipePage />} />
      ) : (
        <Route path={"/"} element={<MainPage />} />
      )}

      <Route path={"/recipes/search"} element={<DetailSearchPage />} />
      <Route
        path={"/recipe/search/details/:recipeId"}
        element={<DetailRecipePage />}
      />
      <Route path={"/recipe/search/:searchId"} element={<SearchRecipePage />} />

      <Route path={"/recipe/search/:searchId"} element={<SearchRecipePage />} />

      <Route path={"/recipe/create"} element={<CreateRecipePage />} />
      <Route
        path={"/recipes/search/details/:recipeId"}
        element={<DetailRecipePage />}
      />
      <Route path={"/*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
