const Usuario = (props) => {
  return (
    <div className="usuario">
      <img src={`assets/img/${props.nomeusuario}.svg`} alt="imagemusuario" />
      <div className="texto">
        <strong>{props.nomeusuario}</strong>
        <p>Catana</p>
      </div>
    </div>
  );
}

export default Usuario;