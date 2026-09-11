import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Technologies.scss';

const TECH_GROUPS = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS / Sass', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['C#', '.NET', 'ASP.NET Core', 'APIs REST', 'Entity Framework Core'],
  },
  {
    id: 'banco-de-dados',
    title: 'Banco de dados',
    items: ['PostgreSQL', 'SQL'],
  },
  {
    id: 'pagamentos',
    title: 'Pagamentos e APIs',
    items: ['Asaas', 'Stripe', 'Mercado Pago API', 'Google Gemini API'],
  },
  {
    id: 'servicos',
    title: 'Serviços e comunicação',
    items: ['SignalR', 'Cloudinary', 'Resend', 'PWA', 'Push Notifications'],
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas e infraestrutura',
    items: ['Git', 'GitHub', 'Railway', 'Deploy', 'Claude Code', 'GitHub Copilot'],
  },
];

function Technologies() {
  return (
    <section id="tecnologias" className="technologies">
      <ScrollReveal className="technologies__container">
        <span className="technologies__eyebrow">Tecnologias</span>
        <h2 className="technologies__title">
          Tecnologias e ferramentas
          <br />
          que fazem parte do meu trabalho.
        </h2>

        <div className="technologies__grid">
          {TECH_GROUPS.map((group) => (
            <div key={group.id} className="technologies__group">
              <h3 className="technologies__group-title">{group.title}</h3>
              <ul className="technologies__items">
                {group.items.map((item) => (
                  <li key={item} className="technologies__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="technologies__ai">
          <h3 className="technologies__group-title">
            IA aplicada ao desenvolvimento
          </h3>

          <p className="technologies__ai-description">
            Utilizo ferramentas de Inteligência Artificial como parte do meu
            fluxo de desenvolvimento para aumentar produtividade, investigar
            problemas, auxiliar em debugging, refatorar código e estruturar
            soluções de forma mais robusta.
          </p>

          <ul className="technologies__items">
            <li className="technologies__item">Claude Code</li>
            <li className="technologies__item">GitHub Copilot</li>
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Technologies;