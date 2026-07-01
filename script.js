// Alternar entre modo claro e escuro
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Simulação da verificação de veracidade
function checkVeracity() {
    const input = document.getElementById('news-input').value.trim();
    const resultDiv = document.getElementById('checker-result');
    
    if (!input) {
        resultDiv.style.color = '#e74c3c';
        resultDiv.textContent = 'Por favor, insira um texto ou URL para analisar.';
        return;
    }
    
    // Simulação de resposta algorítmica
    resultDiv.style.color = '#27ae60';
    resultDiv.textContent = '🔍 Análise concluída: Esta fonte possui um índice de confiabilidade de 85%. Lembre-se de cruzar dados com agências oficiais de checagem.';
}

// Mensagens dinâmicas para o Horóscopo Digital
function showHoroscope() {
    const sign = document.getElementById('sign-select').value;
    const resultDiv = document.getElementById('horoscope-result');
    
    if (!sign) {
        resultDiv.textContent = 'Por favor, selecione um signo.';
        return;
    }
    
    const predições = {
        aries: "Cuidado com decisões impulsivas ao clicar em links hoje. Atualize suas senhas.",
        touro: "Seu firewall estará forte, mas não compartilhe dados pessoais em redes públicas.",
        gemeos: "Ótimo dia para aprender sobre criptografia e privacidade de dados.",
        cancer: "Proteja suas memórias digitais. Faça um backup em nuvem hoje mesmo.",
        leao: "Sua presença digital brilha, mas configure a autenticação em duas etapas nas redes.",
        virgem: "Organize seus e-mails e limpe cookies antigos do navegador para evitar rastreamento.",
        libra: "Busque o equilíbrio entre o tempo de tela e o mundo real. Desconecte um pouco.",
        escorpiao: "Alguém pode tentar sondar suas respostas de segurança. Mantenha o sigilo.",
        sagitario: "Sua curiosidade pode te levar a sites não seguros. Verifique o cadeado do HTTPS.",
        capricornio: "Dia ideal para revisar os termos de privacidade dos aplicativos que você mais usa.",
        aquario: "Compartilhe conhecimento sobre IA com seus amigos, mas valide as fontes antes.",
        peixes: "Atenção redobrada com e-mails que parecem do seu banco. Pode ser uma tentativa de phishing."
    };
    
    resultDiv.textContent = `🔮 Destino Digital: ${predições[sign]}`;
}
