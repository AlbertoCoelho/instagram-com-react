import styled from "styled-components";
import Story from "./Story";

const Stories = () => {
  const stories = [
    { nome: "9gag" },
    { nome: "meowed" },
    { nome: "barked" },
    { nome: "nathanwpylestrangeplanet" },
    { nome: "wawawicomics" },
    { nome: "respondeai" },
    { nome: "filomoderna" },
    { nome: "memeriagourmet" }
  ];

  return (
    <ContainerStories>
      {
        stories.map( (item) => (
          <Story key={item.nome} nome={item.nome} />
        ))
      }
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </ContainerStories>
  );
}

const ContainerStories = styled.div`
  display: flex;
  align-items: center;
  height: 118px;
  border-radius: 3px;
  border: 1px solid #DBDBDB;
  padding: 0 18px;
  overflow: hidden;
  position: relative;

  .setinha{
    position: absolute;
    right: 10px;
    top: 45px;
    height: 32px;
    width: 32px;
    color: #FFF;
    font-size: 28px;
    cursor: pointer;
  }

  @media (max-width: 614px) {
    background-color: transparent;
    border: none;
    width: 100%;
  }
`

export default Stories;