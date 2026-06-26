const fs = require('fs');

const filesToRemoveScrollTrigger = ['AboutMe.tsx', 'Contact.tsx', 'CurrentlyExploring.tsx', 'GitHubSection.tsx', 'Interests.tsx', 'Internship.tsx', 'Projects.tsx', 'Skills.tsx', 'Workflow.tsx'];
filesToRemoveScrollTrigger.forEach(file => {
  const path = 'src/components/' + file;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/import \{ ScrollTrigger \} from 'gsap\/ScrollTrigger';\r?\n/, '');
    fs.writeFileSync(path, content);
  }
});
