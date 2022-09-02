import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

  /** 아이디 중복 확인 */
  const [duplicateCheck, setDuplicateChk] = useState(null); //중복 확인

  /** 비번 & 확인 불일치 에러메세지 */
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  //생일 XXXX-XX-XX형태
  useEffect(() => {
    if (
      birthYear.length === 4 &&
      birthMonth.length === 2 &&
      birthdate.length === 2
    ) {
      const birthYrMth = `${birthYear}-${birthMonth}-${birthdate}`;
      setDOB(birthYrMth);
    } else if (
      birthYear.length === 4 &&
      birthMonth.length === 2 &&
      birthdate.length === 1 //이용자가 04형식으로 입력하지 않았을 시
    ) {
      birthdate.replace("", "0");
      const birthYrMth = `${birthYear}-${birthMonth}-${birthdate}`;
      setDOB(birthYrMth);
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

      if (duplicateCheck == null) {
        setDuplicateChk(null);
        return alert("아이디 중복 확인을 해주세요.");
      } else if (duplicateCheck == false) {
        setDuplicateChk(false);
        setMemId(member_id);
        return alert("아이디 중복 확인을 해주세요.");
      } else if (duplicateCheck == true) {
        setDuplicateChk(true);
        return setMemId(member_id);
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
        if (!alert("전화번호 형식이 올바르지 않습니다")) {
          setPhone("");
          return;
        }
      }
      if (!emailReg.current.test(member_email)) {
        if (!alert("이메일형식이 올바르지 않습니다.")) {
          setEmail("");
          return;
        }
      }

      const data = {
        member_id: `${member_id}`,
        member_pwd: `${member_pwd}`,
        member_name: `${member_name}`,
        member_email: `${member_email}`,
        member_gender: `${member_gender}`,
        member_birth: `${member_birth}`,
        member_phone: `${member_phone}`,
        member_imagePath: "",
        member_joinDate: "",
        member_like: 0,
        member_role: "member",
      };
      console.log(data.member_id);
      // formData blob json형태로 보내기
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });

      const formData = new FormData();
      formData.append("data", blob);
      formData.append("member_id", data.member_id);
      formData.append("member_pwd", data.member_pwd);
      formData.append("member_name", data.member_name);
      formData.append("member_email", data.member_email);
      formData.append("member_gender", data.member_gender);
      formData.append("member_birth", data.member_birth);
      formData.append("member_phone", data.member_phone);

      axios({
        method: "POST",
        url: "http://localhost:9000/member/join",
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      }).then((response) => {
        console.log(response.data);
      });
    },
    [
      member_id,
      member_pwd,
      confirm_pwd,
      member_phone,
      member_email,
      member_gender,
      member_phone,
    ]
  );
  /**아이디 중복 체크 */
  const onDuplicateCheck = useCallback(
    (e) => {
      e.preventDefault();
      axios({
        url: "/member/list",
        method: "get",
        data: { member_id: "" },
        baseURL: "http://localhost:9000",
      })
        .then(function (response) {
          const takenID = [];
          response.data.map((item) => {
            takenID.push(item.member_id);
          });

          if (takenID.includes(member_id)) {
            setDuplicateChk(false);
            setMemId("");
            alert("사용불가능한 아이디입니다.");

            console.log(member_id);
          } else {
            if (idExp.current.test(member_id)) {
              setDuplicateChk(true);
              setMemId(member_id);
              console.log(member_id);
            } else {
              setMemId("");
              return alert("아이디 형식이 올바르지 않습니다");
            }
          }
        })
        .then(function () {
          navigate("/member");
        });
    },
    [member_id]
  );

  return (
    <>
      <div className="formWrap">
        <form className="form">
          <div className="formLabels">
            아이디
            {/* {member_id.length === 0 ? (
              <WarningMsg>
                필수 <FontAwesomeIcon icon={faExclamationCircle} /> : 영문 또는
                숫자포함 6 ~20자{" "}
              </WarningMsg>
            ) : duplicateCheck == true ? (
              <WarningMsg>사용가능한 아이디입니다. </WarningMsg>
            ) : duplicateCheck == null ? (
              <></>
            ) : (
              <WarningMsg>
                사용불가능한 아이디입니다.{" "}
                <FontAwesomeIcon icon={faExclamationCircle} />
              </WarningMsg>
            )} */}
            {member_id.length === 0 || duplicateCheck == null ? (
              <WarningMsg>
                필수 <FontAwesomeIcon icon={faExclamationCircle} /> : 영문 또는
                숫자포함 6 ~20자{" "}
              </WarningMsg>
            ) : (
              duplicateCheck == true && (
                <WarningMsg>사용가능한 아이디입니다. </WarningMsg>
              )
            )}
          </div>
          <input
            type="text"
            name="member_id"
            required
            className="idInput"
            placeholder="내용을 입력해주세요"
            value={member_id}
            onChange={onChangeMemId}
            disabled={duplicateCheck} //한번만 가능하도록
          />

          <button
            type="button"
            className="duplicateCheckId"
            onClick={onDuplicateCheck}
            disabled={duplicateCheck} //한번만 가능하도록
          >
            {duplicateCheck === false
              ? "중복확인"
              : duplicateCheck === null
              ? "중복확인"
              : "확인완료"}
          </button>
          {/* {duplicateCheck === false ? <DuplicateIdHint /> : <></>} */}
          <div className="formLabels">
            비밀번호
            {member_pwd.length === 0 && (
              <WarningMsg>
                필수 <FontAwesomeIcon icon={faExclamationCircle} /> : 대소문자
                특수문자($ ! % @) 포함 9 ~ 18{" "}
              </WarningMsg>
            )}
          </div>
          <input
            className="member_pwd"
            type="password"
            required
            maxLength={18}
            autoComplete="off"
            value={member_pwd}
            onChange={onChangePwd}
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="formLabels">
            비밀번호 확인
            {error && (
              <WarningMsg>
                필수 : 비밀번호가 불일치합니다{" "}
                <FontAwesomeIcon icon={faExclamationCircle} />
              </WarningMsg>
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
            {member_name.length === 0 && (
              <WarningMsg>
                필수 <FontAwesomeIcon icon={faExclamationCircle} />
              </WarningMsg>
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
            {(birthYear.length == 0 ||
              birthMonth.length == 0 ||
              birthdate.length == 0) && (
              <WarningMsg>
                필수 <FontAwesomeIcon icon={faExclamationCircle} />
              </WarningMsg>
            )}
          </div>
          <input
            type="text"
            className="birthYear"
            placeholder="출생연도(4자)"
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
            <option value="">월</option>
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
            placeholder="출생일(2자)"
            value={birthdate}
            maxLength={2}
            onChange={onChangeBday}
          />
          <div className="formLabels">성별</div>
          <select
            name="member_gender"
            value={member_gender}
            onChange={onChangeGender}
            required
          >
            <option value="">성별</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
            <option value="선택안함">선택안함</option>
          </select>
          {member_gender == "" && (
            <WarningMsg>
              필수 <FontAwesomeIcon icon={faExclamationCircle} />
            </WarningMsg>
          )}
          <div className="formLabels">이메일</div>
          <input
            type="email"
            name="member_email"
            className="email"
            value={member_email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력해주세요."
            autoComplete="off"
            required
          />
          {member_email.length == 0 && (
            <WarningMsg>
              필수 <FontAwesomeIcon icon={faExclamationCircle} />
            </WarningMsg>
          )}
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
          {member_email.length == 0 && (
            <WarningMsg>
              필수 <FontAwesomeIcon icon={faExclamationCircle} />
            </WarningMsg>
          )}
          <button
            className="submitJoinBtn"
            type="button"
            onClick={onJoinMemberHandler}
            disabled={error}
          >
            가입하기
          </button>
        </form>
      </div>
    </>
  );
};
export default SignUpTemplate;

const WarningMsg = styled.div`
  display: inline-block;
  margin-left: 1em;
  color: #8d3232;
  font-size: smaller;
  font-weight: 400;
`;
