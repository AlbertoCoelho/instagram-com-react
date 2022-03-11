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
`
const Esquerda = styled.div`
  width: 100%;
  max-width: 614px;
`