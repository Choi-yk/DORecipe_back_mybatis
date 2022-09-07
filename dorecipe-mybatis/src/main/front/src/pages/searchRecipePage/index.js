import { useEffect, useState } from "react";
import MainLayout from "../../layout/mainLayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchRecipe from "../../components/SearchRecipeCp";

const SearchRecipePage = () => {
  const params = useParams();

  const [state, setState] = useState([
    {
      recipe_num: 0,
      recipe_title: "",
      recipe_rpath: "",
      information_level: "",
      information_time: "",
    },
  ]);

  function testAxios() {
    const search = params.searchId;
      axios.get('http://localhost:9000/recipe/search/'+ search )
        .then((result)=>{
          setState(result.data)
        })
  
    }
    
      useEffect(() => {
        testAxios();
      }, []);
    
    
  return (
    <>
      <MainLayout>
        <h2>| Recipes |</h2>
        <div className="center">
          {state.map((e) => (
            <SearchRecipe key={e.recipe_title} state={e} />
          ))}
        </div>
      </MainLayout>
    </>
  );
};
export default SearchRecipePage;
