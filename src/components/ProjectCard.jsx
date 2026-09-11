import ProjectActions from './ProjectActions';
import { useState } from 'react';
import Modal from './Modal';
import { Expand } from 'lucide-react';
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectCard({ project }) {
  const [preview, setPreview] = useState(false);
  return (
    <>
    <article id={`project-${project.id}`} className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-visual">
        {project.featured && (
          <span className="featured-label">
            <Sparkles size={15} />
            {project.badge || "Featured Project"}
          </span>
        )}

        {project.image ? (
          <button className="project-preview-button" aria-label={`Enlarge ${project.title} screenshot`} onClick={() => setPreview(true)}><img
            src={project.image}
            loading="lazy" decoding="async" width="960" height="720"
            alt={`${project.title} project preview`}
          /><span><Expand size={16}/> View screenshot</span></button>
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

        <ProjectActions project={project} />
      </div>
    </article>
    {preview && <Modal title={`${project.title} screenshot`} onClose={() => setPreview(false)} className="image-modal"><img src={project.image} alt={`${project.title} interface overview`}/><a className="inline-link" href={project.image} target="_blank" rel="noreferrer">Open full-resolution image <ArrowUpRight size={16}/></a></Modal>}
    </>
  );
}