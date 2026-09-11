import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import freelancersapp from "../../assets/freelancers-app.png";
import intellistudy from "../../assets/intellistudy.png";
import vittaflow from "../../assets/vittaflow.png";
import './Projects.scss';

// Ícone simples do GitHub (inline, sem dependência externa)
function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: 'freelancers-app',
    featured: true,
    eyebrow: 'Projeto principal',
    title: 'FreelancersApp',
    description:
      'Plataforma completa desenvolvida do zero para conectar empresas a profissionais qualificados, solucionando a dificuldade de encontrar e gerenciar profissionais para diferentes demandas e oportunidades de trabalho.',
    image: freelancersapp,
    liveUrl: 'https://www.freelancersapp.com.br',
    githubUrl: 'https://github.com/gui-rodrgiues2005',

    problem:
      'Empresas enfrentavam dificuldades para encontrar profissionais qualificados de forma rápida e organizada. A proposta foi centralizar todo esse processo em uma única plataforma, desde a publicação das oportunidades até a comunicação, pagamentos e acompanhamento das atividades.',

    whatWasBuilt:
      'Desenvolvimento full stack completo, desde a arquitetura e modelagem do banco até a implementação das interfaces, APIs, regras de negócio, integrações externas, infraestrutura e funcionalidades administrativas. A plataforma conta com autenticação, perfis de usuários, publicação e gestão de vagas, sistema de pagamentos, carteira financeira, conversas em tempo real, notificações push, PWA e uma central administrativa para gerenciamento da plataforma.',

    highlights: [
      'Arquitetura full stack desenvolvida do zero',
      'API REST em ASP.NET Core',
      'Chat e conversações em tempo real com SignalR',
      'Sistema completo de notificações Push integrado ao PWA',
      'Central de notificações e campanhas para administradores',
      'Integração com Asaas para pagamentos e transferências',
      'Processamento e armazenamento de imagens com Cloudinary',
      'Envio transacional de e-mails com Resend',
      'Autenticação e gerenciamento de usuários',
      'Busca de endereços automático via CEP',
      'Carteira financeira e fluxo de saques',
      'Banco de dados PostgreSQL com Entity Framework Core',
      'PWA com instalação e recursos nativos do dispositivo',
      'Deploy, configuração de ambiente e infraestrutura em produção',
    ],

    technologies: [
      'React',
      'Vite',
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'SignalR',
      'Asaas',
      'Cloudinary',
      'Resend',
      'Railway',
      'PWA'
    ],
  },
  {
    id: 'VittaFlow',
    title: 'VittaFlow — Plataforma de Solidariedade e Combate ao Desperdício',
    description:
      'Plataforma desenvolvida como Trabalho de Conclusão de Curso (TCC), atualmente em desenvolvimento, com a proposta de conectar estabelecimentos, consumidores e ONGs para reduzir o desperdício de alimentos e ampliar o acesso a produtos próximos do fim da validade.',
    summary:
      'Solução web que transforma alimentos próximos do vencimento em oportunidades de doação ou aquisição com preços reduzidos, conectando ofertas à localização de ONGs e consumidores.',
    image: vittaflow,
    githubUrl: 'https://github.com/LucasSO-one/tcc-solidario',

    problem:
      'Milhares de alimentos ainda próprios para consumo são descartados por estarem próximos do fim da validade, enquanto instituições e pessoas enfrentam dificuldades para acessar determinados alimentos. O VittaFlow busca aproximar esses dois cenários por meio de uma plataforma centralizada.',

    whatWasBuilt:
      'A plataforma permite que estabelecimentos e varejistas cadastrem alimentos próximos do vencimento e disponibilizem esses produtos em uma vitrine digital. Dependendo do produto e da oferta, os alimentos podem ser destinados à doação ou disponibilizados com preços reduzidos. ONGs e consumidores podem visualizar essas oportunidades, com ofertas relevantes apresentadas de acordo com sua localização.',

    highlights: [
      'Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC)',
      'Plataforma voltada à redução do desperdício alimentar',
      'Conexão entre estabelecimentos, ONGs e consumidores',
      'Cadastro e disponibilização de alimentos próximos do vencimento',
      'Vitrine digital de ofertas para doação ou venda',
      'Marketplace com produtos disponibilizados a preços reduzidos',
      'Ofertas direcionadas de acordo com a localização',
      'Área de Ofertas voltada para ONGs',
      'Experiência de marketplace também direcionada ao consumidor',
      'Arquitetura full stack em desenvolvimento'
    ],

    technologies: [
      'React',
      'Vite',
      'C#',
      'ASP.NET Core',
      'PostgreSQL',
      'Railway'
    ],
  },
  {
    id: 'terceiro-projeto',
    title: 'IntelliStudy — Plataforma Inteligente de Estudos',
    description:
      'Projeto autoral desenvolvido a partir da ideia de transformar a Inteligência Artificial em uma ferramenta prática de aprendizagem. A plataforma adapta conteúdos às necessidades do aluno, gerando materiais de estudo, respondendo dúvidas e ajudando na organização da rotina acadêmica.',
    summary:
      'Aplicação full stack com IA generativa, geração de conteúdo, análise de imagens, planos de estudos, gamificação, ranking de usuários e assinatura de recursos premium.',

    image: intellistudy,
    githubUrl: 'https://github.com/gui-rodrgiues2005/IntelliStudy',

    problem:
      'Estudar diferentes conteúdos exige pesquisa, organização e adaptação constante da rotina. A proposta do IntelliStudy foi centralizar essas necessidades em uma única plataforma, utilizando IA para transformar conteúdos pesquisados pelos usuários em experiências de estudo mais personalizadas.',

    whatWasBuilt:
      'Desenvolvimento completo da plataforma, incluindo a experiência de estudos, integração com Inteligência Artificial, geração de conteúdos, gerenciamento de usuários, sistema de planos de estudo, gamificação e infraestrutura da aplicação.',

    highlights: [
      'Projeto autoral idealizado e desenvolvido do zero',
      'Integração com Google Gemini para recursos de Inteligência Artificial',
      'Geração de resumos personalizados a partir dos conteúdos pesquisados',
      'Criação automática de quizzes para reforço da aprendizagem',
      'Interação com IA para esclarecimento de dúvidas',
      'Suporte a upload de arquivos e imagens para análise pela IA',
      'Geração de planos de estudos semanais personalizados',
      'Divisão de conteúdos em etapas menores de acordo com a disponibilidade do aluno',
      'Sistema de ranking baseado no tempo de utilização da plataforma',
      'Mecanismos de gamificação para incentivar a constância nos estudos',
      'Controle e moderação de conteúdo para impedir consultas relacionadas a conteúdo adulto e material impróprio',
      'Integração com Stripe para gerenciamento de planos e assinaturas',
      'Liberação de recursos premium para usuários assinantes',
      'API REST desenvolvida em ASP.NET Core',
      'Persistência de dados com Entity Framework Core e PostgreSQL',
      'Aplicação estruturada e preparada para execução em produção'
    ],

    technologies: [
      'React',
      'Vite',
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'Google Gemini API',
      'Stripe',
      'Railway'
    ],
  },
];

