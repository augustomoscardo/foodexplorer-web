import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem; 

  > label {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.gray_400};
  }

  select {
    background-color: ${({ theme }) => theme.colors.darkBlue_800};
    color: ${({ theme }) => theme.colors.gray_100};

    font-size: 1.4rem;

    height: 4.8rem;
    border: none;
    border-radius: 0.5rem;

    padding: 1.2rem 1.4rem;
    
    appearance: none;
    background-image: url('/src/assets/arrow-down.svg');
    background-repeat: no-repeat;
    background-position: right 0.8rem top 50%;
    background-size: 2.4rem;

    > option {
      
    }
  }
`