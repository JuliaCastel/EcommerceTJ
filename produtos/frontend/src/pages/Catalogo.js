import $ from "jquery";
import React from "react";
import CardProduto from "../components/CardProduto";

class Catalogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [
        { nome: "Maça", descricao: "maça gala", preco: 5.0 },
        { nome: "Banana", descricao: "banana caturra", preco: 6.5 },
        { nome: "Mamão", descricao: "Mamão papaia", preco: 4.3 },
        { nome: "Limão", descricao: "limão ciciliano", preco: 2.6 },
        { nome: "Laranja", descricao: "laranja-do-céu", preco: 3.0 },
      ],
    };
  }

  componentDidMount() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    var self = this;
    $.ajax({
      url: "http://localhost:8080/api/produtos",
      method: "GET",
      success: function (response) {
        self.setState({ produtos: response });
      },
      error: function (xhr, status, error) {
        console.error(status, error);
      }
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.produtos.map((p) => (
          <div className="col-sm-3 mt-1">
            <CardProduto produto={p} />
          </div>
        ))}
      </div>
    );
  }
}

export default Catalogo;
