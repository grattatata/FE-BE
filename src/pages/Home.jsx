import React from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import MainInput from "../components/main/MainInput";
// import styled from "styled-components";
// import Main from "../components/Main/Main";

function Home() {
  return (
    <Layout>
      <Header title={"우리들의 블로그"} />
      <MainInput />
      {/* 개인피드들 */}
      {/* <div>
        <div>
          <image>이미지</image>
          <userName>닉네임</userName>
          <div>22.10.24</div>
        </div>
        <hr /> */}
      {/* hr필요 없긴함 */}
      {/* </div> */}
    </Layout>
  );
}
export default Home;
