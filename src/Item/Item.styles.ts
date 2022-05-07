import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: 'Roboto', sans-serif;
    padding: 1rem;
    height: 100%;
    text-align: center;
    h3 {
      text-align: left;
      padding-left: 3rem;
    }
  }
`;
