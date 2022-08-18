// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticePage from "./pages/adminPage";
import NoticeDetailPage from "./pages/adminPage";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/notice"} element={<NoticePage />} />
        <Route path={"/notice/:noticeId"} element={<NoticeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );

  {
    /* const [hello, setHello] = useState(""); */
  }

  {
    /* useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []); */
    // return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
  }
}
export default App;
