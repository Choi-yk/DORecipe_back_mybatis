import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import CompleteList from "./recipeList";

import styled from "styled-components";
import NullRecipe from "../nullRecipeList";
import { useSelector } from "react-redux";

const CompleteRecipeList = () => {
  // 작성한 레시피
  const [recipeState, setRecipeState] = useState([
    {
      recipe_num: 0,
      recipe_title: "",
      recipe_rpath: "",
      recipe_savetype: 0,
      information_level: "", 
      information_time: "",
    },
  ]);

  const user = useSelector((state) => state);
  const [member_id, setMemberId] = useState();

  useEffect(() => {
    console.log("작성한레시피" + member_id)
      setMemberId(user.auth.user.username);
      // console.log(member_id + " 이건???????????")
      if(member_id !== undefined){
        Axios(); 
      }
  },[member_id]);

  // 작성한 레시피 정보 가져오기
  // member_id가 ~인 레시피의 컬럼들을 다 가져와야지!
  const formData = new FormData();
  formData.append("member_id", member_id)

  function Axios() {
      console.log("작성중레시피 가져오니?" + member_id)
      axios({
        url: "/recipe/recordingType1",
        method: "Post",
        data: formData,
        baseURL: "http://localhost:9000",
      }).then(function (response) {
        setRecipeState(response.data); 
      });
    }
  


  return (
    <>
      <div className="container-sm myPage-box3">
        <div>
          <SectionTitle>
            작성한 레시피
            <span className="likeRecipeTotal">총 {recipeState.length}개</span>
          </SectionTitle>
          <Scrollable>
            <div>
              {recipeState.length !== 0 ? (
                recipeState.map((e) => (
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
    height: 40em;
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
