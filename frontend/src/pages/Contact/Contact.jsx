import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Contact.scss';

const CONTACT_LINKS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Enviar mensagem',
    href: 'https://wa.me/35998726862',
  },
  {
    id: 'email',
    label: 'E-mail',
    value: 'rodriguesguidev@gmail.com',
    href: 'mailto:rodriguesguidev@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '/in/guirodrigues',
    href: 'https://www.linkedin.com/in/guilherme-rodrigues-costa-a39a15268/',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@guirodrigues',
    href: 'https://github.com/gui-rodrgiues2005',
  },
];

function Contact() {
  return (
    <section id="contato" className="contact">
      <ScrollReveal className="contact__container">
        <div className="contact__intro">
          <span className="contact__eyebrow">Contato</span>

          <h2 className="contact__title">Vamos conversar?</h2>

          <p className="contact__description">
            Estou aberto a oportunidades em Desenvolvimento de Software e
            novos projetos.
          </p>

          <a
            href={CONTACT_LINKS[0].href}
            target="_blank"
            rel="noreferrer"
            className="contact__button"
          >
            Entrar em contato
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ul className="contact__list">
          {CONTACT_LINKS.map((link) => (
            <li key={link.id} className="contact__item">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <span className="contact__link-label">{link.label}</span>
                <span className="contact__link-value">
                  {link.value}
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}

export default Contact;