import { NavLink } from "react-router-dom";
import {deleteProdutoById} from "../services/ApiService";
import {useContext} from 'react';
import {ProdutoContext} from "../context/ProdutoContext";

export default function ProdutoTableRow ({id, nome, preco, quantidade}) {

  const {removeProdutoById} = useContext(ProdutoContext);

  async function deleteProduto() {
    try {
      await deleteProdutoById(id);
      removeProdutoById(id);

    } catch (error) {
      console.error('Error fetching produtos:', error);
    }
  }

  return(
    <tr>
      <th scope="row">{id}</th>
      <td>{nome}</td>
      <td>{preco}</td>
      <td>{quantidade}</td>
      <td>
        <div className="btn-group">
          <NavLink className="btn btn-info" to={`/${id}`}>View</NavLink>
          <NavLink className="btn btn-light" to={`/${id}/edit`}>Edit</NavLink>
          <button onClick={deleteProduto} className="btn btn-danger">Delete</button>
        </div>
      </td>
    </tr>
  );
}