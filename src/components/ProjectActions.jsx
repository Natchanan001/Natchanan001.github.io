import { ArrowUpRight } from 'lucide-react'

export default function ProjectActions({ project, includeCaseStudy = true, className = 'project-links' }) {
  const actions = [
    includeCaseStudy && { href: project.caseStudy, label: 'Read case study' },
    { href: project.liveUrl, label: project.liveLabel || 'Live project' },
    { href: project.liveUrl1, label: 'Presentation' },
    { href: project.liveUrl2, label: 'Prototype' },
    { href: project.repoUrl, label: 'GitHub' },
  ].filter(action => action && action.href && action.href !== '#')
  if (!actions.length) return null
  return <div className={className}>{actions.map(action => <a key={action.href} href={action.href} target={action.href.startsWith('#') ? undefined : '_blank'} rel={action.href.startsWith('#') ? undefined : 'noreferrer'}>{action.label}<ArrowUpRight size={16}/></a>)}</div>
}
