import { useState, useRef } from 'react'
import { Search, PenTool, Code2, Database, CheckCheck, Upload } from 'lucide-react'
const steps = [
  { name: 'Research', icon: Search, title: 'Understand the people and the problem.', text: 'Clarify user needs, define the primary tasks and establish requirements before choosing screens or technologies.', output: 'Problem statement · User journeys · Requirements' },
  { name: 'UX/UI', icon: PenTool, title: 'Make the experience understandable.', text: 'Turn the requirements into user flows, wireframes and high-fidelity interfaces. Keep the primary action clear and reuse consistent patterns.', output: 'User flows · Wireframes · Figma prototype' },
  { name: 'Development', icon: Code2, title: 'Turn the design into working software.', text: 'Build reusable components and connect interactions to application state. Consider smaller screens, keyboard access and loading states from the start.', output: 'Reusable components · Responsive interfaces' },
  { name: 'Database/API', icon: Database, title: 'Connect the interface to reliable data.', text: 'Model the information the product needs, connect backend services and account for authentication, loading, empty and error states.', output: 'Data models · API integration · Authentication' },
  { name: 'Testing', icon: CheckCheck, title: 'Check the real task, not just the happy path.', text: 'Verify core user flows, edge cases and different screen sizes. Compare the working interface with the requirements and refine unclear interactions.', output: 'Flow checks · Device checks · Issue fixes' },
  { name: 'Deployment', icon: Upload, title: 'Ship and keep improving.', text: 'Build the release, check deployment configuration and validate the published experience. Use what the checks reveal to guide the next iteration.', output: 'Production build · Release checks · Iteration' },
]
export default function Workflow() {
  const [selected, setSelected] = useState(0)
  const tabs = useRef([])
  const step = steps[selected]
  return <section id="workflow" className="section container">
    <div className="section-title row-title"><div><p className="eyebrow">How I approach a product</p><h2>From understanding<br/>to implementation.</h2></div><p>Design and engineering inform each other throughout the process. Explore each stage.</p></div>
    <div className="workflow-tabs" role="tablist" aria-label="Product development workflow">{steps.map((s, index) => { const Icon = s.icon; return <button key={s.name} ref={el => { tabs.current[index] = el }} id={`workflow-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls="workflow-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
      event.preventDefault()
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? steps.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + steps.length) % steps.length
      setSelected(next); tabs.current[next]?.focus()
    }}><span className="workflow-number">0{index + 1}</span><Icon size={23}/><span>{s.name}</span></button> })}</div>
    <div id="workflow-panel" className="workflow-panel" role="tabpanel" aria-labelledby={`workflow-tab-${selected}`} tabIndex={0}><div><h3>{step.title}</h3><p>{step.text}</p></div><div className="workflow-output"><span className="eyebrow">Outputs</span><p>{step.output}</p></div></div>
  </section>
}
