package com.blockly.backend.service;

import com.blockly.backend.dto.EstatisticaDTO;
import com.blockly.backend.model.Estatistica;
import com.blockly.backend.repository.EstatisticaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstatisticaService {

    @Autowired
    private EstatisticaRepository repository;

    public Estatistica salvarEstatistica(EstatisticaDTO dto) {
        Estatistica estatistica = new Estatistica();
        estatistica.setNomeJogador(dto.getNomeJogador()); 
        estatistica.setDesafio(dto.getDesafio());
        estatistica.setTentativas(dto.getTentativas());
        estatistica.setBlocosUsados(dto.getBlocosUsados());
        estatistica.setData(dto.getData());
        
        return repository.save(estatistica);
    }

    public List<Estatistica> listarTodas() {
        return repository.findAll();
    }
}
