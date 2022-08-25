import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

const SignUpTemplate = () => {
  /** input state설정해주기 */
  const [member_id, onChangeMemId, setMemId] = useInput(""); //아이디
  const [member_pwd, onChangePwd, setPwd] = useInput(""); //비번
  const [confirm_pwd, onChangeConfirm, setConfirm] = useInput(""); //비번 재확인
  const [member_name, onChangeName, setName] = useInput(""); //이름

  const [member_gender, onChangeGender, setGender] = useInput(""); //성별
  const [member_phone, onChangePh, setPhone] = useInput(""); //전화번호
  const [member_email, onChangeEmail, setEmail] = useInput(""); //이메일

  const [birthYear, onChangeYear, setYear] = useInput(""); //생년
  const [birthMonth, onChangeMonth, setMonth] = useInput(""); //생월
  const [birthdate, onChangeBday, setBday] = useInput(""); //생일
  const [member_birth, setDOB] = useState(""); //생년월일

  /** 에러메세지 */
  const [error, setError] = useState(null);
  const [emptyError, setEmptyError] = useState(null);

  const [formValue, setFormValue] = useState(
    {
      member_id: "test1",
      member_pwd: "tester123",
      member_name: "오오뎅",
      member_gender: "여자",
      member_phone: "01012341234",
      member_email: "tester123123@naver.com",
      member_birth: "19990912",
    },
    [
      member_id,
      member_pwd,
      member_name,
      member_gender,
      member_phone,
      member_phone,
      member_email,
      member_birth,
    ]
  );

  //비번과 확인비번일치확인
  useEffect(() => {
    if (member_pwd.length > 0 && confirm_pwd.length > 0) {
      if (confirm_pwd === member_pwd) {
        setError(false);
        return;
      } else {
        setError(true);
      }
    }
  }, [member_pwd, confirm_pwd]);
  //필수사항 공백인거 경고문구 표시
  useEffect(() => {
    if (member_name.length > 0 ? setEmptyError(false) : setEmptyError(true))
      return;
  }, [member_name]);

  //생일 19XXXXXX형태로
  useEffect(() => {
    if (
      birthYear.length === 4 &&
      birthMonth.length === 2 &&
      birthdate.length === 2
    ) {
      const birthYrMth = birthYear.concat(birthMonth);
      setDOB(birthYrMth.concat(birthdate));
    }
  }, [birthYear, birthMonth, birthdate]);

  /** 아이디 정규표현식 :  영문대소문자 포함 6 ~ 20 자리*/
  const idExp = useRef(/^[A-Za-z0-9]{6,20}$/g);

  /** 비번 정규표현식 :  대소문자 특수문자 포함  9 ~ 18*/
  const pwdExp = useRef(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$!%@])[A-Za-z\d@$!%*#?&]{9,18}$/g
  );
  /** 전화번호 정규표현식 : 01 + 016789중 하나로 시작 '-'있어도 되고 없어도 됨*/
  const phoneReg = useRef(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);

  /** 이메일 정규표현식 : 특수문자, 알파벳, 숫자, -_포함 , @가 반드시 들어가는 형식*/
  const emailReg = useRef(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );
  const onJoinMemberHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (!idExp.current.test(member_id)) {
        if (
          !alert("아이디 형식이 일치하지 않습니다(영문,대소문자 6 ~ 20 자)")
        ) {
          setMemId("");
          return;
        }
      }
      if (!pwdExp.current.test(member_pwd)) {
        if (
          !alert(
            "비밀번호 형식이 일치하지 않습니다(대소문자 특수문자($ ! % @) 포함  9 ~ 18자)"
          )
        ) {
          setPwd("");
          setConfirm("");
          return;
        }
      }
      if (!phoneReg.current.test(member_phone)) {
        if (
          !alert(
            "비밀번호 형식이 일치하지 않습니다(대소문자 특수문자 포함  9 ~ 18자)"
          )
        ) {
          setPhone("");
          return;
        }
      }
      if (!emailReg.current.test(member_email)) {
        if (
          !alert(
            "비밀번호 형식이 일치하지 않습니다(대소문자 특수문자 포함  9 ~ 18자)"
          )
        ) {
          setEmail("");
          return;
        }
      }

      const data = {
        member_id: member_id.value,
        member_pwd: member_pwd.value,
        member_name: member_name.value,
        member_email: member_email.value,
        member_gender: member_gender.value,
        member_birth: member_birth.value,
        member_phone: member_phone.value,
        member_imagePath: "",
        member_joinDate: "",
        member_like: 0,
        member_role: "member",
      };

      const formData = new FormData();
      formData.append("member_id", data.member_id);

      axios({
        method: "POST",
        url: "http://localhost:9000/member/join",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        console.log(response.data);
      });
    },
    [member_id, member_pwd, confirm_pwd, member_phone, member_email]
  );

  //   setFormValue({
  //     ...formValue,
  //     [member_id]: formValue.member_id,
  //     [member_pwd]: formValue.member_pwd,
  //     [member_email]: formValue.member_email,
  //     [member_gender]: formValue.member_gender,
  //     [member_birth]: formValue.member_birth,
  //     [member_phone]: formValue.member_phone,
  //   });
  //   console.log(formValue);
  //   var frm = new FormData();
  //   frm.append("member_id", formValue.member_id);
  //   frm.append("member_pwd", formValue.member_pwd);
  //   frm.append("member_phone", formValue.member_phone);
  //   frm.append("member_email", formValue.member_email);
  //   frm.append("member_gender", formValue.member_gender);
  //   frm.append("member_birth", formValue.member_birth);

  //   axios({
  //     method: "post",
  //     url: "http://localhost:9000/member/join",
  //     data: frm,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  //   axios({
  //     url: "/member/join",
  //     method: "post",
  //     data: `member_id=member_id&member_pwd=${member_pwd}&member_name=${member_name}&member_email=${member_email}&member_gender=${member_gender}&member_birth=${member_birth}&member_phone=${member_phone}&member_like=0&member_role=member`,

  //     //   member_id: `${member_id}`,
  //     //   member_pwd: `${member_pwd}`,
  //     //   member_name: `${member_name}`,
  //     //   member_email: `${member_email}`,
  //     //   member_gender: `${member_gender}`,
  //     //   member_birth: `${member_birth}`,
  //     //   member_phone: `${member_phone}`,
  //     //   member_imagePath: "",
  //     //   member_joinDate: "",
  //     //   member_like: 0,
  //     //   member_role: "member",
  //     // member_id: "tester1",
  //     // member_pwd: "tester1",
  //     // member_name: "tester1",
  //     // member_email: "tester1",
  //     // member_gender: "tester1",
  //     // member_birth: "tester1",
  //     // member_phone: "tester1",
  //     // member_imagePath: "",
  //     // member_joinDate: "",
  //     // member_like: 0,
  //     // member_role: "member",
  //     baseURL: "http://localhost:9000",
  //     headers: { "content-type": "application/json" },
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  useEffect(() => {
    // axios({
    //   url: "member/join",
    //   method: "post",
    //   data: {
    //     member_id: member_id,
    //     member_pwd: member_pwd,
    //     member_name: member_name,
    //     member_email: member_email,
    //     member_gender: member_gender,
    //     member_birth: member_birth,
    //     member_phone: member_phone,
    //     member_imagePath: "",
    //     member_joinDate: "",
    //     member_like: 0,
    //     member_role: "member",
    //   },
    //   baseURL: "http://localhost:9000",
    // }).then(function response(response) {
    //   console.log(response);
    //   console.log("성공?!");
    // });
  });

  return (
    <>
      <div className="formWrap">
        {/* <form className="form" method="post" action="/member/join"> */}
        <form className="form">
          <div className="formLabels">
            아이디
            <FontAwesomeIcon
              //   className="fa-circle-exclamation"
              icon={faCircleExclamation}
            />
            필수 : 영문,숫자포함 6 ~20자
          </div>
          <input
            type="text"
            name="member_id"
            required
            className="idInput"
            placeholder="내용을 입력해주세요"
            value={member_id}
            onChange={onChangeMemId}
          />
          <button
            type="button"
            className="duplicateCheckId"
            // onClick="duplicateCheck()"
          >
            중복확인
          </button>
          <div className="formLabels">
            비밀번호
            <FontAwesomeIcon icon={faCircleExclamation} />
            필수 : 대소문자 특수문자($ ! % @) 포함 9 ~ 18
          </div>
          <input
            className="member_pwd"
            type="password"
            required
            maxLength={18}
            autoComplete="off"
            value={member_pwd}
            onChange={onChangePwd}
            placeholder="대소문자 특수문자 포함 9 ~ 18"
          />
          <div className="formLabels">
            비밀번호 확인
            {error && (
              <span>
                <FontAwesomeIcon
                  //   className="fa-circle-exclamation"
                  icon={faCircleExclamation}
                />
                필수 : 비밀번호가 불일치합니다.
              </span>
            )}
          </div>
          <input
            className="passwordCheck"
            type="password"
            required
            value={confirm_pwd}
            onChange={onChangeConfirm}
            maxLength={18}
            autoComplete="off"
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <div className="formLabels">
            이름
            {emptyError && (
              <span>
                <FontAwesomeIcon icon={faCircleExclamation} /> 필수
              </span>
            )}
          </div>
          <input
            className="member_name"
            type="text"
            required
            value={member_name}
            onChange={onChangeName}
            placeholder="이름을 입력해주세요."
          />
          <div className="formLabels">
            생년월일
            <FontAwesomeIcon
              className="fa-circle-exclamation"
              icon={faCircleExclamation}
            />
            필수
          </div>
          <input
            type="text"
            className="birthYear"
            placeholder="년(4자)"
            value={birthYear}
            maxLength={4}
            onChange={onChangeYear}
          />
          <select
            name="months"
            id="months"
            value={birthMonth}
            onChange={onChangeMonth}
          >
            <option value="default">월</option>
            <option value="01">1월</option>
            <option value="02">2월</option>
            <option value="03">3월</option>
            <option value="04">4월</option>
            <option value="05">5월</option>
            <option value="06">6월</option>
            <option value="07">7월</option>
            <option value="08">8월</option>
            <option value="09">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
          <input
            type="text"
            className="bDay"
            placeholder="일(2자)"
            value={birthdate}
            maxLength={2}
            onChange={onChangeBday}
          />
          <div className="formLabels">
            성별
            <FontAwesomeIcon icon={faCircleExclamation} />
            필수
          </div>
          <select
            name="member_gender"
            defaultValue="성별"
            onSelect={onChangeGender}
            required
          >
            <option value="남자">남자</option>
            <option value="여자">여자</option>
            <option value="선택안함">선택안함</option>
          </select>
          <div className="formLabels">이메일</div>
          <input
            type="email"
            name="member_email"
            className="email"
            value={member_email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력해주세요."
            required
          />
          <FontAwesomeIcon
            className="fa-circle-exclamation"
            icon={faCircleExclamation}
          />
          필수
          <div className="formLabels">휴대전화</div>
          <input
            className="phoneNum"
            type="phoneNum"
            name="member_phone"
            required
            placeholder="휴대전화"
            maxLength={11}
            value={member_phone.replace("-", "")}
            onChange={onChangePh}
          />
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="fa-circle-exclamation"
          />
          필수
          {/* <button className="submitJoinBtn" type="submit" disabled={error}> */}
          <button
            className="submitJoinBtn"
            type="button"
            onClick={onJoinMemberHandler}
            disabled={error}
          >
            {/* onClick={setFormValue} */}
            가입하기
          </button>
        </form>
      </div>
    </>
  );
};
export default SignUpTemplate;
