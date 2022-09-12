import { Link } from "react-router-dom";

const CompleteList = ({C_recipeState}) => {
return(
    <>
    {/* 작성한 레시피 */}

            <div className="memberInfo">
                <div>
                    <Link to={`/recipes/search/details/${C_recipeState.recipe_num}`}>
                        {C_recipeState.recipe_title}
                    </Link>
                    <Link to={`/recipes/search/details/${C_recipeState.recipe_num}`}>
                        {C_recipeState.recipe_rpath}
                    </Link>
                    {C_recipeState.information_level}
                    {C_recipeState.information_time}
                    
                </div>
            </div>
    </>
)
}
export default CompleteList;
