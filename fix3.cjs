const fs = require('fs');

// Fix unused ScrollTrigger
const filesToRemoveScrollTrigger = ['AboutMe.tsx', 'Contact.tsx', 'CurrentlyExploring.tsx', 'GitHubSection.tsx', 'Internship.tsx', 'Projects.tsx', 'Skills.tsx'];
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
let projectsContent = fs.readFileSync(projectsPath, 'utf8');
projectsContent = projectsContent.replace(/projectRefs\.current\.forEach\(\(el, index\) => \{/, 'projectRefs.current.forEach((el) => {');
fs.writeFileSync(projectsPath, projectsContent);

// Fix toggleTheme -> cycleTheme in VerticalLabels.tsx
let verticalLabelsPath = 'src/components/VerticalLabels.tsx';
if (fs.existsSync(verticalLabelsPath)) {
  let vlContent = fs.readFileSync(verticalLabelsPath, 'utf8');
  vlContent = vlContent.replace(/const \{ toggleTheme, theme \} = useTheme\(\);/, 'const { cycleTheme, theme } = useTheme();');
  vlContent = vlContent.replace(/onClick=\{toggleTheme\}/, 'onClick={cycleTheme}');
  fs.writeFileSync(verticalLabelsPath, vlContent);
}
