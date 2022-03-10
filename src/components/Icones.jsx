import styled from 'styled-components';

const Icones = () => {
  const ionicons = [
    {nome: "paper-plane-outline"},
    {nome: "compass-outline"},
    {nome: "heart-outline"},
    {nome: "person-outline"}
  ];

  return (
    <ContainerIcones>
      {
        ionicons.map( (item) => (
          <ion-icon key={item.nome} name={item.nome}></ion-icon>
        ) )
      }
    </ContainerIcones>
  );
}

const ContainerIcones = styled.div`
  ion-icon{
    margin: 0 5px;
  }
`

export default Icones;