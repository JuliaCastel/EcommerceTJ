package com.example.backend.service.impl;

import com.example.backend.model.Produto;
import com.example.backend.repository.ProdutoRepository;
import com.example.backend.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public Produto updateById(Long id, Produto produto) {

        Produto managedProduto = this.findById(id);
        managedProduto.setNome(produto.getNome());
        managedProduto.setQuantidade(produto.getQuantidade());
        managedProduto.setPreco(produto.getPreco());

        return this.save(managedProduto);
    }

    @Override
    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    @Override
    public Produto findById(Long id) {
        return produtoRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        produtoRepository.deleteById(id);
    }

}
