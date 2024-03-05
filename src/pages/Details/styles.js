import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  width: 100%;
`

export const Content = styled.div`
  padding: 4rem 12.5rem 11.6rem;

  display: flex;
  flex-direction: column;

  > button {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.4;

    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray_300};

    display: flex;
    align-items: center;

    margin-bottom: 2.5rem;
  }
`

export const DishInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  >img {
    width: 39rem;
    height: 39rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h1 {
      font-size: 4rem;
      font-weight: 500;

      color: ${({ theme }) => theme.colors.gray_300};
    }

    > p {
      color: ${({ theme }) => theme.colors.gray_300};
      font-size: 2.4rem;
      line-height: 1.4;
    }

    > button {
      width: fit-content;

      background-color: ${({ theme }) => theme.colors.red_100};
      color: ${({ theme }) => theme.colors.gray_100};

      border: none;
      border-radius: 0.5rem;

      padding: 1.2rem 2.4rem;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 1.2rem;

  > span {
    background-color: ${({ theme }) => theme.colors.darkBlue_1000};
    color: ${({ theme }) => theme.colors.gray_100};

    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;

    font-size: 1.4rem;
    line-height: 2.4rem;
  }
`