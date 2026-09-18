# Robb Studios — site institucional

Site estático oficial da Robb Studios, com apresentação do estúdio, páginas de Spingrade e Rumster, suporte, política de privacidade, termos e preparação para AdMob.

## Publicação no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions**.
3. Faça push na branch `main`. O workflow `.github/workflows/pages.yml` publica a pasta `dist`.
4. Se usar domínio próprio, configure-o no GitHub Pages e no seu provedor de DNS.

## URLs para as lojas

Depois de conectar o domínio, use:

- site do desenvolvedor: `https://SEU-DOMINIO/`
- política de privacidade: `https://SEU-DOMINIO/privacidade/`
- suporte: `https://SEU-DOMINIO/suporte/`
- arquivo do AdMob: `https://SEU-DOMINIO/app-ads.txt`

## Checklist obrigatório antes do AdMob

1. Crie a conta no Google AdMob e conclua a verificação de identidade e pagamentos.
2. Cadastre o aplicativo com o mesmo identificador de pacote usado na App Store/Google Play.
3. No painel do AdMob, copie a linha personalizada de `app-ads.txt`.
4. Edite `dist/app-ads.txt`, removendo o exemplo comentado e colando a linha real, semelhante a:

   `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`

5. Publique o site em domínio próprio. O arquivo precisa responder diretamente na raiz do host.
6. Cadastre esse mesmo domínio como website do desenvolvedor nas lojas.
7. Aguarde o rastreamento do AdMob e confirme o status de verificação no painel.
8. Antes de lançar anúncios reais, revise a política de privacidade com os SDKs e fluxos efetivamente implementados no app.

> O publisher ID não está versionado porque ele só é gerado pela conta do proprietário no AdMob. O arquivo está pronto para receber esse único valor.

## Dados que ainda precisam ser definidos pelo proprietário

- domínio oficial da Robb Studios;
- e-mail de suporte e privacidade (substitua o link do canal oficial quando disponível);
- publisher ID do AdMob;
- links do Spingrade na App Store e Google Play após a publicação;
- razão social/endereço apenas se a revisão jurídica indicar necessidade de exibição.

## Desenvolvimento local

O projeto não tem dependências. Sirva a pasta `dist` com qualquer servidor HTTP estático:

```bash
python3 -m http.server 4173 --directory dist
```

Abra `http://localhost:4173`.
