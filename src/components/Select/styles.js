import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem; 

  > label {}

  > select {
    background-color: ${({ theme }) => theme.colors.darkBlue_800};
    color: ${({ theme }) => theme.colors.gray_100};

    height: 4.8rem;
    border: none;
    border-radius: 0.5rem;

    padding: 1.2rem 1.4rem;

    > option {
      padding: 1rem;
    }
  }
`