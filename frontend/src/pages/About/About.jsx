import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './About.scss';

const SKILLS = [
  'Desenvolvimento frontend',
  'Desenvolvimento backend',
  'APIs',
  'Bancos de dados',
  'Integração de serviços',
  'Deploy e infraestrutura',
];

function About() {
  return (
    <section id="sobre" className="about">
      <ScrollReveal className="about__container">
        <div className="about__intro">
          <span className="about__eyebrow">Sobre mim</span>

          <h2 className="about__title">
            Construo aplicações web completas, com atenção ao detalhe.
          </h2>

          <p className="about__paragraph">
            Sou Desenvolvedor de Software e estou finalizando a graduação em
            Ciência da Computação. Minha experiência vem da prática: construir
            aplicações web completas, do primeiro componente até o deploy.
          </p>

          <p className="about__paragraph">
            Hoje tenho produtos reais em produção, como a DROPMA, plataforma
            que idealizei e opero, integrada ao Mercado Livre e com pagamentos
            via Pix, e o FreelancersApp, do qual sou co-fundador, com mais de
            700 usuários, que conecta eventos, bares e restaurantes
            a freelancers verificados, com pagamento reservado e check-in por
            QR Code.
          </p>

          <p className="about__paragraph">
            Gosto de código limpo, interfaces bem pensadas e soluções que
            continuam simples de manter depois que entram em produção.
          </p>
        </div>

        <ul className="about__skills">
          {SKILLS.map((skill) => (
            <li key={skill} className="about__skill">
              <span className="about__skill-dot" />
              {skill}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}

export default About;