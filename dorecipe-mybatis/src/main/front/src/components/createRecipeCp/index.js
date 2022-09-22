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
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateRecipeForm = () => {
  const user = useSelector((state) => state);
  const [member_id, setMemberId] = useState();
  const navigate = useNavigate();
  // useDispatch(messageReducer(CLEAR_MESSAGE));
  useEffect(() => {
    // if (user.auth.isLoggedIn) {
    // } else {
    //   setMemberId(user.auth.user.username);
    //   navigate("/");
    // }
    // console.log("CreateRecipeForm : " + member_id);
    console.log("CreateRecipeForm", user);
  }, []);

  const [recipeState, setRecipeState] = useState();

  return (
    <>
      <FlexWrap>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          loop={false}
          navigation
          spaceBetween={120}
          pagination={{ clickable: false }}
          // scrollbar={{ draggable: false }}
          // onBeforeSlideChangeStart={() => {
          //   if (
          //     window.confirm("임시저장을 하지 않으면 정보를 잃을 수 있습니다.")
          //   ) {
          //     Swiper.enabled = false;
          //   } else {
          //     navigate("/");
          //   }
          // }}
          onSwiper={(swiper) => console.log("swiper", swiper)}
          onSlideChange={() => {
            axios({
              method: "POST",
              url: "http://localhost:9000/recipe/getRecipeNum",
              headers: { "Content-Type": "multipart/form-data" },
              data: { member_id: `${member_id}`, recipe_num: 0 },
            }).then((response) => {
              console.log(response.data);
              setRecipeState(response.data);
            });
          }}
        >
          <form encType="multipart/form-data">
            <SwiperSlide className="slide">
              <SectionTitle>레시피 등록</SectionTitle>
              {/* <BasicForm recipeState={recipeState} /> */}
              <BasicForm />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <SectionTitle>재료 등록</SectionTitle>
              <IngredientForm recipeState={recipeState} />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <SectionTitle>요리 순서</SectionTitle>
              <div>
                <RecipeOrderDrag recipeState={recipeState} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <SectionTitle>요리 완성</SectionTitle>
              <CompleteRecipe recipeState={recipeState} />
            </SwiperSlide>
          </form>
        </Swiper>
      </FlexWrap>
    </>
  );
};
export default CreateRecipeForm;
const FlexWrap = styled.div`
  max-width: 100%;
  min-width: 50%;

  height: 100vh;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: -6em 0;
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
