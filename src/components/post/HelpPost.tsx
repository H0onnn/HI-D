import React from 'react';
import styled from 'styled-components';
import { PostDetail } from '../../types/post';

export default function HelpPost({ post }: { post: PostDetail }) {
  return (
    <HelpPostLayout>
      <div style={{ display: 'flex' }}>
        <div>{post.title}</div>
        <div>{post.createAt}</div>
      </div>
      <div>
        <div>{post.content}</div>
        <div>
          <ImgBox>
            {post.images.map((img, index) => (
              <img src={img} alt='img' key={index} />
            ))}
          </ImgBox>
          <div style={{ display: 'flex' }}>
            <div>{post.viewCount}</div>
            <div>{post.replyCount}</div>
            <div>{post.recommendCount}</div>
          </div>
        </div>
      </div>
    </HelpPostLayout>
  );
}

const HelpPostLayout = styled.div`
  width: 100%;
  padding: 1.2rem 1.6rem;

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: #fff;
`;
const ImgBox = styled.div`
  display: flex;

  > img {
    width: 24px;
    height: 24px;
  }
`;
