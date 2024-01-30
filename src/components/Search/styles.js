import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  padding: 1.2rem 1.4rem;
  height: 4.8rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.darkBlue_900};

  > svg {}

  > input {
    width: 34rem;
    /* flex: 1; */
    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.gray_100};
  }
`