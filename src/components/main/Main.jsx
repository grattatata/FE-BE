import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getFeeds } from "../../redux/modules/feeds";
import CommentList from "../comment/CommentList";

function Main() {
  const dispatch = useDispatch();
  const { feeds } = useSelector((state) => state.feeds);

  useEffect(() => {
    dispatch(__getFeeds());
  }, [dispatch]);
  console.log(feeds);

  return (
    <div>
      <MainContBox>
        <MainContainer>
          <MainContent>
            {feeds.map((feed) => (
              <div key={feed.id}>
                <MainFeedContainer>
                  <MainTopBox>
                    {/* <span>프로필</span> */}
                    <span>{feed.id}</span>
                    <span style={{ float: "right" }}>
                      {new Date(feed.id).toDateString()}
                    </span>
                  </MainTopBox>
                  {feed.content}
                  <CommentList />
                </MainFeedContainer>
              </div>
            ))}
          </MainContent>
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

const MainTopBox = styled.div`
  border-bottom: 1px solid #7588d8;
  width: 100%;
`;

const MainContent = styled.div`
  width: 70%;
  width: inherit;
`;

const MainFeedContainer = styled.div`
  height: 200px;

  margin-top: 20px;
  box-shadow: 2px 3px 5px 0px #acb6e5;
`;
