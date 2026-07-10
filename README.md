# Portfólio Moisés Henrique

Site portfólio profissional para o designer gráfico Moisés Henrique, criado com React, TypeScript, Vite, CSS responsivo e Framer Motion.

O projeto foi organizado para ser fácil de editar, publicar no GitHub Pages e migrar para Next.js no futuro.

## Tecnologias

- React
- TypeScript
- Vite
- Framer Motion
- React Router
- Lucide React
- CSS responsivo

## Como rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde alterar o WhatsApp

Edite o arquivo:

```txt
src/config/site.ts
```

Troque:

```ts
whatsappNumber: "55SEUNUMERO"
```

por um número real no formato internacional, por exemplo:

```ts
whatsappNumber: "5511999999999"
```

No mesmo arquivo também ficam Behance, LinkedIn, e-mail e URL canônica.

## Como alterar projetos

Os projetos ficam centralizados em:

```txt
src/data/projects.ts
```

Para adicionar um projeto, duplique um objeto do array `projects`, altere `slug`, `title`, `category`, `client`, `services`, textos e imagens.

As rotas são geradas no formato:

```txt
/projetos/nome-do-slug
```

## Como substituir imagens

As imagens temporárias ficam em:

```txt
public/images/placeholders
```

Elas são placeholders identificados. Substitua pelos arquivos reais mantendo nomes iguais ou atualize os caminhos no `projects.ts`.

Recomendações:

- Use WebP ou AVIF quando possível.
- Mantenha capas horizontais próximas de 1600x1200.
- Mantenha imagens verticais próximas de 1200x1600.
- Escreva `alt` descritivo em cada imagem no `projects.ts`.

## SEO

Arquivos e pontos de SEO incluídos:

- `index.html` com title, meta description, Open Graph e Twitter Card.
- `public/sitemap.xml`.
- `public/robots.txt`.
- `public/favicon.svg`.
- dados estruturados `Person` na home.
- dados estruturados `CreativeWork` nas páginas de projeto.

Antes de publicar, substitua `SEU_USUARIO` em:

- `index.html`
- `src/config/site.ts`
- `public/sitemap.xml`
- `public/robots.txt`

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie este projeto para o repositório.
3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, selecione `GitHub Actions`.
5. Faça push na branch `main`.

O workflow `.github/workflows/deploy.yml` instala dependências, faz o build e publica a pasta `dist`.

O `vite.config.ts` detecta automaticamente o nome do repositório durante o GitHub Actions e ajusta o `base` para GitHub Pages.

## Estrutura principal

```txt
src/
  components/
  config/
  data/
  pages/
  utils/
```

Componentes reutilizáveis incluídos:

- Header
- MobileMenu integrado ao Header
- Hero
- SectionTitle
- ProjectCard
- FeaturedProjects
- SegmentAccordion
- ProjectGallery
- ProjectLightbox
- ServiceCard
- ProcessStep
- SocialLinks
- WhatsAppButton
- Footer
- PageTransition

## Observações finais

Este projeto não usa imagens aleatórias como peças definitivas. As imagens atuais são placeholders para preservar layout, proporção e direção visual até a entrada dos materiais reais.
