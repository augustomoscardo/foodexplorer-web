import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 12.5rem 11.6rem;

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

  > h1 {
    font-weight: 400;
    margin-bottom: 3.2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

    > div {
      display: flex;
      gap: 3.2rem;
      
      input[type="file"] {
        display: none;
      }
    }

    > div.ingredientsAndPrice {
      > div:first-child {
        flex: 3;
      }

      > div:nth-child(2) {
        flex: 1;
      }
    }

    .fileInput {
      width: 100%;

      display: flex;
      gap: 1.6rem;
      flex-direction: column;

      flex-wrap: nowrap;

      > span {
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.colors.gray_400};
      }

      > label {
        background-color: ${({ theme }) => theme.colors.darkBlue_800};
        color: ${({ theme }) => theme.colors.gray_100};
        font-size: 1.4rem;
        height: 4.8rem;
        padding: 1.2rem 3.2rem;

        border: none;
        border-radius: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        cursor: pointer;
      }

      
    }

  

  > button {
    width: 17.2rem;
    margin-top: 3.2rem;

    font-size: 1.4rem;

    padding: 1.2rem 2.4rem;

    align-self: flex-end;
  }

  .imagePreview {
    position: relative;
    width: 15rem;
    height: 15rem;

    img {
      width: 10rem;
      height: 10rem;

      object-fit: cover;

      border-radius: 0.8rem;
    }

    button {
      position: absolute;
      background: none;
      border: none;

      /* left: 8rem; */
      right: 4rem;

      color: ${({ theme }) => theme.colors.gray_300};
    }
  }
  
`

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`