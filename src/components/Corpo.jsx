import styled from "styled-components";
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";


const Corpo = () => {
  return (
    <ContainerCorpo>
      <Esquerda>
        <Stories />
        <Posts />
      </Esquerda>
      <Sidebar />
    </ContainerCorpo>
  );
}

export default Corpo;

const ContainerCorpo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 935px;
  margin: 0 auto;
  margin-top: 88px;

  @media (max-width:935px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width:614px) {
    margin-top: 0;
  }
`
const Esquerda = styled.div`
  width: 100%;
  max-width: 614px;
`