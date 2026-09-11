import HeroIllustration from '../../components/HeroIllustration/HeroIllustration';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Home.scss';

function Home() {
  return (
    <section id="home" className="home">
      <ScrollReveal className="home__container">
        <div className="home__content">
          <div className="home__badge">
            <span className="home__badge-dot" />
            Disponível para estágio
          </div>

          <h1 className="home__title">
            Desenvolvedor{'\u00A0'}de
            <br />
            Software
          </h1>

          <p className="home__subtitle">
            Full Stack • Ciência da Computação
          </p>

          <p className="home__description">
            Desenvolvo experiências digitais completas, do frontend ao backend,
            transformando ideias em produtos funcionais, modernos e escaláveis.
          </p>

          <div className="home__actions">
            <a href="#projetos" className="home__button home__button--primary">
              Ver meus projetos
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href="/Guilherme_CV.pdf"
              download
              className="home__button home__button--secondary"
            >
              <span aria-hidden="true">⭳</span>
              Baixar currículo
            </a>
          </div>

          <a href="#contato" className="home__contact-link">
            Ou entre em contato diretamente
          </a>
        </div>

        <div className="home__illustration">
          <HeroIllustration />
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Home;