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
  // onDragStart :드래그 시작하면
  const dragStarted = (e, item) => {
    //다른 영역에 드롭했다면
    console.log("Drag has started : dragging box", item);
    e.dataTransfer.setData("stepId", item.stepId);
    e.dataTransfer.setData("stepDescription", item.stepDescription);
    e.dataTransfer.setData("stepImg", item.stepImg);
    setNewStep(item.stepDescription);
    console.log(stepState);
  };

  //onDragOver : 드래그 호버하면
  const draggingOver = (e, id) => {
    e.preventDefault();
    console.log("Dragging Over", id);
  };
  //onDrop : 드래그한 거 드롭
  const dropped = (e) => {
    console.log("드롭 성공");
    // let transferedStepId = e.
    console.log(stepState);
  };
  //handle drag Sorting
  const handleSort = () => {
    //duplicate items
    let steps = [...stepState];

    //remove and save the dragged item content
    const draggedItemContent = steps.splice(dragItemRef.current, 1)[0];
    //switch position
    // steps.splice(dragOverItemRef.current, 0, draggedItemContent);
    steps.splice(dragOverItemRef.current, 0, draggedItemContent);

    //reset position of ref
    dragItemRef.current = null;
    dragOverItemRef.current = null;

    //update the actual array
    setStep(steps);
    console.log(draggedItemContent);
  };

  //handle input change
  const handleInputChange = (e) => {
    setNewStep(e.target.value);
  };

  //handle added Inputboxes
  const handleAddedSteps = () => {
    const steps = [...stepState];
    steps.push({
      stepId: stepState.length + 1,
      stepDescription: "",
      stepImg: "",
    });
    // steps.push(newStep);
    setStep(steps);
  };

  const handleRemovedSteps = () => {
    const steps = [...stepState];
    // steps.push({
    //   stepId: stepState.length + 1,
    //   stepDescription: "",
    //   stepImg: "",
    // });
    steps.splice(stepState.length - 1, 1);
    // steps.push(newStep);
    setStep(steps);
  };

  //input 포커스 벗어났을때 값 정해주기
  const setstepContent = (e, item, index) => {
    let steps = [...stepState];
    steps[index].stepDescription = e.target.value;
    setStep(steps);
    console.log(index);
  };

  // const handleInputFocus = (e, index) => {
  //   let steps = [...stepState];
  //   e.target.value = newStep;
  //   setStep(steps);
  // };

  return (
    <>
      <TotalWrap>
        <Instruction>
          <FontAwesomeIcon icon={faLightbulb} /> 요리의 맛이 좌우될 수 있는
          중요한 부분을 상세하게 적어주세요
        </Instruction>
        <Scrollable>
          <div>
            <DraggableWrap droppable="true">
              <DroppableDiv>
                {stepState.map((item, index) => {
                  return (
                    <>
                      <div>Step {index + 1}</div>
                      <div
                        className="draggableItem"
                        key={index}
                        draggable
                        onDragStart={(e) => {
                          dragStarted(e, item);
                          dragItemRef.current = item.stepId;
                        }}
                        onDragOver={(e) => {
                          draggingOver(e, index);
                          dragOverItemRef.current = item.stepId;
                        }}
                        onDrop={(e) => {
                          dropped(e);
                          handleSort();
                        }}
                      >
                        {/* <div>Step {index + 1}</div> */}

                        <textarea
                          key={item}
                          value={item.stepDescription}
                          onChange={handleInputChange}
                          // onFocus={handleInputChange}
                          onBlur={(e) => {
                            setstepContent(e, item, index);
                          }}

                          // name={orderVoList[index+1].order_explain}
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
        <button onClick={handleAddedSteps}>순서 추가하기</button>
        <button onClick={handleRemovedSteps}>순서 제거하기</button>
      </TotalWrap>
    </>
  );
};
export default RecipeOrderDrag;

const TotalWrap = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: orange;
  height: 30em;
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
const DroppableDiv = styled.div`
  width: 60em;
  background-color: aliceblue;
  height: 100%;
  & > .draggableItem {
    cursor: grab;
    margin: 1em auto;
    border: 1px solid magenta;
    padding: 1em;
    width: 55em;
    background-color: yellow;
  }
`;
