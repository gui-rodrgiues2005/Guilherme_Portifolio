import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import dropma from '../../assets/dropma.png';
import freelancersapp from '../../assets/freelancers-app.png';
import intellistudy from '../../assets/intellistudy.png';
import vittaflow from '../../assets/vittaflow.png';
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

/*
 * Cada projeto conta a mesma história, na mesma ordem:
 * contexto (o problema real) → intenção (o que eu queria provar/resolver)
 * → papel (o que foi meu) → destaques técnicos → tecnologias.
 */
const PROJECTS = [
  {
    id: 'dropma',
    featured: true,
    status: { label: 'Em produção', tone: 'live' },
    eyebrow: 'Produto próprio · Mais recente',
    title: 'DROPMA',
    tagline:
      'Plataforma que conecta fornecedores a revendedores do Mercado Livre. O revendedor vende sem ter estoque, o fornecedor ganha uma rede de vendas e a DROPMA cuida do cálculo de lucro, dos pedidos e dos repasses.',
    image: dropma,
    liveUrl: 'https://www.dropma.com.br',

    context:
      'Revender produtos de terceiros no Mercado Livre parece simples, mas o revendedor raramente sabe se vai ter lucro depois de tarifa, frete e imposto. Além disso, fornecedor e revendedor precisam confiar um no outro para que o dinheiro e o produto cheguem ao destino. Sem um intermediário, cada venda vira uma negociação no WhatsApp.',

    intention:
      'Construir um produto real, com dinheiro de verdade circulando, que resolvesse a parte mais difícil dessa relação: a confiança. Desenhei o fluxo para que ninguém precise depender da palavra do outro. O revendedor paga o pedido, o valor fica guardado e só é repassado ao fornecedor 7 dias depois da entrega. Se a venda for cancelada, o dinheiro volta automaticamente para quem pagou.',

    role:
      'Idealizei, desenvolvi e opero a plataforma: produto, regras de negócio, frontend, backend, integrações com marketplace e pagamentos, deploy e também os Termos de Uso e a Política de Privacidade (LGPD). Hoje a DROPMA está em fase de validação com usuários reais.',

    highlights: [
      'Integração com a API do Mercado Livre: importação de anúncios, publicação nas contas dos revendedores e conversão de cada venda em pedido para o fornecedor',
      'Cálculo de lucro antes de anunciar, considerando tarifa do Mercado Livre, frete, imposto, custo e taxa',
      'Pagamentos por Pix com Asaas e Mercado Pago, carteira com saldo e pagamento automático das vendas',
      'Valores em custódia: repasse ao fornecedor após a entrega e estorno automático em cancelamentos e devoluções',
      'Anúncios escritos com IA: título, descrição e legenda para redes sociais',
      'Planos por assinatura com limites por perfil, cobrados via Pix',
      'Reputação dos fornecedores no catálogo e vitrine pública para divulgação',
      'Avisos em cada etapa do pedido, PWA com notificações push e login com Google',
    ],

    technologies: [
      'React',
      'Vite',
      'Redux Toolkit',
      'C#',
      'ASP.NET Core',
      'API do Mercado Livre',
      'Asaas',
      'Mercado Pago',
      'Pix',
      'PWA',
    ],
  },
  {
    id: 'freelancers-app',
    featured: true,
    status: { label: 'Em produção', tone: 'live' },
    eyebrow: 'Eventos, bares e restaurantes',
    title: 'FreelancersApp',
    tagline:
      'Plataforma que conecta eventos, bares, restaurantes e buffets a freelancers verificados: a empresa publica a vaga, escolhe quem vai, acompanha o turno e paga pela plataforma.',
    image: freelancersapp,
    liveUrl: 'https://www.freelancersapp.com.br',

    context:
      'No setor de eventos e food service, montar a escala de um turno ainda depende de grupos de WhatsApp. A empresa não sabe se a pessoa é confiável nem se ela vai aparecer, e o freelancer não tem garantia de que vai receber. Uma falta de última hora pode comprometer um evento inteiro.',

    intention:
      'Dar segurança às duas pontas. A empresa contrata profissionais com documento verificado e reputação visível, e o pagamento fica reservado na carteira antes do turno começar. Assim o freelancer sabe que vai receber, e a empresa só libera o valor depois que a presença é confirmada por QR Code. Se alguém falta, a vaga reabre como urgente para quem está por perto.',

    role:
      'Responsável pelo desenvolvimento full stack completo: arquitetura, modelagem do banco de dados, API, interfaces, regras de negócio, integrações externas, infraestrutura e deploy em produção.',

    highlights: [
      'Ciclo completo do turno: vaga, candidatura, "a caminho", check-in por QR Code e finalização',
      'Pagamento reservado na carteira antes do turno, com repasse e saque via Asaas',
      'Verificação de documento antes de liberar as vagas para o freelancer',
      'Vagas por raio de distância e reabertura urgente em caso de falta, com bônus opcional',
      'Avaliações, advertências e suspensão automática para manter a qualidade',
      'Avisos em tempo real com SignalR e notificações push no PWA instalável',
      'Planos premium, treinamentos em vídeo e central administrativa',
      'API REST em ASP.NET Core com PostgreSQL, Cloudinary, Resend e deploy no Railway',
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
      'PWA',
    ],
  },
  {
    id: 'vittaflow',
    status: { label: 'Finalizado', tone: 'done' },
    eyebrow: 'TCC · Projeto em equipe',
    title: 'VittaFlow',
    tagline:
      'Plataforma que conecta comércios, consumidores e ONGs para que alimentos próximos do vencimento sejam vendidos com desconto ou doados, em vez de descartados.',
    image: vittaflow,
    liveUrl: 'https://vittaflow.up.railway.app/',
    githubUrl: 'https://github.com/LucasSO-one/tcc-solidario',

    context:
      'Supermercados, padarias e restaurantes descartam todos os dias alimentos ainda próprios para consumo por estarem perto da validade, enquanto instituições sociais têm dificuldade para conseguir doações regulares.',

    intention:
      'Mostrar que a tecnologia pode ligar essas duas pontas sem depender de esforço manual. O comércio publica o lote uma vez: primeiro ele é vendido com desconto e, perto do vencimento, vai sozinho para a vitrine de doação das ONGs. O comércio recupera parte do valor, o consumidor compra mais barato e a ONG recebe alimentos com previsibilidade.',

    role:
      'Desenvolvido em equipe como Trabalho de Conclusão de Curso em Ciência da Computação, com a plataforma finalizada e publicada. Atuei no desenvolvimento full stack, do backend em .NET às telas em React.',

    highlights: [
      'Três perfis de uso (varejistas, consumidores e ONGs), com aprovação de cadastro pela administração',
      'Lotes vendidos com desconto e destinados automaticamente às ONGs quando faltam menos de 24 horas para o vencimento',
      'Rotinas em background que aplicam as regras de validade e bloqueiam lotes vencidos',
      'Reserva com código de retirada conferido pelo varejista no balcão, garantindo a rastreabilidade de cada entrega',
      'Dashboards de indicadores com unidades doadas e vendidas por mês',
      'Autenticação JWT com MFA obrigatório para administradores',
      'Termos, privacidade e exclusão de conta conforme a LGPD',
    ],

    technologies: [
      'React',
      'C#',
      'ASP.NET Core',
      'PostgreSQL',
      'Supabase',
      'Cloudinary',
      'Docker',
      'Railway',
    ],
  },
  {
    id: 'intellistudy',
    status: { label: 'Projeto autoral', tone: 'personal' },
    eyebrow: 'IA aplicada à educação',
    title: 'IntelliStudy',
    tagline:
      'Plataforma de estudos com IA que transforma qualquer tema em resumos, quizzes e planos de estudo adaptados à rotina do aluno.',
    image: intellistudy,
    githubUrl: 'https://github.com/gui-rodrgiues2005/IntelliStudy',

    context:
      'Quem estuda sozinho gasta mais tempo procurando e organizando conteúdo do que aprendendo. Ferramentas de IA genéricas respondem perguntas, mas não ajudam a criar constância.',

    intention:
      'Usar IA generativa como ferramenta de aprendizagem, não só de respostas: gerar material, dividir o conteúdo de acordo com a disponibilidade do aluno e usar gamificação para manter a constância. Também quis validar um modelo de negócio, com recursos premium por assinatura.',

    role: 'Projeto idealizado e desenvolvido do zero por mim, do conceito ao deploy.',

    highlights: [
      'Integração com Google Gemini para resumos, quizzes e esclarecimento de dúvidas',
      'Análise de arquivos e imagens enviados pelo aluno',
      'Planos de estudo semanais divididos pela disponibilidade do aluno',
      'Ranking e gamificação para incentivar a constância',
      'Moderação que bloqueia consultas com conteúdo impróprio',
      'Assinaturas e recursos premium com Stripe',
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
      'Railway',
    ],
  },
];

