import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import RecipeDetailModal from "../recipeDetail";
const RecipeList = ({ recipeState, modalState }) => {
  const [recipeStates, setRecipeState] = useState([]);
  // const [recipeStates, setRecipeState] = useState([]);

  const onOpenModal = () => {
    setRecipeState([]);
    setRecipeState(recipeState);
    // console.log("recipe_num!!@!@!", recipeState.recipe_num);
    // const filtered = recipeState.filter(
    //   (e) => e.recipe_num !== recipeStates.recipe_num
    // );
    // console.log("filtered", filtered);
    // setRecipeState(filtered);
  };
  console.log("recipeStates!@@!#", recipeStates);
  // const onCloseModal = () => {
  //   setRecipeState([]);
  // };
  return (
    <>
      {modalState ? (
        <>
          <RecipeDetailModal
            recipeStates={recipeStates}
            modalState={modalState}
          />
        </>
      ) : (
        <>
          {" "}
          <RecipeWrap>
            <ItemWrap onClick={onOpenModal}>
              <img
                src={recipeState.recipe_rpath}
                alt={recipeState.recipe_rpath}
              />
              <div>{recipeState.recipe_title}</div>
              <div>
                <span>{recipeState.information_level}</span>
                <span className="floatRight">
                  {recipeState.information_time}
                </span>
              </div>
            </ItemWrap>
          </RecipeWrap>
        </>
      )}
    </>
  );
};

const RecipeWrap = styled.div`
  padding: 1em;
  display: inline-flex;
`;
const ItemWrap = styled.div`
  display: inline-flex;
  cursor: pointer;
  min-width: 13%;
  margin: 0;
  flex-direction: column;
  & img {
    width: 16em;
  }
  & floatRight {
    float: right;
  }
`;

export default RecipeList;
