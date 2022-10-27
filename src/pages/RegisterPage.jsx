import Register from "../components/register/Register";
import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";

function RegisterPage() {
  return (
    <Layout>
      <Header title={"회원가입 해주세요!"} />
      <Register />
    </Layout>
  );
}
export default RegisterPage;
