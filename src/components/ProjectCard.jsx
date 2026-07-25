import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectCard({ project }) {
  const hasValidLiveUrl = project.liveUrl && project.liveUrl !== "#";

  const hasValidRepoUrl = project.repoUrl && project.repoUrl !== "#";

  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-visual">
        {project.featured && (
          <span className="featured-label">
            <Sparkles size={15} />
            {project.badge || "Featured Project"}
          </span>
        )}

        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <div className="image-placeholder">
            <span>{project.number}</span>
            <p>Project screenshot</p>
          </div>
        )}
      </div>

      <div className="project-copy">
        <div className="project-heading">
          <div>
            <p className="eyebrow">{project.category}</p>

            <div className="project-title-row">
              <h3>{project.title}</h3>

              {project.featured && (
                <span className="featured-badge">
                  <Sparkles size={14} />
                  {project.badge || "Senior Project"}
                </span>
              )}
            </div>
            {project.role && (
              <p className="project-role">
                <span>My Role: </span>
                {project.role}
              </p>
            )}
          </div>

          <span className="project-number">{project.number}</span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {(hasValidLiveUrl || hasValidRepoUrl) && (
          <div className="project-links">
            {hasValidLiveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                View project
                <ArrowUpRight size={16} />
              </a>
            )}

            {hasValidRepoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                View code
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
