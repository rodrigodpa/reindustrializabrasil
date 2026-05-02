// solucoes.js - Página de Soluções

function atualizarSimulacoes() {
    // Simulador P&D
    const pnd = parseFloat(document.getElementById('pndSlider').value);
    document.getElementById('pndDisplay').innerHTML = pnd.toFixed(1) + '%';
    const ganhoPnd = ((pnd - 1.2) / 1.2 * 100).toFixed(0);
    document.getElementById('impactoPndBox').innerHTML = `
        <div>📊 Se o Brasil investisse ${pnd.toFixed(1)}% do PIB em P&D:</div>
        <div class="${ganhoPnd > 0 ? 'ganho' : 'perda'}">📈 Crescimento adicional: +${ganhoPnd > 0 ? ganhoPnd : 0}% no PIB industrial</div>
        <div>🔬 ${pnd >= 3 ? '✅ Patamar de país desenvolvido' : '⚠️ Abaixo da média da OCDE (2.7%)'}</div>
    `;
    
    // Simulador Engenheiros
    const eng = parseInt(document.getElementById('engSlider').value);
    document.getElementById('engDisplay').innerHTML = eng.toLocaleString();
    const ganhoEng = Math.min((eng / 65 - 1) * 20, 80);
    document.getElementById('impactoEngBox').innerHTML = `
        <div>🎓 Formando ${eng.toLocaleString()} engenheiros/ano:</div>
        <div class="ganho">📈 Potencial de crescimento industrial: +${ganhoEng.toFixed(0)}%</div>
        <div>🏭 ${eng >= 500 ? '✅ Nível de país industrializado' : eng >= 200 ? '🟡 Em desenvolvimento' : '🔴 Crise de engenharia'}</div>
    `;
    
    // Simulador Regional
    const regional = parseInt(document.getElementById('regionalSlider').value);
    document.getElementById('regionalDisplay').innerHTML = regional + '%';
    const reducaoDesigualdade = ((regional - 18) / 18 * 100).toFixed(0);
    document.getElementById('impactoRegionalBox').innerHTML = `
        <div>🌎 Redistribuindo ${regional}% para Norte/Nordeste:</div>
        <div class="ganho">📉 Redução da desigualdade regional: ${reducaoDesigualdade}%</div>
        <div>🏗️ ${regional >= 30 ? '✅ Distribuição mais equilibrada' : '🟡 Ainda concentrado no Sudeste'}</div>
    `;
}

document.getElementById('pndSlider')?.addEventListener('input', atualizarSimulacoes);
document.getElementById('engSlider')?.addEventListener('input', atualizarSimulacoes);
document.getElementById('regionalSlider')?.addEventListener('input', atualizarSimulacoes);

window.onload = atualizarSimulacoes;