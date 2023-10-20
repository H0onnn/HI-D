import React from 'react';
import styled from 'styled-components';

interface AuthorProfileImageInterface {
  src: string;
}

const AuthorProfileImage = ({ src }: AuthorProfileImageInterface) => {
  return (
    <AuthorProfileImageLayout>
      <img src={src} alt='post_author_image' />
    </AuthorProfileImageLayout>
  );
};

export default AuthorProfileImage;

const AuthorProfileImageLayout = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
