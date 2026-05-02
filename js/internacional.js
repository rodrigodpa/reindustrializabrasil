// internacional.js - Página de Comparação Internacional

const paises = ['Brasil', 'China', 'Alemanha', 'EUA', 'Coreia'];
const industriaPIB = [21, 39, 26, 18, 32];
const crescimentoIndustrial = [2.5, 5.8, 0.8, 2.9, 3.2];
const pndGastos = [1.2, 2.4, 3.1, 3.4, 4.8];
const competitividade = [45, 3, 1, 2, 6];

window.onload = () => {
    new Chart(document.getElementById('industriaPIBChart'), {
        type: 'bar',
        data: { labels: paises, datasets: [{ label: 'Indústria (% PIB)', data: industriaPIB, backgroundColor: '#2E86AB' }] }
    });
    
    new Chart(document.getElementById('crescimentoChart'), {
        type: 'bar',
        data: { labels: paises, datasets: [{ label: 'Crescimento anual (%)', data: crescimentoIndustrial, backgroundColor: '#F39C12' }] }
    });
    
    new Chart(document.getElementById('pndChart'), {
        type: 'bar',
        data: { labels: paises, datasets: [{ label: 'Gastos P&D (% PIB)', data: pndGastos, backgroundColor: '#E74C3C' }] }
    });
    
    new Chart(document.getElementById('competitividadeChart'), {
        type: 'bar',
        data: { labels: paises, datasets: [{ label: 'Ranking (menor = melhor)', data: competitividade, backgroundColor: '#1B998B' }] }
    });
};