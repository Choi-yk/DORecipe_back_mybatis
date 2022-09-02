import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faImage,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import DropZone from "../../_common/dropzone";

const CompleteRecipe = () => {
  // file state
  const [files, setFiles] = useState();
  // post.Images.map((v) => ({
  //   preview: v,
  // }))

  // setEdlit Files reset state

  useEffect(() => {
    // setFiles(
    //   post.Images.map((v) => ({
    //     preview: v,
    //   }))
    // );
    //   }, [edit]);
  }, []);

  const [dataUri, setDataUri] = useState("");
  //썸네일 이미지 변경
  const changeImg = () => {
    setDataUri("");
    return (
      <>
        {" "}
        <input
          type="file"
          //   id="image"
          name="recipe_thumbnail"
          //   accept="image/*"
          //   value={dataUri}/
          onChange={(event) => onChangeValue(event.target.files[0] || null)}
        />{" "}
      </>
    );
  };
  //썸네일 blob으로
  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  const onChangeValue = (file) => {
    if (!file) {
      setDataUri("");
      console.log(file);
      return;
    } else {
      fileToDataUri(file).then((dataUri) => {
        setDataUri(dataUri);
        console.log(file);
      });
    }
  };
  return (
    <>
      <BasicFormWrap>
        <div className="recipeRightWrap">
          <div className="imageUploadWrap">
            {dataUri !== "" ? (
              <>
                <img
                  src={dataUri}
                  alt="레시피 썸네일 이미지"
                  onClick={changeImg}
                />
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  클릭하시면 썸네일변경이 가능합니다.
                </HintMsg>
              </>
            ) : (
              <div>
                {" "}
                <FontAwesomeIcon icon={faImage} />{" "}
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  선택해주세요
                </HintMsg>
                <input
                  type="file"
                  //   id="image"
                  name="recipe_thumbnail"
                  //   accept="image/*"
                  //   value={dataUri}/
                  onChange={(event) =>
                    onChangeValue(event.target.files[0] || null)
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div className="recipeRightWrap">
          <div className="imageUploadWrap">
            {dataUri !== "" ? (
              <>
                <img
                  src={dataUri}
                  alt="레시피 썸네일 이미지"
                  onClick={changeImg}
                />
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  클릭하시면 썸네일변경이 가능합니다.
                </HintMsg>
              </>
            ) : (
              <div>
                {" "}
                <FontAwesomeIcon icon={faImage} />{" "}
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  선택해주세요
                </HintMsg>
                <input
                  type="file"
                  //   id="image"
                  name="recipe_thumbnail"
                  //   accept="image/*"
                  //   value={dataUri}/
                  onChange={(event) =>
                    onChangeValue(event.target.files[0] || null)
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div className="recipeRightWrap">
          <div className="imageUploadWrap">
            {dataUri !== "" ? (
              <>
                <img
                  src={dataUri}
                  alt="레시피 썸네일 이미지"
                  onClick={changeImg}
                />
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  클릭하시면 썸네일변경이 가능합니다.
                </HintMsg>
              </>
            ) : (
              <div>
                {" "}
                <FontAwesomeIcon icon={faImage} />{" "}
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  선택해주세요
                </HintMsg>
                <input
                  type="file"
                  //   id="image"
                  name="recipe_thumbnail"
                  //   accept="image/*"
                  //   value={dataUri}/
                  onChange={(event) =>
                    onChangeValue(event.target.files[0] || null)
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div className="recipeRightWrap">
          <div className="imageUploadWrap">
            {dataUri !== "" ? (
              <>
                <img
                  src={dataUri}
                  alt="레시피 썸네일 이미지"
                  onClick={changeImg}
                />
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  클릭하시면 썸네일변경이 가능합니다.
                </HintMsg>
              </>
            ) : (
              <div>
                {" "}
                <FontAwesomeIcon icon={faImage} />{" "}
                <HintMsg>
                  <FontAwesomeIcon icon={faExclamationCircle} /> 이미지를
                  선택해주세요
                </HintMsg>
                <input
                  type="file"
                  //   id="image"
                  name="recipe_thumbnail"
                  //   accept="image/*"
                  //   value={dataUri}/
                  onChange={(event) =>
                    onChangeValue(event.target.files[0] || null)
                  }
                />
              </div>
            )}
          </div>
        </div>

        <DropZone files={files} setFiles={setFiles} />
      </BasicFormWrap>
    </>
  );
};
export default CompleteRecipe;
const BasicFormWrap = styled.div`
  display: inline-flex;
  color: #463635;
  margin: 0 4.5em;
  width: 90%;
  align-items: center;
  font-size: 6px;
  height: fit-content;
  background-color: aquamarine;
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
