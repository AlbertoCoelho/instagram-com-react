import styled from 'styled-components';
import Input from './Input';
import ContainerIcones from './Icones';
import InstagramLogo from '.././assets/img/logo.png';


const Header = () => {
  return (
  <>
    <Navbar>
      <Container>
        <Logo>
          <ion-icon name="logo-instagram"></ion-icon>
          <Separador />
          <img src={InstagramLogo} alt="logo" />
        </Logo>
        <LogoMobile>
          <ion-icon name="logo-instagram"></ion-icon>
        </LogoMobile>
        <InstagramMobile>
        <img src={InstagramLogo} alt="logo" />
        </InstagramMobile>
        <Input type="text" placeholder="Pesquisar" />
        <ContainerIcones />  
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
`

const Logo = styled.div`
  img {
    position: relative;
    top: 3px;
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
`

const InstagramMobile = styled.div`
  display: none !important;
`
const IconesMobile = styled.div`
  display: none;
`
export default Header;