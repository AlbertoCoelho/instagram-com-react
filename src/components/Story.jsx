import styled from "styled-components";

const Story = (props) => {
  return (
    <ContainerStory>
      <Imagem>
        <img src={`assets/img/${props.nome}.svg`} alt="story" />
      </Imagem>
      <div className="usuario">
        {props.nome}
      </div>
    </ContainerStory>
  );
}

const ContainerStory = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 14px 0;
  font-size: 12px;
  cursor: pointer;
  margin-right: 10px;

  .usuario {
    width: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    height: 14px;
  }
`

const Imagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  width: 66px;
  background-image: url('../assets/img/story-circle.svg');

  img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`

export default Story;