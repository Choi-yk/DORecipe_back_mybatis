import styled from "styled-components";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useInput } from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
const IngredientForm = () => {
  const [state, setState] = useState(0);
  const [inputValues, setInputValues] = useState({
    // ingredient_name: "",
    // ingredient_amount: "",
  });

  const onAddBundleHandler = () => {
    setState(state + 1);
    console.log(state);
  };

  const handleOnChange = (e) => {
    const ingredients = {};
    ingredients[e.target.className] = e.target.value;
    console.log(e.target.value);
    setInputValues({ ...inputValues, ...ingredients });
  };

  return (
    <>
      <BasicFormWrap>
        {" "}
        <div className="instruction">
          <FontAwesomeIcon icon={faLightbulb} /> 재료 이름과 재료량 순으로
          입력해주세요
        </div>
        <BundleWrap>
          <Scrollable>
            <div>
              <div className="recipeBundleWrap">
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
              </div>
              {Array.from(
                Array(state).map((c, index) => {
                  return (
                    <>
                      <div className="recipeBundleWrap">
                        <div className="recipeFlexBundle">
                          <div className="ingredientBundle">재료 {c + 1}</div>
                          <div className="bundleIngredientWrap">
                            <div className="bundleFlexDown">
                              <input
                                // className="bundleIngredient bundleInput"
                                type="text"
                                key={c}
                                className={index}
                                onChange={handleOnChange}
                                // value={state.recipe_name}
                                placeholder="예) 소금"
                              />
                              {/* <input
                                // className="bundleIngredientAmount bundleInput"
                                type="text"
                                placeholder="예) 1꼬집"
                                key={e.ingredient_amount}
                                className={index}
                                onChange={handleOnChange}
                              /> */}
                              <FontAwesomeIcon icon={faCircleXmark} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </div>
          </Scrollable>
        </BundleWrap>
        <button
          className="addBundleBtn"
          type="button"
          onClick={onAddBundleHandler}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
          재료 묶음 추가
        </button>
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
const BundleWrap = styled.div``;
const Scrollable = styled.section`
  width: 100%;
  margin: 0 auto;
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
      background-color: ${(props) => props.theme.mainColor};
    }
    ::-webkit-scrollbar-track {
      background-color: pink;
    }
  }
`;
