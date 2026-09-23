const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

const supportedLanguages = ['pt', 'en', 'fr', 'es', 'zh', 'ja'];
const languageNames = { pt: 'Português', en: 'English', fr: 'Français', es: 'Español', zh: '简体中文', ja: '日本語' };

const translations = {};
const addTranslation = (key, en, fr, es, zh, ja) => {
  translations[key] = { pt: key, en, fr, es, zh, ja };
};

[
  ['Pular para o conteúdo', 'Skip to content', 'Aller au contenu', 'Saltar al contenido', '跳转到内容', 'コンテンツへ移動'],
  ['Menu', 'Menu', 'Menu', 'Menú', '菜单', 'メニュー'],
  ['Fechar', 'Close', 'Fermer', 'Cerrar', '关闭', '閉じる'],
  ['Jogos', 'Games', 'Jeux', 'Juegos', '游戏', 'ゲーム'],
  ['Estúdio', 'Studio', 'Studio', 'Estudio', '工作室', 'スタジオ'],
  ['Suporte', 'Support', 'Assistance', 'Soporte', '支持', 'サポート'],
  ['Início', 'Home', 'Accueil', 'Inicio', '首页', 'ホーム'],
  ['Conheça os jogos', 'Explore the games', 'Découvrir les jeux', 'Conoce los juegos', '探索游戏', 'ゲームを見る'],
  ['Nossos jogos', 'Our games', 'Nos jeux', 'Nuestros juegos', '我们的游戏', 'ゲーム一覧'],
  ['Sobre o estúdio', 'About the studio', 'À propos du studio', 'Sobre el estudio', '关于工作室', 'スタジオについて'],
  ['Independent game studio', 'Independent game studio', 'Studio de jeux indépendant', 'Estudio de videojuegos independiente', '独立游戏工作室', 'インディーゲームスタジオ'],
  ['Criamos puzzles mobile com regras claras, personalidade marcante e profundidade para quem gosta de pensar antes de jogar.', 'We create mobile puzzles with clear rules, strong personality, and depth for people who like to think before they play.', 'Nous créons des puzzles mobiles aux règles claires, à la personnalité affirmée et à la profondeur pour ceux qui aiment réfléchir avant de jouer.', 'Creamos puzles móviles con reglas claras, mucha personalidad y profundidad para quienes disfrutan pensar antes de jugar.', '我们打造规则清晰、个性鲜明且富有深度的移动益智游戏，献给喜欢先思考再游玩的人。', '明快なルールと個性、そして遊ぶ前に考える楽しさを備えたモバイルパズルを作っています。'],
  ['Universos originais', 'Original universes', 'Univers originaux', 'Universos originales', '原创世界', 'オリジナルの世界'],
  ['Experiência mobile', 'Mobile experience', 'Expérience mobile', 'Experiencia móvil', '移动体验', 'モバイル体験'],
  ['Jogabilidade nativa', 'Native gameplay', 'Gameplay natif', 'Jugabilidad nativa', '原生玩法', 'ネイティブゲームプレイ'],
  ['Dois mundos. Duas formas de pensar.', 'Two worlds. Two ways to think.', 'Deux mondes. Deux façons de penser.', 'Dos mundos. Dos formas de pensar.', '两个世界，两种思考方式。', '2つの世界、2つの考え方。'],
  ['Cada jogo parte de uma mecânica simples e evolui até revelar decisões, combinações e caminhos que recompensam quem aprende a jogar melhor.', 'Each game starts with a simple mechanic and grows into decisions, combinations, and paths that reward players who learn to play better.', 'Chaque jeu part d’une mécanique simple et révèle peu à peu des décisions, des combinaisons et des chemins qui récompensent ceux qui apprennent à mieux jouer.', 'Cada juego parte de una mecánica sencilla y evoluciona hasta revelar decisiones, combinaciones y caminos que recompensan a quien aprende a jugar mejor.', '每款游戏都从简单机制出发，逐渐展现决策、组合与路径，奖励不断进步的玩家。', 'どのゲームもシンプルな仕組みから始まり、上達するほど選択や組み合わせ、道筋が深まります。'],
  ['Puzzle de giros', 'Spin puzzle', 'Puzzle de rotations', 'Puzle de giros', '旋转益智', 'スピンパズル'],
  ['Puzzle de caminhos', 'Path puzzle', 'Puzzle de chemins', 'Puzle de caminos', '路径益智', 'ルートパズル'],
  ['Deslize linhas e colunas, forme combinações e transforme cada giro em uma nova chance de continuar.', 'Slide rows and columns, make matches, and turn every spin into a new chance to keep going.', 'Faites glisser les lignes et les colonnes, créez des combinaisons et transformez chaque tour en une nouvelle chance de continuer.', 'Desliza filas y columnas, forma combinaciones y convierte cada giro en una nueva oportunidad para seguir.', '滑动行列，组成组合，让每次旋转都成为继续前进的新机会。', '行と列を動かして組み合わせを作り、ひとつひとつのスピンを続けるチャンスに変えよう。'],
  ['Cascatas e combinações premiadas', 'Rewarding cascades and matches', 'Cascades et combinaisons récompensées', 'Cascadas y combinaciones premiadas', '连锁与组合奖励', '連鎖とごほうびの組み合わせ'],
  ['Decisões rápidas com espaço para estratégia', 'Fast decisions with room for strategy', 'Des décisions rapides avec de la place pour la stratégie', 'Decisiones rápidas con espacio para la estrategia', '快速决策，也有策略空间', '戦略を活かせる素早い判断'],
  ['Partidas que duram mais quando você joga melhor', 'Games that last longer as you play better', 'Des parties qui durent plus longtemps quand vous progressez', 'Partidas que duran más cuando juegas mejor', '越会玩，游戏就能持续越久', '上達するほど長く続くゲーム'],
  ['Conhecer Spingrade', 'Discover Spingrade', 'Découvrir Spingrade', 'Conoce Spingrade', '了解 Spingrade', 'Spingradeを見る'],
  ['Mova o cenário, conecte o percurso e ajude o hamster a alcançar o girassol em fases cada vez mais desafiadoras.', 'Move the scene, connect the path, and help the hamster reach the sunflower through increasingly challenging levels.', 'Déplacez le décor, reliez le chemin et aidez le hamster à atteindre le tournesol dans des niveaux toujours plus exigeants.', 'Mueve el escenario, conecta el camino y ayuda al hámster a llegar al girasol en niveles cada vez más desafiantes.', '移动场景，连接路线，帮助仓鼠在越来越有挑战的关卡中到达向日葵。', 'ステージを動かして道をつなぎ、難しくなるステージでハムスターをひまわりまで導こう。'],
  ['Caminhos que exigem observação e lógica', 'Paths that demand observation and logic', 'Des chemins qui demandent observation et logique', 'Caminos que exigen observación y lógica', '考验观察力与逻辑的路径', '観察力と論理が必要な道'],
  ['Novos obstáculos a cada conjunto de fases', 'New obstacles in every level set', 'De nouveaux obstacles à chaque série de niveaux', 'Nuevos obstáculos en cada conjunto de niveles', '每组关卡都有新障碍', 'ステージごとに新しい障害'],
  ['Desafios curtos com soluções inteligentes', 'Short challenges with smart solutions', 'De courts défis aux solutions astucieuses', 'Desafíos breves con soluciones ingeniosas', '短小而聪明的挑战', '短くても工夫が必要な挑戦'],
  ['Conhecer Rumster', 'Discover Rumster', 'Découvrir Rumster', 'Conoce Rumster', '了解 Rumster', 'Rumsterを見る'],
  ['Jogabilidade primeiro.', 'Gameplay first.', 'Le gameplay avant tout.', 'La jugabilidad es lo primero.', '玩法优先。', 'ゲームプレイを最優先。'],
  ['Personalidade em tudo.', 'Personality in everything.', 'De la personnalité partout.', 'Personalidad en todo.', '处处彰显个性。', 'すべてに個性を。'],
  ['Precisa de ajuda com um jogo?', 'Need help with a game?', 'Besoin d’aide avec un jeu ?', '¿Necesitas ayuda con un juego?', '需要游戏帮助吗？', 'ゲームでお困りですか？'],
  ['Ir para o suporte', 'Go to support', 'Voir l’assistance', 'Ir al soporte', '前往支持', 'サポートへ'],
  ['Puzzles mobile construídos com clareza, desafio e personalidade.', 'Mobile puzzles built with clarity, challenge, and personality.', 'Des puzzles mobiles conçus avec clarté, défi et personnalité.', 'Puzles móviles creados con claridad, desafío y personalidad.', '以清晰、挑战与个性打造的移动益智游戏。', '明快さ、挑戦、個性を備えたモバイルパズル。']
].forEach((row) => addTranslation(...row));

