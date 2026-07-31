import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectCard({ project }) {
  const hasValidUrl = (url) => Boolean(url && url !== "#");

  const hasValidLiveUrl = hasValidUrl(project.liveUrl);
  const hasValidLiveUrl1 = hasValidUrl(project.liveUrl1);
  const hasValidLiveUrl2 = hasValidUrl(project.liveUrl2);
  const hasValidRepoUrl = hasValidUrl(project.repoUrl);

  const hasAnyLink =
    hasValidLiveUrl ||
    hasValidLiveUrl1 ||
    hasValidLiveUrl2 ||
    hasValidRepoUrl;

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
          <img
            src={project.image}
            alt={`${project.title} project preview`}
          />
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
                <span>My Role:</span>
                {project.role}
              </p>
            )}
          </div>

          <span className="project-number">{project.number}</span>
        </div>

        <p className="project-description">{project.description}</p>

        {project.stack?.length > 0 && (
          <div className="tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}

        {hasAnyLink && (
          <div className="project-links">
            {hasValidLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View project
                <ArrowUpRight size={16} />
              </a>
            )}

            {hasValidLiveUrl1 && (
              <a
                href={project.liveUrl1}
                target="_blank"
                rel="noreferrer"
              >
                View presentation
                <ArrowUpRight size={16} />
              </a>
            )}

            {hasValidLiveUrl2 && (
              <a
                href={project.liveUrl2}
                target="_blank"
                rel="noreferrer"
              >
                View prototype
                <ArrowUpRight size={16} />
              </a>
            )}

            {hasValidRepoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
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