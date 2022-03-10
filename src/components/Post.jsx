import styled from "styled-components";

const Post = (props) => {
  return (
    <ContainerPost>
      <div className="topo">
        <div className="usuario">
          <img src={`assets/img/${props.imagemusuario}.svg`} alt="imagemusuario"/>
          {props.imagemusuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        <img src={`assets/img/${props.imagemconteudo}.svg`} alt="imagemconteudo" />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={`assets/img/${props.nomecurtida}.svg`} alt="nomecurtida" />
          <div className="texto">
            Curtido por <strong>{props.nomecurtida}</strong> e <strong>outras {props.qtdcurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </ContainerPost>
  );
}

const ContainerPost = styled.div`
  border-radius: 3px;
  border: 1px solid #DBDBDB;
  display: flex;
  flex-direction: column;
  margin-top: 18px;

  .topo {
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 14px;
    font-weight: 500;
  }

  .topo .usuario, .post .topo .acoes {
    display: flex;
    align-items: center;
  }

  .topo img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  .usuario, .post .topo img, .post .fundo img, .post ion-icon, .post strong {
    cursor: pointer;
  }

  .conteudo img {
    width: 100%;
  }

  .fundo .acoes {
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 24px;
  }

  .fundo .acoes div:first-child ion-icon {
    margin-right: 6px;
  }

  .fundo .curtidas {
    display: flex;
    align-items: center;
    padding: 0 16px 13px;
    font-weight: 300;
  }

  .fundo .curtidas img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:last-child {
    margin-bottom: 18px;
  }
`

export default Post;