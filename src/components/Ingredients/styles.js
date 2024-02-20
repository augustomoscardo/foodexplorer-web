import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  > div {
    background-color: ${({ theme }) => theme.colors.darkBlue_800};

    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;

    padding: 0.8rem;
    border-radius: 0.8rem;

    width: 100%;
  }

  > label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_400};
  }

  
`