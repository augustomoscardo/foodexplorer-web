import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem !important;
  align-items: flex-start;

  > label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_400};
  }

  > textarea {
    width: 100%;
    height: 17.2rem;

    background-color: ${({ theme }) => theme.colors.darkBlue_900};
    color: ${({ theme }) => theme.colors.gray_100};

    border: none;
    border-radius: 0.8rem;
    resize: none;
    padding: 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.gray_100};
    }
  }
`