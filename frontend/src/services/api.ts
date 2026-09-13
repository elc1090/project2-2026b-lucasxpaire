import axios from 'axios';
import type { Estatistica } from '../types/Estatistica';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api/estatisticas"
});

export const api = {
  salvar: async (estatistica: Estatistica): Promise<void> => {
    await apiClient.post("", estatistica);
  },
  listar: async (): Promise<Estatistica[]> => {
    const resposta = await apiClient.get<Estatistica[]>("");
    return resposta.data;
  }
};
