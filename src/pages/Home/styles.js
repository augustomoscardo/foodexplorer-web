import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  width: 100%;
`

export const Content = styled.div`
  padding: 17.2rem 12.5rem 4.8rem;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;


  /* SWIPER */
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.gray_100};
    position: absolute;
    z-index: 9999;
  }

`


