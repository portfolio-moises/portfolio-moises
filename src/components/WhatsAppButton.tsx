import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/site";

const WhatsAppButton = () => (
  <a className="whatsapp-float" href={getWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Vamos conversar pelo WhatsApp">
    <MessageCircle size={24} aria-hidden="true" />
    <span>Vamos conversar?</span>
  </a>
);

export default WhatsAppButton;
