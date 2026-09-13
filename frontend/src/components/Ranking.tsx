import type { Estatistica } from '../types/Estatistica';

interface RankingProps {
    dados: Estatistica[];
    onFechar: () => void;
}

export default function Ranking({ dados, onFechar }: RankingProps) {
    return (
        <div className="fundo-modal">
            <div className="modal-conteudo">
                <h2>Ranking de Estatísticas</h2>
                <table className="tabela-ranking">
                    <thead>
                        <tr>
                            <th>Jogador</th>
                            <th>Desafio</th>
                            <th>Tentativas</th>
                            <th>Blocos Usados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.length > 0 ? (
                            dados.map((est) => (
                                <tr key={est.id}>
                                    <td>{est.nomeJogador}</td>
                                    <td>{est.desafio}</td>
                                    <td>{est.tentativas}</td>
                                    <td>{est.blocosUsados}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="centralizado">Nenhuma estatística encontrada.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button onClick={onFechar} className="botao botao-fechar">Fechar</button>
            </div>
        </div>
    );
}
