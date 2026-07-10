import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../utils/seo";

const NotFound = () => (
  <PageTransition>
    <SEO
      title="Página não encontrada | Moisés Henrique"
      description="A página solicitada não foi encontrada no portfólio de Moisés Henrique."
      path="/404"
    />
    <section className="not-found section grid-surface">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1>Essa página saiu do grid.</h1>
        <p>O endereço pode ter mudado ou o projeto ainda não foi publicado.</p>
        <Link className="button button--primary" to="/">
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar ao portfólio
        </Link>
      </div>
    </section>
  </PageTransition>
);

export default NotFound;
