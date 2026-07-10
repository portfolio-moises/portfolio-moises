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
    cover: "/images/portfolio/contabilidade/post-clareza-nos-numeros-seguranca-nas-decisoes.png",
    featured: true,
    featuredSize: "large",
    gallery: [
      {
        src: "/images/portfolio/contabilidade/post-clareza-nos-numeros-seguranca-nas-decisoes.png",
        alt: "Arte de social media com o tema clareza nos números e segurança nas decisões",
        caption: "Clareza nos números",
        description: "Peça real de social media para comunicação contábil com hierarquia clara.",
      },
      {
        src: "/images/portfolio/contabilidade/post-acelere-com-a-obdc.png",
        alt: "Arte de social media Acelere com a OBDC",
        caption: "Acelere com a OBDC",
        description: "Peça de campanha com composição comercial e chamada objetiva.",
      },
      {
        src: "/images/portfolio/contabilidade/declaracao-de-ir-01.png",
        alt: "Arte de social media sobre declaração de imposto de renda",
        caption: "Declaração de IR",
        description: "Conteúdo técnico transformado em peça visual clara para redes sociais.",
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
    cover: "/images/portfolio/agronegocio/bem-vindo-2026-cia-da-terra.png",
    featured: true,
    featuredSize: "wide",
    gallery: [
      {
        src: "/images/portfolio/agronegocio/bem-vindo-2026-cia-da-terra.png",
        alt: "Arte de boas-vindas 2026 para Cia da Terra",
        caption: "Bem-vindo 2026",
        description: "Peça de campanha para agronegócio com leitura forte e acabamento institucional.",
      },
      {
        src: "/images/portfolio/agronegocio/post-manejo-inteligente-cia-da-terra.png",
        alt: "Arte de social media sobre manejo inteligente para Cia da Terra",
        caption: "Manejo inteligente",
        description: "Peça informativa com foco em clareza e autoridade técnica.",
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
    cover: "/images/portfolio/seguranca-no-trabalho/capa-ergonomia-no-trabalho.png",
    featured: true,
    featuredSize: "tall",
    gallery: [
      {
        src: "/images/portfolio/seguranca-no-trabalho/capa-ergonomia-no-trabalho.png",
        alt: "Capa de material sobre ergonomia no trabalho",
        caption: "Ergonomia no trabalho",
        description: "Material real de segurança do trabalho com foco em comunicação preventiva.",
      },
      {
        src: "/images/portfolio/seguranca-no-trabalho/post-entrega-de-epi.png",
        alt: "Arte sobre entrega de EPI para segurança do trabalho",
        caption: "Entrega de EPI",
        description: "Peça educativa para redes sociais e comunicação técnica.",
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
    cover: "/images/portfolio/datas-comemorativas/dia-dos-namorados-2026.png",
    featured: true,
    featuredSize: "standard",
    gallery: [
      {
        src: "/images/portfolio/datas-comemorativas/dia-dos-namorados-2026.png",
        alt: "Arte para campanha de Dia dos Namorados 2026",
        caption: "Dia dos Namorados",
        description: "Campanha sazonal com direção visual própria e apelo emocional.",
      },
      {
        src: "/images/portfolio/moiarts/design-estrategico.png",
        alt: "Arte autoral sobre design estratégico",
        caption: "Design estratégico",
        description: "Peça de conteúdo autoral com linguagem forte para social media.",
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
    cover: "/images/portfolio/contabilidade/post-contabilidade-controladoria-e-estrategia-precisam-andar-juntas-01.png",
    featured: true,
    featuredSize: "wide",
    gallery: [
      {
        src: "/images/portfolio/contabilidade/post-contabilidade-controladoria-e-estrategia-precisam-andar-juntas-01.png",
        alt: "Arte institucional sobre contabilidade, controladoria e estratégia",
        caption: "Estratégia e controladoria",
        description: "Peça institucional com organização editorial de informação.",
      },
      {
        src: "/images/portfolio/contabilidade/post-2026-nao-vai-ser-dificil-vai-ser-seletivo.png",
        alt: "Arte institucional sobre planejamento para 2026",
        caption: "Planejamento 2026",
        description: "Comunicação visual voltada para leitura profissional e tomada de decisão.",
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
    cover: "/images/portfolio/manipulacao-de-imagem/monster-no-gelo-noturno.png",
    featured: true,
    featuredSize: "standard",
    gallery: [
      {
        src: "/images/portfolio/manipulacao-de-imagem/monster-no-gelo-noturno.png",
        alt: "Manipulação de imagem com lata Monster em ambiente gelado noturno",
        caption: "Monster no gelo",
        description: "Composição criativa com tratamento, atmosfera e apelo publicitário.",
      },
      {
        src: "/images/portfolio/manipulacao-de-imagem/perfume.png",
        alt: "Manipulação de imagem publicitária para perfume",
        caption: "Perfume",
        description: "Peça de manipulação com foco em produto, iluminação e acabamento.",
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
    cover: "/images/portfolio/moiarts/post-viking-01.png",
    featured: false,
    featuredSize: "standard",
    gallery: [
      {
        src: "/images/portfolio/moiarts/post-viking-01.png",
        alt: "Projeto autoral com composição visual Viking",
        caption: "Viking",
        description: "Projeto autoral com composição forte e direção visual própria.",
      },
      {
        src: "/images/portfolio/moiarts/urso-01.png",
        alt: "Projeto autoral com composição visual de urso",
        caption: "Urso",
        description: "Estudo visual autoral para repertório, composição e impacto.",
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
    preview: "/images/portfolio/contabilidade/post-clareza-nos-numeros-seguranca-nas-decisoes.png",
  },
  {
    id: "agronegocio",
    number: "02",
    name: "Agronegócio",
    description: "Peças robustas para ofertas, campanhas, relacionamento e comunicação institucional no campo.",
    services: ["Campanhas", "Social media", "Materiais comerciais", "Direção visual"],
    projectSlugs: ["agronegocio-cia-da-terra"],
    preview: "/images/portfolio/agronegocio/bem-vindo-2026-cia-da-terra.png",
  },
  {
    id: "seguranca",
    number: "03",
    name: "Segurança do Trabalho",
    description: "Materiais claros para prevenção, treinamento e comunicação interna com responsabilidade visual.",
    services: ["Informativos", "Cartazes", "Materiais internos", "Apresentações"],
    projectSlugs: ["seguranca-do-trabalho"],
    preview: "/images/portfolio/seguranca-no-trabalho/capa-ergonomia-no-trabalho.png",
  },
  {
    id: "campanhas",
    number: "04",
    name: "Social Media e Campanhas",
    description: "Campanhas com chamadas fortes, hierarquia de informação e consistência entre formatos.",
    services: ["Posts", "Carrosséis", "Stories", "Campanhas sazonais"],
    projectSlugs: ["campanhas-social-media", "social-media-obdc"],
    preview: "/images/portfolio/datas-comemorativas/dia-dos-namorados-2026.png",
  },
  {
    id: "institucional",
    number: "05",
    name: "Institucional e Apresentações",
    description: "Comunicação visual organizada para apresentações, propostas, materiais internos e peças corporativas.",
    services: ["Apresentações", "Propostas", "Relatórios", "Comunicados"],
    projectSlugs: ["institucional-apresentacoes", "seguranca-do-trabalho"],
    preview: "/images/portfolio/contabilidade/post-contabilidade-controladoria-e-estrategia-precisam-andar-juntas-01.png",
  },
  {
    id: "manipulacao",
    number: "06",
    name: "Manipulação de Imagens",
    description: "Composições criativas, tratamento fotográfico e peças publicitárias com acabamento de campanha.",
    services: ["Composição", "Tratamento", "Peças publicitárias", "Campanhas visuais"],
    projectSlugs: ["manipulacao-de-imagens"],
    preview: "/images/portfolio/manipulacao-de-imagem/monster-no-gelo-noturno.png",
  },
  {
    id: "autorais",
    number: "07",
    name: "Projetos Autorais",
    description: "Estudos visuais para ampliar repertório, linguagem gráfica e soluções de composição editorial.",
    services: ["Experimentação", "Direção visual", "Editorial", "Composição"],
    projectSlugs: ["projetos-autorais"],
    preview: "/images/portfolio/moiarts/post-viking-01.png",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
};
