import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <InfoWrap>
        <div>My Blog</div>
        <LoginWrap>
          <div>로그인</div>
          <div style={{ marginLeft: "15px" }}>회원가입</div>
        </LoginWrap>
      </InfoWrap>
      <Banner>
        <Ment>우리들의 블로그</Ment>
      </Banner>
    </>
  );
}
export default Header;

const InfoWrap = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: -10px;
  font-weight: bold;
  color: #00ffbf;
`;

const LoginWrap = styled.nav`
  margin-right: 45px;
  display: flex;
  float: right;
  font-weight: bold;
  transform: translate(0%, -97%);
`;

const Banner = styled.div`
  height: 180px;
  position: relative;
  background-color: #00ffbf;
`;

const Ment = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2.5rem;
  font-weight: bold;
  color: #e0f8ec;
`;
