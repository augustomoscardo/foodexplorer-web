import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;

  max-width: 1368px;
  width: 100%;
  margin: 0 auto;

  /* display: flex;
  align-items: stretch;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  grid-gap: 30rem;

  padding: 10rem 15rem;
`

export const Logo = styled.div`
  width: 32.4rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  svg {}

  h1 {
    font-size: 4.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
`

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.darkBlue_700};

  width: 47.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  padding: 4.8rem;
  border-radius: 1.6rem;

  > h2 {
    align-self: center;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.4;
  }

  > a {
    align-self: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray_100};
  }
`