[
  ['Privacidade', 'Privacy', 'Confidentialité', 'Privacidad', '隐私', 'プライバシー'],
  ['Termos de uso', 'Terms of use', 'Conditions d’utilisation', 'Términos de uso', '使用条款', '利用規約'],
  ['Informações', 'Information', 'Informations', 'Información', '信息', '情報'],
  ['Nossos jogos', 'Our games', 'Nos jeux', 'Nuestros juegos', '我们的游戏', 'ゲーム一覧'],
  ['Início / Jogos / Spingrade', 'Home / Games / Spingrade', 'Accueil / Jeux / Spingrade', 'Inicio / Juegos / Spingrade', '首页 / 游戏 / Spingrade', 'ホーム / ゲーム / Spingrade'],
  ['Início / Jogos / Rumster', 'Home / Games / Rumster', 'Accueil / Jeux / Rumster', 'Inicio / Juegos / Rumster', '首页 / 游戏 / Rumster', 'ホーム / ゲーム / Rumster'],
  ['O desafio', 'The challenge', 'Le défi', 'El desafío', '挑战', '挑戦'],
  ['Planeje o próximo giro.', 'Plan your next spin.', 'Préparez votre prochain tour.', 'Planea el próximo giro.', '计划下一次旋转。', '次のスピンを計画しよう。'],
  ['Você começa com uma quantidade limitada de movimentos. Combine três ou mais blocos, crie cascatas e conquiste giros extras para continuar jogando.', 'You start with a limited number of moves. Match three or more blocks, create cascades, and earn extra spins to keep playing.', 'Vous commencez avec un nombre limité de mouvements. Alignez trois blocs ou plus, créez des cascades et gagnez des tours supplémentaires pour continuer.', 'Empiezas con una cantidad limitada de movimientos. Combina tres o más bloques, crea cascadas y consigue giros extra para seguir jugando.', '你从有限的步数开始。连接三个或更多方块，制造连锁并赢得额外旋转，继续游戏。', '限られた手数で始まります。3つ以上のブロックをそろえ、連鎖と追加スピンでプレイを続けよう。'],
  ['Controle por deslize, pensado para uma mão', 'Swipe controls designed for one hand', 'Commandes par glissement pensées pour une main', 'Controles por deslizamiento pensados para una mano', '为单手设计的滑动操作', '片手で遊べるスワイプ操作'],
  ['Combinações de linhas e colunas', 'Row and column matches', 'Combinaisons de lignes et de colonnes', 'Combinaciones de filas y columnas', '行列组合', '行と列の組み合わせ'],
  ['Bônus que premiam leitura de tabuleiro', 'Bonuses that reward board reading', 'Des bonus qui récompensent la lecture du plateau', 'Bonificaciones que premian la lectura del tablero', '奖励观察棋盘的加成', '盤面を読む力に報いるボーナス'],
  ['Progressão de dificuldade ao longo da partida', 'Difficulty progression throughout the game', 'Une difficulté qui progresse pendant la partie', 'Dificultad creciente durante la partida', '游戏过程中难度逐步提升', 'ゲーム中に高まる難易度'],
  ['Mais Robb Studios', 'More from Robb Studios', 'Plus de Robb Studios', 'Más de Robb Studios', '更多 Robb Studios', 'Robb Studiosのほかの作品'],
  ['Enquanto os blocos giram, outro caminho espera.', 'While the blocks spin, another path awaits.', 'Pendant que les blocs tournent, un autre chemin vous attend.', 'Mientras los bloques giran, otro camino te espera.', '方块旋转时，另一条路正在等待。', 'ブロックが回る間、別の道が待っています。'],
  ['Conheça Rumster, o puzzle de caminhos da Robb Studios.', 'Meet Rumster, Robb Studios’ path puzzle.', 'Découvrez Rumster, le puzzle de chemins de Robb Studios.', 'Conoce Rumster, el puzle de caminos de Robb Studios.', '认识 Robb Studios 的路径益智游戏 Rumster。', 'Robb Studiosのルートパズル、Rumsterを見てみよう。'],
  ['Uma aventura de bolso', 'A pocket-sized adventure', 'Une aventure de poche', 'Una aventura de bolsillo', '掌上冒险', 'ポケットサイズの冒険'],
  ['Fofo, claro e cada vez mais desafiador.', 'Cute, clear, and increasingly challenging.', 'Mignon, clair et de plus en plus exigeant.', 'Tierno, claro y cada vez más desafiante.', '可爱、清晰，挑战不断升级。', 'かわいく、わかりやすく、だんだん難しく。'],
  ['O objetivo é simples. A solução, nem sempre.', 'The goal is simple. The solution is not always.', 'Le but est simple. La solution, pas toujours.', 'El objetivo es sencillo. La solución, no siempre.', '目标很简单，解决方法却未必。', '目的は簡単。でも解決策はそうとは限りません。'],
  ['Deslize peças e conecte o trajeto', 'Slide pieces and connect the route', 'Faites glisser les pièces et reliez le trajet', 'Desliza piezas y conecta el recorrido', '滑动方块，连接路线', 'ピースを動かして道をつなぐ'],
  ['Fases curtas com soluções inteligentes', 'Short levels with smart solutions', 'De courts niveaux aux solutions ingénieuses', 'Niveles cortos con soluciones inteligentes', '短小关卡，聪明解法', '短いステージと賢い解法'],
  ['Novos obstáculos introduzidos gradualmente', 'New obstacles introduced gradually', 'De nouveaux obstacles introduits progressivement', 'Nuevos obstáculos introducidos gradualmente', '逐步引入新障碍', '新しい障害が少しずつ登場'],
  ['Dificuldade crescente sem perder a leveza', 'Rising difficulty without losing its lightness', 'Une difficulté croissante sans perdre sa légèreté', 'Dificultad creciente sin perder ligereza', '难度提升但依然轻松', '軽やかさを失わず高まる難易度'],
  ['Prefere combinar, girar e criar cascatas?', 'Prefer matching, spinning, and creating cascades?', 'Vous préférez combiner, tourner et créer des cascades ?', '¿Prefieres combinar, girar y crear cascadas?', '更喜欢组合、旋转和连锁？', 'そろえて、回して、連鎖を作る方が好き？'],
  ['Descubra Spingrade, o puzzle de giros da Robb Studios.', 'Discover Spingrade, Robb Studios’ spin puzzle.', 'Découvrez Spingrade, le puzzle de rotations de Robb Studios.', 'Descubre Spingrade, el puzle de giros de Robb Studios.', '探索 Robb Studios 的旋转益智游戏 Spingrade。', 'Robb Studiosのスピンパズル、Spingradeを見つけよう。'],
  ['Como podemos ajudar?', 'How can we help?', 'Comment pouvons-nous vous aider ?', '¿Cómo podemos ayudarte?', '我们能帮你什么？', 'どのようにお手伝いできますか？'],
  ['Encontre respostas rápidas e os canais oficiais da Robb Studios.', 'Find quick answers and official Robb Studios support channels.', 'Trouvez des réponses rapides et les canaux officiels de Robb Studios.', 'Encuentra respuestas rápidas y los canales oficiales de Robb Studios.', '查找快速答案和 Robb Studios 官方支持渠道。', 'よくある回答とRobb Studios公式サポート窓口をご案内します。'],
  ['Perguntas frequentes', 'Frequently asked questions', 'Questions fréquentes', 'Preguntas frecuentes', '常见问题', 'よくある質問'],
  ['Respostas rápidas', 'Quick answers', 'Réponses rapides', 'Respuestas rápidas', '快速回答', 'すぐにわかる回答'],
  ['Ver página do jogo', 'View game page', 'Voir la page du jeu', 'Ver página del juego', '查看游戏页面', 'ゲームページを見る'],
  ['Ler política de privacidade', 'Read the privacy policy', 'Lire la politique de confidentialité', 'Leer la política de privacidad', '阅读隐私政策', 'プライバシーポリシーを読む'],
  ['Jogo', 'Game', 'Jeu', 'Juego', '游戏', 'ゲーム'],
  ['Seus dados', 'Your data', 'Vos données', 'Tus datos', '你的数据', 'あなたのデータ']
].forEach((row) => addTranslation(...row));

