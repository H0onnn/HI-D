import React from 'react';
import styled from 'styled-components';
import { Post } from '../../types/post';
import BoldContent from '../../utils/BoldContent';
import { getContentSnippet } from '../../utils/post';

type Props = {
  post: Post;
  keyword?: string;
};
const FreePost = ({ post, keyword }: Props) => {
  const contentSnippet = getContentSnippet(post.content, keyword);

  return (
    <FreePostLayout>
      <div style={{ display: 'flex' }}>
        <div>{post.writer}</div>
        <div>{post.createAt}</div>
      </div>
      <div>
        <div>{keyword ? <BoldContent keyword={keyword} content={post.title} /> : post.title}</div>
        <div>
          {keyword ? <BoldContent keyword={keyword} content={contentSnippet} /> : contentSnippet}
        </div>
        <div style={{ display: 'flex' }}>
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
    </FreePostLayout>
  );
};
export default FreePost;

const FreePostLayout = styled.div`
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
