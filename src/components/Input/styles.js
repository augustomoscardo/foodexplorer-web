import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_400};
  }

  > input {
    background-color: ${({ theme }) => theme.colors.darkBlue_800};
    color: ${({ theme }) => theme.colors.gray_100};
    
    height: 4.8rem;

    padding: 1.2rem 1.4rem;
    border: none;
    border-radius: 0.5rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.gray_100};
    }
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;

    -moz-appearance: textfield;
  }
`
