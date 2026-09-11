import useInView from '../../hooks/useInView';
import './ScrollReveal.scss';

/**
 * Envolve um bloco de conteúdo e aplica um fade-up sutil quando ele
 * entra na viewport pela primeira vez. Use um por seção (no container
 * principal), não um por card/elemento — o efeito é pra marcar a
 * chegada da seção, não decorar cada item dentro dela.
 */
function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${isInView ? 'scroll-reveal--visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default ScrollReveal;