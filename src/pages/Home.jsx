import React from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <Header title={"우리들의 블로그"} />
      <div>홈페이지입니다.</div>
    </Layout>
  );
}
export default Home;
