import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: ""
  });

  // Simulação de API
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Livro de Terror",
          preco: 39.9,
          descricao: "História assustadora",
          imagem: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          nome: "Mangá",
          preco: 25.0,
          descricao: "Mangá de horror",
          imagem: "https://via.placeholder.com/150"
        }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  // Atualizar formulário
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  // Enviar formulário
  function handleSubmit(e) {
    e.preventDefault();

    const novoProduto = {
      id: Date.now(),
      ...form,
      imagem: "https://via.placeholder.com/150"
    };

    setProdutos([...produtos, novoProduto]);

    setForm({
      nome: "",
      preco: "",
      descricao: ""
    });
  }

  return (
    <div>
      <h1>📦 Catálogo de Produtos</h1>

      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* LISTAGEM */}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} {...produto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
