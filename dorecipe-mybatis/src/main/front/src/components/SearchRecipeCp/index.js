
const SearchRecipe = ({state}) =>{

return(
    <>
    <ul className="dpib">
        <li>
            <div>
                <a href={state.recipe_rpath}>
                    <img src="#" alt="x"/>
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