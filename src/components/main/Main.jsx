import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Main() {
  const { feeds } = useSelector((state) => state.feeds);
  return (
    <StFeeds>
      <div></div>
      {feeds.map((feed) => (
        <StFeed key={feed.id}>{feed.title}</StFeed>
      ))}
    </StFeeds>
  );
}

export default Main;

const StFeeds = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StFeed = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;
