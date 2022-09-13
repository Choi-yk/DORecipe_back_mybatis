import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import { useInput } from "../../../hooks/useInput";


const MemberInfoForm = () => {

    let { memberId } = useParams();

    // 수정 useInput
    let [member_email, onChangeMemberEmail, setMemberEmail] = useInput("");
    let [member_phone, onChangeMemberPhone, setMemberPhone] = useInput("");
    let [member_imagePath, onChangeMemberImg, setMemberImg] = useInput("");

    // 멤버
    const [memberState, setMemberState] = useState([
        {
            member_id: "",
            member_pwd: "",
            member_name: "",
            member_email: "",
            member_gender: "",
            member_birth: "",
            member_phone: "",
            member_imagePath: "/img/profileImage.png",
            member_joinDate: "",
            member_role: ""
        }
    ]);

    function Axios() {
        axios({
            url: "/member/info/"+memberId,
            method: "get",
            data: {
                member_id: memberId,
                member_pwd: "",
                member_name: "",
                member_email: "",
                member_gender: "",
                member_birth: "",
                member_phone: "",
                member_imagePath: "",
                member_joinDate: "",
                member_role: "member"
            },
            baseURL: "http://localhost:9000"
        }).then(function(response) {
			console.log(response.data);
            console.log(response.data.member_id);
			setMemberState(response.data);
		});
    }


    // 파일 보내기
    // const[files, setFiles] = useState("");

    // const onLoadFile = (e)=>{

    //     onChangeMemberImg(e);

    //     const file = e.target.files;
    //     setFiles(file);
    // };
    
    useEffect(() => {
        Axios();

        // preview();
        // return() => preview();
    }, []);

    // 미리보기
    // const preview = ()=>{
    //     if(!files) return false;
    //     const imgEl = document.querySelector('.img_box');
    //     const reader = new FileReader();

    //     reader.onload = () =>
    //     (imgEl.style.backgroundImage = `url(${reader.result})`);

    //     reader.readAsDataURL(files[0]);
    // }


    // 멤버 정보 수정
    const modHandler = useCallback((e) => {
        e.preventDefault(); // 정리~

        member_email = document.getElementsByName("member_email")[0].value;
        member_phone = document.getElementsByName("member_phone")[0].value;
        // member_imagePath = document.getElementsByName("member_imagePath")[0].value;

        // 멤버 데이터
        const data = {
            member_id: `${memberId}`,
            member_email: `${member_email}`,
            member_phone: `${member_phone}`,
            // member_imagePath: `${member_imagePath.replace(/c:\\fakepath\\/i,'')}`
        }

        const formData = new FormData();

        formData.append("member_id", memberId);
        formData.append("member_email", data.member_email);
        formData.append("member_phone", data.member_phone);
        // formData.append("member_imagePath", data.member_imagePath);
        // formData.append("member_image", files[0]);

        if(data.member_phone === "") {
            alert("전화번호를 입력해 주세요.");
            window.focus(member_phone);

        }
        else if( data.member_email === "") {
            alert("이메일을 입력해 주세요.");
            window.focus(member_email);
        }   
        else {
            axios({
                method: "post",
                url: "http://localhost:9000/member/info/update",
                headers: { "Content-Type": "multipart/form-data" },
                data: formData
            }).then((response) => {
                console.log(response.data);
                alert("수정되었습니다.");
                window.location.href = "http://localhost:3000/member/info/"+memberId;
            })
        }
    },[memberId]);

    // 멤버 탈퇴
    const removeHandler = useCallback(() => {
        // const removeState = memberState.filter((item) => item.member_id !== memberId);
        // setMemberState(removeState);
        
        // if(window.confirm("정말 탈퇴하시겠습니까?")) {
            // axios
            // .get(`http://localhost:9000/member/info/delete/${memberId}`)
            // .then((data) => {
            //     console.log(data);
            //     console.log(data.member_id);
            //     window.location.href = "http://localhost:3000/member/info/"+memberId;
            // });
        // }
        // else
        //     alert("취소되었습니다.");
          
    });
 

    return(
        <>
        {/* 회원 정보 */}
        <form className="myPage-box1">
            <SectionTitle>회원 정보</SectionTitle>
            <div className="center">
                <button onChange={onChangeMemberImg}>
                    <img className="rounded-circle profileImage" src="/img/profileImage.png" alt="프로필 임시 이미지" />
                </button>
                {/* src={memberState.member_imagePath} */}
                {/* <div className="mt-5 imgPreview">
                    <input
                        name="member_imagePath"
                        type="file"
                        accept="img/*"
                        onChange={onLoadFile}
                        defaultValue={memberState.member_imagePath}
                    />
                </div> */}
                
            </div>
            <div className="memberInfo">
                <div>
                    <span className="columnName">아이디</span>
                    <span name="member_id">{memberState.member_id}</span>
                    {/* <input type="text" name="member_id"
                                defaultValue={memberState.member_id} 
                                disabled/> */}
                </div>
                <div>
                    <span className="columnName">이름</span>
                    <span name="member_name">{memberState.member_name}</span>
                    {/* <input type="text" name="member_name"
                                    defaultValue={memberState.member_name}
                                    disabled /> */}
                </div>
                <div>
                    <span className="columnName">성별</span>
                    <span name="member_gender">{memberState.member_gender}</span>
                            {/* <input type="text" name="member_gender"
                                    defaultValue={memberState.member_gender}
                                    disabled /> */}
                </div>
                <div>
                    <span className="columnName">생년월일</span>
                    <span name="member_birth">{memberState.member_birth}</span>
                            {/* <input type="text" name="member_birth"
                                    defaultValue={memberState.member_birth}
                                    disabled /> */}
                </div>
                <div>
                    <span className="columnName">휴대폰 번호</span>
                    <input type="text" name="member_phone"
                        defaultValue={memberState.member_phone} 
                        onChange={onChangeMemberPhone} />
                </div>
                <div>
                    <span className="columnName">이메일 주소</span>
                    <input type="text" name="member_email"
                        defaultValue={memberState.member_email}
                        onChange={onChangeMemberEmail} />
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">
                            <button>취소</button>
                        </Link>
                    </li>
                    <li>
                        <button type="button" onClick={modHandler}>수정</button>
                    </li>
                    <li>
                        <button type="button" onClick={removeHandler}>탈퇴하기</button>
                    </li>
                </ul>
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
            </div>
        </form>
        </>
    );
}
export default MemberInfoForm;
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