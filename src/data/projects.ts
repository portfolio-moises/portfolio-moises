export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  description: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  type: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  result: string;
  cover: string;
  featured: boolean;
  featuredSize: "large" | "wide" | "tall" | "standard";
  gallery: ProjectImage[];
};

export type Segment = {
  id: string;
  number: string;
  name: string;
  description: string;
  services: string[];
  projectSlugs: string[];
  preview: string;
};

const img = "/images/placeholders";

export const projects: Project[] = [
  {
    id: 1,
    slug: "social-media-obdc",
    title: "Social Media OBDC",
    category: "Contabilidade",
    client: "OBDC Contabilidade",
    year: "2026",
    type: "Social media e campanhas",
    services: ["Social Media", "Direção Visual", "Campanhas", "Design Institucional"],
    description:
      "Sistema visual para conteúdos contábeis com linguagem profissional, hierarquia clara e peças prontas para redes sociais.",
    challenge:
      "Comunicar temas técnicos sem deixar o conteúdo pesado, mantendo confiança e leitura rápida para empresários.",
    solution:
      "Criação de uma grade visual editorial, com títulos fortes, cards informativos, ícones lineares e uso estratégico de azul.",
    result:
      "Uma comunicação mais consistente, com peças fáceis de entender e adequadas para campanhas, datas comerciais e conteúdos educativos.",
    cover: `${img}/project-obdc.svg`,
    featured: true,
    featuredSize: "large",
    gallery: [
      {
        src: `${img}/project-obdc.svg`,
        alt: "Placeholder de projeto para social media de contabilidade OBDC",
        caption: "Capa editorial",
        description: "Espaço reservado para a capa principal do projeto OBDC.",
      },
      {
        src: `${img}/project-obdc-feed.svg`,
        alt: "Placeholder de posts para redes sociais da OBDC",
        caption: "Sequência de posts",
        description: "Espaço reservado para uma sequência de peças de feed.",
      },
      {
        src: `${img}/project-obdc-stories.svg`,
        alt: "Placeholder de stories para contabilidade",
        caption: "Stories e chamadas",
        description: "Espaço reservado para stories e chamadas comerciais.",
      },
    ],
  },
  {
    id: 2,
    slug: "agronegocio-cia-da-terra",
    title: "Cia da Terra",
    category: "Agronegócio",
    client: "Cia da Terra",
    year: "2026",
    type: "Campanha e institucional",
    services: ["Direção Visual", "Social Media", "Campanhas", "Materiais Comerciais"],
    description:
      "Peças para agronegócio com composição robusta, leitura objetiva e linguagem visual próxima do campo e do negócio.",
    challenge:
      "Criar uma comunicação forte sem recorrer a clichês visuais, equilibrando autoridade técnica e apelo comercial.",
    solution:
      "Uso de imagens amplas, blocos de informação, recortes geométricos e contraste entre preto, branco e azul institucional.",
    result:
      "Uma linha visual versátil para ofertas, informativos, lançamentos e conteúdos de relacionamento com produtores.",
    cover: `${img}/project-cia-terra.svg`,
    featured: true,
    featuredSize: "wide",
    gallery: [
      {
        src: `${img}/project-cia-terra.svg`,
        alt: "Placeholder de campanha para agronegócio Cia da Terra",
        caption: "Campanha institucional",
        description: "Espaço reservado para a peça principal do projeto Cia da Terra.",
      },
      {
        src: `${img}/project-agro-detail.svg`,
        alt: "Placeholder de detalhe visual para projeto de agronegócio",
        caption: "Detalhe de produto",
        description: "Espaço reservado para cards de produto e ofertas.",
      },
    ],
  },
  {
    id: 3,
    slug: "seguranca-do-trabalho",
    title: "Segurança do Trabalho",
    category: "Segurança do Trabalho",
    client: "Projeto Corporativo",
    year: "2026",
    type: "Informativos e comunicação interna",
    services: ["Design Institucional", "Informativos", "Peças Internas", "Direção Visual"],
    description:
      "Materiais informativos para orientar equipes com clareza, seriedade e boa organização visual.",
    challenge:
      "Transformar normas e mensagens preventivas em peças claras, diretas e visualmente confiáveis.",
    solution:
      "Hierarquia de informação, pictogramas lineares, áreas de respiro e composição modular para leitura em ambientes corporativos.",
    result:
      "Materiais mais didáticos para campanhas internas, treinamentos e comunicados de prevenção.",
    cover: `${img}/project-seguranca.svg`,
    featured: true,
    featuredSize: "tall",
    gallery: [
      {
        src: `${img}/project-seguranca.svg`,
        alt: "Placeholder de material institucional de segurança do trabalho",
        caption: "Comunicado preventivo",
        description: "Espaço reservado para comunicado de segurança do trabalho.",
      },
      {
        src: `${img}/project-safety-poster.svg`,
        alt: "Placeholder de cartaz corporativo de segurança",
        caption: "Cartaz interno",
        description: "Espaço reservado para cartaz institucional.",
      },
    ],
  },
  {
    id: 4,
    slug: "campanhas-social-media",
    title: "Campanhas Social Media",
    category: "Social Media e Campanhas",
    client: "Clientes Diversos",
    year: "2025",
    type: "Campanhas digitais",
    services: ["Posts", "Carrosséis", "Stories", "Direção Visual"],
    description:
      "Coleção de campanhas para redes sociais com composições fortes, chamadas claras e variação visual entre segmentos.",
    challenge:
      "Criar peças com impacto sem perder organização, mantendo consistência entre formatos e objetivos diferentes.",
    solution:
      "Sistema de grids, títulos editoriais, contraste controlado e elementos visuais adaptáveis a cada campanha.",
    result:
      "Peças com melhor leitura, maior consistência e mais facilidade para planejar campanhas recorrentes.",
    cover: `${img}/project-campanhas.svg`,
    featured: true,
    featuredSize: "standard",
    gallery: [
      {
        src: `${img}/project-campanhas.svg`,
        alt: "Placeholder de campanhas para social media",
        caption: "Coleção de campanhas",
        description: "Espaço reservado para campanha social media.",
      },
      {
        src: `${img}/project-carousel.svg`,
        alt: "Placeholder de carrossel social media",
        caption: "Carrossel",
        description: "Espaço reservado para sequência de carrossel.",
      },
    ],
  },
  {
    id: 5,
    slug: "institucional-apresentacoes",
    title: "Institucional e Apresentações",
    category: "Institucional e Apresentações",
    client: "Projetos Corporativos",
    year: "2025",
    type: "Apresentações e materiais",
    services: ["Apresentações", "Materiais Internos", "Comunicação Corporativa"],
    description:
      "Materiais institucionais com foco em clareza, organização de conteúdo e percepção profissional.",
    challenge:
      "Organizar informação densa sem criar peças frias ou difíceis de navegar.",
    solution:
      "Layout editorial, capítulos bem definidos, blocos de conteúdo e uso consistente de ícones, cores e margens.",
    result:
      "Apresentações e materiais mais confiáveis, úteis para reuniões, propostas, treinamentos e comunicação interna.",
    cover: `${img}/project-apresentacao.svg`,
    featured: true,
    featuredSize: "wide",
    gallery: [
      {
        src: `${img}/project-apresentacao.svg`,
        alt: "Placeholder de apresentação institucional",
        caption: "Deck institucional",
        description: "Espaço reservado para slides institucionais.",
      },
      {
        src: `${img}/project-report.svg`,
        alt: "Placeholder de relatório institucional",
        caption: "Relatório visual",
        description: "Espaço reservado para relatório e material interno.",
      },
    ],
  },
  {
    id: 6,
    slug: "manipulacao-de-imagens",
    title: "Manipulação de Imagens",
    category: "Manipulação de Imagens",
    client: "Campanhas Criativas",
    year: "2025",
    type: "Composição e tratamento",
    services: ["Manipulação", "Tratamento Fotográfico", "Campanhas", "Peças Publicitárias"],
    description:
      "Composições visuais para campanhas, com recortes, tratamento, atmosfera e leitura publicitária.",
    challenge:
      "Criar impacto visual sem comprometer o entendimento da mensagem principal.",
    solution:
      "Composições com ponto focal claro, uso de profundidade, contraste, recortes e acabamento limpo.",
    result:
      "Peças mais marcantes para campanhas, lançamentos, chamadas promocionais e comunicação de alto impacto.",
    cover: `${img}/project-manipulacao.svg`,
    featured: true,
    featuredSize: "standard",
    gallery: [
      {
        src: `${img}/project-manipulacao.svg`,
        alt: "Placeholder de manipulação de imagem para campanha",
        caption: "Composição criativa",
        description: "Espaço reservado para manipulação de imagem.",
      },
      {
        src: `${img}/project-image-edit.svg`,
        alt: "Placeholder de tratamento fotográfico",
        caption: "Tratamento fotográfico",
        description: "Espaço reservado para antes e depois ou variações de tratamento.",
      },
    ],
  },
  {
    id: 7,
    slug: "projetos-autorais",
    title: "Projetos Autorais",
    category: "Projetos Autorais",
    client: "Estudos Visuais",
    year: "2025",
    type: "Exploração visual",
    services: ["Direção Visual", "Composição", "Experimentação Editorial"],
    description:
      "Explorações autorais para testar linguagem, composição, ritmo visual e soluções fora do briefing comercial.",
    challenge:
      "Criar liberdade visual mantendo intenção, coerência e acabamento profissional.",
    solution:
      "Estudos com grids, tipografia grande, recortes abstratos e composições de alto contraste.",
    result:
      "Um repertório visual mais amplo para inspirar campanhas, layouts editoriais e projetos institucionais.",
    cover: `${img}/project-autoral.svg`,
    featured: false,
    featuredSize: "standard",
    gallery: [
      {
        src: `${img}/project-autoral.svg`,
        alt: "Placeholder de projeto autoral editorial",
        caption: "Estudo autoral",
        description: "Espaço reservado para projeto autoral.",
      },
      {
        src: `${img}/project-editorial-grid.svg`,
        alt: "Placeholder de grid editorial autoral",
        caption: "Grid editorial",
        description: "Espaço reservado para estudo de composição.",
      },
    ],
  },
];

