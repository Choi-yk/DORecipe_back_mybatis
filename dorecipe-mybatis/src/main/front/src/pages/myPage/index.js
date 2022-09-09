import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import './style.css'
import MainLayout from "../../layout/mainLayOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {

    let { memberId } = useParams();

    // 멤버
    const [memberState, setMemberState] = useState([
        {
            member_id: memberId,
            member_pwd: "",
            member_name: "",
            member_email: "",
            member_gender: "",
            member_birth: "",
            member_phone: "",
            member_imagePath: "",
            member_joinDate: "",
            member_role: ""
        }
    ]);

    // 작성한 레시피
    // const [C_recipeState, setCRecipeState] = useState([
    //     {
    //         member_id: memberId,
    //         c_recipe: 0,
    //         recipe_title: "",
    //         recipe_rpath: "",
    //         recipe_savetype: 0,
    //         information_level: "",
    //         information_time: ""
    //     }
    // ]);

    // 작성중 레시피
    // const [recipeState, setRecipeState] = useState([
    //     {
    //         member_id: memberId,
    //         r_recipe: 0,
    //         recipe_title: "",
    //         recipe_rpath: "",
    //         recipe_savetype: 0,
    //         information_level: "",
    //         information_time: ""
    //     }
    // ]);

    // 멤버 정보 가져오기
    function memberAxios() {
        axios({
            url: "/member/info/"+memberId,
            method: "get",
            data: {
                member_id: "",
                member_pwd: "",
                member_name: "",
                member_email: "",
                member_gender: "",
                member_birth: "",
                member_phone: "",
                member_imagePath: "",
                member_joinDate: "",
                member_role: ""
            },
            baseURL: "http://localhost:9000"
        }).then(function(response) {
			console.log(response.data);
            console.log(response.data.member_id);
			setMemberState(response.data);
		});
    }

    // 작성한 레시피 정보 가져오기
    // 스프링부트 레시피 컨트롤러 /getRecipeNum 사용하기 ??? ㄴㄴ
    // member_id가 ~인 레시피의 컬럼들을 다 가져와야지!
    // function C_recipeAxios() {
    //     axios({
    //         url: "recipe/complete/"+memberId,
    //         method: "get",
    //         data: {
    //             recipe_title: "",
    //             recipe_rpath: "",
    //             information_time: "",
    //             information_level: ""
    //         },
    //         baseURL: "http://localhost:9000"
    //     }).then(function(response) {
	// 		console.log(response.data);
    //         console.log("작성한 제목" + response.data.recipe_title);
    //         console.log("작성한 이미지 url" + response.data.recipe_rpath);
    //         console.log("작성한 난이도" + response.data.information_level);
    //         console.log("작성한 시간" + response.data.information_time);
	// 		setCRecipeState(response.data);
	// 	});
    // }

    // 작성중 레시피 정보 가져오기
    // function recipeAxios() {
    //     axios({
    //         url: "recipe/recording/"+memberId,
    //         method: "get",
    //         data: {
    //             recipe_title: "",
    //             recipe_rpath: "",
    //             information_time: "",
    //             information_level: ""
    //         },
    //         baseURL: "http://localhost:9000"
    //     }).then(function(response) {
	// 		console.log(response.data);
    //         console.log("작성중 제목" + response.data.recipe_title);
    //         console.log("작성중 이미지 url" + response.data.recipe_rpath);
    //         console.log("작성중 난이도" + response.data.information_level);
    //         console.log("작성중 시간" + response.data.information_time);
	// 		setRecipeState(response.data);
	// 	});
    // }

    useEffect(() => {
        memberAxios();
        // C_recipeAxios();
        // recipeAxios();
    },[]);

    return(
        <>
        {/* form??!!?? */}
            <MainLayout>
                <div>
                    {/* 회원 정보 */}
                    <div className="card myPage-box1">
                    <table>
                        <colgroup>
                            <col></col>
                        </colgroup>
                        <tbody>
                            <tr className="Title">
                                회원 정보
                            </tr>
                            <tr>
                                <img className="rounded-circle profileImage" src="/img/profileImage.png" alt="프로필 임시 이미지"></img>
                                {/* src={memberState.member_imagePath} */}
                            </tr>
                            <tr>
                                <th>아이디</th>
                                <td>
                                    <span name="member_id">{memberState.member_id}</span>
                                    {/* <input type="text" name="member_id"
                                            defaultValue={memberState.member_id} 
                                            disabled/> */}
                                </td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td>
                                    <span name="member_name">{memberState.member_name}</span>
                                    {/* <input type="text" name="member_name"
                                            defaultValue={memberState.member_name}
                                            disabled /> */}
                                    </td>
                            </tr>
                            <tr>
                                <th>성별</th>
                                <td>
                                <span name="member_gender">{memberState.member_gender}</span>
                                    {/* <input type="text" name="member_gender"
                                            defaultValue={memberState.member_gender}
                                            disabled /> */}
                                </td>
                            </tr>
                            <tr>
                                <th>생년월일</th>
                                <td>
                                    <span name="member_birth">{memberState.member_birth}</span>
                                    {/* <input type="text" name="member_birth"
                                            defaultValue={memberState.member_birth}
                                            disabled /> */}
                                </td>
                            </tr>
                            <tr>
                                <th>휴대폰 번호</th>
                                <td>
                                    <input type="text" name="member_phone"
                                            defaultValue={memberState.member_phone} />
                                </td>
                            </tr>
                            <tr>
                                <th>이메일 주소</th>
                                <td>
                                    <input type="text" name="member_email"
                                            defaultValue={memberState.member_email} />
                                </td>
                            </tr>
                            <tr>
                                <Link to="/">
                                    <button>취소</button>
                                </Link>
                                <button>수정</button>
                                <button>탈퇴하기</button>
                            </tr>
                            
                            {/* 버튼 임시
                            <ul class="btn-box-multiple">
                                <li>
                                    <div class="btn-purple-line">
                                        <a href="//www.wavve.com">취소</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="btn-purple">
                                        <a href="javascript:;" onclick="onSubmit();">수정</a>
                                    </div>
                                </li>
                            </ul> */}
                            </tbody>
                        </table> 
                    </div>

                    {/* 좋아요한 레시피 */}
                    <div className="card myPage-box2">
                    <table>
                        <colgroup>
                            <col></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th className="Title">
                                    좋아요한 레시피
                                    <FontAwesomeIcon icon={faHeart} className="heart" />
                                    <span className="likeRecipeTotal">총 n개</span>
                                </th>
                            </tr>
                            <tr>
                            </tr>
                            </tbody>
                        </table> 
                    </div>

                    {/* 작성한 레시피 */}
                    <div className="card myPage-box3">
                    <table>
                        <colgroup>
                            <col></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th className="Title">
                                    작성한 레시피
                                    {/* <span className="likeRecipeTotal">총 {C_recipeState.c_recipe}개</span> */}
                                </th>
                            </tr>
                            <tr>
                                {/* {
                                C_recipeState.map((e) => {
                                    return(
                                        <div key={e}>
                                             <img
                                                src={e.recipe_rpath}
                                                alt="CompleteRecipeimg"
                                            ></img>
                                            <p>{e.recipe_title}</p>
                                            <p>{e.information_level}&nbsp;{e.information_time}</p>
                                        </div>
                                    );
                                })
                            } */}
                            </tr>
                            </tbody>
                        </table> 
                    </div>

                    {/* 작성중인 레시피 */}
                    <div className="card myPage-box4">
                    <table>
                        <colgroup>
                            <col></col>
                        </colgroup>
                        <tbody>
                            <tr className="Title">
                                작성중인 레시피
                                {/* <span className="likeRecipeTotal">총 {C_recipeState.r_recipe}개</span> */}
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                            </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default MyPage;
// const RecipeWrap = styled.div`
//   display: inline-flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   margin: 3em 4em;
//   text-align: center;
//   & > Link {
//     text-decoration: none;
//   }
// `;

// const RecipeImg = styled.div`
//   & > img {
//     // width: 15em;
//     width: 300px;
//     height 200px;
//     padding-bottom: 0.5em;
//     object-fit: cover;
//   }
// `;