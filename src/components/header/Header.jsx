import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <HeaderContainer>
      <InfoWrap>
        <Link
          to="/"
          style={{ textDecoration: "none", float: "left", color: "#14ebb5c5" }}
        >
          <div>My Blog</div>
        </Link>
        <LoginWrap>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#14ebb5c5" }}
          >
            <div>로그인</div>
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#14ebb5c5" }}
          >
            <div style={{ marginLeft: "15px" }}>회원가입</div>
          </Link>
        </LoginWrap>
      </InfoWrap>
      <Banner>
        <Ment>{title}</Ment>
      </Banner>
    </HeaderContainer>
  );
}
export default Header;

const HeaderContainer = styled.div`
  width: 100vw;
`;

const InfoWrap = styled.div`
  width: 100vw;
  height: 50px;
  padding: 5px;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: -10px;
  font-weight: bold;
  color: #14ebb5c5;
`;

const LoginWrap = styled.nav`
  margin-right: 45px;
  /* position: relative; */
  display: flex;
  float: right;
  font-weight: bold;
  /* transform: translate(0%, -97%); */
`;

const Banner = styled.div`
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #74ebd5, #acb6e5);
`;

const Ment = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
`;
