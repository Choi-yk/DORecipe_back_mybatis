import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";


const LikeRecipeList = () => {
    let { memberId } = useParams();
    
    // 작성중 레시피
    const [likeState, setLikeState] = useState([
        {
            recipe_num: 0,
            recipe_title: "",
            recipe_rpath: "",
            recipe_savetype: 0,
            information_level: "",
            information_time: ""
        }
    ]);

    function testAxios() {
        axios({
            url: "/recipe/like/"+memberId,
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
            setLikeState(response.data);
        });
    }

    useEffect(() => {
        testAxios();
    }, []);

    return(
        <>
        {/* 좋아요한 레시피 */}
        <div className="myPage-box2">
            <div>
                <SectionTitle>
                    좋아요한 레시피
                    <span className="likeRecipeTotal">
                        <FontAwesomeIcon icon={faHeart} className="heart" />
                        총 n개
                    </span>
                </SectionTitle>
                <LikeRecipeList />
            </div>
        </div>
        </>
    );

}

export default LikeRecipeList;
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
`;