import styled from "styled-components";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Bundle = ({ state }) => {
  for (let i = 0; i < state.length; i++) {
    <>
      return(
      <div className="recipeBundleWrap">
        <div className="recipeFlexBundle">
          <div className="ingredientBundle">
            <FontAwesomeIcon icon={faCircleXmark} /> 재료묶음 {state}
          </div>
          <input
            className="bundleName bundleInput"
            type="text"
            // value={state.bundle_name}
            placeholder="예) 스테이크 소스"
          />

          <div className="bundleIngredientWrap">
            <div className="bundleFlexDown">
              <input
                className="bundleIngredient bundleInput"
                type="text"
                placeholder="예) 케챱"
              />
              <input
                className="bundleIngredientAmount bundleInput"
                type="text"
                placeholder="예) 1/2컵"
              />
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
        </div>
        <button className="addIngredientBtn">
          <FontAwesomeIcon icon={faCircleXmark} />
          추가
        </button>
      </div>
      )
    </>;
  }

  return (
    <>
      <div className="recipeBundleWrap">
        <div className="recipeFlexBundle">
          <div className="ingredientBundle">
            <FontAwesomeIcon icon={faCircleXmark} /> 재료묶음 {state}
          </div>
          <input
            className="bundleName bundleInput"
            type="text"
            // value={state.bundle_name}
            placeholder="예) 스테이크 소스"
          />

          <div className="bundleIngredientWrap">
            <div className="bundleFlexDown">
              <input
                className="bundleIngredient bundleInput"
                type="text"
                placeholder="예) 케챱"
              />
              <input
                className="bundleIngredientAmount bundleInput"
                type="text"
                placeholder="예) 1/2컵"
              />
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
        </div>
        <button className="addIngredientBtn">
          <FontAwesomeIcon icon={faCircleXmark} />
          추가
        </button>
      </div>
    </>
  );
};
export default Bundle;
