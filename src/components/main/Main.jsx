import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function Main() {
  const dispatch = useDispatch();
  const feeds = useSelector((state) => state.feeds.feeds);

  return (
    <div>
      {/* {feeds.map((feed) => {
        <div key={feed.id}>
          <div>
            <div>{feed.content}</div>
          </div>
        </div>;
      })} */}
      <div>
        제일 큰 박스
        <div>
          위쪽 칸<p>이미지</p>
          <p>닉네임</p>
          <p>날짜</p>
        </div>
        <div>
          게시글 칸<p>게시글</p>
          <p>게시글 이미지</p>
        </div>
      </div>
    </div>
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
