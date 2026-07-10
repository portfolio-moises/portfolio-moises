import About from "../components/About";
import BehancePortfolio from "../components/BehancePortfolio";
import FeaturedProjects from "../components/FeaturedProjects";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import PageTransition from "../components/PageTransition";
import Process from "../components/Process";
import Services from "../components/Services";
import SEO from "../utils/seo";
import { siteConfig } from "../config/site";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.canonicalUrl,
  sameAs: [siteConfig.behance, siteConfig.linkedin],
  knowsAbout: ["Design gráfico", "Social media", "Materiais institucionais", "Apresentações", "Comunicação visual"],
};

const Home = () => (
  <PageTransition>
    <SEO
      title="Moisés Henrique | Designer Gráfico e Social Media"
      description="Portfólio de Moisés Henrique, designer gráfico especializado em social media, materiais institucionais, apresentações e comunicação visual para empresas."
      structuredData={personStructuredData}
    />
    <Hero />
    <FeaturedProjects />
    <BehancePortfolio />
    <About />
    <Services />
    <Process />
    <FinalCTA />
  </PageTransition>
);

export default Home;
