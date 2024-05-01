package com.example.backend.service.impl;

import com.example.backend.model.Pedido;
import com.example.backend.repository.PedidoRepository;
import com.example.backend.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 * @author tulio
 */
@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Override
    public Pedido save(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public Pedido updateById(Long id, Pedido pedido) {

        Pedido managedPedido = this.findById(id);
//        managedPedido.setNome(pedido.getNome());
//        managedPedido.setQuantidade(pedido.getQuantidade());
//        managedPedido.setPreco(pedido.getPreco());

        return this.save(managedPedido);
    }

    @Override
    public List<Pedido> findAll() {
        return pedidoRepository.findAll();
    }

    @Override
    public Pedido findById(Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        pedidoRepository.deleteById(id);
    }
}
