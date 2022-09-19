import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import CompleteList from "./recipeList";

import styled from "styled-components";
import NullRecipe from "../nullRecipeList";

const CompleteRecipeList = () => {
  let { memberId } = useParams();

  // 작성한 레시피
  const [C_recipeState, setCRecipeState] = useState([
    {
      recipe_num: 0,
      recipe_title: "",
      recipe_rpath: "",
      recipe_savetype: 0,
      information_level: "",
      information_time: "",
    },
  ]);

  // 작성한 레시피 정보 가져오기
  // member_id가 ~인 레시피의 컬럼들을 다 가져와야지!
  function Axios() {
    axios({
      url: "/member/info/complete/" + memberId,
      method: "get",
      data: {
        recipe_num: 0,
        recipe_title: "",
        recipe_rpath: "",
        recipe_savetype: 0,
        information_level: "",
        information_time: "",
      },
      baseURL: "http://localhost:9000",
    }).then(function (response) {
      console.log(response.data);
      // console.log("작성한 제목" + response.data.recipe_title);
      // console.log("작성한 이미지 url" + response.data.recipe_rpath);
      // console.log("작성한 난이도" + response.data.information_level);
      // console.log("작성한 시간" + response.data.information_time);
      setCRecipeState(response.data);
    });
  }

  useEffect(() => {
    // Axios();
  }, []);

  return (
    <>
      <div className="container-sm myPage-box3">
        <div>
          <SectionTitle>
            작성한 레시피
            <span className="likeRecipeTotal">총 {C_recipeState.length}개</span>
          </SectionTitle>
          <Scrollable>
            <div>
              {C_recipeState.length !== 0 ? (
                C_recipeState.map((e) => (
                  <CompleteList key={e.recipe_num} C_recipeState={e} />
                ))
              ) : (
                <NullRecipe />
              )}
            </div>
          </Scrollable>
          {/* {
                    C_recipeState.length !== 0
                    ?
                    C_recipeState.map((e) => (
                        <CompleteList
                            C_recipeState={e}
                        />  
                    ))
                    :
                    <NullRecipe />
                } */}
        </div>
      </div>
    </>
  );
};
export default CompleteRecipeList;
const SectionTitle = styled.div`
  background-color: #8d3232;
  display: inline-block;
  width: 90%;
  margin: 1em 3em;
  color: #fffdf5;
  height: 2.4em;
  font-size: 21px;
  font-weight: 700;
  padding: 0.5em 0;
  padding-left: 0.5em;
  text-align: center;
`;

const Scrollable = styled.section`
  width: 100%;
  margin: 1em auto;

  & > div {
    padding: 2rem;
    height: 27em;
    overflow-y: auto;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 30%;
      background-color: #463635;
    }
    ::-webkit-scrollbar-track {
      background-color: #fffdf5;
      border: 1px solid #463635;
    }
  }
`;
