const fs = require('fs');

function replaceUnusedIndex(file) {
  const path = 'src/components/' + file;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/forEach\(\(el, index\) => \{/g, 'forEach((el) => {');
    fs.writeFileSync(path, content);
  }
}

replaceUnusedIndex('Projects.tsx');
replaceUnusedIndex('Skills.tsx');
replaceUnusedIndex('Workflow.tsx');
