export const siteConfig = {
  name: "Moisés Henrique",
  role: "Designer Gráfico e Social Media",
  email: "contato@seudominio.com",
  behance: "https://www.behance.net/moisshenrique1",
  linkedin: "https://www.linkedin.com/in/moiseshenrique1/",
  whatsappNumber: "55SEUNUMERO",
  canonicalUrl: "https://SEU_USUARIO.github.io/portfolio-moises-henrique/",
};

export const getWhatsAppUrl = (message = "Olá, Moisés! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
};
