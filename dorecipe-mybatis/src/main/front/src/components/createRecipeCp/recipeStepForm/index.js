import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const RecipeOrderDrag = () => {
  const [stepState, setStep] = useState([
    { stepId: 0, stepDescription: "", stepImg: "" },
    { stepId: 1, stepDescription: "", stepImg: "" },
    { stepId: 2, stepDescription: "", stepImg: "" },
    { stepId: 3, stepDescription: "", stepImg: "" },
  ]);

  const [newStep, setNewStep] = useState("");

  // save reference for dragItem and dragOverItem
  const dragItemRef = useRef();
  const dragOverItemRef = useRef();

  const itemRef = useRef();
  const inputFocus = useRef(null);

  // onDragStart :드래그 시작하면
  const dragStarted = (e, item) => {
    //다른 영역에 드롭했다면
    e.dataTransfer.setData("stepId", item.stepId);
    e.dataTransfer.setData("stepDescription", item.stepDescription);
    // e.dataTransfer.setData("newStep", item.stepDescription);
    e.dataTransfer.setData("stepImg", item.stepImg);
    // setNewStep(item.stepDescription);
  };

  //onDragOver : 드래그 호버하면
  const draggingOver = (e, id) => {
    e.preventDefault();
  };
  //handle drag Sorting
  const handleSort = () => {
    //duplicate items
    let steps = [...stepState];
    //remove and save the dragged item content
    /** 드래그한 배열 {stepId: dragItemRef.current, stepDescription: "", stepImg: ""}*/
    const draggedItemContent = steps.splice(dragItemRef.current, 1)[0];
    //switch position
    //이동시킬 위치에 0개 삭제하고 그 자리에 draggedItemContent을 이동시킴
    steps.splice(dragOverItemRef.current, 0, draggedItemContent);
    //reset position of ref
    dragItemRef.current = null;
    dragOverItemRef.current = null;
    //update the actual array
    setStep(steps);
    console.log(steps);
  };

  //handle input change
  const handleInputChange = (e) => {
    setNewStep(e.target.value);
  };

  //handle added Inputboxes
  const handleAddedSteps = () => {
    const steps = [...stepState];
    //마지막 순서에 값을 입력했다면 새로운 순서 추가 가능
    if (steps[steps.length - 1].stepDescription.length != 0) {
      steps.push({
        stepId: stepState.length + 1,
        stepDescription: "",
        stepImg: "",
      });
      // steps.push(newStep);
      setStep(steps);
    } else {
      alert("레시피 순서 설명을 입력하고 순서를 추가해주세요.");
      inputFocus.current.focus();
    }
  };

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

  //input 포커스 벗어났을때 값 정해주기
  const setstepContent = (e, item, index) => {
    let steps = [...stepState];
    steps[index].stepDescription = e.target.value;
    setStep(steps);
    // console.log(steps[index].stepDescription); //input 값
  };

  return (
    <>
      <TotalWrap>
        <Instruction>
          <FontAwesomeIcon icon={faLightbulb} /> 요리의 맛이 좌우될 수 있는
          중요한 부분을 상세하게 적어주세요
        </Instruction>
        <BtnWrap>
          <button onClick={handleAddedSteps}>순서 추가하기</button>
          <button onClick={handleRemovedSteps}>순서 제거하기</button>
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
                        draggable
                        onDragStart={(e) => {
                          dragStarted(e, item);
                          // dragItemRef.current = item.stepId;
                          dragItemRef.current = index;
                        }}
                        onDragOver={(e) => {
                          draggingOver(e, index);
                          // dragOverItemRef.current = item.stepId;
                          dragOverItemRef.current = index;
                        }}
                        onDrop={(e) => {
                          handleSort();
                        }}
                      >
                        {/* <div>Step {index + 1}</div> */}

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
                          onChange={handleInputChange}
                          // onFocus={handleInputChange}
                          ref={inputFocus}
                          onBlur={(e) => {
                            setstepContent(e, item, index);
                            itemRef.current = item.stepDescription;
                          }}
                          value={
                            item.stepDescription !== ""
                              ? item.stepDescription
                              : item.stepDescription[index]
                          }
                        ></textarea>

                        <input type="file"></input>
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
    /* cursor: grab; */
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
  display: inline-block;
`;
