const fs = require('fs');
const path = require('path');
const dirs = ['about', 'contact', 'filiere', 'gallery', 'news', 'resources', 'sustainability'];
let files = dirs.map(d => path.join('src', 'app', d, 'page.jsx'));
files.push(path.join('src', 'app', 'page.jsx'));

for (let file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/import \{ Link \} from 'react-router-dom';/g, "import Link from 'next/link';");
    content = content.replace(/<Link(\s.*?)to=/g, "<Link$1href=");
    if (!content.startsWith('"use client"')) {
      content = '"use client";\n' + content;
    }
    fs.writeFileSync(file, content);
    console.log('Processed', file);
  }
}
