// main.js - Página Brasil

const missoes = ['Digitalização', 'Agroindústria', 'Infraestrutura', 'Defesa', 'Bioeconomia', 'Saúde'];
const investimentos = [84.6, 76.9, 63.1, 27.8, 27.0, 7.9];
const regioes = ['Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Norte'];
const participacao = [49, 19, 15, 14, 3];

let projecaoChart = null;

function calcularImpactoJuros(selic) {
    let efetividade;
    if (selic <= 8) efetividade = 1.2;
    else if (selic <= 12) efetividade = 1.0;
    else if (selic <= 15) efetividade = 0.85;
    else efetividade = 0.65;
    
    const investimentoBase = 370;
    const investimentoEfetivo = investimentoBase * efetividade;
    const perda = investimentoBase - investimentoEfetivo;
    return { investimentoEfetivo, perda, efetividade };
}

function calcularProjecao(selic, meses = 60) {
    let fatorCresc;
    if (selic <= 8) fatorCresc = 0.010;
    else if (selic <= 12) fatorCresc = 0.007;
    else if (selic <= 15) fatorCresc = 0.005;
    else fatorCresc = 0.003;
    
    let valores = [];
    for (let t = 0; t <= meses; t++) {
        valores.push(100 * Math.pow(1 + fatorCresc, t));
    }
    return valores;
}

function atualizarSimulacao() {
    const selic = parseFloat(document.getElementById('selicSlider').value);
    document.getElementById('selicDisplay').innerHTML = selic.toFixed(1) + '%';
    
    const { investimentoEfetivo, perda, efetividade } = calcularImpactoJuros(selic);
    const perdaPercentual = (perda / 370 * 100).toFixed(1);
    
    document.getElementById('impactoBox').innerHTML = `
        <div><strong>💰 Investimento anunciado:</strong> R$ 370 bi</div>
        <div><strong>⚙️ Investimento efetivo:</strong> R$ ${investimentoEfetivo.toFixed(1)} bi</div>
        <div class="perda">📉 Perda por juros: R$ ${perda.toFixed(1)} bi (${perdaPercentual}%)</div>
        <div>🎯 Eficiência: ${(efetividade*100).toFixed(0)}%</div>
    `;
    
    const alertDiv = document.getElementById('alertaMensagem');
    if (selic >= 14) {
        alertDiv.innerHTML = `<div class="alerta alerta-vermelho"><strong>🔴 ALERTA SOCIAL:</strong> Juros em ${selic.toFixed(1)}% inviabilizam pequenas indústrias.</div>`;
    } else if (selic >= 11) {
        alertDiv.innerHTML = `<div class="alerta alerta-amarelo"><strong>🟡 ATENÇÃO:</strong> Juros altos dificultam investimentos.</div>`;
    } else {
        alertDiv.innerHTML = `<div class="alerta alerta-verde"><strong>🟢 CENÁRIO FAVORÁVEL:</strong> Juros baixos estimulam a indústria.</div>`;
    }
    
    const projAtual = calcularProjecao(selic, 60);
    const projIdeal = calcularProjecao(7, 60);
    
    if (projecaoChart) {
        projecaoChart.data.datasets[0].data = projAtual;
        projecaoChart.update();
    }
    
    document.getElementById('hiatoInfo').innerHTML = `
        📊 Com Selic ${selic.toFixed(1)}%, PIB industrial atinge ${projAtual[60].toFixed(0)} em 5 anos.<br>
        🌟 Potencial perdido: ${(projIdeal[60] - projAtual[60]).toFixed(1)} pontos.
    `;
}

function initCharts() {
    // Gráfico de Missões
    new Chart(document.getElementById('missoesChart'), {
        type: 'bar',
        data: { labels: missoes, datasets: [{ label: 'R$ bilhões', data: investimentos, backgroundColor: '#2E86AB', borderRadius: 8 }] },
        options: { responsive: true, maintainAspectRatio: true }
    });
    
    // Gráfico Regional
    new Chart(document.getElementById('regioesChart'), {
        type: 'pie',
        data: { labels: regioes, datasets: [{ data: participacao, backgroundColor: ['#2E86AB', '#73AB84', '#F4D03F', '#E67E22', '#C0392B'] }] },
        options: { responsive: true }
    });
    
    // Gráfico de Projeção
    const meses = Array.from({length: 61}, (_, i) => i);
    projecaoChart = new Chart(document.getElementById('projecaoChart'), {
        type: 'line',
        data: {
            labels: meses,
            datasets: [
                { label: 'Cenário Realista', data: calcularProjecao(13.25, 60), borderColor: '#e74c3c', tension: 0.3, fill: false },
                { label: 'Cenário Ideal (Selic 7%)', data: calcularProjecao(7, 60), borderColor: '#27ae60', tension: 0.3, fill: false, borderDash: [5, 5] }
            ]
        },
        options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
}

document.getElementById('selicSlider').addEventListener('input', atualizarSimulacao);
window.onload = () => { initCharts(); atualizarSimulacao(); };