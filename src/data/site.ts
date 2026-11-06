export const site = {
  name: 'Reformas La Cabaña S.L.',
  domain: 'reformaslacabaña.com',
  url: 'https://reformaslacabanha.com',
  phone: '+34 621 202 561',
  phoneHref: 'tel:+34621202561',
  email: '2025lacabanha@gmail.com',
  address: 'C. Espinar, 14, Piso bajo, J, 30320 Fuente Álamo, Murcia',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.839880321713!2d-1.1709827184135655!3d37.72343611751928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a62ef4c380011b%3A0x62246d8099b9b64a!2sReformas%20La%20Caba%C3%B1a%20S.L!5e0!3m2!1ses-419!2ses!4v1774564061689!5m2!1ses-419!2ses',
};

export const services = [
  { label: 'Reforma Integral', href: '/reforma-integral-en-murcia/' },
  { label: 'Reforma Parcial', href: '/reforma-parcial-murcia/' },
  { label: 'Obra Nueva', href: '/obra-nueva-en-murcia/' },
  { label: 'Construcción de Piscinas', href: '/construccion-de-piscinas-en-murcia/' },
  { label: 'Reforma de Baños', href: '/reforma-de-banos-en-murcia/' },
  { label: 'Reforma de Cocinas', href: '/reforma-de-cocinas-en-murcia/' },
  { label: 'Reformas de Suelos', href: '/reformas-de-suelos-en-murcia/' },
];

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros/' },
  { label: 'Servicios', href: '#', children: services },
  { label: 'Fuente Álamo', href: '/reformas-en-fuente-alamo/' },
  { label: 'Blog', href: '/blog-de-reformas/' },
  { label: 'Contacto', href: '/contacto/' },
];
