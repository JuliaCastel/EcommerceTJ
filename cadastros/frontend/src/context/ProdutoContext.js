import React, { createContext, useState } from 'react';

export const ProdutoContext = createContext();

export const ProdutoListProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState({});

  const updateProdutos = (produtos) => {
    setProdutos(produtos)
  }

  const addProduto = (produto) => {
    setProdutos([... produtos, produto]);
  }

  const updateProduto = (produto) => {
    setProduto(produto);
  }

  const removeProdutoById = (id) => {
    const newProdutos = produtos.filter((produto) => produto.id !== id);
    setProdutos(newProdutos);
  }

  return (
    <ProdutoContext.Provider value={{ produtos, produto, updateProdutos, updateProduto, removeProdutoById, addProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
}