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

  margin-top: 2.4rem;

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

  > h3 {
    text-align: center;
    font-size: 2.4rem;
    line-height: 1.4;
    font-weight: bold;

    padding-inline: 2.4rem;
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