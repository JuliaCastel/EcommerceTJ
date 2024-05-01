package com.example.backend;

import com.example.backend.model.Produto;
import com.example.backend.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private ProdutoService produtoService;

    @Override
    public void run(String... args) throws Exception {
        Produto produto = new Produto();
        produto.setTitle("iPhone");
        produto.setPrice(1200D);
        produto.setQuantity(99);
        produtoService.save(produto);

        Produto produto2 = new Produto();
        produto2.setTitle("Blackberry");
        produto2.setPrice(1100D);
        produto2.setQuantity(55);
        produtoService.save(produto2);
    }
}
