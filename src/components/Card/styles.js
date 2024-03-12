import styled from "styled-components";

export const Container = styled.div`
  height: 46.2rem;
  width: 30rem;

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.colors.darkBlue_200};

  position: relative;

  

  > button {
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.colors.gray_300};

    &:hover {
      color: ${({ theme }) => theme.colors.gray_200};

      transition: color 0.2s;
    }
  }

  > img {
    width: 17.6rem;
    height: 17.6rem;

    object-fit: cover;

    transition: scale 0.2s;

    &:hover {
      scale: 1.1;
    }
  }

  > a {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray_300};
    text-decoration: none;
    font-size: 2.4rem;
    line-height: 1.4;
    font-weight: bold;

    padding-inline: 2.4rem;

    &:hover {
      text-decoration: underline;
    }
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.6;
    text-align: center;
    padding-inline: 2.4rem;

  }

  > span {
    color: ${({ theme }) => theme.colors.blue_200};
    font-size: 3.2rem;
    line-height: 1.6;
  }
`

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    > button {
      background: none;
      color: ${({ theme }) => theme.colors.gray_100};
      border: none;
    }

    > span {
      color: ${({ theme }) => theme.colors.gray_100};
      font-size: 2rem;
      font-family: "Roboto", sans-serif;
    }
  }

  > button {
    color: ${({ theme }) => theme.colors.gray_100};
    background-color: ${({ theme }) => theme.colors.red_100};
    border: none;
    border-radius: 0.5rem;

    padding: 1.2rem 2.4rem;

    font-size: 1.4rem;
    line-height: 2.4;
  }

`