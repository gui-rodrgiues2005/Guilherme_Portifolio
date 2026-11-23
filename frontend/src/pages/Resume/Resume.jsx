import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Resume.scss';

function Resume() {
  return (
    <section id="curriculo" className="resume">
      <ScrollReveal className="resume__container">
        <div className="resume__card">
          <span className="resume__eyebrow">Currículo</span>

          <h2 className="resume__title">
            Quer conhecer minha
            <br />
            experiência?
          </h2>

          <p className="resume__description">
            O currículo reúne minha formação, experiência prática e
            conhecimentos técnicos em um documento objetivo.
          </p>

          <div className="resume__actions">
            <a
              href="/Guilherme_Rodrigues_Costa_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume__button resume__button--primary"
            >
              <span aria-hidden="true">📄</span>
              Visualizar currículo
            </a>

            <a
              href="/Guilherme_Rodrigues_Costa_CV.pdf"
              download="Guilherme-Rodrigues-Costa-Curriculo.pdf"
              className="resume__button resume__button--outline"
            >
              <span aria-hidden="true">⭳</span>
              Baixar currículo
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Resume;