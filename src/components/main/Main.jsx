import React from "react";
import styled from "styled-components";
import MainList from "./MainList";

function Main() {
  return (
    <div>
      <MainContBox>
        <MainContainer>
          <MainList />
        </MainContainer>
      </MainContBox>
    </div>
  );
}

export default Main;

const MainContBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const MainContainer = styled.div`
  /* border: 1px solid black; */
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
