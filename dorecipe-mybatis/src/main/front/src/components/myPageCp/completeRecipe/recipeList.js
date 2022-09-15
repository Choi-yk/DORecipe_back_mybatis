import { Link } from "react-router-dom";

import styled from "styled-components";

const CompleteList = ({C_recipeState}) => {
return(
    <>
    {/* 작성한 레시피 */}
            <RecipeWrap>
            <li className="card recipe-box">
                <Link to={`/recipes/search/details/${C_recipeState.recipe_num}`}>
                    <img className="card-img-top card-img-size"
                        src={C_recipeState.recipe_rpath}
                        alt="profileImage" />
                </Link>
                <Link to={`/recipes/search/details/${C_recipeState.recipe_num}`}
                    className="card-title" 
                    style={{ textDecoration: "none" }}>
                    {C_recipeState.recipe_title}
                </Link>
                {C_recipeState.information_level}
                &nbsp;&nbsp;&nbsp;
                {C_recipeState.information_time}
            </li>
            </RecipeWrap>
    </>
)
}
export default CompleteList;
const RecipeWrap = styled.ul`
    display: inline-block;
    justify-content: flex-start;
    flex-wrap: nowrap;
    // background-color: blue;
`;