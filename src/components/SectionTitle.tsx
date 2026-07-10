type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionTitle = ({ eyebrow, title, description, align = "left" }: SectionTitleProps) => (
  <div className={`section-title section-title--${align}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
  </div>
);

export default SectionTitle;
