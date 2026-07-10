import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/site";
import SocialLinks from "./SocialLinks";

const FinalCTA = () => (
  <section id="contato" className="final-cta section section--dark" aria-labelledby="contact-title">
    <div className="container final-cta__inner">
      <div>
        <p className="eyebrow">Contato</p>
        <h2 id="contact-title">Sua marca não precisa apenas de uma arte bonita.</h2>
        <strong>Ela precisa ser entendida.</strong>
        <p>Precisa de conteúdos para redes sociais, materiais institucionais ou uma comunicação visual mais profissional?</p>
      </div>
      <div className="final-cta__actions">
        <a className="button button--light" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          <MessageCircle size={19} aria-hidden="true" />
          Vamos conversar pelo WhatsApp
        </a>
        <SocialLinks />
      </div>
    </div>
  </section>
);

export default FinalCTA;
