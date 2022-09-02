import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faImage,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import { DefaultBtn } from "../../_common/buttons";
import "./style.css";
import styled from "styled-components";
import { useState } from "react";

const BasicForm = () => {
  //   const [thumbnailState, onChangeThumbnail, setThumbnail] = useInput("");
  //   const [thumbnailState, onChangeThumbnail] = useState("");
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
      <div>
        <BasicFormWrap>
          <div className="recipeLeftWrap">
            <div className="recipeTitleWrap">
              <Labels htmlFor="recipeTitle">레시피 제목</Labels>
              <ContentInput
                type="text"
                name="recipeTitle"
                required
                className="titleInput"
                placeholder="나만의 레시피가 돋보이는 이름을 지어주세요 (필수)"
              />
            </div>
            <div className="recipeIntroWrap">
              <Labels htmlFor="recipeIntro">요리소개</Labels>
              <ContentTextarea
                rows="2"
                cols="50"
                name="recipeIntro"
                //   id="recipeIntro"
                placeholder="레시피에 대한 소개를 해주세요."
              ></ContentTextarea>
            </div>
            <div className="recipeVidWrap">
              <Labels htmlFor="recipeVid">동영상</Labels>
              <ContentTextarea
                rows="2"
                cols="50"
                name="recipeVid"
                //   id="recipeVid"
                placeholder="레시피에 등록할 동영상이 있으면 URL 주소를 입력해주세요. (예: http://you_tube/myvideo). 대표이미지를 설정하지 않으면 영상의 썸네일이 대표이미지로 설정됩니다."
              ></ContentTextarea>
            </div>
            <div className="recipeCategoryWrap">
              <Labels htmlFor="category_kind">카테고리</Labels>
              <select name="category_kind">
                <option value="default" default>
                  종류별
                </option>
                <option value="전체">전체</option>
                <option value="밑반찬">밑반찬</option>
                <option value="메인반찬">메인반찬</option>
                <option value="국•탕">국•탕</option>
                <option value="찌개">찌개</option>
                <option value="디저트">디저트</option>
                <option value="면/만두">면•만두</option>
                <option value="밥•죽•떡">밥•죽•떡</option>
                <option value="퓨전">퓨전</option>
                <option value="김치/젓갈">김치/젓갈</option>
                <option value="양념•소스•잼">양념•소스•잼</option>
                <option value="양식">양식</option>
                <option value="샐러드">샐러드</option>
                <option value="스프">스프</option>
                <option value="빵">빵</option>
                <option value="과자">과자</option>
                <option value="차•음료•술">차•음료•술</option>
                <option value="기타">기타</option>
              </select>
              {/* <label for="category_theme">상황•테마별</label> */}
              <label>상황•테마별</label>
              <select name="category_theme">
                <option value="default" default>
                  상황•테마별
                </option>
                <option value="일상">일상</option>
                <option value="초스피드">초스피드</option>
                <option value="손님접대">손님접대</option>
                <option value="술안주">술안주</option>
                <option value="다이어트">다이어트</option>
                <option value="도시락">도시락</option>
                <option value="영양식">영양식</option>
                <option value="간식">간식</option>
                <option value="야식">야식</option>
                <option value="해장">해장</option>
                <option value="명절">명절</option>
                <option value="이유식">이유식</option>
                <option value="기타">기타</option>
                <option value="연예인•유명인">연예인•유명인</option>
              </select>
              {/* <label for="category_theme">재료별</label> */}
              <label>재료별</label>
              <select name="category_ingredient">
                <option value="default" default>
                  재료별
                </option>
                <option value="소고기">소고기</option>
                <option value="돼지고기">돼지고기</option>
                <option value="닭고기">닭고기</option>
                <option value="육류">육류</option>
                <option value="채소류">채소류</option>
                <option value="해물류">해물류</option>
                <option value="달걀•유제품">달걀•유제품</option>
                <option value="가공식품">가공식품</option>
                <option value="쌀">쌀</option>
                <option value="해장">해장</option>
                <option value="밀가루">밀가루</option>
                <option value="건어물류">건어물류</option>
                <option value="기타">버섯류</option>
                <option value="과일류">과일류</option>
                <option value="콩•견과물">콩•견과물</option>
                <option value="기타">기타</option>
              </select>
              <label>방법별</label>
              {/* <label for="category_theme">방법별</label> */}
              <select name="category_way">
                <option value="default" default>
                  방법별
                </option>
                <option value="볶음">볶음</option>
                <option value="끓이기">끓이기</option>
                <option value="부침">부침</option>
                <option value="조림">조림</option>
                <option value="무침">무침</option>
                <option value="비빔">비빔</option>
                <option value="찜">찜</option>
                <option value="튀김">튀김</option>
                <option value="삶기">삶기</option>
                <option value="굽기">굽기</option>
                <option value="데치기">데치기</option>
                <option value="회">회</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className="recipeInfoWrap">
              <div className="recipeSubTitle">
                <Labels>요리 정보</Labels>
              </div>
              {/* <label for="info_servings">인원</label> */}
              <label>인원</label>
              <select name="info_servings">
                <option value="default" default>
                  인분
                </option>
                <option value="1인분">1인분</option>
                <option value="2인분">2인분</option>
                <option value="3인분">3인분</option>
                <option value="4인분">4인분</option>
                <option value="5인분 이상">5인분 이상</option>
              </select>
              <label>시간</label>
              {/* <label for="info_time">시간</label> */}
              <select name="info_time">
                <option value="default" default>
                  시간
                </option>
                <option value="5분 이내">5분 이내</option>
                <option value="15분 이내">15분 이내</option>
                <option value="20분 이내">20분 이내</option>
                <option value="30분 이내">30분 이내</option>
                <option value="1시간 이내">1시간 이내</option>
                <option value="90분 이내">90분 이내</option>
                <option value="2시간 이내">2시간 이내</option>
                <option value="2시간 이상">2시간 이상</option>
              </select>
              {/* <label for="info_level">난이도</label> */}
              <label>난이도</label>
              <select name="info_level">
                <option value="default" default>
                  난이도
                </option>
                <option value="아무나">아무나</option>
                <option value="초급">초급</option>
                <option value="중급">중급</option>
                <option value="요리왕급">요리왕급</option>
              </select>
            </div>
            <div></div>
          </div>
          <div className="recipeRightWrap">
            <label>레시피 썸네일</label>
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
        </BasicFormWrap>{" "}
        <DefaultBtn type="button">임시 저장하기</DefaultBtn>
      </div>
    </>
  );
};
export default BasicForm;
const BasicFormWrap = styled.div`
  display: inline-flex;
  color: #463635;
  margin: 0 4.5em;
  width: 90%;
  align-items: center;
  font-size: 14px;
  height: fit-content;
  background-color: aquamarine;
  padding: 2em;
  gap: 12em;
`;
const ContentInput = styled.input`
  width: 44em;
  height: 2em;
  margin-bottom: 1em;
  padding-left: 10px;
  border-radius: 0.5em;
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
const Labels = styled.label`
  display: inline-block;
  width: 7em;
`;
const HintMsg = styled.div`
  font-size: 12px;
  color: #8d3232;
  display: block;
  text-align: center;
  margin-top: 1em;
`;
