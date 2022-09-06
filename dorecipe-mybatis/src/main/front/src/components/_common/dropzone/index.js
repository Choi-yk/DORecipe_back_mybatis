import { useCallback } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
// import { FlexibleBox } from "@style/common";
import {
  EditImgPreview,
  EditImgPreviewForm,
  EditImgPreviewIneer,
} from "./style";

export const DropZone = ({ files, setFiles, onLoadImgFile }) => {
  // drop handler
  const onDropHandler = useCallback((files) => {
    setFiles(
      files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    // console.log("dropzonefiles", files);
    // console.log("dropzonefiles", files[0].path); //파일이름
  }, []);

  // preview delete
  const onPreviewDelete = useCallback(
    (preview) => {
      const deleteFiles = files.filter((v) => v.preview !== preview);
      setFiles(deleteFiles);
    },
    [files]
  );

  //   const handleUpload = (e) => {
  //     e.preventDefault();
  //     const file = e.target.files[0];
  //     setFiles([...files, { uploadedFile: file }]);
  //     console.log("file", file);
  //   };

  return (
    <Dropzone onDrop={onDropHandler}>
      {({ getRootProps, getInputProps }) => (
        <EditImgPreview>
          {files.length > 0 ? (
            <EditImgPreviewForm>
              {files.map((v, index) =>
                files.length < 5 ? (
                  <EditImgPreviewIneer key={index}>
                    <div
                      className="fileBox"
                      onClick={() => onPreviewDelete(v.preview)}
                    >
                      <img src={v.preview} />
                      <p>파일 삭제</p>
                    </div>
                  </EditImgPreviewIneer>
                ) : (
                  <>
                    <EditImgPreviewIneer key={index}>
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
                    </EditImgPreviewIneer>
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
              +<p>파일을 등록해주세요</p>
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
