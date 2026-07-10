import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "../config/site";

const SocialLinks = () => (
  <div className="social-links" aria-label="Links de contato">
    <a href={siteConfig.behance} target="_blank" rel="noreferrer">
      <span className="behance-mark" aria-hidden="true">
        Be
      </span>
      Behance
    </a>
    <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
      <Linkedin size={18} aria-hidden="true" />
      LinkedIn
    </a>
    <a href={`mailto:${siteConfig.email}`}>
      <Mail size={18} aria-hidden="true" />
      E-mail
    </a>
    <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
      <MessageCircle size={18} aria-hidden="true" />
      WhatsApp
    </a>
  </div>
);

export default SocialLinks;
