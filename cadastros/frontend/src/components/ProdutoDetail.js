import React, {useEffect, useContext} from "react";
import {NavLink, useParams, useNavigate} from "react-router-dom";
import {deleteProdutoById, getProdutoById} from "../services/ApiService";
import {ProdutoContext} from "../context/ProdutoContext";

export default function ProdutoDetail() {

  const { id } = useParams();
  const { produto, updateProduto, removeProdutoById } = useContext(ProdutoContext);
  const navigate = useNavigate();

  useEffect(() => {

    async function fetchData() {
      try {
        const produto = await getProdutoById(id);
        updateProduto(produto);
      } catch (error) {
        console.error('Error fetching produtos:', error);
      }
    }

    fetchData();
  }, []);

  async function deleteProduto() {
    try {
      await deleteProdutoById(id);
      removeProdutoById(id);
      navigate("/");
    } catch (error) {
      console.error('Error fetching produtos:', error);
    }
  }

  return(
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Produtos</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink active to={`/${id}`}>{id}</NavLink>
          </li>
        </ol>
      </nav>
      <h4 className="text-center mb-5 mt-5">Produto Info: {id}</h4>
      <table className="table">
        <tbody>
        <tr>
          <th scope="row">Nome</th>
          <td>{produto.nome}</td>
        </tr>
        <tr>
          <th scope="row">Preço</th>
          <td>{produto.preco}</td>
        </tr>
        <tr>
          <th scope="row">Quantidade</th>
          <td>{produto.quantidade}</td>
        </tr>
        </tbody>
      </table>
      <div>
        <div className="row">
          <div className="col-6">
            <NavLink className="btn btn-light" to={`/${id}/edit`}>Editar</NavLink>
          </div>
          <div className="col-6 text-end">
            <button onClick={deleteProduto} className="btn btn-danger pull-right">Remover</button>
          </div>
        </div>
      </div>
    </div>
  );

}