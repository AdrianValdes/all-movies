import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import styled from 'styled-components';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { AddReviewButton, IMAGE_BASE_URL_LOW } from '../../../app/shared';
import { ReviewContainer, Release, Author, Article } from './ReviewSection';

const Review = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 60px;
  width: 100%;
  background-color: rgb(213, 234, 238);
`;

const Img = styled.img`
  width: 100px;
  border-radius: 10px;
  margin-right: 20px;
`;

const TitleWrapper = styled.div`
  align-self: center;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 5px;
`;

const BackToMain = styled.a`
  font-size: 20px;
  font-weight: 600;
  color: black;
  cursor: pointer;
  &:hover {
    color: #1cb8da;
  }
`;

const ReviewMain = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  align-self: flex-end;
`;

export const ReviewRoute = ({ location }) => {
  const { reviews, release_date, title, poster_path } = location.state;
  const history = useHistory();

  return (
    <Review>
      <ReviewBar>
        <Img src={`${IMAGE_BASE_URL_LOW}${poster_path}`} alt={title} />
        <TitleWrapper>
          <Title>
            {title} ({new Date(release_date).getFullYear()})
          </Title>
          <BackToMain type='button' onClick={() => history.goBack()}>
            Go Back
            <RiArrowGoBackFill />
          </BackToMain>
        </TitleWrapper>
      </ReviewBar>
      <ReviewMain>
        <Link
          to={{
            pathname: '/addReview',
            state: { release_date, title, poster_path },
          }}
        >
          <AddReviewButton type='button'>
            <BsPencil className='edit-icon' />
            Write Review
          </AddReviewButton>
        </Link>
        <ReviewWrapper>
          {reviews.map((review) => (
            <ReviewContainer key={review.id}>
              <h3>A review by {review.author}</h3>
              <Release>
                Written by <Author>{review.author}</Author> on{' '}
                {new Date(review.created_at).toDateString().slice(4)}{' '}
              </Release>
              <Article>{review.content}</Article>
            </ReviewContainer>
          ))}
        </ReviewWrapper>
      </ReviewMain>
    </Review>
  );
};
