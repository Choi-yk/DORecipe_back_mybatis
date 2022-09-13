import { useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import styled from "styled-components";
import {
  EditImgPreview,
  EditImgPreviewForm,
  EditImgPreviewInner,
} from "./style";

export const DropZone = ({
  stepDropState,
  thumbnailDropState,
  completionDropState,

  files,
  setFiles,
  onLoadImgFile,
  setRecipeThumbnail,

  Files2,
  SetFiles2,

  setRecipeImgFiles,
  recipe_imgs_steps,
  setRecipe_imgs_steps,

  completion_path1,
  completion_path2,
  completion_path3,
  completion_path4,

  setFiles1,
  setFiles2,
  setFiles3,
  setFiles4,
}) => {
  // useDropzone({
  //   multiple: true,
  // });

  // drop handler
  const onDropHandler = useCallback(
    (files, Files2) => {
      const reader = new FileReader();
      files.forEach((file) => {
        reader.onabort = () => console.log("파일 읽기 취소");
        reader.onerror = () => console.log("파일 읽기 실패");
        reader.readAsDataURL(file);
        console.log("readAsDataURL", file);
        console.log("readAsDataURL", file.name);

        if (thumbnailDropState === "thumbnailDrop") {
          setRecipeThumbnail(file.name);
        }

        if (stepDropState === "stepDrop") {
          const copy_recipe_imgs_steps = [...recipe_imgs_steps];
          copy_recipe_imgs_steps.concat(file.name);
          console.log("recipe_imgs_steps", recipe_imgs_steps);
        }
      });
      const reader2 = new FileReader();
      SetFiles2.forEach((file) => {
        reader2.onabort = () => console.log("파일 읽기 취소");
        reader2.onerror = () => console.log("파일 읽기 실패");
        reader2.readAsDataURL(file);
        console.log("readAsDataURL", file);
        console.log("readAsDataURL", file.name);

        if (completionDropState === "completionDropState") {
          SetFiles2(file.name);
        }

        // if (stepDropState === "stepDrop") {
        //   const copy_recipe_imgs_steps = [...recipe_imgs_steps];
        //   copy_recipe_imgs_steps.concat(file.name);
        //   console.log("recipe_imgs_steps", recipe_imgs_steps);
        // }
      });
      console.log("files~~~", files);

      if (stepDropState === "stepDrop") {
        setFiles(
          files.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }

      if (thumbnailDropState === "thumbnailDrop") {
        setRecipeImgFiles(files[0]);
        setFiles(
          files.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
      if (completionDropState === "completionDropState") {
        setFiles(files[0]);
        SetFiles2(files[0]);
        console.log("files[0]", files[0]);
        console.log("files[1]", files[1]);
        // setFiles(
        //   files.map((file) =>
        //     Object.assign(file, {
        //       preview: URL.createObjectURL(file),
        //     })
        //   )
        // );
        setFiles(
          files.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        SetFiles2(
          Files2.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
    [files]
  );

  // preview delete
  const onPreviewDelete = useCallback(
    (preview) => {
      const deleteFiles = files.filter((v) => v.preview !== preview);
      setFiles(deleteFiles);
    },
    [files]
  );

  return (
    <Dropzone onDrop={onDropHandler}>
      {({ getRootProps, getInputProps }) => (
        <EditImgPreview>
          {files.length > 0 ? (
            <EditImgPreviewForm>
              {files.map((v, index) =>
                files.length < 5 ? (
                  <EditImgPreviewInner key={index}>
                    <div
                      className="fileBox"
                      onClick={() => onPreviewDelete(v.preview)}
                    >
                      <img src={v.preview} />
                      <p>파일 삭제</p>
                    </div>
                  </EditImgPreviewInner>
                ) : (
                  <>
                    <EditImgPreviewInner key={index}>
                      {v === files[files.length - 2] ? (
                        <FlexibleBox
                          fontColor="#00c7ae"
                          style={{ width: "16rem" }}
                        >
                          <span>...</span>
                        </FlexibleBox>
                      ) : (
                        v !== files[files.length - 1] && (
                          <div
                            className="fileBox"
                            onClick={() => onPreviewDelete(v.preview)}
                          >
                            <img src={v.preview} />
                            <p>파일 삭제</p>
                          </div>
                        )
                      )}
                    </EditImgPreviewInner>
                  </>
                )
              )}
            </EditImgPreviewForm>
          ) : (
            <div className="inputBox" {...getRootProps()}>
              <input
                {...getInputProps()}
                id="file"
                type="file"
                accept="image/*"
                onChange={onLoadImgFile}
              />{" "}
              + <p>파일을 등록해주세요</p>
            </div>
          )}
        </EditImgPreview>
      )}
    </Dropzone>
  );
};
export default DropZone;
export const FlexibleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: ${(props) => props.fontColor}; */
  position: relative;
`;
