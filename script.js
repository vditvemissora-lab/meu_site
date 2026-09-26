:root {
    --bg-base: #030507;
    --bg-card: #0a0f14;
    --border-color: #1a2634;
    --accent-green: #00ff88;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
    background-color: var(--bg-base);
    color: var(--text-main);
    font-family: var(--font-sans);
    margin: 0; padding: 0;
    overflow-x: hidden;
    position: relative;
}

#neural-canvas {
    position: fixed; top: 0; left: 0;
    width: 100vw; height: 100vh;
    pointer-events: none; z-index: 1; opacity: 0.35;
}

header, main, footer, .whatsapp-flutuante, .modal-overlay { position: relative; z-index: 2; }

.whatsapp-flutuante {
    position: fixed; bottom: 30px; right: 30px;
    background: #25d366; color: #ffffff;
    width: 65px; height: 65px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 10px 30px rgba(37, 211, 102, 0.5);
    z-index: 9999; text-decoration: none;
    transition: transform 0.3s;
}
.whatsapp-flutuante:hover { transform: scale(1.15); }

.pulse-ring {
    position: absolute; width: 100%; height: 100%;
    border-radius: 50%; border: 2px solid #25d366;
    animation: pulseAnim 2s infinite;
}
@keyframes pulseAnim {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.6); opacity: 0; }
}

.site-header {
    background: linear-gradient(180deg, #070b10 0%, var(--bg-base) 100%);
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 50px;
}

.top-nav-bar {
    display: flex; justify-content: space-between; align-items: center;
    padding: 25px 50px; max-width: 1100px; margin: 0 auto;
}

.logo-container { display: flex; align-items: center; gap: 12px; }
.logo-status-dot {
    width: 10px; height: 10px; background-color: var(--accent-green);
    border-radius: 50%; box-shadow: 0 0 10px var(--accent-green);
}
.logo-text {
    font-family: var(--font-mono); font-weight: 700;
    letter-spacing: 2px; color: var(--accent-green); font-size: 1.1rem;
}
.logo-text small { display: block; font-size: 0.65rem; color: var(--text-muted); }

.nav-actions { display: flex; align-items: center; gap: 20px; }
.telemetria-badge {
    font-family: var(--font-mono); background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2); color: var(--accent-green);
    padding: 6px 12px; border-radius: 6px; font-size: 0.75rem;
}

.dropdown-menu-container { position: relative; }
.btn-tres-pontinhos {
    background: var(--bg-card); border: 1px solid var(--border-color);
    color: var(--text-main); width: 45px; height: 45px; border-radius: 10px;
    cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
}
.btn-tres-pontinhos span { width: 4px; height: 4px; background-color: var(--text-main); border-radius: 50%; }

