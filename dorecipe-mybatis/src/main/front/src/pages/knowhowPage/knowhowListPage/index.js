import "./style.css";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KnowhowList from "./knowhowList";
import axios from "axios";

const KnowhowPage = () => {
  const [state, setState] = useState([
    {
        know_num: 0,
        know_title: "",
        know_content: "",
        know_creDate: "",
        know_path: ""
    }]);

    function testAxios() {
        axios({
          url: "/knowhow/list",
          method: "get",
          data: {
            know_num: "test",
            know_title: "test",
            know_content: "test",
            know_creDate: "2022/08/24",
            know_path: "test_path"
          },
          baseURL: "http://localhost:9000",
        }).then(function (response) {
          console.log(response.data);
          // console.log(response.data[0]);
          setState(response.data);
        });
    }

    useEffect(() => {
        testAxios();
    }, []);
    
    const removePost = useCallback((know_num) => {
        const removeState = state.filter((item) => item.know_num !== know_num);
        setState(removeState);
        axios
          .get(`http://localhost:9000/knowhow/delete/${know_num}`)
          .then((data) => {
            console.log(data);
          });
    });

    return(
        <>
            <div className="knowWrap">
                <h2>| Knowhow |</h2>
                <Link className="updateList" to={"/knowhow/create"}>
                    등록
                </Link>
                <div className="knowTableWrap">
                    <ul>
                        <div className="tableHead">
                            <div className="knowNo">No.</div>
                            <div className="knowTitle">제목</div>
                            <div className="knowDate">작성일자</div>
                            <div className="updateOrDelete">수정 및 삭제</div>
                        </div>
                        {
                        state.map((e) => (
                            <KnowhowList 
                             key={e.know_num}
                             removePost={removePost}
                             state={e}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default KnowhowPage;