const translateVisibleText = (language) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const key = node.nodeValue.trim();
    if (!key || !translations[key]?.[language]) return;
    node.nodeValue = node.nodeValue.replace(key, translations[key][language]);
  });
  document.querySelectorAll('[aria-label]').forEach((node) => {
    const label = node.getAttribute('aria-label');
    if (translations[label]?.[language]) node.setAttribute('aria-label', translations[label][language]);
  });
};
const savedLanguage = window.localStorage.getItem('robb-studios-language');
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'pt';

const languageSwitchers = document.querySelectorAll('.language-switcher');
const languageOptions = supportedLanguages.map((language) => `
  <button type="button" class="language-option" data-language-option="${language}" role="option">
    <span class="flag flag-${language}" aria-hidden="true"></span><span>${languageNames[language]}</span>
  </button>
`).join('');

function updateLanguageButtons(language) {
  languageSwitchers.forEach((switcher) => {
    const button = switcher.querySelector('[data-language-button]');
    const flag = button?.querySelector('.flag');
    const code = button?.querySelector('.language-code');
    if (!button || !flag || !code) return;
    flag.className = `flag flag-${language}`;
    code.textContent = language.toUpperCase();
    button.setAttribute('aria-label', `Idioma: ${languageNames[language]}`);
    switcher.querySelectorAll('[data-language-option]').forEach((option) => {
      option.setAttribute('aria-selected', String(option.dataset.languageOption === language));
    });
  });
}

