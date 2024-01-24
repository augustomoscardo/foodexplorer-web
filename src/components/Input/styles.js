import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_400};
  }

  > input {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray_100};

    padding: 1.2rem 1.4rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_100};
    border-radius: 0.5rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_500};
    }
  }
`
