import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.gradient_200};

  height: 26rem;
  max-width: 112rem;
  margin: 0 auto 6.2rem;

  border-radius: 0.8rem;

  position: relative;

  > img {
    position: absolute;
    bottom: 0rem;
    left: -5.5rem;
  }

  > div {
    align-content: flex-end;
    text-align: center;

    padding: 8.7rem 10rem 9.3rem;

    > h1 {
      font-size: 4rem;
      font-weight: 400;
    }

    > p {
      font-family: 'Roboto', sans-serif;
    }
  }
`