import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __deletePosts, __getPosts } from "../../redux/modules/posts";
import CommentList from "../comment/CommentList";
import EditButton from "./EditButton";

function MainList() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log("posts", posts);

  const onDelete = (postId) => {
    dispatch(__deletePosts(postId));
  };

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <MainContent>
      {posts?.map((post) => (
        <div key={post.postId}>
          <MainFeedContainer>
            <MainTopBox>
              <Contenttitle>{post.title}</Contenttitle>
              <span style={{ float: "right" }}>{post.createdAt.toDateString()}</span>
            </MainTopBox>
            <FeedsBox>
              <ContentButton>
                {/* <button>수정</button> */}
                <button onClick={onDelete(post.postId)}>삭제</button>
              </ContentButton>
              <ContentBox>
                {post.content}
                <EditButton post={post} />
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
