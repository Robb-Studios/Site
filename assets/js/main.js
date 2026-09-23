const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

const supportedLanguages = ['pt', 'en', 'fr', 'es', 'zh', 'ja'];
const languageNames = { pt: 'Português', en: 'English', fr: 'Français', es: 'Español', zh: '简体中文', ja: '日本語' };
const pageTitles = {
  'Robb Studios — Jogos que desafiam': { pt: 'Robb Studios — Jogos que desafiam', en: 'Robb Studios — Games that challenge', fr: 'Robb Studios — Des jeux qui défient', es: 'Robb Studios — Juegos que desafían', zh: 'Robb Studios — 充满挑战的游戏', ja: 'Robb Studios — 挑戦するゲーム' },
  'Suporte — Robb Studios': { pt: 'Suporte — Robb Studios', en: 'Support — Robb Studios', fr: 'Assistance — Robb Studios', es: 'Soporte — Robb Studios', zh: '支持 — Robb Studios', ja: 'サポート — Robb Studios' },
  'Spingrade — Robb Studios': { pt: 'Spingrade — Robb Studios', en: 'Spingrade — Robb Studios', fr: 'Spingrade — Robb Studios', es: 'Spingrade — Robb Studios', zh: 'Spingrade — Robb Studios', ja: 'Spingrade — Robb Studios' },
  'Rumster — Robb Studios': { pt: 'Rumster — Robb Studios', en: 'Rumster — Robb Studios', fr: 'Rumster — Robb Studios', es: 'Rumster — Robb Studios', zh: 'Rumster — Robb Studios', ja: 'Rumster — Robb Studios' },
  'Política de Privacidade — Robb Studios': { pt: 'Política de Privacidade — Robb Studios', en: 'Privacy Policy — Robb Studios', fr: 'Politique de confidentialité — Robb Studios', es: 'Política de privacidad — Robb Studios', zh: '隐私政策 — Robb Studios', ja: 'プライバシーポリシー — Robb Studios' },
  'Termos de Uso — Robb Studios': { pt: 'Termos de Uso — Robb Studios', en: 'Terms of Use — Robb Studios', fr: 'Conditions d’utilisation — Robb Studios', es: 'Términos de uso — Robb Studios', zh: '使用条款 — Robb Studios', ja: '利用規約 — Robb Studios' }
};

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
  ['Perdi meu progresso. É possível recuperar?', 'I lost my progress. Can it be recovered?', 'J’ai perdu ma progression. Est-il possible de la récupérer ?', 'Perdí mi progreso. ¿Se puede recuperar?', '我的进度丢失了，可以恢复吗？', '進行状況を失いました。復元できますか？'],
  ['Na versão sem conta ou sincronização em nuvem, o progresso fica salvo localmente. A remoção do aplicativo ou a limpeza de dados pode apagar esse conteúdo.', 'In the version without an account or cloud sync, progress is saved locally. Removing the app or clearing its data may erase it.', 'Dans la version sans compte ni synchronisation cloud, la progression est enregistrée localement. La suppression de l’application ou de ses données peut l’effacer.', 'En la versión sin cuenta ni sincronización en la nube, el progreso se guarda localmente. Eliminar la aplicación o sus datos puede borrarlo.', '在没有账户或云同步的版本中，进度保存在本地。删除应用或清除数据可能会将其删除。', 'アカウントやクラウド同期がないバージョンでは、進行状況は端末に保存されます。アプリやデータを削除すると消える場合があります。'],
  ['Como removo ou personalizo anúncios?', 'How do I remove or customize ads?', 'Comment supprimer ou personnaliser les publicités ?', '¿Cómo elimino o personalizo los anuncios?', '如何移除或自定义广告？', '広告を削除またはカスタマイズするには？'],
  ['As opções disponíveis aparecem dentro do próprio jogo. As preferências de consentimento podem ser revistas nas configurações de privacidade do aplicativo quando a publicidade estiver ativa.', 'Available options appear inside the game. Consent preferences can be reviewed in the app’s privacy settings when advertising is active.', 'Les options disponibles apparaissent dans le jeu. Les préférences de consentement peuvent être revues dans les réglages de confidentialité de l’application lorsque la publicité est active.', 'Las opciones disponibles aparecen dentro del juego. Las preferencias de consentimiento pueden revisarse en los ajustes de privacidad de la aplicación cuando la publicidad está activa.', '可用选项会显示在游戏内。启用广告时，可以在应用的隐私设置中查看同意偏好。', '利用可能な設定はゲーム内に表示されます。広告が有効な場合、アプリのプライバシー設定で同意内容を確認できます。'],
  ['O jogo está disponível para iPhone e Android?', 'Is the game available for iPhone and Android?', 'Le jeu est-il disponible sur iPhone et Android ?', '¿El juego está disponible para iPhone y Android?', '游戏支持 iPhone 和 Android 吗？', 'ゲームはiPhoneとAndroidで利用できますか？'],
  ['Spingrade está sendo preparado para iOS e Android. Os links oficiais das lojas serão publicados aqui quando o lançamento estiver disponível.', 'Spingrade is being prepared for iOS and Android. Official store links will be published here when the release is available.', 'Spingrade est en préparation pour iOS et Android. Les liens officiels des boutiques seront publiés ici lorsque le lancement sera disponible.', 'Spingrade está en preparación para iOS y Android. Los enlaces oficiales de las tiendas se publicarán aquí cuando esté disponible.', 'Spingrade 正在为 iOS 和 Android 准备中。发布后，我们会在此公布官方商店链接。', 'SpingradeはiOSとAndroid向けに準備中です。リリース時に公式ストアのリンクを掲載します。'],
  ['Como reporto um problema?', 'How do I report a problem?', 'Comment signaler un problème ?', '¿Cómo informo de un problema?', '如何报告问题？', '問題を報告するには？'],
  ['Informe jogo, modelo do aparelho, versão do sistema, passos para reproduzir e, se possível, uma captura de tela. Não inclua senhas, documentos ou dados financeiros.', 'Include the game, device model, system version, reproduction steps, and, if possible, a screenshot. Do not include passwords, documents, or financial data.', 'Indiquez le jeu, le modèle de l’appareil, la version du système, les étapes pour reproduire le problème et, si possible, une capture d’écran. N’incluez pas de mots de passe, documents ou données financières.', 'Indica el juego, el modelo del dispositivo, la versión del sistema, los pasos para reproducirlo y, si es posible, una captura de pantalla. No incluyas contraseñas, documentos ni datos financieros.', '请提供游戏、设备型号、系统版本、复现步骤，并尽可能附上截图。请勿包含密码、证件或财务信息。', 'ゲーム名、端末モデル、システムバージョン、再現手順、可能ならスクリーンショットを知らせてください。パスワードや書類、金融情報は含めないでください。'],
  ['Onde encontro a política de privacidade?', 'Where can I find the privacy policy?', 'Où trouver la politique de confidentialité ?', '¿Dónde encuentro la política de privacidad?', '在哪里可以找到隐私政策？', 'プライバシーポリシーはどこにありますか？'],
  ['A versão vigente está disponível permanentemente na', 'The current version is always available on the', 'La version en vigueur est toujours disponible sur la', 'La versión vigente está disponible permanentemente en la', '当前版本始终可在以下页面查看：', '最新版は常に次のページで確認できます：'],
  ['página de privacidade', 'privacy page', 'page de confidentialité', 'página de privacidad', '隐私页面', 'プライバシーページ'],
  ['Não inclua senhas, documentos ou dados financeiros.', 'Do not include passwords, documents, or financial data.', 'N’incluez pas de mots de passe, documents ou données financières.', 'No incluyas contraseñas, documentos ni datos financieros.', '请勿包含密码、证件或财务信息。', 'パスワードや書類、金融情報は含めないでください。'],
  ['Transparência', 'Transparency', 'Transparence', 'Transparencia', '透明度', '透明性'],
  ['Política de Privacidade', 'Privacy Policy', 'Politique de confidentialité', 'Política de privacidad', '隐私政策', 'プライバシーポリシー'],
  ['Esta política explica como a Robb Studios trata informações no site e em seus jogos.', 'This policy explains how Robb Studios handles information on its website and in its games.', 'Cette politique explique comment Robb Studios traite les informations sur son site et dans ses jeux.', 'Esta política explica cómo Robb Studios trata la información en su sitio y sus juegos.', '本政策说明 Robb Studios 如何处理网站及游戏中的信息。', 'このポリシーでは、Robb Studiosがサイトやゲームで情報を扱う方法を説明します。'],
  ['1. Escopo', '1. Scope', '1. Champ d’application', '1. Alcance', '1. 范围', '1. 適用範囲'],
  ['Esta Política de Privacidade aplica-se ao site da Robb Studios e aos jogos publicados pelo estúdio, incluindo Spingrade e futuros títulos quando disponibilizados.', 'This Privacy Policy applies to the Robb Studios website and games published by the studio, including Spingrade and future titles when made available.', 'Cette politique de confidentialité s’applique au site de Robb Studios et aux jeux publiés par le studio, y compris Spingrade et les futurs titres lorsqu’ils seront disponibles.', 'Esta Política de privacidad se aplica al sitio de Robb Studios y a los juegos publicados por el estudio, incluido Spingrade y futuros títulos cuando estén disponibles.', '本隐私政策适用于 Robb Studios 网站及工作室发布的游戏，包括 Spingrade 和未来推出的作品。', 'このプライバシーポリシーは、Robb Studiosのサイトとスタジオが公開するゲーム（Spingradeおよび今後公開される作品を含む）に適用されます。'],
  ['2. Dados tratados pelo site', '2. Data handled by the website', '2. Données traitées par le site', '2. Datos tratados por el sitio', '2. 网站处理的数据', '2. サイトで扱うデータ'],
  ['Este site institucional é estático. Ele não possui cadastro, área de login, formulário de contato, cookies próprios ou ferramenta própria de análise de comportamento.', 'This institutional website is static. It has no registration, login area, contact form, first-party cookies, or proprietary behavior analytics tool.', 'Ce site institutionnel est statique. Il ne possède ni inscription, ni espace de connexion, ni formulaire de contact, ni cookies propriétaires, ni outil interne d’analyse comportementale.', 'Este sitio institucional es estático. No tiene registro, área de inicio de sesión, formulario de contacto, cookies propios ni herramienta propia de análisis de comportamiento.', '本机构网站为静态网站，不提供注册、登录区、联系表单、自有 Cookie 或自有行为分析工具。', 'この公式サイトは静的サイトです。登録、ログイン、問い合わせフォーム、自社Cookie、独自の行動分析ツールはありません。'],
  ['3. Dados tratados nos jogos', '3. Data handled in the games', '3. Données traitées dans les jeux', '3. Datos tratados en los juegos', '3. 游戏处理的数据', '3. ゲームで扱うデータ'],
  ['Os jogos podem armazenar localmente no dispositivo dados de progresso, preferências e pontuações. Quando um recurso online, conta de jogador, ranking ou sincronização em nuvem for adicionado, esta política será atualizada antes da disponibilização do recurso.', 'Games may store progress data, preferences, and scores locally on the device. If an online feature, player account, leaderboard, or cloud sync is added, this policy will be updated before that feature becomes available.', 'Les jeux peuvent stocker localement sur l’appareil les données de progression, préférences et scores. Si une fonctionnalité en ligne, un compte joueur, un classement ou une synchronisation cloud est ajouté, cette politique sera mise à jour avant sa disponibilité.', 'Los juegos pueden almacenar localmente en el dispositivo datos de progreso, preferencias y puntuaciones. Si se añade una función online, cuenta, clasificación o sincronización en la nube, esta política se actualizará antes de ofrecerla.', '游戏可能会在设备本地存储进度、偏好和分数。如果新增在线功能、玩家账户、排行榜或云同步，本政策会在功能上线前更新。', 'ゲームは進行状況、設定、スコアを端末に保存する場合があります。オンライン機能、プレイヤーアカウント、ランキング、クラウド同期を追加する場合は、提供前にこのポリシーを更新します。'],
  ['4. Publicidade', '4. Advertising', '4. Publicité', '4. Publicidad', '4. 广告', '4. 広告'],
  ['Os jogos podem exibir anúncios por meio do Google AdMob. Dependendo das permissões, da região e das escolhas de consentimento do jogador, o provedor pode tratar identificadores do dispositivo e de publicidade, endereço IP aproximado, informações do aparelho, interações com anúncios e dados de diagnóstico para entregar, medir, limitar e proteger anúncios.', 'Games may display ads through Google AdMob. Depending on permissions, region, and the player’s consent choices, the provider may process device and advertising identifiers, approximate IP address, device information, ad interactions, and diagnostic data to deliver, measure, limit, and protect ads.', 'Les jeux peuvent afficher des publicités via Google AdMob. Selon les autorisations, la région et les choix de consentement du joueur, le fournisseur peut traiter les identifiants de l’appareil et publicitaires, une adresse IP approximative, des informations sur l’appareil, les interactions avec les publicités et des données de diagnostic.', 'Los juegos pueden mostrar anuncios mediante Google AdMob. Según los permisos, la región y las decisiones de consentimiento, el proveedor puede tratar identificadores del dispositivo y publicitarios, una IP aproximada, información del dispositivo, interacciones con anuncios y datos de diagnóstico.', '游戏可能通过 Google AdMob 展示广告。根据权限、地区和玩家的同意选择，服务商可能处理设备及广告标识符、大致 IP 地址、设备信息、广告互动和诊断数据，以投放、衡量、限制和保护广告。', 'ゲームはGoogle AdMobを通じて広告を表示する場合があります。許可、地域、プレイヤーの同意設定に応じて、端末・広告識別子、おおよそのIP、端末情報、広告操作、診断データを広告の配信、測定、制限、安全確保のために処理することがあります。'],
  ['Mais informações estão disponíveis nas páginas de', 'More information is available on the', 'Plus d’informations sont disponibles sur les pages de', 'Hay más información en las páginas de', '更多信息请参阅以下页面：', '詳しくは次のページをご覧ください：'],
  ['Privacidade do Google', 'Google Privacy', 'Confidentialité Google', 'Privacidad de Google', 'Google 隐私', 'Google プライバシー'],
  ['Como o Google usa informações em apps que utilizam o AdMob', 'How Google uses information in apps that use AdMob', 'Comment Google utilise les informations dans les applications utilisant AdMob', 'Cómo usa Google la información en aplicaciones que utilizan AdMob', 'Google 如何使用采用 AdMob 的应用中的信息', 'AdMobを利用するアプリでGoogleが情報を使用する方法'],
  ['5. Consentimento e escolhas', '5. Consent and choices', '5. Consentement et choix', '5. Consentimiento y opciones', '5. 同意与选择', '5. 同意と選択'],
  ['Quando exigido, será apresentada uma mensagem de consentimento antes da publicidade personalizada. O jogador poderá revisar suas escolhas de privacidade dentro do aplicativo. Nas configurações do sistema operacional também é possível limitar o rastreamento de publicidade.', 'Where required, a consent message will be shown before personalized advertising. Players can review privacy choices inside the app. Advertising tracking can also be limited in the operating system settings.', 'Lorsque nécessaire, un message de consentement sera présenté avant la publicité personnalisée. Le joueur pourra revoir ses choix de confidentialité dans l’application. Le suivi publicitaire peut également être limité dans les réglages du système.', 'Cuando sea necesario, se mostrará un mensaje de consentimiento antes de la publicidad personalizada. El jugador podrá revisar sus opciones dentro de la aplicación y limitar el seguimiento publicitario en los ajustes del sistema.', '如有要求，在个性化广告前会显示同意提示。玩家可在应用内查看隐私选择，也可在系统设置中限制广告跟踪。', '必要な場合、パーソナライズ広告の前に同意メッセージを表示します。プレイヤーはアプリ内で設定を確認でき、OSの設定で広告トラッキングを制限できます。'],
  ['6. Crianças e adolescentes', '6. Children and teenagers', '6. Enfants et adolescents', '6. Niños y adolescentes', '6. 儿童与青少年', '6. 子どもと青少年'],
  ['Os jogos não são direcionados intencionalmente a crianças abaixo da idade mínima aplicável sem as proteções exigidas. Caso um título seja classificado para público infantil ou misto, serão utilizados apenas serviços e configurações compatíveis com essa audiência e com as políticas das lojas.', 'The games are not intentionally directed to children below the applicable minimum age without required protections. If a title is classified for children or a mixed audience, only services and settings compatible with that audience and store policies will be used.', 'Les jeux ne ciblent pas intentionnellement les enfants sous l’âge minimum applicable sans les protections requises. Si un titre vise un public enfant ou mixte, seuls des services et réglages compatibles avec ce public et les politiques des boutiques seront utilisés.', 'Los juegos no están dirigidos intencionadamente a menores de la edad mínima aplicable sin las protecciones exigidas. Si un título se clasifica para público infantil o mixto, se usarán servicios y ajustes compatibles con esa audiencia y las políticas de las tiendas.', '在没有必要保护措施的情况下，游戏不会故意面向低于适用最低年龄的儿童。如果作品面向儿童或混合受众，将使用符合该受众及商店政策的服务和设置。', '必要な保護なしに、適用される最低年齢未満の子どもを意図的に対象にすることはありません。子ども向けまたは混合向けの作品では、対象とストアポリシーに合うサービスと設定のみを使用します。'],
  ['7. Compartilhamento', '7. Sharing', '7. Partage', '7. Compartición', '7. 共享', '7. 共有'],
  ['A Robb Studios não vende dados pessoais. Informações podem ser processadas por prestadores necessários ao funcionamento, distribuição, diagnóstico e monetização dos jogos, como Google, Apple e provedores de infraestrutura, observadas suas respectivas políticas.', 'Robb Studios does not sell personal data. Information may be processed by providers needed for game operation, distribution, diagnostics, and monetization, such as Google, Apple, and infrastructure providers, under their respective policies.', 'Robb Studios ne vend pas de données personnelles. Des informations peuvent être traitées par des prestataires nécessaires au fonctionnement, à la distribution, au diagnostic et à la monétisation des jeux, comme Google, Apple et des fournisseurs d’infrastructure.', 'Robb Studios no vende datos personales. La información puede ser tratada por proveedores necesarios para el funcionamiento, distribución, diagnóstico y monetización de los juegos, como Google, Apple y proveedores de infraestructura.', 'Robb Studios 不出售个人数据。为游戏运行、分发、诊断和变现所需的服务商（如 Google、Apple 和基础设施供应商）可能根据各自政策处理信息。', 'Robb Studiosは個人データを販売しません。Google、Apple、インフラ提供者など、ゲームの運用、配信、診断、収益化に必要な事業者が各自のポリシーに従って情報を処理する場合があります。'],
  ['8. Retenção e segurança', '8. Retention and security', '8. Conservation et sécurité', '8. Retención y seguridad', '8. 保留与安全', '8. 保持とセキュリティ'],
  ['Dados locais permanecem no dispositivo até que o aplicativo seja removido ou seus dados sejam apagados. Dados tratados por terceiros seguem os prazos e controles desses provedores. Adotamos medidas proporcionais para reduzir riscos de acesso, alteração ou divulgação indevida.', 'Local data remains on the device until the app or its data is deleted. Data handled by third parties follows their retention periods and controls. We take proportionate measures to reduce the risks of unauthorized access, alteration, or disclosure.', 'Les données locales restent sur l’appareil jusqu’à la suppression de l’application ou de ses données. Les données traitées par des tiers suivent leurs délais et contrôles. Nous adoptons des mesures proportionnées pour réduire les risques d’accès, de modification ou de divulgation non autorisés.', 'Los datos locales permanecen en el dispositivo hasta que se elimine la aplicación o sus datos. Los datos tratados por terceros siguen sus plazos y controles. Adoptamos medidas proporcionales para reducir riesgos de acceso, modificación o divulgación indebidos.', '本地数据会保留在设备上，直到删除应用或其数据。第三方处理的数据遵循其保留期限和控制措施。我们采取相称措施降低未经授权访问、修改或披露的风险。', 'ローカルデータはアプリまたはデータが削除されるまで端末に残ります。第三者が扱うデータは各社の保持期間と管理に従います。不正なアクセス、変更、開示のリスクを減らすため相応の対策を講じます。'],
  ['9. Direitos do titular', '9. Data subject rights', '9. Droits des personnes', '9. Derechos del titular', '9. 数据主体权利', '9. 本人の権利'],
  ['Dependendo da legislação aplicável, você pode solicitar confirmação de tratamento, acesso, correção, exclusão, informação sobre compartilhamento e revisão de consentimento. Para orientações, acesse nossa', 'Depending on applicable law, you may request confirmation of processing, access, correction, deletion, information about sharing, and consent review. For guidance, visit our', 'Selon la législation applicable, vous pouvez demander la confirmation du traitement, l’accès, la rectification, la suppression, des informations sur le partage et la révision du consentement. Pour obtenir de l’aide, consultez notre', 'Según la legislación aplicable, puedes solicitar confirmación del tratamiento, acceso, corrección, eliminación, información sobre compartición y revisión del consentimiento. Para orientarte, visita nuestra', '根据适用法律，您可以请求确认处理、访问、更正、删除、共享信息以及查看同意设置。如需指引，请访问我们的', '適用法令により、処理の確認、アクセス、訂正、削除、共有に関する情報、同意の見直しを請求できます。詳しくは次の'],
  ['10. Alterações', '10. Changes', '10. Modifications', '10. Cambios', '10. 变更', '10. 変更'],
  ['Esta política poderá ser atualizada para refletir novos recursos, provedores ou requisitos legais. A data da versão mais recente será indicada no início desta página.', 'This policy may be updated to reflect new features, providers, or legal requirements. The date of the latest version will appear at the top of this page.', 'Cette politique peut être mise à jour pour refléter de nouvelles fonctionnalités, de nouveaux prestataires ou des exigences légales. La date de la version la plus récente figurera au début de cette page.', 'Esta política podrá actualizarse para reflejar nuevas funciones, proveedores o requisitos legales. La fecha de la versión más reciente aparecerá al inicio de esta página.', '本政策可能会更新，以反映新功能、服务商或法律要求。最新版本日期会显示在本页顶部。', '新機能、事業者、法的要件を反映するため、このポリシーを更新する場合があります。最新版の日付はページ冒頭に表示します。'],
  ['11. Contato', '11. Contact', '11. Contact', '11. Contacto', '11. 联系', '11. お問い合わせ'],
  ['Solicitações de privacidade devem ser iniciadas pelo canal oficial indicado na', 'Privacy requests should be started through the official channel indicated on the', 'Les demandes relatives à la confidentialité doivent être adressées via le canal officiel indiqué sur la', 'Las solicitudes de privacidad deben iniciarse a través del canal oficial indicado en la', '隐私请求应通过以下页面所示的官方渠道发起：', 'プライバシーに関する依頼は、次のページに記載された公式窓口から行ってください：'],
  ['Não publique dados pessoais em canais públicos.', 'Do not publish personal data in public channels.', 'Ne publiez pas de données personnelles sur des canaux publics.', 'No publiques datos personales en canales públicos.', '请勿在公共渠道发布个人数据。', '公開チャンネルに個人情報を投稿しないでください。'],
  ['Links permanentes', 'Permanent links', 'Liens permanents', 'Enlaces permanentes', '固定链接', '固定リンク'],
  ['Use esta URL no cadastro das lojas e no AdMob depois de publicar o site.', 'Use this URL when registering stores and AdMob after publishing the site.', 'Utilisez cette URL pour l’enregistrement auprès des boutiques et d’AdMob après la publication du site.', 'Usa esta URL para registrar las tiendas y AdMob después de publicar el sitio.', '网站发布后，请在商店和 AdMob 登记时使用此 URL。', 'サイト公開後、ストアとAdMobの登録にこのURLを使用してください。'],
  ['Uso responsável', 'Responsible use', 'Utilisation responsable', 'Uso responsable', '负责任的使用', '責任ある利用'],
  ['Termos de Uso', 'Terms of Use', 'Conditions d’utilisation', 'Términos de uso', '使用条款', '利用規約'],
  ['Condições gerais para acessar o site e utilizar os jogos da Robb Studios.', 'General conditions for accessing the website and using Robb Studios games.', 'Conditions générales d’accès au site et d’utilisation des jeux de Robb Studios.', 'Condiciones generales para acceder al sitio y utilizar los juegos de Robb Studios.', '访问网站和使用 Robb Studios 游戏的一般条件。', 'サイトへのアクセスとRobb Studiosのゲーム利用に関する一般条件です。'],
  ['1. Aceitação', '1. Acceptance', '1. Acceptation', '1. Aceptación', '1. 接受', '1. 同意'],
  ['Ao acessar este site ou utilizar um jogo da Robb Studios, você concorda com estes termos e com a legislação aplicável. Caso não concorde, não utilize os serviços.', 'By accessing this website or using a Robb Studios game, you agree to these terms and applicable law. If you do not agree, do not use the services.', 'En accédant à ce site ou en utilisant un jeu de Robb Studios, vous acceptez ces conditions et la loi applicable. Si vous n’êtes pas d’accord, n’utilisez pas les services.', 'Al acceder a este sitio o utilizar un juego de Robb Studios, aceptas estos términos y la legislación aplicable. Si no estás de acuerdo, no utilices los servicios.', '访问本网站或使用 Robb Studios 游戏即表示您同意本条款及适用法律。如不同意，请勿使用服务。', 'このサイトへのアクセスまたはRobb Studiosのゲーム利用により、本規約と適用法に同意したものとします。同意しない場合はサービスを利用しないでください。'],
  ['2. Licença de uso', '2. License to use', '2. Licence d’utilisation', '2. Licencia de uso', '2. 使用许可', '2. 利用ライセンス'],
  ['Quando um jogo é disponibilizado, concedemos uma licença pessoal, limitada, revogável, não exclusiva e intransferível para uso recreativo. A compra ou instalação não transfere direitos sobre marcas, código, arte, áudio ou demais conteúdos.', 'When a game is made available, we grant a personal, limited, revocable, non-exclusive, non-transferable license for recreational use. Purchase or installation does not transfer rights to trademarks, code, art, audio, or other content.', 'Lorsqu’un jeu est disponible, nous accordons une licence personnelle, limitée, révocable, non exclusive et non transférable à des fins récréatives. L’achat ou l’installation ne transfère aucun droit sur les marques, le code, l’art, l’audio ou les autres contenus.', 'Cuando se ofrece un juego, concedemos una licencia personal, limitada, revocable, no exclusiva e intransferible para uso recreativo. La compra o instalación no transfiere derechos sobre marcas, código, arte, audio u otros contenidos.', '游戏上线后，我们授予个人、有限、可撤销、非独占且不可转让的娱乐使用许可。购买或安装不会转让商标、代码、美术、音频或其他内容的权利。', 'ゲーム提供時、娯楽目的の個人的、限定的、取消可能、非独占、譲渡不可のライセンスを付与します。購入やインストールによって商標、コード、アート、音声などの権利が移転することはありません。'],
  ['3. Condutas proibidas', '3. Prohibited conduct', '3. Comportements interdits', '3. Conductas prohibidas', '3. 禁止行为', '3. 禁止事項'],
  ['Não é permitido contornar mecanismos de segurança, explorar falhas, interferir no funcionamento, automatizar interações de forma abusiva, revender acesso ou usar elementos do jogo fora das permissões legais.', 'You may not bypass security mechanisms, exploit flaws, interfere with operation, abusively automate interactions, resell access, or use game elements beyond legal permissions.', 'Il est interdit de contourner les mécanismes de sécurité, d’exploiter des failles, d’interférer avec le fonctionnement, d’automatiser abusivement des interactions, de revendre l’accès ou d’utiliser les éléments du jeu hors des permissions légales.', 'No está permitido eludir mecanismos de seguridad, explotar fallos, interferir en el funcionamiento, automatizar interacciones abusivamente, revender el acceso ni usar elementos del juego fuera de los permisos legales.', '不得绕过安全机制、利用漏洞、干扰运行、滥用自动化交互、转售访问权限，或超出法律许可使用游戏元素。', 'セキュリティ機構の回避、脆弱性の悪用、動作妨害、過度な自動化、アクセスの転売、法的許可を超えたゲーム要素の利用は禁止です。'],
  ['4. Publicidade e serviços de terceiros', '4. Advertising and third-party services', '4. Publicité et services tiers', '4. Publicidad y servicios de terceros', '4. 广告与第三方服务', '4. 広告と第三者サービス'],
  ['Os jogos podem incluir anúncios, links e serviços de terceiros. O uso desses serviços pode estar sujeito a termos e políticas próprios. A Robb Studios não controla conteúdo externo, embora selecione integrações compatíveis com a experiência proposta.', 'Games may include ads, links, and third-party services. Their use may be subject to separate terms and policies. Robb Studios does not control external content, although it selects integrations compatible with the intended experience.', 'Les jeux peuvent inclure des publicités, des liens et des services tiers. Leur utilisation peut être soumise à leurs propres conditions et politiques. Robb Studios ne contrôle pas les contenus externes, mais sélectionne des intégrations compatibles avec l’expérience proposée.', 'Los juegos pueden incluir anuncios, enlaces y servicios de terceros. Su uso puede estar sujeto a sus propios términos y políticas. Robb Studios no controla el contenido externo, aunque selecciona integraciones compatibles con la experiencia propuesta.', '游戏可能包含广告、链接和第三方服务。使用这些服务可能受其自身条款和政策约束。Robb Studios 不控制外部内容，但会选择与体验相符的集成。', 'ゲームには広告、リンク、第三者サービスが含まれる場合があります。利用には各サービスの規約やポリシーが適用されます。Robb Studiosは外部コンテンツを管理しませんが、体験に合う連携を選択します。'],
  ['5. Atualizações e disponibilidade', '5. Updates and availability', '5. Mises à jour et disponibilité', '5. Actualizaciones y disponibilidad', '5. 更新与可用性', '5. 更新と提供状況'],
  ['Recursos, conteúdo, balanceamento, compatibilidade e disponibilidade podem mudar para melhorar o jogo, corrigir problemas ou atender requisitos técnicos e legais.', 'Features, content, balance, compatibility, and availability may change to improve the game, fix issues, or meet technical and legal requirements.', 'Les fonctionnalités, contenus, équilibrage, compatibilité et disponibilité peuvent changer pour améliorer le jeu, corriger des problèmes ou répondre à des exigences techniques et légales.', 'Las funciones, el contenido, el equilibrio, la compatibilidad y la disponibilidad pueden cambiar para mejorar el juego, corregir problemas o cumplir requisitos técnicos y legales.', '功能、内容、平衡、兼容性和可用性可能会变化，以改进游戏、修复问题或满足技术和法律要求。', '機能、コンテンツ、バランス、互換性、提供状況は、改善、問題修正、技術・法的要件への対応のため変更される場合があります。'],
  ['6. Isenção e limitação', '6. Disclaimer and limitation', '6. Exclusion et limitation', '6. Exención y limitación', '6. 免责声明与限制', '6. 免責と制限'],
  ['O site e os jogos são fornecidos de acordo com sua disponibilidade. Na extensão permitida pela lei, não garantimos operação ininterrupta ou ausência total de falhas. Direitos obrigatórios do consumidor permanecem preservados.', 'The website and games are provided as available. To the extent permitted by law, we do not guarantee uninterrupted operation or complete absence of errors. Mandatory consumer rights remain preserved.', 'Le site et les jeux sont fournis selon leur disponibilité. Dans la mesure permise par la loi, nous ne garantissons ni un fonctionnement ininterrompu ni l’absence totale d’erreurs. Les droits impératifs des consommateurs restent préservés.', 'El sitio y los juegos se proporcionan según su disponibilidad. En la medida permitida por la ley, no garantizamos un funcionamiento ininterrumpido ni ausencia total de fallos. Se mantienen los derechos obligatorios del consumidor.', '网站和游戏按现状提供。在法律允许的范围内，我们不保证持续运行或完全无错误。消费者的强制性权利仍受保护。', 'サイトとゲームは提供可能な範囲で提供されます。法律で許される限り、継続的な動作や完全な無障害を保証しません。消費者の強制的な権利は維持されます。'],
  ['7. Propriedade intelectual', '7. Intellectual property', '7. Propriété intellectuelle', '7. Propiedad intelectual', '7. 知识产权', '7. 知的財産'],
  ['Robb Studios, Spingrade, Rumster e seus elementos visuais, quando protegidos, pertencem aos respectivos titulares. O uso sem autorização pode violar direitos de propriedade intelectual.', 'Robb Studios, Spingrade, Rumster, and their visual elements, where protected, belong to their respective owners. Unauthorized use may violate intellectual property rights.', 'Robb Studios, Spingrade, Rumster et leurs éléments visuels, lorsqu’ils sont protégés, appartiennent à leurs titulaires respectifs. Toute utilisation non autorisée peut porter atteinte aux droits de propriété intellectuelle.', 'Robb Studios, Spingrade, Rumster y sus elementos visuales, cuando estén protegidos, pertenecen a sus respectivos titulares. El uso no autorizado puede infringir derechos de propiedad intelectual.', 'Robb Studios、Spingrade、Rumster 及其受保护的视觉元素归各自权利人所有。未经授权使用可能侵犯知识产权。', 'Robb Studios、Spingrade、Rumsterおよび保護される視覚要素は、それぞれの権利者に帰属します。無断使用は知的財産権を侵害する場合があります。'],
  ['8. Alterações', '8. Changes', '8. Modifications', '8. Cambios', '8. 变更', '8. 変更'],
  ['Estes termos podem ser atualizados. A data da versão vigente será indicada no início da página.', 'These terms may be updated. The date of the current version will be shown at the top of the page.', 'Ces conditions peuvent être mises à jour. La date de la version en vigueur sera indiquée au début de la page.', 'Estos términos pueden actualizarse. La fecha de la versión vigente se indicará al inicio de la página.', '本条款可能会更新。当前版本日期会显示在页面顶部。', '本規約は更新される場合があります。現行版の日付はページ冒頭に表示します。'],
  ['9. Contato', '9. Contact', '9. Contact', '9. Contacto', '9. 联系', '9. お問い合わせ'],
  ['Para dúvidas, consulte a', 'For questions, consult the', 'Pour toute question, consultez la', 'Para dudas, consulta la', '如有疑问，请查看', '質問がある場合は次の'],
  ['central de suporte', 'support center', 'centre d’assistance', 'central de soporte', '支持中心', 'サポートセンター'],
  ['Também importante', 'Also important', 'Également important', 'También importante', '同样重要', 'こちらも重要'],
  ['Leia como os dados podem ser tratados no site e nos jogos.', 'Read how data may be handled on the website and in the games.', 'Découvrez comment les données peuvent être traitées sur le site et dans les jeux.', 'Lee cómo pueden tratarse los datos en el sitio y los juegos.', '了解网站和游戏如何处理数据。', 'サイトやゲームでデータがどのように扱われるかをご確認ください。'],
  ['Última atualização:', 'Last updated:', 'Dernière mise à jour :', 'Última actualización:', '最后更新：', '最終更新：']
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
if (pageTitles[document.title]?.[initialLanguage]) document.title = pageTitles[document.title][initialLanguage];
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
