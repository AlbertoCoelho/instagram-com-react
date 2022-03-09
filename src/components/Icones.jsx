import styled from 'styled-components';

const ContainerIcones = () => {
  const ionicons = [
    {nome: "paper-plane-outline"},
    {nome: "compass-outline"},
    {nome: "heart-outline"},
    {nome: "person-outline"}
  ];

  return (
    <Icones>
      {
        ionicons.map( (item) => (
          <ion-icon key={item.nome} name={item.nome}></ion-icon>
        ) )
      }
    </Icones>
  );
}

const Icones = styled.div`
  ion-icon{
    margin: 0 5px;
  }
`

export default ContainerIcones;