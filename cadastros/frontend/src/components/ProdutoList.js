import React, {useContext, useEffect} from 'react';
import ProdutoTableRow from "./ProdutoTableRow";
import { ProdutoContext } from "../context/ProdutoContext";
import { getProdutos } from "../services/ApiService"
import {NavLink} from "react-router-dom";

export default function ProdutoList() {

  const { produtos, updateProdutos } = useContext(ProdutoContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const produtos = await getProdutos();
        updateProdutos(produtos);
      } catch (error) {
        console.error('Error fetching produtos:', error);
      }
    }

    fetchData();
  }, []);

  return(
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Produtos</NavLink>
          </li>
        </ol>
      </nav>
      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Ações</th>
        </tr>
        </thead>
        <tbody>
        {produtos.map(produto => <ProdutoTableRow key={produto.id} {...produto} />)}
        </tbody>
      </table>
      <div>
        <NavLink className="btn btn-primary" to="/new">Adicionar</NavLink>
      </div>
    </div>

  );

}