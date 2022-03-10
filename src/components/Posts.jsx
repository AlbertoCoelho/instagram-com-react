import Post from "./Post";

const Posts = () => {

  const posts = [
    { imagemusuario:"meowed", imagemconteudo:"gato-telefone", 
      nomecurtida:"respondeai", qtdcurtida: 101.523 },
    { imagemusuario:"barked", imagemconteudo: "dog", 
      nomecurtida:"adorable_animals", qtdcurtida: 99.159 }
  ]
  return (
    <div className="posts">
      {
        posts.map( (item) => 
          <Post imagemusuario={item.imagemusuario} imagemconteudo={item.imagemconteudo}
                nomecurtida={item.nomecurtida} qtdcurtida={item.qtdcurtida} />
        )
      }
    </div>
  );
}

export default Posts;