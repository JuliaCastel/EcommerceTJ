package com.example.backend.controller;

import com.example.backend.model.Pedido;
import com.example.backend.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author tulio
 */
@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public Pedido save(@RequestBody Pedido pedido) {
        return pedidoService.save(pedido);
    }

    @PutMapping("/{id}")
    public Pedido update(@PathVariable Long id, @RequestBody Pedido pedido) {
        return pedidoService.updateById(id, pedido);
    }

    @GetMapping
    public List<Pedido> findAll() {
        return pedidoService.findAll();
    }

    @GetMapping("/{id}")
    public Pedido findById(@PathVariable Long id) {
        return pedidoService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        pedidoService.deleteById(id);
    }
}
