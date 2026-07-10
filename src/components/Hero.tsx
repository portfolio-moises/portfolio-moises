import { ArrowDownRight, MessageCircle, MousePointer2, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "../config/site";
import { publicAsset } from "../utils/assets";

const tags = ["Social Media", "Institucional", "Apresentações", "Manipulação de Imagens"];
const capsules = ["Criativo", "Estratégico", "Proativo"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => (
  <section id="inicio" className="hero section grid-surface" aria-labelledby="hero-title">
    <div className="container hero__grid" id="conteudo">
      <motion.div
        className="hero__copy"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          DESIGN GRÁFICO • SOCIAL MEDIA • INSTITUCIONAL
        </motion.p>
        <motion.h1 id="hero-title" variants={fadeUp}>
          Design que <span>organiza ideias</span> e faz marcas serem <span>levadas a sério.</span>
        </motion.h1>
        <motion.p className="lead" variants={fadeUp}>
          Transformo informações em peças visuais claras, profissionais e estratégicas para redes sociais, apresentações e materiais institucionais.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <a className="button button--primary" href="#projetos">
            Ver meus projetos
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--ghost" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </motion.div>
        <motion.ul className="tag-list" variants={fadeUp} aria-label="Especialidades">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12% round 36px)", y: 30 }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 36px)", y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
      >
        <div className="portrait-frame" aria-label="Área preparada para fotografia do designer">
          <img src={publicAsset("/images/placeholders/foto-moises-placeholder.svg")} alt="Placeholder para fotografia recortada de Moisés Henrique" loading="eager" />
          <div className="portrait-frame__grid" aria-hidden="true" />
          <MousePointer2 className="decor decor--cursor" size={34} aria-hidden="true" />
          <Sparkle className="decor decor--sparkle" size={30} aria-hidden="true" />
          <div className="decor decor--ring" aria-hidden="true" />
          <div className="decor decor--cube" aria-hidden="true" />
          <div className="capsules" aria-label="Características profissionais">
            {capsules.map((capsule) => (
              <span key={capsule}>{capsule}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
