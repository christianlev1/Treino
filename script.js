function carregarFicha(ficha) {
    var conteudo = document.getElementById("conteudo");

    if (ficha === "A") {
        conteudo.innerHTML = `
            <h2>Treino A: Cardio e Core</h2>
            <ul>
                <li><strong>Corrida ou Caminhada Rápida</strong>: 30-45 minutos <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Bicicleta Ergométrica</strong>: 20-30 minutos <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Prancha Abdominal</strong>: 3 séries de 1-2 minutos <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Elevação de Pernas</strong>: 3 séries de 15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Abdominal Infra</strong>: 3 séries de 15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
            </ul>
        `;
    } else if (ficha === "B") {
        conteudo.innerHTML = `
            <h2>Treino B: Pernas e Glúteos</h2>
            <ul>
                <li><strong>Agachamento Livre</strong>: 4 séries de 8-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Leg Press</strong>: 3 séries de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Afundo</strong>: 3 séries de 12 repetições (cada perna) <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Cadeira Extensora</strong>: 3 séries de 12-15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Levantamento Terra</strong>: 3 séries de 8-10 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Elevação de Quadril (Hip Thrust)</strong>: 3 séries de 12-15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Stiff</strong>: 3 séries de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Panturrilha no Leg Press</strong>: 4 séries de 15-20 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
            </ul>
        `;
    } else if (ficha === "C") {
        conteudo.innerHTML = `
            <h2>Treino C: Superiores</h2>
            <ul>
                <li><strong>Supino Reto com Halteres</strong>: 4 séries de 8-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Desenvolvimento com Halteres</strong>: 3 séries de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Puxada Frontal</strong>: 3 séries de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Remada Curvada</strong>: 3 séries de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Rosca Direta</strong>: 3 séries de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Elevação Lateral com Halteres</strong>: 3 séries de 12-15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Crucifixo Invertido</strong>: 3 séries de 12-15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Tríceps Pulley</strong>: 3 séries de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
            </ul>
        `;
    }
}

// Função para marcar um exercício como concluído
function marcarConcluido(botao) {
    var item = botao.parentElement;
    if (!item.classList.contains('concluido')) {
        item.classList.add('concluido');
        botao.textContent = 'Concluído';
        botao.disabled = true;
    }
}