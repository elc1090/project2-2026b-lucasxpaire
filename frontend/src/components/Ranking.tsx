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
                            <th>Blocos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.length > 0 ? (
                            dados.map((est) => (
                                <tr key={est.id}>
                                    <td className="centralizado">{est.nomeJogador}</td>
                                    <td className="centralizado">{est.desafio}</td>
                                    <td className="centralizado">{est.tentativas}</td>
                                    <td className="centralizado">{est.blocosUsados}</td>
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
