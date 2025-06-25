/**
 * Componente de card para exibir projetos
 * Renderiza ícone, título e descrição do projeto
 */

// Interface para as props do card de projeto
type ProjectCardProps = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  icon,
  alt,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="card">
      <span>
        <img src={icon} alt={alt} width={64} height={64} />
      </span>
      <div>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <hr />
      </div>
    </div>
  );
}
