import React from "react";

class Catalogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [
        { nome: "Maça", descricao: "maça gala", valor: 5.0 },
        { nome: "Banana", descricao: "banana caturra", valor: 6.5 },
        { nome: "Mamão", descricao: "Mamão papaia", valor: 4.3 },
        { nome: "Limão", descricao: "limão ciciliano", valor: 2.6 },
        { nome: "Laranja", descricao: "laranja-do-céu", valor: 3.0 },
      ],
    };
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <div className="row">
        {this.state.produtos.map((p) => (
          <div className="col-sm-3">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                Adicionar à cesta
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Catalogo;
