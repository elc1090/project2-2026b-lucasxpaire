package com.blockly.backend.controller;

import com.blockly.backend.dto.EstatisticaDTO;
import com.blockly.backend.model.Estatistica;
import com.blockly.backend.service.EstatisticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estatisticas")
@CrossOrigin(origins = "*")
public class EstatisticaController {

    @Autowired
    private EstatisticaService service;

    @PostMapping
    public ResponseEntity<Estatistica> salvar(@RequestBody EstatisticaDTO dto) {
        Estatistica novaEstatistica = service.salvarEstatistica(dto);
        return ResponseEntity.ok(novaEstatistica);
    }

    @GetMapping
    public ResponseEntity<List<Estatistica>> listar() {
        List<Estatistica> lista = service.listarTodas();
        return ResponseEntity.ok(lista);
    }
}
