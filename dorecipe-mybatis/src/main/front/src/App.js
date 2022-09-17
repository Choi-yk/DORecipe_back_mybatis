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

import { useSelector } from "react-redux";

import { logout } from "./reduxRefresh/actions/auth";
import { clearMessage } from "./reduxRefresh/actions/message";
// import UserState from "./reduxRefresh/reducers/auth";
import { history } from "./reduxRefresh/helpers/history";

import EventBus from "./reduxRefresh/common";
import { connect } from "react-redux";
function App() {
  const userMsg = useSelector((state) => state.message);
  const user = useSelector((state) => state);

  console.log("user", user);
  console.log("userMsg", userMsg);
  const [userState, setCurrentUser] = useState(user);

  useEffect(() => {
    // setCurrentUser({
    //   showModeratorBoard: false,
    //   showAdminBoard: false,
    //   currentUser: undefined,
    // });
    user.state = {
      //마운트 되었을때 상태 설정
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
    user.auth = {
      //마운트 되었을때 상태 설정
      isLoggedIn: false,
    };
  }, []);

  history.listen((location) => {
    console.log("location", history.location);
    user.dispatch(clearMessage()); // clear message when changing location
  });

  useEffect(() => {
    // const userState = user;
    history.listen((location) => {
      // user.dispatch(clearMessage(location)); // clear message when changing location
      user.dispatch(clearMessage()); // clear message when changing location
      // console.log(history, history);
    });
    const currentUser = user.auth.user;
    if (currentUser) {
      // user.state = {
      //   currentUser: currentUser,
      //   showModeratorBoard: currentUser.roles.includes("ROLE_MODERATOR"),
      //   showAdminBoard: currentUser.roles.includes("ROLE_ADMIN"),
      // };
      setCurrentUser({
        currentUser: currentUser,
        showModeratorBoard: currentUser.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: currentUser.roles.includes("ROLE_ADMIN"),
      });
      user.state = userState;
      console.log("currentUser", currentUser);
    } else {
      // alert("로그아웃하셨습니다.");
      // console.log("로그아웃!");
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
    user.dispatch(logout());
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
  console.log("currentUser", currentUser);
  return (
    <Routes history={history}>
      <Route path={"/notice/list"} element={<NoticePage />} />
      <Route path={"/notice/detail/:noticeId"} element={<NoticeDetailPage />} />
      <Route path={"/notice/update/:noticeId"} element={<NoticeUpdatePage />} />

      <Route path={"/knowhow/list"} element={<KnowhowPage />} />
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
      {/* {showAdminBoard ? (
        <Route path={"/admin"} element={<AdminPostMng />} />
      ) : (
        <Route path={"/admin"} element={<NotFoundPage />} />
      )} */}
      <Route path={"/admin"} element={<AdminPostMng />} />
      <Route path={"/join"} element={<JoinMemberPage />} />
      <Route path={"/member/info"} element={<MyPage />} />
      {/* <Route path={"/member/info/:memberId"} element={<MyPage />} /> */}
      <Route path={"/member"} element={<MemberListPage />} />
      {/* <Route path={"/login"} element={<LoginPage />} userState={user} /> */}
      <Route path={"/login"} element={<LoginPage />} />

      <Route exact path={"/"} element={<MainPage />} />

      {/* 별도록 jwt설정해줘서 관리자로 로그인 시에만 접근하도록 하기 */}
      {/* <Route path="*" element={<div>없는 페이지임</div>} /> */}
      {currentUser ? (
        <Route path={"/recipe/create"} element={<CreateRecipePage />} />
      ) : (
        <Route path={"/"} element={<MainPage />} />
      )}

      <Route path={"/recipes/search"} element={<DetailSearchPage />} />
      <Route
        path={"/recipes/search/details/:recipeId"}
        element={<DetailRecipePage />}
      />
      <Route
        path={"/recipe/search/:searchId"}
        // component={Recipe}
        element={<SearchRecipePage />}
      />

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
// console.log("history.location", history.location);
function mapStateToProps(state) {
  // const { user } = state.auth;
  const { user } = state;

  console.log("(mapStateToProps)(App)", state);
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
