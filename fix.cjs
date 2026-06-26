const fs = require('fs');
const filesToRemoveScrollTrigger = ['AboutMe.tsx', 'Goal.tsx', 'Interests.tsx', 'Internship.tsx', 'Projects.tsx', 'Skills.tsx', 'ThankYou.tsx'];
filesToRemoveScrollTrigger.forEach(file => {
  const path = 'src/components/' + file;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/import \{ ScrollTrigger \} from 'gsap\/ScrollTrigger';\r?\n/, '');
  fs.writeFileSync(path, content);
});

let githubPath = 'src/components/GitHubSection.tsx';
let githubContent = fs.readFileSync(githubPath, 'utf8');
githubContent = githubContent.replace(/import \{ ScrollTrigger \} from 'gsap\/ScrollTrigger';\r?\n/, '');
githubContent = githubContent.replace(/import AnimatedText from '\.\/AnimatedText';\r?\n/, '');
fs.writeFileSync(githubPath, githubContent);

let navPath = 'src/components/Navigation.tsx';
let navContent = fs.readFileSync(navPath, 'utf8');
navContent = navContent.replace(/import gsap from 'gsap';\r?\n/, '');
fs.writeFileSync(navPath, navContent);

let projectsPath = 'src/components/Projects.tsx';
let projectsContent = fs.readFileSync(projectsPath, 'utf8');
projectsContent = projectsContent.replace(/projectElements\.forEach\(\(el, index\) => \{/, 'projectElements.forEach((el) => {');
fs.writeFileSync(projectsPath, projectsContent);

let smoothScrollPath = 'src/components/SmoothScroll.tsx';
let smoothScrollContent = fs.readFileSync(smoothScrollPath, 'utf8');
smoothScrollContent = smoothScrollContent.replace(/import \{ ReactNode \} from 'react';/, "import type { ReactNode } from 'react';");
fs.writeFileSync(smoothScrollPath, smoothScrollContent);

let mainPath = 'src/main.tsx';
let mainContent = fs.readFileSync(mainPath, 'utf8');
if (!mainContent.includes('ScrollTrigger')) {
  mainContent = "import gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\ngsap.registerPlugin(ScrollTrigger);\n" + mainContent;
  fs.writeFileSync(mainPath, mainContent);
}
