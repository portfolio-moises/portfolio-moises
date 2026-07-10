import { BadgeCheck, Compass, FileText, Image, PanelsTopLeft } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    title: "Social Media",
    description: "Posts, carrosséis, stories e campanhas visuais pensadas para fortalecer a comunicação da marca.",
    icon: PanelsTopLeft,
  },
  {
    number: "02",
    title: "Materiais Institucionais",
    description: "Apresentações, informativos, comunicados, materiais internos e peças corporativas.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Direção Visual",
    description: "Definição de linguagem gráfica, padronização e construção de consistência entre diferentes materiais.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Manipulação de Imagens",
    description: "Composições criativas, tratamento fotográfico, campanhas e peças publicitárias.",
    icon: Image,
  },
  {
    number: "05",
    title: "Identidade Visual",
    description: "Construção ou evolução da identidade de marcas que precisam comunicar profissionalismo.",
    icon: BadgeCheck,
  },
];

const Services = () => (
  <section id="servicos" className="services section" aria-labelledby="services-title">
    <div className="container">
      <SectionTitle
        eyebrow="Serviços"
        title="Soluções visuais para marcas que precisam comunicar melhor."
        description="Da rotina de social media aos materiais institucionais, cada entrega nasce com intenção, clareza e consistência."
      />
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
