import React, { useEffect, useState } from 'react';
import { Post } from '../../types/post';
import PopularPost from './PopularPost';
import styled from 'styled-components';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  dotsClass: 'dots_custom',
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
};
const PopularPostList = ({ postList }: { postList: Post[] }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(1);
  }, [idx]);
  return (
    <Layout>
      <Slider {...settings}>
        {postList.map((post, idx) => (
          <PopularPost post={post} key={idx} />
        ))}
      </Slider>
    </Layout>
  );
};

export default PopularPostList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  .slick-slider {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 33.8rem 3.5rem 33.8rem;
    position: static;
  }
  .slick-list {
    margin: 0 -33.8rem;
  }
  .slick-slide.slick-cloned {
    opacity: 0;
    pointer-events: none;
  }
  .dots_custom {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
  }
  .dots_custom li {
    display: inline-block;
    margin: 0 0.3rem;
  }
  .dots_custom li button {
    width: 0.6rem;
    height: 0.6rem;
    border: none;
    background: var(--3, #d3d8ff);
    color: transparent;
    cursor: pointer;
    border-radius: 100%;
    padding: 0;
  }
  .dots_custom li.slick-active button {
    width: 2.8rem;
    border-radius: 0.8rem;
    background: var(--1, #5061ff);
  }
`;
