import React from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Main from "../components/main/Main";
import MainInput from "../components/main/MainInput";
// import styled from "styled-components";

function Home() {
  return (
    <Layout>
      <Header title={"우리들의 블로그"} />
      <MainInput />
      <Main />
    </Layout>
  );
}
export default Home;