function closeLanguageMenus() {
  languageSwitchers.forEach((switcher) => {
    switcher.classList.remove('open');
    switcher.querySelector('[data-language-button]')?.setAttribute('aria-expanded', 'false');
  });
}

languageSwitchers.forEach((switcher) => {
  const oldSelect = switcher.querySelector('[data-language-select]');
  if (oldSelect) oldSelect.remove();
  const nav = switcher.closest('.nav');
  if (nav && menuButton) nav.insertBefore(switcher, menuButton);
  switcher.insertAdjacentHTML('afterbegin', `
    <button type="button" class="language-button" data-language-button aria-expanded="false" aria-haspopup="listbox">
      <span class="flag flag-${initialLanguage}" aria-hidden="true"></span><span class="language-code">${initialLanguage.toUpperCase()}</span><span class="language-chevron" aria-hidden="true">⌄</span>
    </button>
    <div class="language-options" role="listbox" hidden>${languageOptions}</div>
  `);
  const button = switcher.querySelector('[data-language-button]');
  button.addEventListener('click', () => {
    const willOpen = !switcher.classList.contains('open');
    closeLanguageMenus();
    switcher.classList.toggle('open', willOpen);
    button.setAttribute('aria-expanded', String(willOpen));
    switcher.querySelector('.language-options').hidden = !willOpen;
  });
  switcher.querySelectorAll('[data-language-option]').forEach((option) => {
    option.addEventListener('click', () => {
      const language = String(option.dataset.languageOption || '').trim();
      if (!supportedLanguages.includes(language)) return;
      window.localStorage.setItem('robb-studios-language', language);
      window.location.reload();
    });
  });
});

updateLanguageButtons(initialLanguage);
document.documentElement.lang = initialLanguage === 'pt' ? 'pt-BR' : initialLanguage;
translateVisibleText(initialLanguage);
document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-switcher')) closeLanguageMenus();
});

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? translations['Fechar'][initialLanguage] : translations['Menu'][initialLanguage];
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = translations['Menu'][initialLanguage];
    });
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const revealNodes = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('visible'));
}
