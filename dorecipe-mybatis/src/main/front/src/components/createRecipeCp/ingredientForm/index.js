import styled from "styled-components";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCircleXmark,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { DefaultBtn } from "../../_common/buttons";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
const IngredientForm = () => {
  const [ingredients, setIngredients] = useState([
    { ingredient_id: 0, ingredient_name: "", ingredient_amount: "" },
    { ingredient_id: 1, ingredient_name: "", ingredient_amount: "" },
    { ingredient_id: 2, ingredient_name: "", ingredient_amount: "" },
  ]);

  const IngreAmountRef = useRef();
  const inputFocus = useRef();
  const [input, setInput] = useState("");

  /**재료 추가 */
  const onAddIngredientHandler = () => {
    const ingreCopy = [...ingredients];
    if (ingreCopy[ingreCopy.length - 1].ingredient_name !== "") {
      ingreCopy.push({
        ingredient_id: ingreCopy.ingredient_id + 1,
        ingredient_name: "",
        ingredient_amount: "",
      });
      setIngredients(ingreCopy);
      console.log(ingreCopy);
      // inputFocus.current.focus();
    } else {
      alert("재료를 입력해주세요.");
    }
  };

  /**재료 제거 */
  const removeIngredient = (index) => {
    const ingreCopy = [...ingredients];
    if (ingreCopy.length > 1) {
      const removeIngre = ingreCopy.splice(IngreAmountRef.current, 1)[0];
      console.log(removeIngre);
      IngreAmountRef.current = null;
      console.log(ingreCopy[IngreAmountRef.current]);
      setIngredients(ingreCopy);
    } else {
      alert("재료는 1개 이상 넣어주세요.");
    }
  };

  const setIngredientInputs = (e, item, index) => {
    let ingreCopy = [...ingredients];
    console.log(e.target.value);
    ingreCopy[index].ingredient_id = index;
    ingreCopy[index].ingredient_name = e.target.value;
    setIngredients(ingreCopy);
  };

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
              {ingredients.map((item, index) => {
                return (
                  <>
                    <div className="recipeBundleWrap" key={item}>
                      <div className="recipeFlexBundle">
                        <div className="ingredientBundle">재료 {index + 1}</div>
                        <div className="bundleIngredientWrap">
                          <div className="bundleFlexDown">
                            <input
                              className="bundleIngredient bundleInput"
                              type="text"
                              ref={inputFocus}
                              onChange={(e) => {
                                setInput(IngreAmountRef.current);
                              }}
                              // key={index}
                              onBlur={(e) => {
                                setIngredientInputs(e, item, index);

                                // IngreAmountRef.current = item.ingredient_name;
                                // console.log(IngreAmountRef.current);
                              }}
                              value={
                                item.ingredient_name !== ""
                                  ? item.ingredient_name
                                  : item.ingredient_name[index]
                              }
                              placeholder={
                                index % 4 == 0
                                  ? "소금"
                                  : index % 4 == 1
                                  ? "밀가루"
                                  : index % 4 == 2
                                  ? "계란"
                                  : index % 4 == 3
                                  ? "후추"
                                  : ""
                              }
                            />
                            <input
                              // onChange={onChangeInput}
                              // key={item.ingredient_id}
                              className="bundleIngredientAmount bundleInput"
                              type="text"
                              ref={IngreAmountRef}
                              placeholder={
                                index % 4 == 0
                                  ? "1꼬집"
                                  : index % 4 == 1
                                  ? "300g"
                                  : index % 4 == 2
                                  ? "6알"
                                  : index % 4 == 3
                                  ? "1/2t"
                                  : ""
                              }
                              // value={item.ingredient_amount}
                            />
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              onClick={() => {
                                IngreAmountRef.current = index;
                                removeIngredient(index);
                              }}
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
        <DefaultBtn type="button" onClick={onAddIngredientHandler}>
          <FontAwesomeIcon icon={faPlusCircle} /> 재료 추가
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
  /* background-color: aquamarine; */
  padding: 2em;
`;
const BundleWrap = styled.div`
  height: 55vh;
`;
const Scrollable = styled.section`
  width: 100%;
  margin: 1em auto;

  & > div {
    padding: 2rem;
    height: 27em;
    overflow-y: auto;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 30%;
      background-color: #463635;
    }
    ::-webkit-scrollbar-track {
      background-color: #fffdf5;
      border: 1px solid #463635;
    }
  }
`;
