import fetch from "node-fetch";
import { load } from "cheerio";
import axios from "axios";
const result = [
  {
    recipeId: "", //레시피 번호
    recipeAuthor: "",
    recipeTitle: "", //레시피 제목
    recipeIntro: "", //레시피 소개
    recipeServing: "", //레시피 인원
    recipeTime: "", //레시피 요리 시간
    recipeDifficulty: "", //레시피 난이도
    recipeIngredients: [],
    recipeIngredientsUnit: [],
    // recipeIframe: "",
  },
];

let recipeOrderResult = [];

let cat1 = ["", 6, 1, 7, 36, 41, 42, 8, 10, 9, 38, 67, 39, 37, 11]; //테마별
let cat2 = ["", 12, 18, 13, 1, 21, 15, 43, 18, 45, 20, 46, 44, 14, 22]; //상황별
let cat3 = ["", 70, 71, 72, 23, 28, 24, 50, 33, 47, 32, 25, 31, 48, 27, 26, 34]; //상황별
let cat4 = [
  "",
  63,
  56,
  54,
  55,
  60,
  53,
  52,
  61,
  57,
  58,
  65,
  64,
  68,
  66,
  69,
  59,
  62,
]; //종류별
let links = []; //카테고리별 주소
const categoryUrl =
  "https://www.10000recipe.com/recipe/list.html?q=&query=&cat1=" +
  cat1 +
  "&cat2=" +
  cat2 +
  "&cat3=" +
  cat3 +
  "&cat4=" +
  cat4 +
  "&order=reco&page=";

for (let items in cat1) {
  // console.log(cat1[items]);
  for (let items2 in cat2) {
    for (let items3 in cat3) {
      for (let items4 in cat4) {
        // for (let index = 1; index <= 1; index++) {
        links.push(
          "https://www.10000recipe.com/recipe/list.html?q=&query=&cat1=" +
            cat1[items] +
            "&cat2=" +
            cat2[items2] +
            "&cat3=" +
            cat3[items3] +
            "&cat4=" +
            cat4[items4] +
            "&order=reco&page=1"
          // +index
        );
        // console.log(
        //   "https://www.10000recipe.com/recipe/list.html?q=&query=&cat1=" +
        //     cat1[items] +
        //     "&cat2=" +
        //     cat2[items2] +
        //     "&cat3=" +
        //     cat3[items3] +
        //     "&cat4=" +
        //     cat4[items4]
        // );
        // }
      }
    }
  }
}
// console.log("links.length", links.length);
console.log("links", links);
console.log("links", links.length);
// const response = await fetch(links);
const recipeLinkList = [];

// const response = await fetch(links[0]);
for (let i = 0; i < 7; i++) {
  // for (let i = 0; i < links.length; i++) {
  // for (let i = 0; i < links.length - 50600; i++) {
  // for (let i = 0; i < links.length - 50600; i++) {
  // for (let i = 0; i < 10; i++) {
  // for (let i = 0; i < 20; i++) {
  const response = await fetch(
    links[i]
    // "https://www.10000recipe.com/recipe/" + recipeLinkList[i]
  );
  const body = await response.text();
  let $ = load(body);
  // let all = $("*");
  // const specificLink = $(".common_sp_thumb");
  const specificLink = $(".common_sp_list_li");
  // const specificLink = $(".common_sp_list_ul");
  // const specificLink = $(".common_sp_list_ul");
  // const specificLink = $(".common_sp_list_ul");

  // console.log(links[0]);
  // console.log(specificLink.text());
  // console.log(all.text());

  // for (let i = 1; i < specificLink.find("a").length; i++) {
  for (let i = 1; i <= specificLink.length; i++) {
    // console.log(
    //   $(".common_sp_list_li:nth-child(" + i + ")")
    //     .find("a")
    //     .attr("href")
    // );
    recipeLinkList.push(
      $(".common_sp_list_li:nth-child(" + i + ")")
        .find("a")
        .attr("href")
    );
  }
}
console.log("recipeLinkList", recipeLinkList);
// console.log(specificLink.find("a").length);

//

