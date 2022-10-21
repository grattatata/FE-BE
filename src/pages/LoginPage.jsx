import React from "react";
import Layout from "../components/layout/Layout";
import Login from "../components/login/Login";
import Header from "../components/header/Header";

function LoginPage() {
  return (
    <Layout>
      <Header />
      <Login />
    </Layout>
  );
}
export default LoginPage;
