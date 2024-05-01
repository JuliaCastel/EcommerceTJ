package com.example.backend.service;

import com.example.backend.model.Pedido;

import java.util.List;

public interface PedidoService {

    Pedido save(Pedido produto);

    Pedido updateById(Long id, Pedido produto);

    List<Pedido> findAll();

    Pedido findById(Long id);

    void deleteById(Long id);
}
