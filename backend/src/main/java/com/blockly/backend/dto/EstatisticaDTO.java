package com.blockly.backend.dto;

import java.time.LocalDateTime;

public class EstatisticaDTO {
    
    private String nomeJogador;
    private String desafio;
    private Integer tentativas;
    private Integer blocosUsados;
    private LocalDateTime data;

    public EstatisticaDTO() {}

    public String getNomeJogador() {
        return nomeJogador;
    }

    public void setNomeJogador(String nomeJogador) {
        this.nomeJogador = nomeJogador;
    }

    public String getDesafio() {
        return desafio;
    }

    public void setDesafio(String desafio) {
        this.desafio = desafio;
    }

    public Integer getTentativas() {
        return tentativas;
    }

    public void setTentativas(Integer tentativas) {
        this.tentativas = tentativas;
    }

    public Integer getBlocosUsados() {
        return blocosUsados;
    }

    public void setBlocosUsados(Integer blocosUsados) {
        this.blocosUsados = blocosUsados;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }
}
