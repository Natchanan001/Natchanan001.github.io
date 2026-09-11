// Narrative grounded in the existing portfolio. No invented research participants,
// quantitative outcomes, clinical validation, or implementation-specific security claims.
export const carekidsSections = [
  { id: 'problem', title: 'Problem', summary: 'One child’s care can involve several people.', paragraphs: [
    'When parents and other caregivers share responsibility, medication information needs to be easy to find and understand. Separate conversations and records can make it difficult to see a child’s care history.',
    'CareKids brings child profiles, medication records and dosage calculation into one mobile experience. The design focuses on clarity at the moment a caregiver needs to take action.'
  ] },
  { id: 'users', title: 'Users', summary: 'Parents, shared caregivers and older family members.', items: [
    ['Parents', 'Keep information organized for each child and review medication records.'],
    ['Other caregivers', 'Find the correct child and understand the available care information.'],
    ['Elderly or less technical caregivers', 'Use a clear visual interface with readable information and straightforward actions.']
  ] },
  { id: 'role', title: 'Role', summary: 'Lead Mobile Application Developer & UX/UI Designer.', paragraphs: [
    'My role combines interface design with cross-platform mobile development. I work across the Flutter and Dart application, UX/UI design in Figma, and integration with Supabase and PostgreSQL.',
    'The project connects my two main areas of interest: building mobile applications and designing interfaces that help people complete practical tasks.'
  ] },
  { id: 'ux-process', title: 'UX Process', summary: 'Make the next action clear, from profile selection to medication records.', items: [
    ['Frame the task', 'Start with the caregiver’s immediate need: identify the child, find medication information, and understand the next action.'],
    ['Structure the experience', 'Separate child profiles and group related information so the interface remains understandable for families with more than one child.'],
    ['Design in Figma', 'Connect interface decisions to a visual, approachable experience for caregivers with different levels of technical confidence.'],
    ['Carry the design into Flutter', 'Translate the interface into reusable mobile components, keeping readability and clear feedback central to the implementation.']
  ] },
  { id: 'solution', title: 'Solution', summary: 'A shared, child-centered mobile care experience.', paragraphs: [
    'CareKids combines separate child profiles, medication information and weight-based dosage calculation in a cross-platform application. Rather than treating each task as a separate tool, the interface keeps the child’s context central.',
    'The visual approach supports both regular smartphone users and caregivers who need simpler navigation. The presentation and prototype below show the project’s interface and intended experience.'
  ] },
  { id: 'architecture', title: 'Technical Architecture', summary: 'Flutter + Dart, backed by Supabase and PostgreSQL.', architecture: true, paragraphs: [
    'Flutter and Dart power the cross-platform interface. Supabase provides the backend platform, with PostgreSQL storing the application’s structured data. Figma supports interface design and prototyping.',
  ] },
  { id: 'features', title: 'Features', summary: 'Focused tools for everyday caregiving.', items: [
    ['Separate child profiles', 'Keep each child’s information in its own context.'],
    ['Medication records', 'Bring medication information together for families sharing care.'],
    ['Weight-based dosage calculation', 'Support the calculation flow with a child’s weight and relevant medication information.'],
    ['Accessible visual interface', 'Design for elderly and non-technical caregivers as well as parents.'],
    ['Cross-platform application', 'Use Flutter and Dart for a shared mobile implementation.']
  ] },
  { id: 'challenges', title: 'Challenges', summary: 'Balance information density, clarity and dependable state.', items: [
    ['Shared care', 'A shared backend and an up-to-date screen are different concerns. The interface needs to make loading, refresh and failure states understandable.'],
    ['Calculation clarity', 'Weight, units and medication information need unambiguous labels. A calculator interface should make its inputs easy to review.'],
    ['Different levels of confidence', 'Keep primary actions easy to recognize while still making supporting information available.']
  ] },
  { id: 'learnings', title: 'Learnings', summary: 'Design and implementation need to stay connected.', paragraphs: [
    'The key connection in this project is between a clear interface and the data behind it. A visually simple screen still needs careful handling of context, inputs and application state.',
    'The next evaluation priorities are caregiver comprehension, accessible interaction on real devices, and clear feedback when information is loading or cannot be refreshed.'
  ] },
]
