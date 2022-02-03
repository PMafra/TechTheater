/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function Movie({ id, image, title }) {
  return (
    <MovieBox key={id}>
      <img src={image} alt="" />
      <h2>{title}</h2>
    </MovieBox>
  );
}

const MovieBox = styled.li`
  color: #ffffff;
  height: 200px;
  width: 150px;
  position: relative;
  background-color: #fff;
  img {
    width: 150px;
    height: auto; 
    opacity: 0.8;
  }
  h2 {
    font-size: 18px;
    position: absolute;
    top: 5px;
    left: 5px;
  }
  div {
    width: 150px;
    height: 200px;
    background-color: red;
  }
`;
