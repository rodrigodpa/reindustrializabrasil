// china.js - Página China vs Brasil

const anos = [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025];
const chinaIndustrial = [5, 8, 12, 18, 28, 35, 42, 52];
const brasilIndustrial = [18, 20, 22, 24, 26, 24, 22, 21];
const techPaises = ['Brasil', 'China', 'Alemanha', 'EUA', 'Coreia'];
const altaTecnologia = [5, 38, 22, 30, 28];
const exportManufaturados = [35, 94, 86, 75, 88];
const engenheiros = [65, 4000, 120, 280, 150];

window.onload = () => {
    new Chart(document.getElementById('velocidadeChinaChart'), {
        type: 'line',
        data: {
            labels: anos,
            datasets: [
                { label: 'China', data: chinaIndustrial, borderColor: '#C0392B', tension: 0.3, borderWidth: 3 },
                { label: 'Brasil', data: brasilIndustrial, borderColor: '#F39C12', tension: 0.3, borderWidth: 3 }
            ]
        }
    });
    
    new Chart(document.getElementById('altaTecnologiaChart'), {
        type: 'bar',
        data: { labels: techPaises, datasets: [{ label: 'Alta tecnologia (% exportações)', data: altaTecnologia, backgroundColor: '#8E44AD' }] }
    });
    
    new Chart(document.getElementById('exportacaoChart'), {
        type: 'bar',
        data: { labels: paises, datasets: [{ label: 'Manufaturados (% exportações)', data: exportManufaturados, backgroundColor: '#16A085' }] }
    });
    
    new Chart(document.getElementById('engenheirosChart'), {
        type: 'bar',
        data: { labels: paises, datasets: [{ label: 'Engenheiros/ano (milhares)', data: engenheiros, backgroundColor: '#3498DB' }] }
    });
};