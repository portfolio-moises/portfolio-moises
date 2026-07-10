import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__inner">
      <div>
        <a className="logo logo--footer" href="#inicio">
          Moisés Henrique
        </a>
        <p>Design gráfico, social media e comunicação visual para empresas.</p>
      </div>
      <SocialLinks />
      <a className="footer-mail" href={`mailto:${siteConfig.email}`}>
        {siteConfig.email}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
