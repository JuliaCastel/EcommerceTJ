import React from "react";
import Utils from "../components/Utils";

const _PEDIDO = "PEDIDO_ECOMMERCETJ"

class CardProduto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    criarPedido() {
        var self = this;     
    }

    addProdutoPedido() {
        let pedido = localStorage.getItem(_PEDIDO);
        if (pedido) {

        }
    }

    render() {
        let p = this.props.produto;
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
        );
    }
}

export default CardProduto;