export const segments: Segment[] = [
  {
    id: "contabilidade",
    number: "01",
    name: "Contabilidade",
    description: "Conteúdos técnicos com aparência confiável, leitura rápida e comunicação preparada para empresários.",
    services: ["Social media", "Campanhas", "Informativos", "Materiais institucionais"],
    projectSlugs: ["social-media-obdc"],
    preview: `${img}/project-obdc.svg`,
  },
  {
    id: "agronegocio",
    number: "02",
    name: "Agronegócio",
    description: "Peças robustas para ofertas, campanhas, relacionamento e comunicação institucional no campo.",
    services: ["Campanhas", "Social media", "Materiais comerciais", "Direção visual"],
    projectSlugs: ["agronegocio-cia-da-terra"],
    preview: `${img}/project-cia-terra.svg`,
  },
  {
    id: "seguranca",
    number: "03",
    name: "Segurança do Trabalho",
    description: "Materiais claros para prevenção, treinamento e comunicação interna com responsabilidade visual.",
    services: ["Informativos", "Cartazes", "Materiais internos", "Apresentações"],
    projectSlugs: ["seguranca-do-trabalho"],
    preview: `${img}/project-seguranca.svg`,
  },
  {
    id: "campanhas",
    number: "04",
    name: "Social Media e Campanhas",
    description: "Campanhas com chamadas fortes, hierarquia de informação e consistência entre formatos.",
    services: ["Posts", "Carrosséis", "Stories", "Campanhas sazonais"],
    projectSlugs: ["campanhas-social-media", "social-media-obdc"],
    preview: `${img}/project-campanhas.svg`,
  },
  {
    id: "institucional",
    number: "05",
    name: "Institucional e Apresentações",
    description: "Comunicação visual organizada para apresentações, propostas, materiais internos e peças corporativas.",
    services: ["Apresentações", "Propostas", "Relatórios", "Comunicados"],
    projectSlugs: ["institucional-apresentacoes", "seguranca-do-trabalho"],
    preview: `${img}/project-apresentacao.svg`,
  },
  {
    id: "manipulacao",
    number: "06",
    name: "Manipulação de Imagens",
    description: "Composições criativas, tratamento fotográfico e peças publicitárias com acabamento de campanha.",
    services: ["Composição", "Tratamento", "Peças publicitárias", "Campanhas visuais"],
    projectSlugs: ["manipulacao-de-imagens"],
    preview: `${img}/project-manipulacao.svg`,
  },
  {
    id: "autorais",
    number: "07",
    name: "Projetos Autorais",
    description: "Estudos visuais para ampliar repertório, linguagem gráfica e soluções de composição editorial.",
    services: ["Experimentação", "Direção visual", "Editorial", "Composição"],
    projectSlugs: ["projetos-autorais"],
    preview: `${img}/project-autoral.svg`,
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
};
