package com.example.backend.service;

import com.example.backend.model.Produto;

import java.util.List;

public interface ProdutoService {

    Produto save(Produto produto);

    Produto updateById(Long id, Produto produto);

    List<Produto> findAll();

    Produto findById(Long id);

    void deleteById(Long id);
}
