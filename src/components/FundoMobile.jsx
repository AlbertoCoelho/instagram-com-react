import styled from "styled-components";

const FundoMobile = () => {
  return (
    <Fundo>
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </Fundo>
  );
}

const Fundo = styled.div`
  display: none;

  ion-icon {
    cursor: pointer;
  }
`

export default FundoMobile;