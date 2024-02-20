import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.colors.gray_600};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.gray_500}` : "none"};
  border-radius: 0.8rem;


  padding: 1rem 1.6rem;
  height: 3.2rem;
  > input {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray_100};

    width: 100%;
    max-width: 12rem;
  }

  > button {
    border: none;
    background: none;

    > svg {
      color: ${({ theme, isNew }) => isNew ? theme.colors.gray_500 : theme.colors.gray_100};
    }
  }

  .button-delete {}

  .button-add {}
`