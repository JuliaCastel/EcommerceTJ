import $ from "jquery";
import React from "react";
import CardProduto from "../components/CardProduto";
import Utils from "../components/Utils";

class Cesta extends React.Component {
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

    renderQuadroProduto(p) {
        return (
            <div class="card">
                <img src={p.imagem} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{p.nome}</h5>
                    <span style={{ fontSize: 24 }}><strong>{Utils.formatarMoeda(p.preco)}</strong></span>
                    <p class="card-text">
                        {p.descricao}
                    </p>
                    <a href="#" class="btn btn-primary">
                        Adicionar à cesta
                    </a>
                </div>
            </div>
        )
    }

    renderTotal() {
        let total = 0;
        this.state.produtos.forEach(p => {
            total += p.subtotal ? p.subtotal : 0.0;
        })
        return (<div className="col-sm-12 fs-2 text-end mt-15">{Utils.formatarMoeda(total)}</div>)
    }

    render() {
        return (
            <div className="row">
                {this.state.produtos.map((p) => (
                    <div className="col-sm-12 mt-2">
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-sm-1">
                                    <img src={p.imagem} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4">
                                    <div class="card-body">
                                        <h5 class="card-title">{p.nome}</h5>
                                        <p class="card-text">
                                            {p.descricao}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-2 d-flex align-items-center">
                                    <span style={{ fontSize: 16 }}>Qtd.: {p.quatidade}</span>
                                </div>
                                <div class="col-md-3 d-flex align-items-center">
                                    <span style={{ fontSize: 16 }}>preço Un.: {Utils.formatarMoeda(p.preco)}</span>
                                </div>
                                <div class="col-md-2 d-flex align-items-center">
                                    <span style={{ fontSize: 24 }}><strong>{Utils.formatarMoeda(p.subtotal)}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {this.renderTotal()}
                <a href="/compraSucesso" class="btn btn-success mt-20">
                    <i class="fas fa-check" /> Finalizar Compra
                </a>
            </div>
        );
    }
}

export default Cesta;
