import styled from "styled-components";

const Seguidores = (props) => {
  return (
    <ContainerSeguidores>
      <div class="usuario">
        <img src={`assets/img/${props.seguidor}.svg`} alt="seguidor" />
        <div class="texto">
          <div class="nome">{props.seguidor}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>
      <div class="seguir">{props.seguir}</div>
    </ContainerSeguidores>
  );
}

const ContainerSeguidores = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 31px;
  margin-bottom: 16px;

  .usuario {
   display: flex;
  }

  .usuario .texto {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .usuario .texto :last-child {
    color: #8E8E8E;
    font-weight: 400;
  }
`

export default Seguidores;