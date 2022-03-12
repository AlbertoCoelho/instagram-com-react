import styled from 'styled-components';
import Input from './Input';
import Icones from './Icones';


//Possa ser que tenha que refatorar como o Navbar está organizado no styled components pra fazer o responsivo
const Header = () => {
  return (
  <>
    <Navbar>
      <Container>
        <Logo>
          <ion-icon name="logo-instagram"></ion-icon>
          <Separador />
          <img src=".././assets/img/logo.png" alt="logo" />
        </Logo>
        <LogoMobile>
          <ion-icon name="logo-instagram"></ion-icon>
        </LogoMobile>
        <InstagramMobile>
          <img src=".././assets/img/logo.png" alt="logo" />
        </InstagramMobile>
        <div className="pesquisa">
          <Input type="text" placeholder="Pesquisar" />
        </div>
        <Icones />  
        <IconesMobile>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </IconesMobile>
      </Container>
    </Navbar>
  </>
  );
}

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 54px;
  border-bottom: 1px solid #DBDBDB;
  font-size: 22px;
  background-color: #FFF;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  ion-icon, img {
    cursor: pointer;
  }

  @media (max-width: 614px) {
    .pesquisa {
      display: none;
    }
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 935px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  
  > * {
    display: flex;
    align-items: center;
  }
  
  @media (max-width:935px) {
    padding: 0 20px;
  }

  @media (max-width:614px){
    > * {
      display: none;
    }
  }
  `

const Logo = styled.div`
  img {
    position: relative;
    top: 3px;
  }

  @media (max-width: 614px) {
    display: none;
  }
`

const Separador = styled.div`
  width: 1px;
  height: 22px;
  background-color: #DBDBDB;
  margin: 0 10px;
`

const LogoMobile = styled.div`
  display: none !important;

  @media (max-width: 614px) {
    display: flex !important;
  }
`

const InstagramMobile = styled.div`
  display: none !important;

  @media (max-width: 614px) {
    position: relative;
    top: 4px;
    display: flex !important;
  }
`
const IconesMobile = styled.div`
  display: none;

  @media (max-width: 614px) {
    display: flex;
  }
`
export default Header;