// 1. FUNCIONALIDADE: ALTERNAR MODO ESCURO (Acessibilidade)
const darkModeBtn = document.getElementById('toggle-dark-mode');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. FUNCIONALIDADE: VERIFICAÇÃO DE VERACIDADE DA NOTÍCIA
const checkerForm = document.getElementById('fact-checker-form');
const checkerResult = document.getElementById('checker-result');

checkerForm.addEventListener('submit', () => {
    const userInput = document.getElementById('news-input').value.trim().toLowerCase();
    
    // Lista de palavras gatilho comuns em desinformação automatizada e fakes
    const fakeTriggers = ['urgente', 'clone', 'milagre', 'secreta', 'vazado', 'whatsapp', 'repassado'];
    
    let isSuspicious = false;
    
    // Verifica se o texto do usuário possui algum gatilho suspeito
    for (let trigger of fakeTriggers) {
        if (userInput.includes(trigger)) {
            isSuspicious = true;
            break;
        }
    }

    checkerResult.classList.remove('hidden', 'trusted', 'warning');
    checkerResult.classList.add('result-box');

    // Processamento e exibição de variáveis no DOM
    if (isSuspicious) {
        checkerResult.innerHTML = `⚠️ <strong>ALERTA DE RISCO:</strong> Esta notícia contém termos frequentemente associados a deepfakes e desinformação em massa. Verifique em agências de checagem oficiais antes de compartilhar!`;
        checkerResult.classList.add('warning');
    } else {
        checkerResult.innerHTML = `✅ <strong>ANÁLISE INICIAL:</strong> Não detectamos gatilhos óbvios de desinformação automatizada. Contudo, sempre valide o autor e as fontes originais da mídia.`;
        checkerResult.classList.add('trusted');
    }
});

// 3. FUNCIONALIDADE: HORÓSCOPO DO DIA DIGITAL
const horoscopeBtn = document.getElementById('btn-horoscope');
const horoscopeResult = document.getElementById('horoscope-result');

const horoscopeData = {
    aries: "Cuidado com o impulso de compartilhar sem ler. Seu pavio curto digital pode espalhar uma deepfake hoje.",
    touro: "Sua teimosia será útil hoje: não aceite nenhuma imagem como verdadeira até inspecionar os mínimos detalhes estruturais.",
    gemeos: "Seu desejo de comunicar está em alta. Use esse poder para desmentir boatos e alertar os grupos de família.",
    cancer: "Sua intuição está afiada. Se um vídeo parecer estranho emocionalmente ou fora de contexto, confie no seu estômago e apague.",
    leao: "Não busque curtidas a qualquer custo. Compartilhar conteúdos sensacionalistas gerados por IA pode queimar sua reputação digital.",
    virgem: "Seu olhar analítico é o terror das deepfakes. Analise os pixels e as bordas de cada mídia recebida hoje.",
    libra: "Busque o equilíbrio. Antes de tomar partido em uma notícia polêmica, faça a checagem reversa da imagem.",
    escorpiao: "Seu poder de investigação está no ápice. Descubra a fonte original daquela informação duvidosa e proteja sua comunidade.",
    sagitario: "Sua sede de verdade te guiará. Não se deixe levar por títulos exagerados criados por robôs de desinformação.",
    capricornio: "Sua responsabilidade digital será testada. Mantenha os pés no chão e só trabalhe com fatos comprovados.",
    aquario: "Sua conexão com o futuro te avisa: Inteligências Artificiais criam mentiras personalizadas. Fique atento às fraudes de identidade.",
    peixes: "Não navegue no mundo das ilusões digitais. Nem tudo o que brilha na tela é verdade; valide a autoria dos vídeos."
};

horoscopeBtn.addEventListener('click', () => {
    const selectedSign = document.getElementById('sign-select').value;
    
    horoscopeResult.classList.remove('hidden', 'result-box', 'trusted');
    horoscopeResult.classList.add('result-box', 'trusted');

    if (selectedSign && horoscopeData[selectedSign]) {
        // Altera dinamicamente o texto com base no objeto de dados
        horoscopeResult.innerHTML = `🔮 <strong>Horóscopo IA:</strong> ${horoscopeData[selectedSign]}`;
    } else {
        horoscopeResult.innerHTML = `❌ Por favor, selecione um signo válido para calcular as previsões algorítmicas.`;
        horoscopeResult.classList.remove('trusted');
        horoscopeResult.classList.add('warning');
    }
});
