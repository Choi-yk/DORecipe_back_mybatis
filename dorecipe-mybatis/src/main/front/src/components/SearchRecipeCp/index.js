
const SearchRecipe = ({state}) =>{

return(
    <>
    <ul className="dpib">
        <li>
            <div>
                <a href={`http://localhost:3000/recipe/detail/${state.recipe_num}`}>
                    <img src={state.recipe_rpath} alt="x"/>
                </a>
            </div>
            <div>
                {state.recipe_title}
            </div>
            <div>
                {state.information_level} &nbsp; {state.information_time}
            </div>
        </li>
    </ul>
    </>
)

};
export default SearchRecipe;