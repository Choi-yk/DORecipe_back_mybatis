import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import RecordList from "./recipeList";

import styled from "styled-components";
import NullRecipe from "../nullRecipeList";


const RecordingRecipeList = () => {
    let { memberId } = useParams();
    
    // 작성중 레시피
    const [recipeState, setRecipeState] = useState([
        {
            recipe_num: 0,
            recipe_title: "",
            recipe_rpath: "",
            recipe_savetype: 0,
            information_level: "",
            information_time: ""
        }
    ]);

    function Axios() {
        axios({
            url: "/recipe/recording/"+memberId,
            method: "get",
            data: {
                recipe_num: 0,
                recipe_title: "",
                recipe_rpath: "",
                recipe_savetype: 1,
                information_level: "",
                information_time: ""
            },
            baseURL: "http://localhost:9000"
        }).then(function(response) {
            console.log(response.data);
            // console.log("작성중 제목" + response.data.recipe_title);
            // console.log("작성중 이미지 url" + response.data.recipe_rpath);
            // console.log("작성중 난이도" + response.data.information_level);
            // console.log("작성중 시간" + response.data.information_time);
            setRecipeState(response.data);
        });
    }

    useEffect(() => {
        Axios();
    }, []);

    return(
        <>
        {/* 작성중인 레시피 */}
        <div className="container-sm myPage-box4">
            <div>
                <SectionTitle>
                    작성중인 레시피
                    <span className="likeRecipeTotal">총 {recipeState.length}개</span>
                </SectionTitle>
                <Scrollable>
                    <div>
                        {
                            recipeState.length !== 0
                            ?
                            recipeState.map((e) => (
                                <RecordList
                                    recipeState={e}
                                />  
                            ))
                            :
                            <NullRecipe />
                        }
                    </div>
                </Scrollable>
                {/* {
                    recipeState.length !== 0
                    ?
                    recipeState.map((e) => (
                        <RecordList
                            recipeState={e}
                        />  
                    ))
                    :
                    <NullRecipe />
                 } */}
            </div>
        </div>
        </>
    );
}
export default RecordingRecipeList;
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