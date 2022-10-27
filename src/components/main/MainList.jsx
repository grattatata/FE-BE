import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __deleteFeeds,
  // __editFeeds,
  __getFeeds,
} from "../../redux/modules/feeds";
import CommentList from "../comment/CommentList";
import EditButton from "./EditButton";

function MainList() {
  const dispatch = useDispatch();
  const { feeds } = useSelector((state) => state.feeds);
  console.log(feeds);

  const onDelete = (id) => () => {
    dispatch(__deleteFeeds(id)); //id값에 payload가 들어와서 함수로 박힘
  };

  useEffect(() => {
    dispatch(__getFeeds());
  }, [dispatch]);

  console.log(feeds);
  return (
    <MainContent>
      {feeds.map((feed) => (
        <div key={feed.id}>
          <MainFeedContainer>
            <MainTopBox>
              <Contenttitle>{feed.title}</Contenttitle>
              <span style={{ float: "right" }}>
                {new Date(feed.id).toDateString()}
              </span>
            </MainTopBox>
            <FeedsBox>
              <ContentButton>
                {/* <button>수정</button> */}
                <button onClick={onDelete(feed.id)}>삭제</button>
              </ContentButton>
              <ContentBox>
                {feed.content}
                <EditButton />
              </ContentBox>
            </FeedsBox>
            <CommentList />
          </MainFeedContainer>
        </div>
      ))}
    </MainContent>
  );
}
export default MainList;

const MainTopBox = styled.div`
  border-bottom: 1px solid #7588d8;
  width: 100%;
`;

const Contenttitle = styled.span`
  margin: 10px;
`;

const MainFeedContainer = styled.div`
  /* height: 200px; */

  margin-top: 20px;
  box-shadow: 2px 3px 5px 0px #acb6e5;
`;

const MainContent = styled.div`
  width: 70%;
  width: inherit;
`;
const FeedsBox = styled.div``;

const ContentBox = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentButton = styled.div`
  float: right;
`;
