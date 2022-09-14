import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback, useState, useMemo } from "react";
import RecipeDetailModal from "../recipeDetail";
const RecipeList = ({ recipeState, onHandleModal }) => {
  const navigate = useNavigate();

  //   const onOpenModal = () => {
  return (
    <>
      {" "}
      <RecipeWrap onClick={onHandleModal}>
        <ItemWrap>
          <img src={recipeState.recipe_rpath} alt={recipeState.recipe_rpath} />
          <div>{recipeState.recipe_title}</div>
          <div>
            <span>{recipeState.information_level}</span>
            <span className="floatRight">{recipeState.information_time}</span>
          </div>
        </ItemWrap>
      </RecipeWrap>
    </>
  );
  //   };
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
