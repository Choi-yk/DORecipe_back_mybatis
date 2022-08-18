// import React, { useEffect, useState } from "react";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticePage from "./pages/adminPage";
import NoticeDetailPage from "./pages/adminPage";

function App() {
  // const [hello, setHello] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/notice"} element={<NoticePage />} />
        <Route path={"/notice/:noticeId"} element={<NoticeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );

  // return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
}
export default App;