function StatusBadge({ status }) {
  if (!status) return null;
  return (
    <span className={`projects__status projects__status--${status.tone}`}>
      <span className="projects__status-dot" aria-hidden="true" />
      {status.label}
    </span>
  );
}

function ProjectLinks({ project }) {
  if (!project.liveUrl && !project.githubUrl) return null;
  return (
    <div className="projects__actions">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="projects__button projects__button--primary"
        >
          Ver plataforma
          <span aria-hidden="true">↗</span>
        </a>
      )}
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
    </div>
  );
}

function Story({ project }) {
  return (
    <div className="projects__story">
      <div className="projects__detail">
        <h4>O contexto</h4>
        <p>{project.context}</p>
      </div>
      <div className="projects__detail">
        <h4>Minha intenção</h4>
        <p>{project.intention}</p>
      </div>
      <div className="projects__detail">
        <h4>Meu papel</h4>
        <p>{project.role}</p>
      </div>
    </div>
  );
}

function Highlights({ items }) {
  if (!items?.length) return null;
  return (
    <div className="projects__highlights">
      <span className="projects__highlights-label">Destaques técnicos</span>
      <ul className="projects__highlights-list">
        {items.map((highlight) => (
          <li key={highlight} className="projects__highlight">
            <span className="projects__highlight-dot" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tags({ items }) {
  return (
    <ul className="projects__tags">
      {items.map((tech) => (
        <li key={tech} className="projects__tag">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="projects__featured">
      <div className="projects__thumb projects__thumb--large">
        <img src={project.image} alt={`Captura de tela da plataforma ${project.title}`} />
      </div>

      <div className="projects__featured-body">
        <div className="projects__featured-info">
          <div className="projects__meta">
            <span className="projects__eyebrow projects__eyebrow--warm">
              {project.eyebrow}
            </span>
            <StatusBadge status={project.status} />
          </div>
          <h3 className="projects__featured-title">{project.title}</h3>
          <p className="projects__featured-description">{project.tagline}</p>

          <ProjectLinks project={project} />
          <Highlights items={project.highlights} />
        </div>

        <div className="projects__featured-details">
          <Story project={project} />
          <div className="projects__detail">
            <h4>Tecnologias</h4>
            <Tags items={project.technologies} />
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
        <img src={project.image} alt={`Captura de tela da plataforma ${project.title}`} />
      </div>

      <div className="projects__card-body">
        <div className="projects__meta">
          <span className="projects__eyebrow projects__eyebrow--warm">
            {project.eyebrow}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-description">{project.tagline}</p>

        <ProjectLinks project={project} />
        <Story project={project} />
        <Highlights items={project.highlights} />
        <Tags items={project.technologies} />
      </div>
    </article>
  );
}

function Projects() {
  const featured = PROJECTS.filter((project) => project.featured);
  const rest = PROJECTS.filter((project) => !project.featured);

  return (
    <section id="projetos" className="projects">
      <ScrollReveal className="projects__container">
        <span className="projects__eyebrow">Projetos</span>
        <h2 className="projects__title">
          Produtos reais, construídos
          <br />
          do zero e colocados no ar.
        </h2>
        <p className="projects__intro">
          Cada projeto nasceu de um problema concreto. Abaixo conto o contexto,
          o que eu queria resolver e qual foi o meu papel, além das decisões
          técnicas por trás de cada plataforma.
        </p>

        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}

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
