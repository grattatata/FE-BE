import React from "react";
import Login from "../components/login/Login";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";

function LoginPage() {
  return (
    <Layout>
      <Header title={"로그인 해주세요!"} />
      <Login />
    </Layout>
  );
}
export default LoginPage;
