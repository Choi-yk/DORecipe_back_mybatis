import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faImage,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import EditDropZone from "../../_common/dropzone";
import Dropzone from "react-dropzone";
import { useInput } from "../../../hooks/useInput";
import axios from "axios";
import { SubmitRecipeBtn } from "../../_common/buttons";

const CompleteRecipe = ({ recipeState }) => {
  //btn state : 버튼 1번 이상 클릭 시 전체 임시저장/등록, 한번만 클릭시 해당 페이지 저장
  const [buttonState, setBtnState] = useState(0);
  // file state
  const [recipe_imgs_completed, setRecipe_imgs_completed] = useState("");
  const [completion_path1, setFiles1] = useState("");
  const [completion_path2, setFiles2] = useState("");
  const [completion_path3, setFiles3] = useState("");
  const [completion_path4, setFiles4] = useState("");

  const [completionDropState, setCompletionDropState] = useState(
    "completionDropState"
  );

  const [path1, onChangePath1, setPath1] = useInput("");
  const [path2, onChangePath2, setPath2] = useInput([]);
  const [path3, onChangePath3, setPath3] = useInput("");
  const [path4, onChangePath4, setPath4] = useInput("");

  const [completion_tip, onChangeTip, setCompletion_tip] = useInput("");
  const [heroFiles, setHeroFiles] = useState([]);
  const [thumbnailFiles, setThumbnailFiles] = useState([]);
  const [heroFiles2, setHeroFiles2] = useState([]);
  const [thumbnailFiles2, setThumbnailFiles2] = useState([]);
  const [heroFiles3, setHeroFiles3] = useState([]);
  const [thumbnailFiles3, setThumbnailFiles3] = useState([]);
  const [heroFiles4, setHeroFiles4] = useState([]);
  const [thumbnailFiles4, setThumbnailFiles4] = useState([]);

  const [files, setFiles] = useState([]);

  const onLoadImgFile = (e) => {
    setFiles1(e);
    setFiles2(e);
  };

  const onSubmit = useCallback((e) => {
    const { value } = e.target;
    e.preventDefault();
    const data = {
      recipe_savetype: 1,
      completion_path1: `${completion_path1}`,
      completion_path2: `${completion_path2}`,
      completion_path3: `${completion_path3}`,
      completion_path4: `${completion_path4}`,
      completion_tip: `${completion_tip}`,
      recipe_num: `${recipeState}`,
      member_id: "hirin012", //로그인한 멤버 정보 들어갈 자리
    };

    console.log("data", data);
    const blob = new Blob([JSON.stringify(data)], {
      type: "multipart/form-data",
    });

    const formData = new FormData();
    formData.append("data", blob);
    formData.append("member_id", data.member_id);
    formData.append("recipe_imgs_completed", recipe_imgs_completed); /////파일 업로드
    formData.append("completion_path1", data.completion_path1);
    formData.append("completion_path2", data.completion_path2);
    formData.append("completion_path3", data.completion_path3);
    formData.append("completion_path4", data.completion_path4);
    formData.append("completion_tip", data.completion_tip);
    formData.append("recipe_num", recipeState);

    axios({
      method: "POST",
      url: "http://localhost:9000/recipe/insertRecipeComplete",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((response) => {
      console.log(response);
      for (let value of formData.values()) {
        console.log(value);
      }
      console.log("성공?");
    });

    console.log({ value });
    if (value === "submit") {
      if (buttonState === 0) {
      }

      alert(" 등록하셨습니다.");
      setBtnState(buttonState + 1);
    } else if (value === "saveAsDraft") {
      alert(" 임시저장 하셨습니다.");
      setBtnState(buttonState + 1);
    }
  });

  return (
    <>
      {" "}
      <FlexWrap>
        <Instruction>
          <FontAwesomeIcon icon={faLightbulb} /> 완성 요리 사진 : 완성된 사진을
          등록하시면 레시피가 더욱 돋보입니다.
        </Instruction>
        <BasicFormWrap>
          <div>
            {/* <Dropzone
              onDrop={(acceptedFiles) => {
                setHeroFiles(
                  acceptedFiles.map((file) =>
                    Object.assign(file, {
                      preview: URL.createObjectURL(file),
                    })
                  )
                );
              }}
              name="completeImg1"
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <span style={{ fontSize: ".8rem" }}>
                    Drop hero image here, or click to select file
                  </span>
                </div>
              )}
            </Dropzone> */}
            {/* This would be the dropzone for the Thumbnail image */}
            {/* <Dropzone
              onDrop={(acceptedFiles) => {
                setHeroFiles2(
                  acceptedFiles.map((file) =>
                    Object.assign(file, {
                      preview: URL.createObjectURL(file),
                    })
                  )
                );
              }}
              name="completeImg2"
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <span style={{ fontSize: ".8rem" }}>
                    Drop hero image here, or click to select file
                  </span>
                </div>
              )}
            </Dropzone>
            <Dropzone
              onDrop={(acceptedFiles) => {
                setHeroFiles3(
                  acceptedFiles.map((file) =>
                    Object.assign(file, {
                      preview: URL.createObjectURL(file),
                    })
                  )
                );
              }}
              name="completeImg3"
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <span style={{ fontSize: ".8rem" }}>
                    Drop hero image here, or click to select file
                  </span>
                </div>
              )}
            </Dropzone>
            <Dropzone
              onDrop={(acceptedFiles) => {
                setHeroFiles4(
                  acceptedFiles.map((file) =>
                    Object.assign(file, {
                      preview: URL.createObjectURL(file),
                    })
                  )
                );
              }}
              name="completeImg4"
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <span style={{ fontSize: ".8rem" }}>
                    Drop hero image here, or click to select file
                  </span>
                </div>
              )}
            </Dropzone>
            {/* This would be where the Hero image is displayed */}
            {/* <img
              style={{
                maxWidth: "300px",
                mmaxHeight: "200px",
                margin: "0",
                display: "inline-block",
              }}
              src={
                heroFiles.length > 0
                  ? heroFiles[0].preview
                  : "https://via.placeholder.com/600x200"
              }
              alt="completeImg1"
            />
            <img
              style={{
                maxWidth: "300px",
                mmaxHeight: "200px",
                margin: "0",
                display: "inline-block",
              }}
              src={
                heroFiles2.length > 0
                  ? heroFiles2[0].preview
                  : "https://via.placeholder.com/600x200"
              }
              alt="completeImg2"
            />
            <img
              style={{
                maxWidth: "300px",
                mmaxHeight: "200px",
                margin: "0",
                display: "inline-block",
              }}
              src={
                heroFiles3.length > 0
                  ? heroFiles3[0].preview
                  : "https://via.placeholder.com/600x200"
              }
              alt="completeImg3"
            />
            <img
              style={{
                maxWidth: "300px",
                mmaxHeight: "200px",
                margin: "0",
                display: "inline-block",
              }}
              src={
                heroFiles4.length > 0
                  ? heroFiles4[0].preview
                  : "https://via.placeholder.com/600x200"
              }
              alt="completeImg4"
            />{" "}
            */}
            <EditDropZone
              files={files}
              setFiles={setFiles}
              setFiles1={setFiles1}
              onChange={onLoadImgFile}
              // setRecipeThumbnail={setRecipeThumbnail}
              // setRecipeImgFiles={setRecipeImgFiles}
              completionDropState={completionDropState}
            />
            <EditDropZone
              files={files}
              setFiles={setFiles}
              setFiles2={setFiles2}
              onChange={onLoadImgFile}
              // setRecipeThumbnail={setRecipeThumbnail}
              // setRecipeImgFiles={setRecipeImgFiles}
              completionDropState={completionDropState}
            />
          </div>
        </BasicFormWrap>
        <div>
          <Instruction>
            <FontAwesomeIcon icon={faLightbulb} /> 요리팁: 레시피를 더욱 맛있게
            하기 위해서 담은 노하우를 공유해주세요.
          </Instruction>
          <div>
            <ContentTextarea
              rows="2"
              cols="50"
              value={completion_tip}
              onChange={onChangeTip}
              placeholder="예: 양파를 고를때는 납작한 암양파를 고르시면 덜 맵고 단맛이 강해요."
            ></ContentTextarea>
          </div>
        </div>
      </FlexWrap>
      {buttonState === 0 ? (
        <>
          {" "}
          <BtnWrap>
            <SubmitRecipeBtn type="button" onClick={onSubmit} value="submit">
              레시피 등록하기
            </SubmitRecipeBtn>
            <SubmitRecipeBtn
              type="button"
              onClick={onSubmit}
              value="saveAsDraft"
            >
              임시 저장하기
            </SubmitRecipeBtn>
          </BtnWrap>
        </>
      ) : (
        <>
          <BtnWrap>
            <SubmitRecipeBtn type="button" onClick={onSubmit} value="submit">
              레시피 등록(다시)하기
            </SubmitRecipeBtn>
            <SubmitRecipeBtn
              type="button"
              onClick={onSubmit}
              value="saveAsDraft"
            >
              임시(다시) 저장하기
            </SubmitRecipeBtn>
          </BtnWrap>
        </>
      )}
    </>
  );
};
export default CompleteRecipe;

const FlexWrap = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  flex-direction: column;
`;
const BasicFormWrap = styled.div`
  display: inline-flex;
  color: #463635;
  margin: 0 4.5em;
  width: 90%;
  align-items: center;
  font-size: 6px;
  height: fit-content;
  /* background-color: aquamarine; */
  padding: 2em;
  justify-content: center;
  gap: 12em;
`;
const HintMsg = styled.div`
  font-size: 12px;
  color: #8d3232;
  display: block;
  text-align: center;
  margin-top: 1em;
`;
const ContentTextarea = styled.textarea`
  resize: none;
  width: 44em;
  height: 4em;
  margin-bottom: 1em;
  padding: 10px;
  border-radius: 0.5em;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Instruction = styled.div`
  display: inline-block;
  /* width: 1; */
  height: 2em;
`;
const BtnWrap = styled.div`
  display: flex;
`;
