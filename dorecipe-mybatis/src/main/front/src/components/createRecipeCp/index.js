import styled from "styled-components";

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./style.css";
import BasicForm from "./basicForm";
import IngredientForm from "./ingredientForm";
import CompleteRecipe from "./completeRecipeForm";
import { SubmitRecipeBtn, DefaultBtn } from "../_common/buttons";
import RecipeOrderDrag from "./recipeStepForm";

const CreateRecipeForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target;
    console.log({ value });
    if (value === "submit") {
      alert("등록하셨습니다.");
    } else if (value === "saveAsDraft") {
      alert("임시저장 하셨습니다.");
    }
  };
  return (
    <>
      <FlexWrap>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={1}
          loop={false}
          navigation
          spaceBetween={5}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => {}}
        >
          <form>
            <SwiperSlide className="slide">
              <SectionTitle>레시피 등록</SectionTitle>
              <BasicForm />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <SectionTitle>재료 등록</SectionTitle>
              <IngredientForm />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <SectionTitle>요리 순서</SectionTitle>
              <div>
                <RecipeOrderDrag />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <SectionTitle>요리 완성</SectionTitle>
              <CompleteRecipe />
              <BtnWrap>
                <SubmitRecipeBtn
                  type="button"
                  onClick={onSubmit}
                  value="submit"
                >
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
            </SwiperSlide>{" "}
          </form>
        </Swiper>
      </FlexWrap>
    </>
  );
};
export default CreateRecipeForm;
const FlexWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: -6em 0;
  /* padding: 3em; */
  background-color: aliceblue;
`;
const SectionTitle = styled.div`
  background-color: #8d3232;
  display: inline-block;
  width: 90%;
  margin: 1em 3em;
  color: #fffdf5;
  height: 2.4em;
  font-size: 21px;
  font-weight: 700;
  padding: 0.5em 0;
  padding-left: 0.5em;
`;
const BtnWrap = styled.div`
  display: flex;
`;
