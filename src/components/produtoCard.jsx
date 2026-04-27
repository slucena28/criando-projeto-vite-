function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div style={styles.card}>
      <img src={imagem} alt={nome} style={styles.img} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "10px",
    width: "200px"
  },
  img: {
    width: "100%",
    borderRadius: "8px"
  }
};

export default ProdutoCard;
