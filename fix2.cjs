const fs = require('fs');

const filesToRemoveScrollTrigger = ['AboutMe.tsx', 'EditorialQuote.tsx', 'GitHubSection.tsx', 'Interests.tsx', 'Internship.tsx', 'Projects.tsx', 'Skills.tsx', 'ThankYou.tsx'];
filesToRemoveScrollTrigger.forEach(file => {
  const path = 'src/components/' + file;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/import \{ ScrollTrigger \} from 'gsap\/ScrollTrigger';\r?\n/, '');
    fs.writeFileSync(path, content);
  }
});

let internshipPath = 'src/components/Internship.tsx';
let internshipContent = fs.readFileSync(internshipPath, 'utf8');
internshipContent = internshipContent.replace(/import AnimatedText from '\.\/AnimatedText';\r?\n/, '');
fs.writeFileSync(internshipPath, internshipContent);

let interestsPath = 'src/components/Interests.tsx';
let interestsContent = fs.readFileSync(interestsPath, 'utf8');
interestsContent = interestsContent.replace(/ref=\{el => linesRef\.current\[index\] = el\}/g, 'ref={el => { linesRef.current[index] = el; }}');
fs.writeFileSync(interestsPath, interestsContent);

let projectsPath = 'src/components/Projects.tsx';
let projectsContent = fs.readFileSync(projectsPath, 'utf8');
projectsContent = projectsContent.replace(/ref=\{el => projectRefs\.current\[index\] = el\}/g, 'ref={el => { projectRefs.current[index] = el; }}');
projectsContent = projectsContent.replace(/ref=\{el => lineRefs\.current\[index\] = el\}/g, 'ref={el => { lineRefs.current[index] = el; }}');
fs.writeFileSync(projectsPath, projectsContent);
