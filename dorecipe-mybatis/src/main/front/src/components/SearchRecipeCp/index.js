import axios from "axios";
import { useEffect, useState  } from "react";
const SearchRecipe = ({state}) =>{

    const [state2, setState2] = useState();

    function axios2(){
        axios.get("http://openapi.foodsafetykorea.go.kr/api/963fb203c47b47a78104/COOKRCP01/json/1/2")
            .then((result)=>{
                console.log(result.data)
        })
    }

    useEffect(()=>{
        // axios2();
    })

return(
<>
    <ul className="dpib">
        <li className="">
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