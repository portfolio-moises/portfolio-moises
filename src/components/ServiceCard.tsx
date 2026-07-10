import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const ServiceCard = ({ number, title, description, icon: Icon }: ServiceCardProps) => (
  <article className="service-card">
    <span className="service-card__number">{number}</span>
    <Icon size={28} aria-hidden="true" />
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

export default ServiceCard;
