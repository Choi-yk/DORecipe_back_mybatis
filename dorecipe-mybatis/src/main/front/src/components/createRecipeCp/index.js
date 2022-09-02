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
  return (
    <>
      <FlexWrap>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, A11y]}
          //   autoplay={{
          //     delay: 6500,
          //     disableOnInteraction: false,
          //   }}
          slidesPerView={1}
          loop={false}
          navigation
          spaceBetween={5}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
                <SubmitRecipeBtn type="button">레시피 등록하기</SubmitRecipeBtn>
                <SubmitRecipeBtn type="button">임시 저장하기</SubmitRecipeBtn>
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
