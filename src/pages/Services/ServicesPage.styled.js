import styled from "styled-components";

export const ServicesContainer = styled.div`
  
  display: flex;
  
  justify-items: center;
  flex-direction: column;
  gap: 28px;
  padding: 0 20px;
  overflow: hidden;
  /* max-width: 1440px; */
margin-top: 52px;

`;
export const CardsWraper = styled.div`
display: grid;
justify-items: center;
grid-template-columns: repeat(2, 1fr);
gap: 20px;

`

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 124px;
height: 180px;
padding: 12px;
gap: 28px;
border-radius: 24px;
border: 1px solid var(--Blue-main, #8CD4FA);
background: #EBF5FA;
align-self: stretch;
justify-content: space-between;
`

export const IMG_Wrapper = styled.div`

  `