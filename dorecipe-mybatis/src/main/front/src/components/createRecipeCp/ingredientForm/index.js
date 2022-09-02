import styled from "styled-components";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useInput } from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { DefaultBtn } from "../../_common/buttons";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
const IngredientForm = () => {
  const [ingredient_name, onChangeIngreName, setIngreName] = useInput("");
  const [ingredient_amount, onChangeIngreAmount, setIngreAmount] = useInput("");

  // const [counter, setCounter] = useState({});
  const [state, setState] = useState(0);

  const onAddBundleHandler = () => {
    setState(state + 1);
    console.log(state);
    console.log(ingredient_name);
    console.log(ingredient_amount);
  };

  const removeIngredient = useCallback((e) => {
    const removeIngredients = Array.from(Array(state)).filter(
      (item) => item.index !== e.index
    );
    setIngreName(removeIngredients);
  });

  return (
    <>
      <BasicFormWrap>
        {" "}
        <div>
          <FontAwesomeIcon icon={faLightbulb} /> 재료 이름과 재료량 순으로
          입력해주세요
        </div>
        <BundleWrap>
          <Scrollable>
            <div>
              {/* <div className="recipeBundleWrap">
                <div className="recipeFlexBundle">
                  <div className="ingredientBundle">재료 1</div>
                  <div className="bundleIngredientWrap">
                    <div className="bundleFlexDown">
                      <input
                        className="bundleIngredient bundleInput"
                        type="text"
                        // value={state.recipe_name}
                        placeholder="예) 소금"
                      />
                      <input
                        className="bundleIngredientAmount bundleInput"
                        type="text"
                        placeholder="예) 1꼬집"
                      />
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                  </div>
                </div>
              </div> */}
              {Array.from(Array(state)).map((c, index) => {
                return (
                  <>
                    <div className="recipeBundleWrap">
                      <div className="recipeFlexBundle">
                        <div className="ingredientBundle">재료 {index + 1}</div>
                        <div className="bundleIngredientWrap">
                          <div className="bundleFlexDown">
                            <input
                              className="bundleIngredient bundleInput"
                              type="text"
                              onChange={onChangeIngreName}
                              key={index}
                              value={ingredient_name}
                              placeholder="예) 소금"
                            />
                            <input
                              onChange={onChangeIngreAmount}
                              key={index}
                              className="bundleIngredientAmount bundleInput"
                              type="text"
                              placeholder="예) 1꼬집"
                              value={ingredient_amount}
                            />
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              onClick={removeIngredient}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </Scrollable>
        </BundleWrap>
        <DefaultBtn type="button" onClick={onAddBundleHandler}>
          <FontAwesomeIcon icon={faCircleXmark} />
          재료 묶음 추가
        </DefaultBtn>
      </BasicFormWrap>
    </>
  );
};
export default IngredientForm;
const BasicFormWrap = styled.div`
  /* display: inline-flex; */
  color: #463635;
  margin: 0 4.5em;
  width: 90%;
  font-size: 14px;
  height: fit-content;
  background-color: aquamarine;
  padding: 2em;
`;
const BundleWrap = styled.div`
  height: 55vh;
`;
const Scrollable = styled.section`
  width: 100%;
  margin: 1em auto;
  /* padding: 2rem; */

  & > div {
    padding: 2rem;
    /* width: 90%; */
    height: 27em;
    overflow-y: auto;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 30%;
      background-color: blue;
    }
    ::-webkit-scrollbar-track {
      background-color: pink;
    }
  }
`;
