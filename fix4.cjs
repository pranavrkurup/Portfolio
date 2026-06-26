const fs = require('fs');

// Fix unused ScrollTrigger
const filesToRemoveScrollTrigger = ['AboutMe.tsx', 'Contact.tsx', 'CurrentlyExploring.tsx', 'GitHubSection.tsx', 'Interests.tsx', 'Internship.tsx', 'Projects.tsx', 'Skills.tsx', 'Workflow.tsx'];
filesToRemoveScrollTrigger.forEach(file => {
  const path = 'src/components/' + file;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/import \{ ScrollTrigger \} from 'gsap\/ScrollTrigger';\r?\n/, '');
    fs.writeFileSync(path, content);
  }
});

// Fix unused index in Projects.tsx
let projectsPath = 'src/components/Projects.tsx';
if (fs.existsSync(projectsPath)) {
  let projectsContent = fs.readFileSync(projectsPath, 'utf8');
  projectsContent = projectsContent.replace(/blocksRef\.current\.forEach\(\(el, index\) => \{/, 'blocksRef.current.forEach((el) => {');
  fs.writeFileSync(projectsPath, projectsContent);
}

// Fix unused gsap in Navigation.tsx
let navPath = 'src/components/Navigation.tsx';
if (fs.existsSync(navPath)) {
  let navContent = fs.readFileSync(navPath, 'utf8');
  navContent = navContent.replace(/import gsap from 'gsap';\r?\n/, '');
  fs.writeFileSync(navPath, navContent);
}