.dropdown-content {
    display: none; position: absolute; right: 0; top: 55px;
    background-color: var(--bg-card); min-width: 280px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.9); border: 1px solid var(--border-color);
    border-radius: 12px; z-index: 1000; overflow: hidden;
}
.dropdown-content.show { display: block; }
.dropdown-content a {
    color: #e2e8f0; padding: 16px 20px; text-decoration: none; display: block;
    font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.03); cursor: pointer;
}
.dropdown-content a:hover { background-color: #111d28; color: var(--accent-green); }

.header-container { max-width: 850px; margin: 40px auto 0 auto; text-align: center; padding: 0 20px; }
.badge-topo {
    font-family: var(--font-mono); background: rgba(0, 255, 136, 0.08);
    color: var(--accent-green); border: 1px solid rgba(0, 255, 136, 0.25);
    padding: 8px 18px; border-radius: 30px; font-size: 0.75rem; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; display: inline-block; margin-bottom: 25px;
}
.header-container h1 {
    font-size: 2.3rem; font-weight: 900; margin-bottom: 20px; line-height: 1.15; color: #fff;
}
.header-container p { color: var(--text-muted); font-size: 1.05rem; max-width: 700px; margin: 0 auto; line-height: 1.7; }

.main-container { max-width: 900px; margin: 50px auto; padding: 0 20px; }

.painel-filtros { margin-bottom: 35px; }
.busca-wrapper { position: relative; }
.busca-icone { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
.busca-wrapper input {
    width: 100%; padding: 15px 18px 15px 45px; background: var(--bg-card);
    border: 1px solid var(--border-color); color: var(--text-main); border-radius: 12px;
    outline: none; font-size: 0.95rem; font-family: var(--font-sans);
}

.intro-secao { margin: 30px 0 25px 0; border-left: 4px solid var(--accent-green); padding-left: 15px; }
.intro-secao h2 { color: var(--text-main); font-size: 1.4rem; margin: 0 0 5px 0; }
.intro-secao p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }

.grid-produtos-index {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;
}
.card-catalogo-index {
    background: var(--bg-card); border: 1px solid var(--border-color);
    border-radius: 16px; padding: 30px; display: flex; flex-direction: column; justify-content: space-between;
    transition: transform 0.2s, border-color 0.2s;
}
.card-catalogo-index:hover { border-color: rgba(0, 255, 136, 0.4); transform: translateY(-3px); }
.card-topo-icone {
    font-size: 2rem; background: rgba(0, 255, 136, 0.05); padding: 12px;
    border-radius: 12px; width: fit-content; border: 1px solid rgba(0, 255, 136, 0.15); margin-bottom: 20px;
}
.card-catalogo-index h3 { color: var(--text-main); font-size: 1.15rem; margin: 0 0 10px 0; }
.card-catalogo-index p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin: 0 0 25px 0; }
.card-rodape-index { display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 15px; }
.preco-index { font-family: var(--font-mono); font-size: 1.1rem; font-weight: 700; color: var(--accent-green); }
.btn-acao-index {
    background: rgba(0, 255, 136, 0.1); color: var(--accent-green);
    border: 1px solid rgba(0, 255, 136, 0.3); padding: 8px 14px; border-radius: 8px;
    font-size: 0.8rem; font-weight: 600; text-decoration: none; transition: background 0.2s;
}
.btn-acao-index:hover { background: var(--accent-green); color: #030507; }

/* ESTILOS DA PÁGINA DE VENDAS (GURU) */
.sales-page-container { display: flex; flex-direction: column; gap: 40px; }
.sales-section {
    background: var(--bg-card); border: 1px solid var(--border-color);
    border-radius: 16px; padding: 40px;
}
.sales-section h2 { color: var(--text-main); font-size: 1.4rem; margin-top: 0; margin-bottom: 20px; border-left: 4px solid var(--accent-green); padding-left: 14px; }
.sales-section p { color: #cbd5e1; font-size: 1rem; line-height: 1.8; font-weight: 300; margin-bottom: 20px; }
.highlight-box { background: linear-gradient(135deg, rgba(0, 255, 136, 0.03) 0%, var(--bg-card) 100%); border-color: rgba(0, 255, 136, 0.2); }
.lista-beneficios-detalhada { list-style: none; padding: 0; margin: 20px 0 0 0; display: flex; flex-direction: column; gap: 15px; }
.lista-beneficios-detalhada li { color: #e2e8f0; font-size: 0.95srem; }

.checkout-box {
    text-align: center;
    background: linear-gradient(180deg, #0a141b 0%, var(--bg-card) 100%);
    border: 1px solid rgba(0, 255, 136, 0.4);
}
.checkout-header { margin-bottom: 20px; }
.rotulo-condicao { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; display: block; margin-bottom: 8px; }
.preco-checkout { font-family: var(--font-mono); font-size: 2.5rem; color: var(--accent-green); font-weight: 700; }
.checkout-desc { color: var(--text-muted); font-size: 0.95rem; max-width: 600px; margin: 0 auto; }
.btn-acao-gigante {
    background: var(--accent-green); color: #030507; padding: 18px 35px;
    border-radius: 12px; font-weight: 800; font-size: 1.05rem; text-decoration: none;
    display: inline-block; box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
}
.btn-acao-gigante:hover { background: #10b981; }

.secao-faq { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 40px; }
.secao-faq h3 { color: var(--text-main); margin-top: 0; margin-bottom: 25px; font-size: 1.3rem; border-left: 4px solid var(--accent-green); padding-left: 14px; }
.faq-item { border-bottom: 1px solid var(--border-color); padding: 20px 0; }
.faq-item:last-child { border-bottom: none; }
.faq-question { font-weight: 600; color: var(--text-main); font-size: 1.05rem; }
.faq-answer { color: var(--text-muted); font-size: 0.92rem; margin-top: 10px; line-height: 1.7; }

/* MODAIS */
.modal-overlay {
    display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(3, 5, 7, 0.88); backdrop-filter: blur(10px); z-index: 2000;
    justify-content: center; align-items: center; padding: 20px;
}
.modal-box {
    background: var(--bg-card); border: 1px solid var(--accent-green); border-radius: 18px;
    max-width: 600px; width: 100%; padding: 45px; position: relative;
}
.modal-box h2 { color: var(--text-main); margin-top: 0; margin-bottom: 18px; font-size: 1.4rem; border-left: 4px solid var(--accent-green); padding-left: 14px; }
.modal-box p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.75; }
.btn-fechar-modal { position: absolute; top: 20px; right: 25px; background: none; border: none; color: var(--text-muted); font-size: 2rem; cursor: pointer; }

/* FOOTER */
footer { background: #05080c; border-top: 1px solid var(--border-color); margin-top: 100px; padding: 60px 20px 40px 20px; }
.footer-content { max-width: 900px; margin: 0 auto 40px auto; }
.footer-col strong { font-family: var(--font-mono); color: var(--accent-green); font-size: 0.85rem; display: block; margin-bottom: 12px; }
.footer-col p { color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin: 0; }
.footer-bottom { max-width: 900px; margin: 0 auto; border-top: 1px solid var(--border-color); padding-top: 25px; text-align: center; }
.footer-bottom p { color: #475569; font-size: 0.8rem; font-family: var(--font-mono); }