// console.log("result: ", result);
const catResult = [
  {
    recipeId: "", //레시피 번호
    recipeAuthor: "",
    recipeTitle: "", //레시피 제목
    recipeIntro: "", //레시피 소개
    cookingMethod: "", //방법별 cat1
    occasionOfRecipe: "", //상황별 cat2
    ingreOfRecipe: "", //재료별 cat3
    typeOfRecipe: "", //종류별 cat4
    recipeServing: "", //레시피 인원
    recipeTime: "", //레시피 요리 시간
    recipeDifficulty: "", //레시피 난이도
    recipeIngredients: [],
    recipeIngredientsUnit: [],
    // recipeIframe: "",
  },
];
for (let count = 0; count < recipeLinkList.length; count++) {
  const response = await fetch(
    "https://www.10000recipe.com" + recipeLinkList[count]
  );
  const body = await response.text();
  let $ = load(body);
  const recipeTitle = $(".view2_summary h3");
  const recipeAuthor = $(".user_info2_name");
  const recipeIntro = $(".view2_summary_in");
  const recipeServing = $(".view2_summary_info1");
  const recipeTime = $(".view2_summary_info2");
  const recipeDifficulty = $(".view2_summary_info3");
  // const recipeIngredients = $(".case1 li");
  const recipeIngredients = $(".ready_ingre3 ul li");
  const recipeIngredientsUnit = $(".ingre_unit");
  const recipeThumbnail = $(".centeredcrop");
  const authorProfilePic = $(".user_info2");

  // for (let items in cat1) {
  //   // console.log(cat1[items]);
  //   for (let items2 in cat2) {
  //     for (let items3 in cat3) {
  //       for (let items4 in cat4) {
  //         // for (let index = 1; index <= 1; index++) {
  //         // links.push(
  //         //   "https://www.10000recipe.com/recipe/list.html?q=&query=&cat1=" +
  //         //     cat1[items] +
  //         //     "&cat2=" +
  //         //     cat2[items2] +
  //         //     "&cat3=" +
  //         //     cat3[items3] +
  //         //     "&cat4=" +
  //         //     cat4[items4] +
  //         //     "&order=reco&page=1"
  //         //   // +index
  //         // );
  //       }
  //     }
  //   }
  // }

  // if (recipeLinkList[count].includes("cat1=&")) {
  //   catResult[0]["typeOfRecipe"] = "전체";
  // } else if
  // switch (recipeLinkList[count].includes(cat1)) {
  //   case "cat1=&":
  //     catResult[0]["typeOfRecipe"] = "전체";
  //     break;
  //   case "cat1=6&":
  //     catResult[0]["typeOfRecipe"] = "볶음";
  //     break;
  //   case "cat1=1&":
  //     catResult[0]["typeOfRecipe"] = "끓이기";
  //     break;
  //   case "cat1=7&":
  //     catResult[0]["typeOfRecipe"] = "부침";
  //     break;
  //   case "cat1=36&":
  //     catResult[0]["typeOfRecipe"] = "조림";
  //     break;
  //   case "cat1=41&":
  //     catResult[0]["typeOfRecipe"] = "무침";
  //     break;
  //   case "cat1=42&":
  //     catResult[0]["typeOfRecipe"] = "비빔";
  //     break;
  //   case "cat1=8&":
  //     catResult[0]["typeOfRecipe"] = "찜";
  //     break;
  //   case "cat1=10&":
  //     catResult[0]["typeOfRecipe"] = "절임";
  //     break;
  //   case "cat1=9&":
  //     catResult[0]["typeOfRecipe"] = "튀김";
  //     break;
  //   case "cat1=38&":
  //     catResult[0]["typeOfRecipe"] = "삶기";
  //     break;
  //   case "cat1=67&":
  //     catResult[0]["typeOfRecipe"] = "굽기";
  //     break;
  //   case "cat1=39&":
  //     catResult[0]["typeOfRecipe"] = "데치기";
  //     break;
  //   case "cat1=37&":
  //     catResult[0]["typeOfRecipe"] = "회";
  //     break;
  //   case "cat1=11&":
  //     catResult[0]["typeOfRecipe"] = "기타";
  //     break;
  //   default:
  //     break;
  // }

  if (recipeTitle.text().length > 0) {
    // typeOfRecipe: "", //종류별
    // occasionOfRecipe: "", //상황별
    // ingreOfRecipe: "", //재료별
    // cookingMethod: "", //방법별
    // catResult[0]["typeOfRecipe"];
    // if (links[count].match(/cat1=&/)) {
    //   // catResult[0].cookingMethod = "전체";
    //   catResult[0]["cookingMethod"] = "전체";
    //   // break;
    // } else if (links[count].match(/cat1=6&/)) {
    //   catResult[0]["cookingMethod"] = "볶음";
    // } else if (links[count].match(/cat1=1&/)) {
    //   catResult[0]["cookingMethod"] = "끓이기";
    // } else if (links[count].includes("cat1=7&")) {
    //   catResult[0]["cookingMethod"] = "부침";
    // } else if (links[count].includes("cat1=36&")) {
    //   catResult[0]["cookingMethod"] = "조림";
    // } else if (links[count].includes("cat1=41&")) {
    //   catResult[0]["cookingMethod"] = "무침";
    // } else if (links[count].includes("cat1=42&")) {
    //   catResult[0]["cookingMethod"] = "비빔";
    // } else if (links[count].includes("cat1=8&")) {
    //   catResult[0]["cookingMethod"] = "찜";
    // } else if (links[count].includes("cat1=10&")) {
    //   catResult[0]["cookingMethod"] = "절임";
    // } else if (links[count].includes("cat1=9&")) {
    //   catResult[0]["cookingMethod"] = "튀김";
    // } else if (links[count].includes("cat1=38&")) {
    //   catResult[0]["cookingMethod"] = "삶기";
    // } else if (links[count].includes("cat1=67&")) {
    //   catResult[0]["cookingMethod"] = "굽기";
    // } else if (links[count].includes("cat1=39&")) {
    //   catResult[0]["cookingMethod"] = "데치기";
    // } else if (links[count].includes("cat1=37&")) {
    //   catResult[0]["cookingMethod"] = "회";
    // } else if (links[count].includes("cat1=11&")) {
    //   catResult[0]["cookingMethod"] = "기타";
    // }
    if (links[count].match(/cat1=&/)) {
      // catResult[0].cookingMethod = "전체";
      catResult[0]["cookingMethod"] = "전체";
      // break;
    } else if (links[count].match(/cat1=6&/)) {
      catResult[0]["cookingMethod"] = "볶음";
    } else if (links[count].match(/cat1=1&/)) {
      catResult[0]["cookingMethod"] = "끓이기";
    } else if (links[count].match(/cat1=7&/)) {
      catResult[0]["cookingMethod"] = "부침";
    } else if (links[count].match(/cat1=36&/)) {
      catResult[0]["cookingMethod"] = "조림";
    } else if (links[count].match(/cat1=41&/)) {
      catResult[0]["cookingMethod"] = "무침";
    } else if (links[count].match(/cat1=42&/)) {
      catResult[0]["cookingMethod"] = "비빔";
    } else if (links[count].match(/cat1=8&/)) {
      catResult[0]["cookingMethod"] = "찜";
    } else if (links[count].match(/cat1=10&/)) {
      catResult[0]["cookingMethod"] = "절임";
    } else if (links[count].match(/cat1=9&/)) {
      catResult[0]["cookingMethod"] = "튀김";
    } else if (links[count].match(/cat1=38&/)) {
      catResult[0]["cookingMethod"] = "삶기";
    } else if (links[count].match(/cat1=67&/)) {
      catResult[0]["cookingMethod"] = "굽기";
    } else if (links[count].match(/cat1=39&/)) {
      catResult[0]["cookingMethod"] = "데치기";
    } else if (links[count].match(/cat1=37&/)) {
      catResult[0]["cookingMethod"] = "회";
    } else if (links[count].match(/cat1=11&/)) {
      catResult[0]["cookingMethod"] = "기타";
    }

    if (links[count].match(/cat2=&/)) {
      // catResult[0].cookingMethod = "전체";
      catResult[0]["occasionOfRecipe"] = "전체";
      // break;
    } else if (links[count].match(/cat2=12&/)) {
      catResult[0]["occasionOfRecipe"] = "일상";
    } else if (links[count].match(/cat2=18&/)) {
      catResult[0]["occasionOfRecipe"] = "초스피드";
    } else if (links[count].match(/cat2=13&/)) {
      catResult[0]["occasionOfRecipe"] = "손님접대";
    } else if (links[count].match(/cat2=1&/)) {
      catResult[0]["occasionOfRecipe"] = "술안주";
    } else if (links[count].match(/cat2=21&/)) {
      catResult[0]["occasionOfRecipe"] = "다이어트";
    } else if (links[count].match(/cat2=15&/)) {
      catResult[0]["occasionOfRecipe"] = "도시락";
    } else if (links[count].match(/cat2=43&/)) {
      catResult[0]["occasionOfRecipe"] = "영양식";
    } else if (links[count].match(/cat2=18&/)) {
      catResult[0]["occasionOfRecipe"] = "간식";
    } else if (links[count].match(/cat2=45&/)) {
      catResult[0]["occasionOfRecipe"] = "야식";
    } else if (links[count].match(/cat2=20&/)) {
      catResult[0]["occasionOfRecipe"] = "푸드스타일링";
    } else if (links[count].match(/cat2=46&/)) {
      catResult[0]["occasionOfRecipe"] = "해장";
    } else if (links[count].match(/cat2=44&/)) {
      catResult[0]["occasionOfRecipe"] = "명절";
    } else if (links[count].match(/cat2=14&/)) {
      catResult[0]["occasionOfRecipe"] = "이유식";
    } else if (links[count].match(/cat2=22&/)) {
      catResult[0]["occasionOfRecipe"] = "기타";
    }

    //cat3

    if (links[count].match(/cat3=&/)) {
      // catResult[0].cookingMethod = "전체";
      catResult[0]["ingreOfRecipe"] = "전체";
      // break;
    } else if (links[count].match(/cat3=70&/)) {
      catResult[0]["ingreOfRecipe"] = "소고기";
    } else if (links[count].match(/cat3=71&/)) {
      catResult[0]["ingreOfRecipe"] = "돼지고기";
    } else if (links[count].match(/cat3=72&/)) {
      catResult[0]["ingreOfRecipe"] = "닭고기";
    } else if (links[count].match(/cat3=23&/)) {
      catResult[0]["ingreOfRecipe"] = "육류";
    } else if (links[count].match(/cat3=28&/)) {
      catResult[0]["ingreOfRecipe"] = "채소류";
    } else if (links[count].match(/cat3=24&/)) {
      catResult[0]["ingreOfRecipe"] = "해물류";
    } else if (links[count].match(/cat3=50&/)) {
      catResult[0]["ingreOfRecipe"] = "달걀/유제품";
    } else if (links[count].match(/cat3=33&/)) {
      catResult[0]["ingreOfRecipe"] = "가공식품류";
    } else if (links[count].match(/cat3=47&/)) {
      catResult[0]["ingreOfRecipe"] = "쌀";
    } else if (links[count].match(/cat3=32&/)) {
      catResult[0]["ingreOfRecipe"] = "밀가루";
    } else if (links[count].match(/cat3=25&/)) {
      catResult[0]["ingreOfRecipe"] = "건어물류";
    } else if (links[count].match(/cat3=31&/)) {
      catResult[0]["ingreOfRecipe"] = "버섯류";
    } else if (links[count].match(/cat3=48&/)) {
      catResult[0]["ingreOfRecipe"] = "과일류";
    } else if (links[count].match(/cat3=27&/)) {
      catResult[0]["ingreOfRecipe"] = "콩/견과류";
    } else if (links[count].match(/cat3=26&/)) {
      catResult[0]["ingreOfRecipe"] = "곡류";
    } else if (links[count].match(/cat3=34&/)) {
      catResult[0]["ingreOfRecipe"] = "기타";
    }

    //cat4

    if (links[count].match(/cat4=&/)) {
      // catResult[0].cookingMethod = "전체";
      catResult[0]["typeOfRecipe"] = "전체";
      // break;
    } else if (links[count].match(/cat4=63&/)) {
      catResult[0]["typeOfRecipe"] = "밑반찬";
    } else if (links[count].match(/cat4=56&/)) {
      catResult[0]["typeOfRecipe"] = "메인반찬";
    } else if (links[count].match(/cat4=54&/)) {
      catResult[0]["typeOfRecipe"] = "국/탕";
    } else if (links[count].match(/cat4=55&/)) {
      catResult[0]["typeOfRecipe"] = "찌개";
    } else if (links[count].match(/cat4=60&/)) {
      catResult[0]["typeOfRecipe"] = "디저트";
    } else if (links[count].match(/cat4=53&/)) {
      catResult[0]["typeOfRecipe"] = "면/만두";
    } else if (links[count].match(/cat4=52&/)) {
      catResult[0]["typeOfRecipe"] = "밥/죽/떡";
    } else if (links[count].match(/cat4=61&/)) {
      catResult[0]["typeOfRecipe"] = "퓨전";
    } else if (links[count].match(/cat4=57&/)) {
      catResult[0]["typeOfRecipe"] = "김치/젓갈/장류";
    } else if (links[count].match(/cat4=58&/)) {
      catResult[0]["typeOfRecipe"] = "양념/소스/잼";
    } else if (links[count].match(/cat4=65&/)) {
      catResult[0]["typeOfRecipe"] = "양식";
    } else if (links[count].match(/cat4=64&/)) {
      catResult[0]["typeOfRecipe"] = "샐러드";
    } else if (links[count].match(/cat4=68&/)) {
      catResult[0]["typeOfRecipe"] = "스프";
    } else if (links[count].match(/cat4=66&/)) {
      catResult[0]["typeOfRecipe"] = "빵";
    } else if (links[count].match(/cat4=69&/)) {
      catResult[0]["typeOfRecipe"] = "과자";
    } else if (links[count].match(/cat4=59&/)) {
      catResult[0]["typeOfRecipe"] = "차/음료/술";
    } else if (links[count].match(/cat4=62&/)) {
      catResult[0]["typeOfRecipe"] = "기타";
    }

    catResult[0]["recipeTitle"] = recipeTitle.text();
    catResult[0]["recipeAuthor"] = recipeAuthor.text().replace(/\s/g, "");
    catResult[0]["recipeIntro"] = recipeIntro.text().replace(/\s\s/g, "");
    catResult[0]["recipeServing"] = recipeServing.text().replace("\n", "");
    catResult[0]["recipeTime"] = recipeTime.text().replace("\n\t", "");
    catResult[0]["recipeDifficulty"] = recipeDifficulty
      .text()
      .replace("\n", "");
    catResult[0]["recipeThumbnail"] = recipeThumbnail.find("img").attr("src");
    catResult[0]["authorProfilePic"] = authorProfilePic.find("img").attr("src");
  }
  // if (recipeLinkList[count].includes("cat1=&")) {
  //   catResult[0].cookingMethod = "전체";
  //   catResult[0]["cookingMethod"] = "전체";
  //   // break;
  // } else if (recipeLinkList[count].includes("cat1=6&")) {
  //   catResult[0]["typeOfRecipe"] = "볶음";
  // } else if (recipeLinkList[count].includes("cat1=1&")) {
  //   catResult[0]["typeOfRecipe"] = "끓이기";
  // } else if (recipeLinkList[count].includes("cat1=7&")) {
  //   catResult[0]["typeOfRecipe"] = "부침";
  // } else if (recipeLinkList[count].includes("cat1=36&")) {
  //   catResult[0]["typeOfRecipe"] = "조림";
  // } else if (recipeLinkList[count].includes("cat1=41&")) {
  //   catResult[0]["typeOfRecipe"] = "무침";
  // } else if (recipeLinkList[count].includes("cat1=42&")) {
  //   catResult[0]["typeOfRecipe"] = "비빔";
  // } else if (recipeLinkList[count].includes("cat1=8&")) {
  //   catResult[0]["typeOfRecipe"] = "찜";
  // } else if (recipeLinkList[count].includes("cat1=10&")) {
  //   catResult[0]["typeOfRecipe"] = "절임";
  // } else if (recipeLinkList[count].includes("cat1=9&")) {
  //   catResult[0]["typeOfRecipe"] = "튀김";
  // } else if (recipeLinkList[count].includes("cat1=38&")) {
  //   catResult[0]["typeOfRecipe"] = "삶기";
  // } else if (recipeLinkList[count].includes("cat1=67&")) {
  //   catResult[0]["typeOfRecipe"] = "굽기";
  // } else if (recipeLinkList[count].includes("cat1=39&")) {
  //   catResult[0]["typeOfRecipe"] = "데치기";
  // } else if (recipeLinkList[count].includes("cat1=37&")) {
  //   catResult[0]["typeOfRecipe"] = "회";
  // } else if (recipeLinkList[count].includes("cat1=11&")) {
  //   catResult[0]["typeOfRecipe"] = "기타";
  // }

  console.log("catResult", catResult);
}
