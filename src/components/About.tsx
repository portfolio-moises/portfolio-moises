import SectionTitle from "./SectionTitle";
import { publicAsset } from "../utils/assets";

const About = () => (
  <section id="sobre" className="about section grid-surface" aria-labelledby="about-title">
    <div className="container about__grid">
      <figure className="about__image">
        <img src={publicAsset("/images/profile/moises-henrique.jpg")} alt="Retrato profissional de Moisés Henrique" loading="lazy" />
      </figure>
      <div className="about__copy">
        <SectionTitle eyebrow="Sobre" title="Quem é o Moisés?" />
        <div className="rich-text">
          <p>Sou designer gráfico especializado em conteúdos para redes sociais e materiais institucionais.</p>
          <p>
            Meu trabalho é transformar informações em designs organizados, profissionais e fáceis de entender. Porque um bom visual não serve apenas para chamar atenção. Ele ajuda uma marca a comunicar melhor,
            transmitir confiança e aumentar sua percepção de valor.
          </p>
          <p>
            Já desenvolvi projetos para segmentos como contabilidade, agronegócio e segurança do trabalho. Essa experiência me ensinou a entender o contexto de cada negócio antes de começar a criar.
          </p>
          <p>Não se trata apenas de deixar uma peça bonita. Trata-se de fazer a mensagem ser entendida.</p>
        </div>
        <blockquote>Não é só estética. É comunicação, clareza e percepção de valor.</blockquote>
        <ul className="tag-list" aria-label="Características profissionais">
          <li>Criativo</li>
          <li>Estratégico</li>
          <li>Proativo</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
