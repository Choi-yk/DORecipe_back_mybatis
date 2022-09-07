import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCirclePlus,
  faCircleMinus,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useCallback, useEffect } from "react";
import { SmallBtn, DefaultBtn } from "../../_common/buttons";
import "./style.css";
import axios from "axios";
import EditDropZone from "../../_common/dropzone";

const RecipeOrderDrag = ({ recipeState }) => {
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [recipe_imgs_steps, setRecipe_imgs_steps] = useState([]);
  const [stepDropState, setSetDropState] = useState("stepDrop");

  const [stepState, setStep] = useState([
    {
      recipe_num: recipeState, //레시피 등록 번호,
      stepId: 0,
      stepDescription: "",
      stepImg: "",
    },
    {
      recipe_num: 0,
      stepId: 1,
      stepDescription: "",
      stepImg: "",
    },
    {
      recipe_num: 0,
      stepId: 2,
      stepDescription: "",
      stepImg: "",
    },
  ]);
  //임시등록버튼 2번째로 클릭했을때는 update하도록
  const [btnState, setBtnState] = useState(0);

  // save reference for dragItem and dragOverItem
  const dragItemRef = useRef();
  const dragOverItemRef = useRef();
  const inputFocus = useRef();

  //input값 인지
  const handleFormChange = (index, e) => {
    let stepCopy = [...stepState];
    stepCopy[index][e.target.name] = e.target.value;
    setStep(stepCopy);
    setRecipe_imgs_steps(stepCopy);
  };

  // onDragStart :드래그 시작하면
  const dragStarted = (e, item) => {
    //다른 영역에 드롭했다면
    e.dataTransfer.setData("item.recipe_num", item.recipe_num);
    e.dataTransfer.setData("item.stepId", item.stepId);
    e.dataTransfer.setData("item.stepDescription", item.stepDescription);
    e.dataTransfer.setData("item.stepImg", item.stepImg);
  };

  //onDragOver : 드래그 호버하면
  const draggingOver = (e, id) => {
    e.preventDefault();
  };
  //handle drag Sorting
  const handleSort = (e, index) => {
    //duplicate items
    if (index !== 0) {
      let steps = [...stepState];
      //remove and save the dragged item content
      /** 드래그한 배열 {stepId: dragItemRef.current, stepDescription: "", stepImg: ""}*/
      const draggedItemContent = steps.splice(dragItemRef.current, 1)[0];
      console.log("dragItemRef.current", dragItemRef.current);
      //이동시킬 위치에 0개 삭제하고 그 자리에 draggedItemContent을 이동시킴
      steps.splice(dragOverItemRef.current, 0, draggedItemContent);
      dragItemRef.current = null;
      dragOverItemRef.current = null;
      //update the actual array
      setStep(steps);
      console.log("steps", steps);
    } else {
      alert("첫번쨰 순서는 옮기지마세요.");
    }
  };

  //handle added Inputboxes
  const handleAddedSteps = () => {
    const steps = [...stepState];
    if (steps[steps.length - 1].stepDescription !== "") {
      let newSteps = {
        recipe_num: steps[0].recipe_num,
        stepId: steps.length,
        stepDescription: "",
        stepImg: "",
      };
      setStep([...stepState, newSteps]);
      console.log("addedSteps", stepState);
    } else {
      alert("순서에 대한 설명을 적어주세요.");
    }
  };

  //순서 제거
  const handleRemovedSteps = () => {
    const steps = [...stepState];
    //순서는 3개 이상 등록하도록
    if (steps.length > 3) {
      steps.splice(stepState.length - 1, 1);
      setStep(steps);
    } else {
      alert("순서는 3개 이상 작성해 주세요. ");
    }
  };

  const onLoadImgFile = useCallback(
    (index, e) => {
      // onChangeRecipeThumbnail(e);
      let stepCopy = [...stepState];
      for (let i = 0; i < stepCopy.length; i++) {
        stepCopy[i].stepImg = e.target.file;
        console.log("stepCopy[i]", stepCopy[i]);
      }
      setStep(stepCopy);
      console.log("stepState", stepState);
      // setRecipe_imgs_steps(stepCopy);
    },
    [stepState, files]
  );

  //임시 저장 ==> 2번째에는 업데이트문 들어가도록하기
  const onTemporarySave = useCallback(
    (e) => {
      e.preventDefault();
      let steps = [...stepState];

      if (steps[0].stepDescription) {
        setBtnState(btnState + 1);
        console.log("btnState", btnState);
        const data = steps;
        const blob = new Blob([JSON.stringify(data)], {
          type: "application.json",
        });
        console.log("data", data);
        const formData = new FormData();
        formData.append("data", blob);
        //레시피 배열 수 만큼 append 시켜 주기
        for (let i = 0; i < data.length; i++) {
          formData.append(`orderVoList[${i}].recipe_num`, recipeState);
          formData.append(`orderVoList[${i}].order_num`, i);
          formData.append(
            `orderVoList[${i}].order_explain`,
            data[i].stepDescription
          );
          formData.append(
            `orderVoList[${i}].recipe_imgs_steps`,
            recipe_imgs_steps[i]
          );
          formData.append(`orderVoList[${i}].order_path`, data[i].stepImg);
        }
        for (let value of formData.values()) {
          console.log(value);
        }
        if (btnState <= 1) {
          // axios({
          //   method: "POST",
          //   url: "http://localhost:9000/recipe/insertRecipeOrder",
          //   headers: { "Content-Type": "multipart/form-data" },
          //   data: formData,
          // })
          //   .then((response) => {
          //     console.log(response.data);
          //     alert("임시저장 하셨습니다.");
          //     setBtnState(btnState + 1);
          //   })
          //   .catch((e) => {
          //     console.log(e);
          //     alert("임시저장 실패.");
          //   });
        } else if (btnState > 1) {
          //업데이트문
          // axios({
          //   method: "POST",
          //   url: "http://localhost:9000/recipe/insertRecipeOrder",
          //   headers: { "Content-Type": "multipart/form-data" },
          //   data: formData,
          // })
          //   .then((response) => {
          //     console.log(response.data);
          //     alert("임시저장(업데이트) 하셨습니다.");
          //     setBtnState(btnState + 1);
          //   })
          //   .catch((e) => {
          //     console.log(e);
          //     alert("임시저장 실패.");
          //   });
        }
      } else {
        alert("순서는 하나 이상 설명해주세요.");
      }
    },
    [recipeState, stepState, btnState]
  );

  return (
    <>
      <TotalWrap>
        <Instruction>
          <FontAwesomeIcon icon={faLightbulb} /> 요리의 맛이 좌우될 수 있는
          중요한 부분을 상세하게 적어주세요
        </Instruction>
        <BtnWrap>
          <SmallBtn onClick={handleAddedSteps}>
            {" "}
            <FontAwesomeIcon icon={faCirclePlus} /> 순서 추가하기
          </SmallBtn>
          <SmallBtn onClick={handleRemovedSteps}>
            {" "}
            <FontAwesomeIcon icon={faCircleMinus} /> 순서 제거하기
          </SmallBtn>
          <SmallBtn
            type="button"
            className="addIngreBtn"
            onClick={onTemporarySave}
            // value="saveAsDraft"
            btnState={btnState}
          >
            임시저장
          </SmallBtn>
        </BtnWrap>
        <Scrollable>
          <div>
            <DraggableWrap>
              <DroppableDiv droppable="true">
                {stepState.map((item, index) => {
                  return (
                    <>
                      <div className="stepName">Step {index + 1}</div>
                      <div
                        className="draggableItem"
                        key={index}
                        draggable={index !== 0 && true}
                        onDragStart={(e) => {
                          dragStarted(e, item);
                          dragItemRef.current = index;
                        }}
                        onDragOver={(e) => {
                          draggingOver(e, index);
                          dragOverItemRef.current = index;
                        }}
                        onDrop={(e) => {
                          handleSort(e, index);
                        }}
                      >
                        <textarea
                          className="textArea"
                          rows="2"
                          cols="70"
                          key={item.stepId}
                          placeholder={
                            index % 4 == 0
                              ? "고기 재워주기"
                              : index % 4 == 1
                              ? "고기 굽기"
                              : index % 4 == 2
                              ? "고기 노릇해지면 뒤집어주기"
                              : index % 4 == 3
                              ? "완성된 음식을 맛스럽게 담아주세요"
                              : ""
                          }
                          onChange={(e) => {
                            handleFormChange(index, e);
                          }}
                          name="stepDescription"
                          ref={inputFocus}
                          value={item.stepDescription}
                        ></textarea>
                        <EditDropZone
                          files={files}
                          name="stepImgs"
                          setFiles={setFiles}
                          onChange={(e) => {
                            onLoadImgFile(index, e);
                          }}
                          setRecipe_imgs_steps={setRecipe_imgs_steps}
                          stepDropState={stepDropState}
                          recipe_imgs_steps={recipe_imgs_steps}
                          index={index}
                        />
                        {index !== 0 && (
                          <div className="hoverable">
                            <FontAwesomeIcon icon={faCircleQuestion} /> 입력란을
                            잡고 순서를 움직여 보세요!
                          </div>
                        )}
                      </div>
                    </>
                  );
                })}
              </DroppableDiv>
            </DraggableWrap>
          </div>
        </Scrollable>
      </TotalWrap>
    </>
  );
};
export default RecipeOrderDrag;

const TotalWrap = styled.div`
  width: fit-content;
  margin: 0 auto;
  height: 30em;
  padding: 2em;
`;
const Instruction = styled.div`
  display: inline-block;
  /* width: 1; */
  height: 2em;
`;
const DraggableWrap = styled.div`
  /* width: 80%; */
  display: inline-flex;
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
const DroppableDiv = styled.div`
  width: 70em;
  height: 100%;
  & > .draggableItem {
    margin: 1em auto;
    width: 85%;
    background-color: #fffdf5;
    border: 1px solid #463635;
    padding: 1em;
    margin: 1em auto;
    border-radius: 0.5em;
  }

  & .textArea {
    border-radius: 0.5em;
    margin-right: 1em;
    padding: 0.4em;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
const BtnWrap = styled.div`
  float: right;
  margin-right: 1em;

  & > button:nth-child(2) {
    margin: 0 1em;
  }
`;
