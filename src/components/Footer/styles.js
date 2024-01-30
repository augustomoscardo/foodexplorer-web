import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.darkBlue_600};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 12.3rem;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 3rem;
    height: 3rem;
  }

  > h3 {
    white-space: nowrap;
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.gray_700};
  }
`

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.gray_200};

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
`