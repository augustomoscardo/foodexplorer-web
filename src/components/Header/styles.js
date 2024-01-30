import styled from "styled-components";

export const Container = styled.header`
  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.colors.darkBlue_600};

  > button {
    max-width: 21.6rem;
  }

  .signOutButton {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray_100};
  }
`

export const Logo = styled.button`
  background: none;
  border: 0;
  width: 20rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  > img {
    width: 3rem;
    height: 3rem;
  }

  > h3 {
    white-space: nowrap;
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > span {
    position: absolute;
    right: 0;
    top: 2.2rem;
    height: 2rem;
    font-size: 1.2rem;
    line-height: 1.6;

    color: ${({ theme }) => theme.colors.blue_200};
  }
`