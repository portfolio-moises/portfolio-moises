import SectionTitle from "./SectionTitle";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Conheço o negócio, o público e o objetivo da comunicação.",
  },
  {
    number: "02",
    title: "Direção",
    description: "Defino a linguagem visual, referências e hierarquia da informação.",
  },
  {
    number: "03",
    title: "Criação",
    description: "Desenvolvo as peças mantendo clareza, estratégia e consistência.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Organizo os materiais e entrego tudo pronto para utilização.",
  },
];

const Process = () => (
  <section className="process section grid-surface" aria-labelledby="process-title">
    <div className="container">
      <SectionTitle
        eyebrow="Processo"
        title="Um fluxo simples para transformar informação em peça pronta."
        description="O objetivo é reduzir ruído, organizar decisões e entregar materiais que funcionam no uso real."
      />
      <div className="process-grid">
        {steps.map((step) => (
          <ProcessStep key={step.number} {...step} />
        ))}
      </div>
    </div>
  </section>
);

export default Process;