function FeaturedProject({ project }) {
  return (
    <article className="projects__featured">
      <div className="projects__thumb projects__thumb--large">
        <img src={project.image} alt={`Captura de tela do projeto ${project.title}`} />
      </div>

      <div className="projects__featured-body">
        <div className="projects__featured-info">
          <span className="projects__eyebrow projects__eyebrow--warm">
            {project.eyebrow}
          </span>
          <h3 className="projects__featured-title">{project.title}</h3>
          <p className="projects__featured-description">{project.description}</p>

          <div className="projects__actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="projects__button projects__button--primary"
              >
                Ver Plataforma
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {/* {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="projects__button projects__button--outline"
              >
                <GitHubIcon />
                GitHub
              </a>
            )} */}
          </div>

          {project.highlights && (
            <div className="projects__highlights">
              <span className="projects__highlights-label">
                Destaques técnicos
              </span>

              <ul className="projects__highlights-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="projects__highlight">
                    <span className="projects__highlight-dot" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="projects__featured-details">
          <div className="projects__detail">
            <h4>Problema</h4>
            <p>{project.problem}</p>
          </div>

          <div className="projects__detail">
            <h4>O que foi desenvolvido</h4>
            <p>{project.whatWasBuilt}</p>
          </div>

          <div className="projects__detail">
            <h4>Tecnologias</h4>
            <ul className="projects__tags">
              {project.technologies.map((tech) => (
                <li key={tech} className="projects__tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="projects__card">
      <div className="projects__thumb">
        <img src={project.image} alt={`Captura de tela do projeto ${project.title}`} />
      </div>

      <div className="projects__card-body">
        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-description">{project.description}</p>
        {project.summary && <p className="projects__card-summary">{project.summary}</p>}

        <ul className="projects__tags">
          {project.technologies.map((tech) => (
            <li key={tech} className="projects__tag">
              {tech}
            </li>
          ))}
        </ul>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="projects__button projects__button--outline"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
        {project.highlights && (
          <div className="projects__highlights">
            <span className="projects__highlights-label">
              Destaques técnicos
            </span>

            <ul className="projects__highlights-list">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="projects__highlight">
                  <span className="projects__highlight-dot" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projetos" className="projects">
      <ScrollReveal className="projects__container">
        <span className="projects__eyebrow">Projetos</span>
        <h2 className="projects__title">
          Poucos projetos, apresentados
          <br />
          com cuidado.
        </h2>

        {featured && <FeaturedProject project={featured} />}

        {rest.length > 0 && (
          <div className="projects__grid">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}

export default Projects;