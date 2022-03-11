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

  @media (max-width: 614px) {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    background-color: #FFF;
    border-top: 1px solid #DBDBDB;
    height: 54px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`

export default FundoMobile;