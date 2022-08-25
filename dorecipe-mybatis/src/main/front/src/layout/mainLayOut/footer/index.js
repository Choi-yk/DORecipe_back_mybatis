import { Link } from "react-router-dom";
import { FooterWrapper, FooterRight, FooterLeft } from "./style";

const LayOutFooter = () => {
  return (
    <>
      <FooterWrapper>
        <FooterRight>
          <Link to="/">
            <img className="logo" src="" />
          </Link>
        </FooterRight>
        <FooterLeft>
          <div>
            <Link to="/">개인정보처리방침</Link> | <Link to="/">이용약관</Link>
          </div>
          <div>대표: OOO/ Email : help@websitename.com / Fax: 02)123-4567</div>
          <div>서울 OO구 OO동 123-23 OO타워 OO호</div>
          <div>문의 전화 (운영시간 평일 : 10:00 ~ 18:00)</div>
          <div>
            (주) 잡솨봐 / 사업자등록번호: 000-00-00000 / 통신 판매 신고
            OOOO-OO-1234/ OO기업확인 / 사업자정보확인
          </div>
          <div>Copyright © 잡솨봐 Inc. All Rights Reserved</div>
        </FooterLeft>
      </FooterWrapper>
    </>
  );
};
export default LayOutFooter;
