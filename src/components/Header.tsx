import { Linkedin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getWhatsAppUrl, siteConfig } from "../config/site";

const navItems = [
  { label: "Início", id: "inicio" },
  { label: "Projetos", id: "projetos" },
  { label: "Segmentos", id: "segmentos" },
  { label: "Sobre", id: "sobre" },
  { label: "Serviços", id: "servicos" },
  { label: "Contato", id: "contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const sectionHref = (id: string) => (location.pathname === "/" ? `#${id}` : `${import.meta.env.BASE_URL}#${id}`);

  return (
    <header className={`site-header ${isScrolled || isOpen ? "site-header--scrolled" : ""}`}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="site-header__inner">
        <a className="logo" href={sectionHref("inicio")} aria-label="Ir para o início">
          Moisés Henrique
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.id} href={sectionHref(item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="social-icon" href={siteConfig.behance} target="_blank" rel="noreferrer" aria-label="Abrir Behance">
            Be
          </a>
          <a className="social-icon" href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn">
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a className="button button--primary button--small" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" />
            Vamos conversar
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`} aria-hidden={!isOpen}>
        <nav className="mobile-menu__nav" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a key={item.id} href={sectionHref(item.id)} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <a href={siteConfig.behance} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
            Behance
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
            LinkedIn
          </a>
          <a className="button button--primary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
            <MessageCircle size={18} aria-hidden="true" />
            Vamos conversar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
