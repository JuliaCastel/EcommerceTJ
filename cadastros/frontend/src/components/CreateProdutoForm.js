import React, { useContext, useRef } from "react";
import { createProduto } from "../services/ApiService";
import { useNavigate } from 'react-router-dom';
import { ProdutoContext } from "../context/ProdutoContext";

export default function CreateProdutoForm() {

  const navigate = useNavigate();
  const nomeRef = useRef();
  const precoRef = useRef();
  const quantidadeRef = useRef();
  const imagemRef = useRef();

  const { addProduto } = useContext(ProdutoContext);

  async function add(target) {
    target.preventDefault();

    try {
      const newProduto = {
        nome: nomeRef.current.value,
        preco: precoRef.current.value,
        imagem: imagemRef.current.value,
        quantidade: quantidadeRef.current.value
      };

      console.log(newProduto)

      const response = await createProduto(newProduto);
      console.log(response)
      addProduto(response);
      navigate(`/${response.id}`);

    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <form>
      <div className="mb-3 mt-5">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input ref={nomeRef} type="text" className="form-control" id="nome" aria-describedby="nomeHelp" />
        <div id="nomeHelp" className="form-text">Informe o nome do produto aqui</div>
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-6">
            <label htmlFor="preco" className="form-label">Preço</label>
            <input ref={precoRef} type="number" className="form-control" id="preco" />
          </div>
          <div className="col-6">
            <label htmlFor="quantidade" className="form-label">Quantidade</label>
            <input ref={quantidadeRef} type="number" className="form-control" id="quantidade" />
          </div>
          <div className="col-6">
            <label htmlFor="imagem" className="form-label">imagem</label>
            <input ref={imagemRef} type="form-text" className="form-control" id="imagem" />
          </div>
        </div>

      </div>
      <button onClick={add} type="submit" className="btn btn-primary">Add</button>
    </form>
  );

}