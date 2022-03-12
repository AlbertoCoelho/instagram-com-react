import styled from "styled-components";
import Usuario from "./Usuario";
import Seguidores from "./Seguidores";

const Sidebar = () => {
  const sugestoes = [
    { seguidor: "bad.vibes.memes" , razao: "Segue você" , seguir: "Seguir" },
    { seguidor: "chibirdart" , razao: "Segue você" , seguir: "Seguir" },
    { seguidor: "razoesparaacreditar" , razao: "Novo no Instagram" , seguir: "Seguir" },
    { seguidor: "adorable_animals", razao: "Segue você" , seguir: "Seguir" },
    { seguidor: "smallcutecats", razao: "Segue você" , seguir: "Seguir" }
  ];

  const usuario = {nome: "catanacomics" };

  return (
    <ContainerSideBar>
      <Usuario nomeusuario={usuario.nome} />
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {
          sugestoes.map( (item) => (
            <Seguidores key={item.seguidor} seguidor={item.seguidor}
                      razao={item.razao} seguir={item.seguir} />
          ))
        }
      </div>
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </ContainerSideBar>
  );
}

const ContainerSideBar = styled.div`
  padding-top: 24px;
  position: sticky;
  top: 88px;
  width: 293px;

  > .usuario {
    display: flex;
    align-items: center;
  }

  > .usuario img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > .usuario .texto {
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    font-weight: 300;
    color: #8E8E8E;
  }

  > .usuario .texto strong {
    font-weight: 500;
    color: #262626;
  }

  .sugestoes .titulo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 14px;
  }

  .sugestoes img {
    width: 32px;
    height: 32px;
  }

  .sugestoes .seguir {
    color: #139EF2;
    font-weight: 600;
  }

  .links, .copyright {
  font-size: 11px;
  color: #C7C7C7;
} 

  .links {
    margin-top: 40px;
    cursor: pointer;
  }

  .copyright {
    margin-top: 18px;
  }

  @media (max-width:935px) {
    display: none;
  }
`

export default Sidebar;