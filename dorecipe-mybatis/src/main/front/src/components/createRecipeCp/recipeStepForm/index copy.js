import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useInput } from "../../../hooks/useInput";

const RecipeOrderDrag = () => {
  // const [stepState, setStep] = useState([
  //   { stepId: 0, stepDescription: "", stepImg: "" },
  //   { stepId: 1, stepDescription: "", stepImg: "" },
  //   { stepId: 2, stepDescription: "", stepImg: "" },
  //   { stepId: 3, stepDescription: "", stepImg: "" },
  // ]);
  const [stepState, setStep] = useState([
    { stepId: 0 },
    { stepId: 1 },
    { stepId: 2 },
    { stepId: 3 },
  ]);
  const [newStep, setNewStep] = useState("");
  // save reference for dragItem and dragOverItem
  const dragItemRef = useRef();
  const dragOverItemRef = useRef();
  // onDragStart :드래그 시작하면
  const dragStarted = (e, item) => {
    //다른 영역에 드롭했다면
    console.log("Drag has started : dragging box", item);
    e.dataTransfer.setData("stepId", item);
  };

  //onDragOver : 드래그 호버하면
  const draggingOver = (e, id) => {
    e.preventDefault();
    // console.log("Dragging Over", id);
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
  };

  //handle input change
  const handleInputChange = (e, index) => {
    setNewStep(e.target.value);
  };

  //handle added Inputboxes
  const handleAddedSteps = () => {
    const steps = [...stepState];
    steps.push({ stepId: stepState.length + 1 });
    // steps.push(newStep);
    setStep(steps);
  };

  const setstepContent = (item, index) => {
    let steps = [...stepState];
    steps[index].stepDescription = newStep;
    steps.push(newStep);
    setStep(steps);
    console.log(steps);
    // console.log(index);
  };

  return (
    <>
      <TotalWrap>
        <Instruction>
          <FontAwesomeIcon icon={faLightbulb} /> 요리의 맛이 좌우될 수 있는
          중요한 부분을 상세하게 적어주세요
        </Instruction>
        <Scrollable>
          <div>
            <DraggableWrap>
              <div droppable="true">
                {stepState.map((item, index) => {
                  return (
                    <div
                      className="draggableItem"
                      key={index}
                      draggable
                      droppable="true"
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
                      <div>Step {index + 1}</div>
                      <textarea
                        key={item}
                        value={item.stepContent}
                        onChange={handleInputChange}
                        onBlur={() => {
                          setstepContent(item, index);
                        }}
                        // name={orderVoList[index+1].order_explain}
                      ></textarea>

                      <input type="file"></input>
                    </div>
                  );
                })}
                {/* 
                  <li
                    draggable
                    droppable
                    onDragOver={(e) => {
                      draggingOver(e);
                    }}
                    onDragStart={(e) => {
                      // dragStarted(e, props.stepId);
                      dragStarted(e);
                    }}
                    onDrop={(e) => {
                      dropped(e);
                    }}
                  >
                    <div>Step 1</div>
                    <textarea></textarea>
                    <input type="file"></input>
                  </li>
                  <li draggable droppable>
                    <div>Step 2</div>
                    <textarea></textarea>
                    <input type="file"></input>
                  </li>
                  <li draggable droppable>
                    <div>Step 3</div>
                    <textarea></textarea>
                    <input type="file"></input>
                  </li> */}
              </div>
            </DraggableWrap>
          </div>
        </Scrollable>
        <button onClick={handleAddedSteps}>순서 추가하기</button>
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
  & > div > .draggableItem {
    cursor: grab;
    margin: 1em 0;
    border: 1px solid magenta;
    padding: 1em;
    background-color: yellow;
  }
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
