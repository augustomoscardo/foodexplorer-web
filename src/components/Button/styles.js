import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  padding: 1.2rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.colors.red_100};
  color: ${({ theme }) => theme.colors.gray_100};

  border: 0;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red_200};

    transition: background-color 0.2s;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.red_400};
  }
`